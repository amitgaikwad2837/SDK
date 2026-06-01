export type DeveloperPrompt = {
  name: string;
  description: string;
  context: string;
  constraints: string[];
};

export type EntityDefinition = {
  name: string;
  fields: Field[];
  relationships: EntityRelationship[];
};

export type Field = {
  name: string;
  type: string;
  required: boolean;
  validation?: string;
};

export type EntityRelationship = {
  name: string;
  targetEntity: string;
  cardinality: string;
};

export type GenerationConfig = {
  language: string;
  framework: string;
  outputDir: string;
  includeTests: boolean;
};

export type GeneratedModule = {
  path: string;
  name: string;
  exports: string[];
  dependencies: string[];
};

export type SDKInterface = {
  name: string;
  methods: SDKMethod[];
};

export type SDKMethod = {
  name: string;
  params: SDKParam[];
  returnType: string;
};

export type SDKParam = {
  name: string;
  type: string;
  required: boolean;
};

export type TypedAPI = {
  baseURL: string;
  endpoints: APIEndpoint[];
  schemas: Record<string, string>;
};

export type APIEndpoint = {
  path: string;
  method: string;
  request: string;
  response: string;
};

export type AISDKResult = {
  project: string;
  command: string;
  summary: string;
  modules: GeneratedModule[];
  interfaces: SDKInterface[];
  api: TypedAPI;
};

export type RunOptions = {
  json: boolean;
  prompt?: string;
  entities?: string;
  config?: string;
};
