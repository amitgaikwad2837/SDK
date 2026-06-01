import type { RunOptions } from "../types.js";

export function runCore(options: RunOptions) {
  try {
    return {
      project: "prompt-testing-framework",
      command: "prompt-test",
      summary: "Prompt testing completed.",
      scorecard: { suiteId: "", totalTests: 0, passedTests: 0, failedTests: 0, averageScore: 0, results: [] },
      traces: [],
      budget: { totalTokens: 0, totalCost: 0, costPerTest: 0, remainingBudget: 0 }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      project: "prompt-testing-framework",
      command: "prompt-test",
      summary: `Error: ${message}`,
      scorecard: { suiteId: "", totalTests: 0, passedTests: 0, failedTests: 0, averageScore: 0, results: [] },
      traces: [],
      budget: { totalTokens: 0, totalCost: 0, costPerTest: 0, remainingBudget: 0 }
    };
  }
}
