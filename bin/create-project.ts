import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";

export async function createProject(projectName = "my-app") {
  const currentDir = process.cwd();
  const templateDir = path.join(__dirname, "..", "template");
  const destination = path.join(currentDir, projectName);

  console.log(`\n📁 Creating Next.js app in: ${destination}`);

  try {
    await fs.copy(templateDir, destination);
    console.log("✅ Template files copied.");

    process.chdir(destination);
    console.log("\n📦 Installing dependencies...\n");
    execSync("npm install", { stdio: "inherit" });

    console.log(`\n🚀 Project setup complete!\n`);
    console.log(`👉 Next steps:\n  cd ${projectName}\n  Update .env\n  Update .npmrc\n  npm install @vivekkv178/library\n  npm run dev\n`);
  } catch (err) {
    console.error("❌ Error setting up project:", err);
  }
}
