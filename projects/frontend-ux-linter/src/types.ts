export type DesignRules = {
  accessibility: AccessibilityRules;
  performance: PerformanceRules;
  responsive: ResponsiveRules;
};

export type AccessibilityRules = {
  minContrastRatio: number;
  requiredAriaLabels: boolean;
  keyboardNavigation: boolean;
};

export type PerformanceRules = {
  maxBundleSize: number;
  maxRenderTime: number;
};

export type ResponsiveRules = {
  minBreakpoints: number;
  mobileFirst: boolean;
};

export type LintFinding = {
  file: string;
  line: number;
  rule: string;
  severity: "error" | "warning" | "info";
  message: string;
  hint?: string;
};

export type SeverityCounts = {
  errors: number;
  warnings: number;
  infos: number;
};

export type UXLintResult = {
  project: string;
  command: string;
  summary: string;
  findings: LintFinding[];
  severities: SeverityCounts;
  stats: LintStats;
};

export type LintStats = {
  filesScanned: number;
  totalIssues: number;
  issuesByRule: Record<string, number>;
};

export type RunOptions = {
  json: boolean;
  path?: string;
  config?: string;
};
