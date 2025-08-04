# create-vivek-next-app

A custom **Next.js + TypeScript** starter kit with a predefined folder structure and built-in CLI tools. Run it instantly using `npx` from GitHub.

---

## 🚀 Features

* 📁 Custom folder structure: `/app`, `/components`, `/lib`, etc.
* ⚡ TypeScript support
* 🎨 UI powered by [ShadCN UI](https://ui.shadcn.com)
* 🧱 Includes Tailwind CSS setup
* 🧪 Bootstrap instantly via GitHub

---

## 🏗️ Folder Structure Example

```
my-app/
├── app/
│   └── page.tsx
│   └── layout.tsx
├── components/
│   └── Header.tsx
├── lib/
│   └── constants.ts
│   └── utils.ts
├── public/
├── tsconfig.json
└── ...
```

---

## ⚙️ Usage

### 1. Create a New App

```bash
npx github:@vivekkv178/create-vivek-next-app my-app
```
---

### 2. Install & Start

```bash
cd my-app
npm install
npm run dev
```

---

## 🧪 Local Development (for the template)

If you're modifying the template repo itself:

```bash
git clone https://github.com/vivekkv178/create-vivek-next-app.git
cd create-vivek-next-app
npm install
npx ts-node bin/index.ts test-app
```

---

## 🔧 TODOs

* [ ] Add CLI commands for scaffolding routes (`npm run create-route <name>`)
* [ ] Add support for `layout.tsx`, `loading.tsx`, etc. in route creation
* [ ] Add Prettier + ESLint configs
* [ ] Support Git-based versioning.