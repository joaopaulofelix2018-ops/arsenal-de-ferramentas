# Arsenal de Ferramentas

Landing page em Next.js, React, TypeScript e Tailwind CSS, otimizada para conversão em um grupo de WhatsApp.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação de produção

```bash
npm run typecheck
npm run build
```

## Publicar na Vercel

1. Envie este projeto para um repositório no GitHub.
2. Na Vercel, escolha **Add New > Project**.
3. Importe o repositório.
4. Framework: **Next.js**. Comando de build: `npm run build`.
5. Adicione a variável `NEXT_PUBLIC_SITE_URL` com a URL final, por exemplo `https://arsenaldeferramentas.com.br`.
6. Clique em **Deploy**.

## Conectar domínio próprio

Na Vercel, abra **Project > Settings > Domains**, adicione o domínio e aplique os registros DNS indicados. Depois atualize `NEXT_PUBLIC_SITE_URL` para o domínio definitivo e faça um novo deploy.

## Imagens e fallback

Todas as imagens passam pelo componente `SafeImage`. Se a origem falhar, ele troca automaticamente para `/image-fallback.svg` ou `/logo-fallback.svg`, preservando as dimensões do layout.

## Open Graph / WhatsApp

A imagem de compartilhamento é gerada em `app/opengraph-image.tsx` no tamanho 1200 × 630. O título, a descrição e a URL são configurados em `app/layout.tsx`.

## Link oficial do grupo

O link é centralizado em `lib/constants.ts`. Altere somente essa constante caso o grupo mude.

## Melhorias da versão 2

- CTA principal acima do título no mobile.
- Barra fixa inferior de WhatsApp em celulares.
- Identidade compacta no topo, sem logo gigante sobre o conteúdo.
- Imagens fotográficas ilustrativas nos cards de ofertas.
- Prova social oculta no mobile para não cobrir textos e botões.
- Layout mobile mais compacto e orientado à conversão.
