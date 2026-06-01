import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("query-explain core", () => {
  it("returns a basic result structure", () => {
    // Verify core function returns properly typed result with command, project, summary, and diagnosis
    const result = runCore({ json: false });
    expect(result.command).toBe("query-explain");
    expect(result.project).toBe("database-query-explainer");
    expect(result.summary).toBeDefined();
    expect(result.diagnosis).toBeDefined();
  });

  it("returns diagnosis with required fields", () => {
    // Verify diagnosis object includes issues list, root causes, and severity level
    const result = runCore({ json: false });
    const { diagnosis } = result;
    expect(diagnosis).toHaveProperty("issues");
    expect(diagnosis).toHaveProperty("rootCauses");
    expect(diagnosis).toHaveProperty("severity");
    expect(Array.isArray(diagnosis.issues)).toBe(true);
    expect(Array.isArray(diagnosis.rootCauses)).toBe(true);
  });

  it("returns suggestions and migrations arrays", () => {
    // Verify both suggestion and migration arrays are present and properly typed
    const result = runCore({ json: false });
    expect(Array.isArray(result.suggestions)).toBe(true);
    expect(Array.isArray(result.migrations)).toBe(true);
  });

  it("handles success case with low severity", () => {
    // Verify success response uses low severity when no query errors detected
    const result = runCore({ json: false });
    expect(result.summary).toContain("successfully");
    expect(result.diagnosis.severity).toBe("low");
  });

  it("supports json output option", () => {
    // Verify SDK respects json flag and returns JSON-serializable output
    const result = runCore({ json: true });
    expect(result.query).toHaveProperty("sql");
  });

  it("initializes query object correctly", () => {
    // Verify query object is initialized with empty SQL string (placeholder for implementation)
    const result = runCore({ json: false });
    expect(result.query.sql).toBe("");
  });
});
