export type PRMetadata = {
  title: string;
  description: string;
  changedFiles: FileChange[];
  author: string;
  timestamp: string;
};

export type FileChange = {
  path: string;
  status: "added" | "modified" | "deleted";
  additions: number;
  deletions: number;
};

export type ArchitectureRules = {
  styleGuide: string;
  templates: Record<string, string>;
};

export type ADRDocument = {
  title: string;
  status: string;
  context: string;
  decision: string;
  consequences: string;
  timestamp: string;
};

export type ADRSummary = {
  filename: string;
  title: string;
  created: boolean;
  message: string;
};

export type ADRResult = {
  project: string;
  command: string;
  summary: string;
  adr?: ADRDocument;
  adrSummary: ADRSummary;
};

export type RunOptions = {
  json: boolean;
  pr?: string;
  files?: string[];
  config?: string;
};
