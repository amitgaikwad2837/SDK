import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("boilerplate-audit core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("boilerplate-audit");
    expect(result.project).toBe("saas-boilerplate-analyzer");
    expect(result.summary).toBeDefined();
    expect(result.report).toBeDefined();
  });

  it("returns report with scoring structure", () => {
    const result = runCore({ json: false });
    const { report } = result;
    expect(report).toHaveProperty("totalScore");
    expect(report).toHaveProperty("categoryScores");
    expect(report).toHaveProperty("missingCapabilities");
    expect(report).toHaveProperty("actionItems");
  });

  it("includes arrays in report", () => {
    const result = runCore({ json: false });
    const { report } = result;
    expect(Array.isArray(report.categoryScores)).toBe(true);
    expect(Array.isArray(report.missingCapabilities)).toBe(true);
    expect(Array.isArray(report.actionItems)).toBe(true);
  });

  it("returns valid score on success", () => {
    const result = runCore({ json: false });
    expect(result.report.totalScore).toBe(75);
    expect(result.report.totalScore).toBeGreaterThanOrEqual(0);
    expect(result.report.totalScore).toBeLessThanOrEqual(100);
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("boilerplate-audit");
    expect(result.report).toBeDefined();
  });
});
