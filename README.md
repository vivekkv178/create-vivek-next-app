# create-vivek-next-app

A custom **Next.js + TypeScript** starter kit with a predefined folder structure and built-in CLI tools. Run it instantly using `npx` from GitHub.

---

## 🚀 Features

- 📁 Custom folder structure: `/app`, `/components`, `/lib`, etc.
- ⚡ TypeScript support
- 🎨 UI powered by [ShadCN UI](https://ui.shadcn.com)
- 🧱 Includes Tailwind CSS setup
- 🛠️ Built-in CLI commands for scaffolding layouts and routes
- 🧪 Bootstrap instantly via GitHub

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

### 2. Configure Private Library Access

The template depends on private npm package:

1. Rename `sample.env` to `.env`.
2. Update `.env` file with required keys.
3. Update `.npmrc` with github access token to access private package.
4. Install the private package
```bash
npm install @vivekkv178/library
```

---

## 📦 CLI Commands

### Create a New Route

```bash
npx github:@vivekkv178/create-vivek-next-app create-route <route-name>
```

---

### Create a New Layout

```bash
npx github:@vivekkv178/create-vivek-next-app create-layout <layout-name>
```

## 🧪 Local Development (for the template)

If you're modifying the template repo itself:

```bash
git clone https://github.com/vivekkv178/create-vivek-next-app.git
cd create-vivek-next-app
npm install
npx ts-node bin/index.ts test-app
```

## **Install a Specific Version** (via Git tag)

```bash
npx github:vivekkv178/create-vivek-next-app#1.0.0 my-app
```

🔹 Replace `1.0.0` with the desired tag (see version table below).

## 🏷️ Available Versions

| Version    | Changes                     |
| ---------- | --------------------------- |
| **1.0.0**  | Basic Structure             |
| **2.0.0**  | Custom Layouts & Routes     |

## 🔧 TODOs

- [ ] Add Prettier + ESLint configs