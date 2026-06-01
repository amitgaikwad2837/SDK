import { describe, expect, it } from "vitest";
import { runCore } from "../../src/core/run-core.js";

describe("incident-analyze core", () => {
  it("returns a basic result structure", () => {
    const result = runCore({ json: false });
    expect(result.command).toBe("incident-analyze");
    expect(result.project).toBe("production-incident-copilot");
    expect(result.summary).toBeDefined();
    expect(result.hypotheses).toBeDefined();
  });

  it("returns hypotheses array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.hypotheses)).toBe(true);
  });

  it("returns checklist with required fields", () => {
    const result = runCore({ json: false });
    const { checklist } = result;
    expect(checklist).toHaveProperty("title");
    expect(checklist).toHaveProperty("items");
    expect(checklist).toHaveProperty("estimatedTime");
    expect(Array.isArray(checklist.items)).toBe(true);
    expect(typeof checklist.estimatedTime).toBe("number");
  });

  it("returns timeline array", () => {
    const result = runCore({ json: false });
    expect(Array.isArray(result.timeline)).toBe(true);
  });

  it("handles success case properly", () => {
    const result = runCore({ json: false });
    expect(result.summary).toContain("completed");
  });

  it("supports json output option", () => {
    const result = runCore({ json: true });
    expect(result.command).toBe("incident-analyze");
    expect(result.checklist).toBeDefined();
  });
});
