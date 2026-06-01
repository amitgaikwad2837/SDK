export type LogEntry = {
  timestamp: string;
  level: "ERROR" | "WARN" | "INFO";
  message: string;
  context?: Record<string, unknown>;
};

export type Metric = {
  name: string;
  timestamp: string;
  value: number;
  unit: string;
};

export type TraceSpan = {
  traceId: string;
  spanId: string;
  operationName: string;
  duration: number;
  status: string;
  tags?: Record<string, unknown>;
};

export type RootCauseHypothesis = {
  rank: number;
  hypothesis: string;
  probability: number;
  evidence: string[];
};

export type RemediationChecklist = {
  title: string;
  items: ChecklistItem[];
  estimatedTime: number;
};

export type ChecklistItem = {
  step: number;
  action: string;
  priority: "critical" | "high" | "medium" | "low";
  completed: boolean;
};

export type IncidentAnalysisResult = {
  project: string;
  command: string;
  summary: string;
  hypotheses: RootCauseHypothesis[];
  topHypothesis?: RootCauseHypothesis;
  checklist: RemediationChecklist;
  timeline: TimelineEvent[];
};

export type TimelineEvent = {
  timestamp: string;
  event: string;
  severity: string;
};

export type RunOptions = {
  json: boolean;
  logs?: string;
  metrics?: string;
  traces?: string;
};
