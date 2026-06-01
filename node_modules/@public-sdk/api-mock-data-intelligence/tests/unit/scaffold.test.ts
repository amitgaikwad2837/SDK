import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("mock-data-gen core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("mock-data-gen");
    expect(result.project).toBe("api-mock-data-intelligence");
    expect(result.datasets).toBeDefined();
    expect(result.integrityReport).toBeDefined();
  });

  it("generates mock datasets", () => {
    const result = runCore({ json: false, schema: "test.json", scale: "50" });
    expect(result.datasets.length).toBeGreaterThan(0);
    expect(result.datasets[0].records.length).toBe(50);
  });

  it("includes integrity report statistics", () => {
    const result = runCore({ json: false, schema: "test.json" });
    expect(result.integrityReport.totalRecords).toBe(100);
    expect(result.integrityReport.stats.locale).toBe("en_US");
  });
});
