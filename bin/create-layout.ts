import path from "path";
import fs from "fs-extra";

export async function createLayout(layoutName: string) {
  const projectDir = process.cwd();
  const layoutTemplateDir = path.join(projectDir, "template", "app", "(app)");
  const newLayoutDir = path.join(projectDir, "app", `(${layoutName})`);

  try {
    if (!(await fs.pathExists(layoutTemplateDir))) {
      throw new Error("Layout template not found in template/app/example-layout");
    }

    await fs.copy(layoutTemplateDir, newLayoutDir);
    console.log(`✅ New layout '${layoutName}' created in app/${layoutName}`);
  } catch (err) {
    console.error("❌ Error creating layout:", err);
  }
}
