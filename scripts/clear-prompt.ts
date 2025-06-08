#!/usr/bin/env tsx
import fs from "fs";
import path from "path";
import inquirer from "inquirer";

// Recursively get all files in the directory
function getFileTree(dir: string, prefix = ""): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFileTree(filePath, path.join(prefix, file)));
    } else {
      results.push(path.join(prefix, file));
    }
  });
  return results;
}

async function main() {
  const root = path.resolve(__dirname, "..");
  const files = getFileTree(root);
  const { filesToClear } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "filesToClear",
      message: "Select files to clear (delete contents):",
      choices: files,
      pageSize: 20,
    },
  ]);
  for (const file of filesToClear) {
    fs.writeFileSync(path.join(root, file), "");
    console.log(`Cleared: ${file}`);
  }
  if (filesToClear.length === 0) {
    console.log("No files selected. Nothing cleared.");
  }
}

main();
