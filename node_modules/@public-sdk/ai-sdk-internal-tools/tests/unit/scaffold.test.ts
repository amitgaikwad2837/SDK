import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("workflow-ai core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("workflow-ai");
    expect(result.project).toBe("ai-sdk-internal-tools");
    expect(result.summary).toBeDefined();
    expect(result.modules).toBeDefined();
  });

  it("returns modules array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.modules)).toBe(true);
  });

  it("returns interfaces array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.interfaces)).toBe(true);
  });

  it("returns api structure with configuration", () => {
    const result = runCore({ json: false });
    const { api } = result;
    expect(api).toHaveProperty("baseURL");
    expect(api).toHaveProperty("endpoints");
    expect(api).toHaveProperty("schemas");
    expect(Array.isArray(api.endpoints)).toBe(true);
    expect(typeof api.schemas).toBe("object");
  });

  it("initializes with empty configuration", () => {
    const result = runCore({ json: false });
    expect(result.modules.length).toBe(0);
    expect(result.interfaces.length).toBe(0);
    expect(result.api.baseURL).toBe("");
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("successfully");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("workflow-ai");
    expect(result.api).toBeDefined();
  });
});
