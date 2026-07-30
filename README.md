# Arsenal de Ferramentas

Landing page mobile do grupo Arsenal de Ferramentas.

## Alterar o link do WhatsApp

Edite apenas esta linha em `lib/constants.ts`:

```ts
export const WHATSAPP_LINK = "COLE_AQUI_O_NOVO_LINK";
```

## Publicar

```bash
npm install
npm run build
git add .
git commit -m "Atualiza landing page"
git push
```

A Vercel publica automaticamente após o `git push`.
