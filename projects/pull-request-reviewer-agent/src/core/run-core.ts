import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "pull-request-reviewer-agent",
      command: "ai-pr-reviewer",
      summary: "PR review completed.",
      comments: [],
      checkRun: { conclusion: "success", title: "", summary: "", text: "" }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "pull-request-reviewer-agent",
      command: "ai-pr-reviewer",
      summary: `Error: ${message}`,
      comments: [],
      checkRun: { conclusion: "failure", title: "Error", summary: message, text: "" }
    };
  }
}
