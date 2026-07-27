import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const whatsapp = 'https://chat.whatsapp.com/LKxb1OHO39C8SrJjVhw5A1?s=cl&p=i&ilr=4&amv=0';
const required = [
  'app/layout.tsx','app/page.tsx','app/opengraph-image.tsx','app/sitemap.ts','app/robots.ts','app/not-found.tsx',
  'components/SafeImage.tsx','lib/constants.ts','public/image-fallback.svg','public/logo-fallback.svg','next.config.ts'
];

for (const file of required) {
  await stat(path.join(root, file));
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(tsx?|mjs|json|md)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(root);
const contents = await Promise.all(files.map(async file => [file, await readFile(file, 'utf8')]));
const joined = contents.map(([, content]) => content).join('\n');

if (!joined.includes(whatsapp)) throw new Error('Link oficial do WhatsApp não encontrado.');
if (joined.includes('seudominio.com')) throw new Error('Domínio fictício encontrado.');
if (!joined.includes('SafeImage')) throw new Error('Componente de fallback não encontrado.');
if (!joined.includes('/opengraph-image')) throw new Error('Imagem Open Graph não configurada.');

const rawImageUsage = contents
  .filter(([file, content]) => file.endsWith('.tsx') && /<img\b/i.test(content) && !file.endsWith('opengraph-image.tsx'))
  .map(([file]) => path.relative(root, file));
if (rawImageUsage.length) throw new Error(`Imagens sem Next/Image: ${rawImageUsage.join(', ')}`);

console.log('✓ Arquivos obrigatórios presentes');
console.log('✓ Link oficial do WhatsApp encontrado');
console.log('✓ Fallback de imagens configurado');
console.log('✓ Open Graph configurado');
console.log('✓ Nenhum domínio fictício encontrado');
console.log('✓ Nenhuma imagem comum usa <img> diretamente');
