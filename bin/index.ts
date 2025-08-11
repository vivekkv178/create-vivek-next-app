#!/usr/bin/env ts-node

import { createLayout } from "./create-layout";
import { createProject } from "./create-project";
import { createRoute } from "./create-route";

async function main() {
  const [, , command, arg] = process.argv;

  if (!command) {
    // Default behaviour: create a project
    await createProject(command);
  } else if (command === "create-route") {
    if (!arg) {
      console.error("❌ Please provide a route name.");
      process.exit(1);
    }
    await createRoute(arg);
  } else if (command === "create-layout") {
    if (!arg) {
      console.error("❌ Please provide a layout name.");
      process.exit(1);
    }
    await createLayout(arg);
  } else {
    // If first arg isn't a command, treat it as project name
    await createProject(command);
  }
}

main();
