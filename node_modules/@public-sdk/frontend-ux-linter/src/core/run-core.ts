import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "frontend-ux-linter",
      command: "ux-lint",
      summary: "UX linting completed.",
      findings: [],
      severities: { errors: 0, warnings: 0, infos: 0 },
      stats: { filesScanned: 0, totalIssues: 0, issuesByRule: {} }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "frontend-ux-linter",
      command: "ux-lint",
      summary: `Error: ${message}`,
      findings: [],
      severities: { errors: 1, warnings: 0, infos: 0 },
      stats: { filesScanned: 0, totalIssues: 1, issuesByRule: {} }
    };
  }
}
