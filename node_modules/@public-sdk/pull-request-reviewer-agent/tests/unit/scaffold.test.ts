import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("ai-pr-reviewer core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("ai-pr-reviewer");
    expect(result.project).toBe("pull-request-reviewer-agent");
    expect(result.summary).toBeDefined();
    expect(result.comments).toBeDefined();
  });

  it("returns comments array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.comments)).toBe(true);
  });

  it("returns checkRun with required fields", () => {
    const result = runCore({ json: false });
    const { checkRun } = result;
    expect(checkRun).toHaveProperty("conclusion");
    expect(checkRun).toHaveProperty("title");
    expect(checkRun).toHaveProperty("summary");
    expect(checkRun).toHaveProperty("text");
  });

  it("sets success conclusion on successful review", () => {
    const result = runCore({ json: false });
    expect(result.checkRun.conclusion).toBe("success");
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("ai-pr-reviewer");
    expect(result.checkRun).toBeDefined();
  });
});
