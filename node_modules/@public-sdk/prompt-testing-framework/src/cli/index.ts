import { runCore } from "../core/run-core.js";

function main(): void {
  const args = process.argv.slice(2);
  const json = args.includes("--json");
  const result = runCore({ json });

  if (json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(`[${result.command}] ${result.summary}`);
  }

  process.exit(0);
}

main();

