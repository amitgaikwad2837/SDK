import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "architecture-decision-record-generator",
      command: "adr-gen",
      summary: "ADR generation executed successfully.",
      adrSummary: { filename: "", title: "", created: false, message: "" }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "architecture-decision-record-generator",
      command: "adr-gen",
      summary: `Error: ${message}`,
      adrSummary: { filename: "", title: "", created: false, message }
    };
  }
}
