# template_react
template_react


├── config
│   ├── consts.js
│   ├── utils.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── package.json
├── public
│   └── index.html						Статика
├── README.md
├── src
│   ├── app								Роутинг и точка входа в приложение		
│   │   ├── app.tsx
│   │   ├── index.tsx
│   │   └── styles
│   │       ├── index.css
│   │       └── variables.css
│   ├── global.d.ts
│   ├── pages							Страницы
│   │   ├── 404NotFound
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── Main
│   │       ├── About
│   │       │   ├── about.css
│   │       │   └── About.tsx
│   │       ├── Contact
│   │       │   ├── contact.css
│   │       │   └── Contact.tsx
│   │       ├── Gallery
│   │       │   ├── gallery.css
│   │       │   └── Gallery.tsx
│   │       ├── General
│   │       │   ├── general.css
│   │       │   └── General.tsx
│   │       ├── index.css
│   │       ├── index.tsx
│   │       └── Reviews
│   │           ├── reviews.css
│   │           └── Reviews.tsx
│   ├── shared							Общие компоненты
│   │   ├── lib
│   │   │   └── useMediaQueries.tsx
│   │   └── ui
│   │       └── Spinner
│   │           └── Spinner.tsx
│   └── widgets							Виджеты (обертка: хедер и футер)
│       ├── Footer
│       │   ├── Footer.tsx
│       │   └── styles.css
│       ├── Header
│       │   ├── Header.tsx
│       │   ├── Logo.tsx
│       │   └── styles.css
│       └── Layout
│           └── Layout.tsx
└── tsconfig.json
