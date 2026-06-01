import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("screen-intel core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("screen-intel");
    expect(result.project).toBe("screen-intelligence-sdk");
    expect(result.summary).toBeDefined();
    expect(result.report).toBeDefined();
  });

  it("returns report with required fields", () => {
    const result = runCore({ json: false });
    const { report } = result;
    expect(report).toHaveProperty("timestamp");
    expect(report).toHaveProperty("analyses");
    expect(Array.isArray(report.analyses)).toBe(true);
  });

  it("sets valid timestamp in report", () => {
    const result = runCore({ json: false });
    const { report } = result;
    const reportDate = new Date(report.timestamp);
    expect(reportDate.getTime()).toBeLessThanOrEqual(Date.now());
    expect(reportDate.getTime()).toBeGreaterThan(Date.now() - 5000); // within 5 seconds
  });

  it("initializes with empty analyses", () => {
    const result = runCore({ json: false });
    expect(result.report.analyses.length).toBe(0);
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("screen-intel");
    expect(result.report).toBeDefined();
  });
});
