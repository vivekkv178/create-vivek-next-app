import path from "path";
import fs from "fs-extra";

export async function createRoute(routeName: string) {
  const currentDir = process.cwd();
  const routeTemplateDir = path.join(
    "..",
    "template",
    "app",
    "(app)",
    "home"
  );

  const appDir = path.join(currentDir, "app", routeName);

  if (!fs.existsSync("package.json")) {
    console.error("❌ Not inside a project folder.");
    process.exit(1);
  }

  if (!fs.existsSync(routeTemplateDir)) {
    console.error("❌ route-template folder not found in template.");
    process.exit(1);
  }

  console.log(`\n📂 Creating new route: ${routeName}`);
  await fs.copy(routeTemplateDir, appDir);

  console.log("✅ Route created successfully!");
}
