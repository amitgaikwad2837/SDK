import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("readme-sync core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("readme-sync");
    expect(result.project).toBe("readme-intelligence-sdk");
    expect(result.summary).toBeDefined();
    expect(result.sections).toBeDefined();
  });

  it("returns sections array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.sections)).toBe(true);
  });

  it("returns changes structure with tracking arrays", () => {
    const result = runCore({ json: false });
    const { changes } = result;
    expect(changes).toHaveProperty("sectionsAdded");
    expect(changes).toHaveProperty("sectionsUpdated");
    expect(changes).toHaveProperty("sectionsRemoved");
    expect(Array.isArray(changes.sectionsAdded)).toBe(true);
    expect(Array.isArray(changes.sectionsUpdated)).toBe(true);
    expect(Array.isArray(changes.sectionsRemoved)).toBe(true);
  });

  it("initializes with empty changes", () => {
    const result = runCore({ json: false });
    expect(result.changes.sectionsAdded.length).toBe(0);
    expect(result.changes.sectionsUpdated.length).toBe(0);
    expect(result.changes.sectionsRemoved.length).toBe(0);
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("readme-sync");
    expect(result.changes).toBeDefined();
  });
});
