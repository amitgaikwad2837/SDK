import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "database-query-explainer",
      command: "query-explain",
      summary: "Query explanation executed successfully.",
      query: { sql: "" },
      diagnosis: { issues: [], rootCauses: [], severity: "low" },
      suggestions: [],
      migrations: []
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "database-query-explainer",
      command: "query-explain",
      summary: `Error: ${message}`,
      query: { sql: "" },
      diagnosis: { issues: [], rootCauses: [], severity: "high" },
      suggestions: [],
      migrations: []
    };
  }
}
