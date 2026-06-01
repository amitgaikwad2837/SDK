import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "ai-sdk-internal-tools",
      command: "workflow-ai",
      summary: "AI SDK internal tools executed successfully.",
      modules: [],
      interfaces: [],
      api: { baseURL: "", endpoints: [], schemas: {} }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "ai-sdk-internal-tools",
      command: "workflow-ai",
      summary: `Error: ${message}`,
      modules: [],
      interfaces: [],
      api: { baseURL: "", endpoints: [], schemas: {} }
    };
  }
}
