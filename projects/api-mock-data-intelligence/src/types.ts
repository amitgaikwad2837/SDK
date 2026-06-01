// Input models
export type DomainSchema = {
  entities: Entity[];
  relationships: Relationship[];
};

export type Entity = {
  name: string;
  fields: Field[];
  idField: string;
};

export type Field = {
  name: string;
  type: "string" | "number" | "boolean" | "date" | "email" | "uuid";
  required: boolean;
  faker?: string;
};

export type Relationship = {
  from: string;
  to: string;
  type: "one-to-one" | "one-to-many" | "many-to-many";
  cardinality: string;
};

export type ScaleConfig = {
  baseCount: number;
  variance: number;
};

export type LocaleRules = {
  locale: string;
  dateFormat?: string;
  currencyCode?: string;
  timezone?: string;
};

// Output models
export type DatasetOutput = {
  entity: string;
  records: Record<string, unknown>[];
  count: number;
  relationships: RelationshipMapping[];
};

export type RelationshipMapping = {
  from: string;
  to: string;
  mappings: Array<{ fromId: string; toId: string }>;
};

export type RelationIntegrityReport = {
  totalEntities: number;
  totalRecords: number;
  integrityChecks: IntegrityCheck[];
  stats: DatasetStats;
};

export type IntegrityCheck = {
  relationship: string;
  valid: boolean;
  orphanedRecords: number;
  message?: string;
};

export type DatasetStats = {
  generatedAt: string;
  scale: ScaleConfig;
  locale: string;
  totalRecordsGenerated: number;
  relationshipsValidated: number;
  relationshipsValid: number;
};

export type MockDataResult = {
  project: string;
  command: string;
  summary: string;
  datasets: DatasetOutput[];
  integrityReport: RelationIntegrityReport;
};

export type RunOptions = {
  json: boolean;
  schema?: string;
  scale?: string;
  locale?: string;
  output?: string;
};
