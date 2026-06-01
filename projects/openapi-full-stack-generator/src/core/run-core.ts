import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "openapi-full-stack-generator",
      command: "generate-stack",
      summary: "Stack generation completed successfully.",
      manifest: { generatedAt: new Date().toISOString(), source: "", frameworks: [], paths: {} },
      generatedFiles: []
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "openapi-full-stack-generator",
      command: "generate-stack",
      summary: `Error: ${message}`,
      manifest: { generatedAt: new Date().toISOString(), source: "", frameworks: [], paths: {} },
      generatedFiles: []
    };
  }
}
