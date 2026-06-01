import { runCore } from "../core/run-core.js";
import type { RunOptions } from "../types.js";

function printHelp(): void {
  console.log("mock-data-gen - Generate intelligent mock data from schema");
  console.log("");
  console.log("Usage:");
  console.log("  mock-data-gen --schema <path> [--scale <number>] [--locale <code>] [--json] [--help]");
  console.log("");
  console.log("Options:");
  console.log("  --schema <path>    Path to schema definition (required)");
  console.log("  --scale <number>   Number of records to generate (default: 100)");
  console.log("  --locale <code>    Locale code for locale-specific generation (default: en_US)");
  console.log("  --json             Print JSON output");
  console.log("  --help             Show this help message");
}

function parseArgs(args: string[]): RunOptions | null {
  const opts: RunOptions = { json: false };
  let i = 0;

  while (i < args.length) {
    const arg = args[i];

    if (arg === "--json") {
      opts.json = true;
      i++;
    } else if (arg === "--schema" && i + 1 < args.length) {
      opts.schema = args[i + 1];
      i += 2;
    } else if (arg === "--scale" && i + 1 < args.length) {
      opts.scale = args[i + 1];
      i += 2;
    } else if (arg === "--locale" && i + 1 < args.length) {
      opts.locale = args[i + 1];
      i += 2;
    } else {
      i++;
    }
  }

  if (!opts.schema) {
    return null;
  }

  return opts;
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    printHelp();
    process.exit(args.length === 0 ? 2 : 0);
  }

  const opts = parseArgs(args);
  if (!opts) {
    console.error("Error: --schema is required");
    printHelp();
    process.exit(2);
  }

  const result = runCore(opts);

  if (opts.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(`[${result.command}] ${result.summary}`);
    console.log(`\nDatasets Generated: ${result.datasets.length}`);
    console.log(`Total Records: ${result.integrityReport.totalRecords}`);
    console.log(`Integrity Checks: ${result.integrityReport.integrityChecks.length}`);
  }

  const exitCode = 0;
  process.exit(exitCode);
}

main();

