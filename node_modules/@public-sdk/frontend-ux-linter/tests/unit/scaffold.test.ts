import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("ux-lint core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("ux-lint");
    expect(result.project).toBe("frontend-ux-linter");
    expect(result.summary).toBeDefined();
    expect(result.findings).toBeDefined();
  });

  it("returns findings array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.findings)).toBe(true);
  });

  it("returns severity counts structure", () => {
    const result = runCore({ json: false });
    const { severities } = result;
    expect(severities).toHaveProperty("errors");
    expect(severities).toHaveProperty("warnings");
    expect(severities).toHaveProperty("infos");
    expect(typeof severities.errors).toBe("number");
  });

  it("returns statistics structure", () => {
    const result = runCore({ json: false });
    const { stats } = result;
    expect(stats).toHaveProperty("filesScanned");
    expect(stats).toHaveProperty("totalIssues");
    expect(stats).toHaveProperty("issuesByRule");
    expect(typeof stats.filesScanned).toBe("number");
  });

  it("handles success case with zero issues", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
    expect(result.severities.errors).toBe(0);
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("ux-lint");
  });
});
