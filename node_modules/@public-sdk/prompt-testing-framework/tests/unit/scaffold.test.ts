import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("prompt-test core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("prompt-test");
    expect(result.project).toBe("prompt-testing-framework");
    expect(result.summary).toBeDefined();
    expect(result.scorecard).toBeDefined();
  });

  it("returns scorecard with test metrics", () => {
    const result = runCore({ json: false });
    const { scorecard } = result;
    expect(scorecard).toHaveProperty("suiteId");
    expect(scorecard).toHaveProperty("totalTests");
    expect(scorecard).toHaveProperty("passedTests");
    expect(scorecard).toHaveProperty("failedTests");
    expect(scorecard).toHaveProperty("averageScore");
    expect(scorecard).toHaveProperty("results");
    expect(Array.isArray(scorecard.results)).toBe(true);
  });

  it("returns traces array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.traces)).toBe(true);
  });

  it("returns budget information", () => {
    const result = runCore({ json: false });
    const { budget } = result;
    expect(budget).toHaveProperty("totalTokens");
    expect(budget).toHaveProperty("totalCost");
    expect(budget).toHaveProperty("costPerTest");
    expect(budget).toHaveProperty("remainingBudget");
  });

  it("initializes with zero values on success", () => {
    const result = runCore({ json: false });
    expect(result.scorecard.totalTests).toBe(0);
    expect(result.scorecard.passedTests).toBe(0);
    expect(result.budget.totalCost).toBe(0);
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("prompt-test");
  });
});
