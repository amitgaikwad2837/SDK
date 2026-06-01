export type ComponentSource = {
  name: string;
  path: string;
  content: string;
  language: string;
};

export type InteractionMap = {
  components: string[];
  interactions: Interaction[];
};

export type Interaction = {
  from: string;
  to: string;
  type: string;
  eventType?: string;
};

export type Telemetry = {
  events: TelemetryEvent[];
};

export type TelemetryEvent = {
  name: string;
  frequency: number;
  properties: Record<string, unknown>;
};

export type ScreenAnalysis = {
  componentName: string;
  complexity: number;
  interactionCount: number;
  recommendations: Recommendation[];
};

export type Recommendation = {
  type: string;
  description: string;
  severity: "high" | "medium" | "low";
  action: string;
};

export type IntelligenceReport = {
  timestamp: string;
  analyses: ScreenAnalysis[];
  heatmap?: HeatmapData;
};

export type HeatmapData = {
  zones: Zone[];
  interactionDensity: number;
};

export type Zone = {
  area: string;
  interactions: number;
  percentOfTotal: number;
};

export type ScreenIntelResult = {
  project: string;
  command: string;
  summary: string;
  report: IntelligenceReport;
};

export type RunOptions = {
  json: boolean;
  component?: string;
  interactions?: string;
  telemetry?: string;
};
