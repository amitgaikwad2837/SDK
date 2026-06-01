export type CodeAnalysis = {
  language: string;
  metrics: CodeMetrics;
  patterns: string[];
};

export type CodeMetrics = {
  linesOfCode: number;
  testCoverage: number;
  cycloComplexity: number;
};

export type PolicyConfig = {
  requiredDimensions: string[];
  minScorePerDimension: number;
  riskThreshold: number;
};

export type DimensionScore = {
  dimension: string;
  score: number;
  maxScore: number;
  gaps: string[];
};

export type RiskMatrix = {
  dimension: string;
  riskLevel: "low" | "medium" | "high";
  mitigations: string[];
};

export type ActionItem = {
  priority: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  estimatedHours: number;
};

export type ReadinessResult = {
  project: string;
  command: string;
  summary: string;
  scores: DimensionScore[];
  riskMatrix: RiskMatrix[];
  actionPlan: ActionItem[];
  overallReadiness: number;
};

export type RunOptions = {
  json: boolean;
  repo?: string;
  config?: string;
};
