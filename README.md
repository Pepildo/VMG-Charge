# VMG Power

Site institucional da VMG Power, eletroposto em Sete Lagoas, MG.

## Tecnologias

- React 19
- TypeScript
- TanStack Start e TanStack Router
- Vite
- Tailwind CSS
- Bun
- Nitro para deploy

## Requisitos

- [Bun](https://bun.sh/) instalado
- Node.js 20 ou superior

## Desenvolvimento local

```bash
bun install
bun run dev
```

O servidor de desenvolvimento será iniciado pelo Vite. A URL local será exibida no terminal.

## Verificações

```bash
bun run lint
bun run test
bun run build
```

## Deploy na Vercel

O projeto usa TanStack Start com Nitro. Importe o repositório GitHub na Vercel e mantenha o preset de framework como **TanStack Start**. A Vercel detecta a configuração de build e saída automaticamente.

Se forem adicionadas variáveis de ambiente, cadastre os valores em **Project Settings → Environment Variables** na Vercel. Não envie arquivos `.env` nem credenciais para o GitHub.
