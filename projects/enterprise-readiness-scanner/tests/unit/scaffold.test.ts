import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("enterprise-check core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("enterprise-check");
    expect(result.project).toBe("enterprise-readiness-scanner");
    expect(result.summary).toBeDefined();
    expect(result.overallReadiness).toBeDefined();
  });

  it("returns overall readiness score", () => {
    const result = runCore({ json: false });
    expect(typeof result.overallReadiness).toBe("number");
    expect(result.overallReadiness).toBeGreaterThanOrEqual(0);
    expect(result.overallReadiness).toBeLessThanOrEqual(100);
  });

  it("includes required arrays for assessment", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.scores)).toBe(true);
    expect(Array.isArray(result.riskMatrix)).toBe(true);
    expect(Array.isArray(result.actionPlan)).toBe(true);
  });

  it("returns initial arrays on first run", () => {
    const result = runCore({ json: false });
    expect(result.scores.length).toBe(0);
    expect(result.riskMatrix.length).toBe(0);
    expect(result.actionPlan.length).toBe(0);
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("enterprise-check");
    expect(result.overallReadiness).toBeDefined();
  });
});
