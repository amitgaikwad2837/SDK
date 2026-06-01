export type SourceTree = {
  path: string;
  files: SourceFile[];
  stats: CodeStats;
};

export type SourceFile = {
  path: string;
  language: string;
  lines: number;
};

export type CodeStats = {
  totalFiles: number;
  totalLines: number;
  languages: Record<string, number>;
};

export type ConfigRules = {
  sections: string[];
  updateStrategy: "replace" | "append" | "merge";
  includeStats: boolean;
  includeTOC: boolean;
};

export type ReadmeSection = {
  title: string;
  content: string;
  order: number;
};

export type SectionContent = {
  title: string;
  generated: boolean;
  content: string;
};

export type ChangeSummary = {
  sectionsAdded: string[];
  sectionsUpdated: string[];
  sectionsRemoved: string[];
};

export type DiffReport = {
  before: string;
  after: string;
  diff: string;
};

export type ReadmeResult = {
  project: string;
  command: string;
  summary: string;
  sections: SectionContent[];
  changes: ChangeSummary;
  diff?: DiffReport;
};

export type RunOptions = {
  json: boolean;
  repo?: string;
  config?: string;
  output?: string;
};
