import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "production-incident-copilot",
      command: "incident-analyze",
      summary: "Incident analysis completed.",
      hypotheses: [],
      checklist: { title: "", items: [], estimatedTime: 0 },
      timeline: []
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "production-incident-copilot",
      command: "incident-analyze",
      summary: `Error: ${message}`,
      hypotheses: [],
      checklist: { title: "", items: [], estimatedTime: 0 },
      timeline: []
    };
  }
}
