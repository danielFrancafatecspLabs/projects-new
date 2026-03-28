# Presente Digital — Experiência Emocional Interativa

Aplicação web responsiva (mobile-first) em React + Vite + TailwindCSS, com navegação progressiva, áudio customizado e transições suaves.

## Stack

- React + TypeScript
- Vite
- TailwindCSS
- React Router
- Framer Motion

## Rodar localmente

1. Instale dependências:

   npm install

2. Suba o ambiente de desenvolvimento:

   npm run dev

3. Build de produção:

   npm run build

## Estrutura principal

- [src/pages/LandingScreen.tsx](src/pages/LandingScreen.tsx)
- [src/pages/IntroAudioScreen.tsx](src/pages/IntroAudioScreen.tsx)
- [src/pages/MainMenu.tsx](src/pages/MainMenu.tsx)
- [src/pages/CategoryPage.tsx](src/pages/CategoryPage.tsx)
- [src/pages/BookSection.tsx](src/pages/BookSection.tsx)
- [src/components/AudioPlayer.tsx](src/components/AudioPlayer.tsx)
- [src/data/content.json](src/data/content.json)

## Trocar conteúdos e áudios

1. Edite textos/categorias/livros em [src/data/content.json](src/data/content.json).
2. Adicione os arquivos `.mp3` em [public/audios/README.md](public/audios/README.md).
3. Garanta que os caminhos no JSON batem com os nomes dos arquivos.

## Deploy na Vercel

1. Suba este projeto para um repositório Git.
2. No painel da Vercel, importe o repositório.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

## Link + QR Code

Depois do deploy, use a URL final para gerar QR Code em qualquer gerador (ex.: Canva, QRCode Monkey, etc.) e compartilhar como convite de acesso.
