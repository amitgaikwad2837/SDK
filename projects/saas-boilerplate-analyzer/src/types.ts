export type RepositoryAudit = {
  root: string;
  directories: AuditDirectory[];
  findings: string[];
};

export type AuditDirectory = {
  path: string;
  type: string;
  score?: number;
};

export type InfraConfig = {
  provider: string;
  environment: string;
  services: ServiceConfig[];
};

export type ServiceConfig = {
  name: string;
  type: string;
  status: string;
};

export type CategoryScore = {
  category: string;
  score: number;
  maxScore: number;
  gaps: string[];
};

export type MissingCapability = {
  capability: string;
  importance: string;
  effort: string;
  blocker: boolean;
};

export type ActionItem = {
  priority: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  tasks: string[];
};

export type AuditReport = {
  totalScore: number;
  categoryScores: CategoryScore[];
  missingCapabilities: MissingCapability[];
  actionItems: ActionItem[];
};

export type AnalysisResult = {
  project: string;
  command: string;
  summary: string;
  report: AuditReport;
};

export type RunOptions = {
  json: boolean;
  repo?: string;
  infra?: string;
};
