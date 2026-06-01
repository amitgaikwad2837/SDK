export type SQLQuery = {
  sql: string;
  parsed?: ParsedQuery;
};

export type ParsedQuery = {
  type: "SELECT" | "INSERT" | "UPDATE" | "DELETE" | "JOIN";
  tables: string[];
  joins: JoinInfo[];
  whereClause?: string;
};

export type JoinInfo = {
  type: string;
  tables: string[];
  condition: string;
};

export type SchemaMetadata = {
  tables: TableMetadata[];
  indexes: IndexMetadata[];
};

export type TableMetadata = {
  name: string;
  columns: ColumnMetadata[];
  stats: TableStats;
};

export type ColumnMetadata = {
  name: string;
  type: string;
  indexed: boolean;
};

export type TableStats = {
  rowCount: number;
  avgRowSize: number;
};

export type IndexMetadata = {
  name: string;
  table: string;
  columns: string[];
  type: string;
};

export type ExplainPlan = {
  operations: PlanOperation[];
  estimatedCost: number;
};

export type PlanOperation = {
  name: string;
  rows: number;
  cost: number;
};

export type QueryDiagnosis = {
  issues: string[];
  rootCauses: string[];
  severity: string;
};

export type OptimizationSuggestion = {
  suggestion: string;
  expectedImprovement: string;
  priority: "high" | "medium" | "low";
};

export type MigrationScript = {
  indexCreations: string[];
  description: string;
};

export type ExplainerResult = {
  project: string;
  command: string;
  summary: string;
  query: SQLQuery;
  diagnosis: QueryDiagnosis;
  suggestions: OptimizationSuggestion[];
  migrations: MigrationScript[];
};

export type RunOptions = {
  json: boolean;
  query?: string;
  schema?: string;
  explain?: string;
};
