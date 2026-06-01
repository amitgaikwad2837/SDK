import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("generate-stack core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("generate-stack");
    expect(result.project).toBe("openapi-full-stack-generator");
    expect(result.summary).toBeDefined();
    expect(result.manifest).toBeDefined();
  });

  it("returns manifest with required fields", () => {
    const result = runCore({ json: false });
    const { manifest } = result;
    expect(manifest).toHaveProperty("generatedAt");
    expect(manifest).toHaveProperty("source");
    expect(manifest).toHaveProperty("frameworks");
    expect(manifest).toHaveProperty("paths");
    expect(Array.isArray(manifest.frameworks)).toBe(true);
  });

  it("returns generatedFiles array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.generatedFiles)).toBe(true);
  });

  it("sets correct generatedAt timestamp", () => {
    const result = runCore({ json: false });
    const manifest = result.manifest;
    const generatedDate = new Date(manifest.generatedAt);
    expect(generatedDate.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("successfully");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.manifest).toHaveProperty("generatedAt");
  });
});
