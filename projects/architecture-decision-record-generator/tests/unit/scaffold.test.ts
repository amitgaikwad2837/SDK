import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("adr-gen core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("adr-gen");
    expect(result.project).toBe("architecture-decision-record-generator");
    expect(result.summary).toBeDefined();
    expect(result.adrSummary).toBeDefined();
  });

  it("returns adr summary with required fields", () => {
    const result = runCore({ json: false });
    const { adrSummary } = result;
    expect(adrSummary).toHaveProperty("filename");
    expect(adrSummary).toHaveProperty("title");
    expect(adrSummary).toHaveProperty("created");
    expect(adrSummary).toHaveProperty("message");
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("successfully");
    expect(typeof result.adrSummary.created).toBe("boolean");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("adr-gen");
    expect(result.project).toBe("architecture-decision-record-generator");
  });

  it("initializes adr summary correctly on success", () => {
    const result = runCore({ json: false });
    expect(result.adrSummary.filename).toBe("");
    expect(result.adrSummary.title).toBe("");
    expect(result.adrSummary.created).toBe(false);
  });
});
