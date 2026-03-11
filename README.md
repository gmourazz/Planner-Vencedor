# Planner Vencedor — Landing Page

Landing page premium para o produto físico **Planner Vencedor – Jogador de Futebol 2026**.

---

## 🚀 Como rodar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm start
```

Acesse em: `http://localhost:3000`

### Build para produção

```bash
npm run build
```

---

## 📁 Estrutura do projeto

```
planner-vencedor/
├── public/
│   ├── index.html
│   ├── product.png     ← ⚠️ ADICIONE A FOTO DO PRODUTO AQUI
│   └── video.mp4       ← ⚠️ ADICIONE O VÍDEO AQUI
├── src/
│   ├── components/
│   │   ├── Hero.jsx + Hero.module.css
│   │   ├── VideoSection.jsx + VideoSection.module.css
│   │   ├── SocialBar.jsx + SocialBar.module.css
│   │   ├── Audience.jsx + Audience.module.css
│   │   ├── Benefits.jsx + Benefits.module.css
│   │   ├── HowItWorks.jsx + HowItWorks.module.css
│   │   ├── Gallery.jsx + Gallery.module.css
│   │   ├── Testimonials.jsx + Testimonials.module.css
│   │   ├── Specs.jsx + Specs.module.css
│   │   ├── FAQ.jsx + FAQ.module.css
│   │   ├── CTAFinal.jsx + CTAFinal.module.css
│   │   ├── Footer.jsx + Footer.module.css
│   │   └── StickyBar.jsx + StickyBar.module.css
│   ├── hooks/
│   │   ├── useFade.js       ← animação fade-in via IntersectionObserver
│   │   └── useCounter.js    ← contador animado
│   ├── styles/
│   │   ├── global.css       ← reset, variáveis CSS, body
│   │   └── shared.css       ← classes utilitárias (.cta-btn, .fade, .sec-title…)
│   ├── constants.js         ← URLs e caminhos de mídia
│   ├── App.jsx
│   └── index.js
└── package.json
```

---

## 🖼️ Adicionando sua mídia

### Foto do produto
Coloque a imagem real do produto em:
```
public/product.png
```
A imagem aparece:
- Como fundo texturizado do Hero
- No card de destaque do Hero
- Como overlay nas fotos da galeria

### Vídeo
Coloque o vídeo `.mp4` em:
```
public/video.mp4
```
O vídeo aparece logo abaixo do Hero com um player customizado.

---

## 🎨 Identidade visual

| Token CSS | Valor | Uso |
|-----------|-------|-----|
| `--g1` | `#D4A843` | Dourado principal |
| `--g2` | `#C08B2A` | Dourado escuro |
| `--g3` | `#EDD07A` | Dourado claro/brilho |
| `--green` | `#1DB954` | Verde (badges, checks) |
| `--bg` | `#070707` | Fundo principal |

Para alterar as cores, edite as variáveis em `src/styles/global.css`.

---

## 🔗 Links

- **Compra:** [Mercado Livre](https://www.mercadolivre.com.br/planner-vencedor--jogador-de-futebol-2026/up/MLBU3677972295)
- **Instagram:** [@plannerjogadordefutebol](https://www.instagram.com/plannerjogadordefutebol/)

Para alterar os links, edite `src/constants.js`.
