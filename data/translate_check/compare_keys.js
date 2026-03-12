const fs = require("fs");
const path = require("path");
const vm = require("vm");

function getKeysFromJsFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  // vm doesn't like 'const' if we want to access it from outside easily or if it's already declared
  // Let's strip 'const ' or 'let ' or 'var ' to make it a global in the context
  content = content.replace(/^(const|let|var)\s+cardDatabase/, "cardDatabase");

  const context = { cardDatabase: null };
  try {
    vm.createContext(context);
    vm.runInContext(content, context);
    if (context.cardDatabase) {
      return new Set(Object.keys(context.cardDatabase));
    } else {
      console.error(`Warning: cardDatabase not found in ${filePath}`);
      return new Set();
    }
  } catch (e) {
    console.error(`Error parsing ${filePath}: ${e.message}`);
    return new Set();
  }
}

const file1 = path.join(__dirname, "card_data.js");
const file2 = path.join(__dirname, "modified_card_data.js");

console.log(`Comparing keys between:\n1: ${file1}\n2: ${file2}\n`);

const keys1 = getKeysFromJsFile(file1);
const keys2 = getKeysFromJsFile(file2);

const onlyIn1 = [...keys1].filter((k) => !keys2.has(k)).sort();
const onlyIn2 = [...keys2].filter((k) => !keys1.has(k)).sort();

console.log(`Total keys in File 1: ${keys1.size}`);
console.log(`Total keys in File 2: ${keys2.size}\n`);

if (onlyIn1.length > 0) {
  console.log(`--- Keys only in File 1 (${onlyIn1.length}) ---`);
  onlyIn1.forEach((k) => console.log(`+ ${k}`));
  console.log("");
} else {
  console.log("No keys unique to File 1.\n");
}

if (onlyIn2.length > 0) {
  console.log(`--- Keys only in File 2 (${onlyIn2.length}) ---`);
  onlyIn2.forEach((k) => console.log(`- ${k}`));
  console.log("");
} else {
  console.log("No keys unique to File 2.\n");
}

if (onlyIn1.length === 0 && onlyIn2.length === 0 && keys1.size > 0) {
  console.log("Success: Key names match perfectly!");
}
