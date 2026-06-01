export type PRDiff = {
  prNumber: number;
  title: string;
  description: string;
  files: DiffFile[];
};

export type DiffFile = {
  path: string;
  status: "added" | "modified" | "deleted" | "renamed";
  additions: number;
  deletions: number;
  patch: string;
};

export type RepositoryContext = {
  owner: string;
  repo: string;
  mainBranch: string;
  language: string;
  linters: string[];
};

export type RuleConfig = {
  checkCodeQuality: boolean;
  checkSecurity: boolean;
  checkPerformance: boolean;
  checkDocumentation: boolean;
  strictMode: boolean;
};

export type ReviewComment = {
  file: string;
  line: number;
  severity: "error" | "warning" | "info";
  message: string;
  suggestion?: string;
};

export type CheckRunSummary = {
  conclusion: "success" | "failure" | "neutral";
  title: string;
  summary: string;
  text: string;
};

export type SARIFReport = {
  version: string;
  runs: SARIFRun[];
};

export type SARIFRun = {
  tool: SARIFTool;
  results: SARIFResult[];
};

export type SARIFTool = {
  driver: ToolDriver;
};

export type ToolDriver = {
  name: string;
  version: string;
};

export type SARIFResult = {
  ruleId: string;
  level: string;
  message: { text: string };
  locations: SARIFLocation[];
};

export type SARIFLocation = {
  physicalLocation: PhysicalLocation;
};

export type PhysicalLocation = {
  artifactLocation: { uri: string };
  region: { startLine: number };
};

export type ReviewResult = {
  project: string;
  command: string;
  summary: string;
  comments: ReviewComment[];
  checkRun: CheckRunSummary;
  sarif?: SARIFReport;
};

export type RunOptions = {
  json: boolean;
  pr?: string;
  repo?: string;
  config?: string;
};
