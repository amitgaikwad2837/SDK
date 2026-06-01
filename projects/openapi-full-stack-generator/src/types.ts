export type OpenAPISpec = {
  openapi: string;
  info: APIInfo;
  paths: Record<string, PathItem>;
  components?: Components;
};

export type APIInfo = {
  title: string;
  version: string;
  description?: string;
};

export type PathItem = {
  [method: string]: Operation;
};

export type Operation = {
  summary?: string;
  operationId: string;
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses: Record<string, Response>;
};

export type Parameter = {
  name: string;
  in: string;
  required: boolean;
  schema?: Schema;
};

export type RequestBody = {
  required: boolean;
  content: Record<string, Content>;
};

export type Content = {
  schema: Schema;
};

export type Response = {
  description: string;
  content?: Record<string, Content>;
};

export type Schema = {
  type?: string;
  properties?: Record<string, Schema>;
  items?: Schema;
  $ref?: string;
};

export type Components = {
  schemas?: Record<string, Schema>;
};

export type GenerationConfig = {
  targetPath: string;
  frameworks: string[];
  includeTests: boolean;
  includeSDK: boolean;
};

export type GeneratedManifest = {
  generatedAt: string;
  source: string;
  frameworks: string[];
  paths: Record<string, GeneratedFile[]>;
};

export type GeneratedFile = {
  path: string;
  type: string;
};

export type GeneratorResult = {
  project: string;
  command: string;
  summary: string;
  manifest: GeneratedManifest;
  generatedFiles: GeneratedFile[];
};

export type RunOptions = {
  json: boolean;
  spec?: string;
  config?: string;
  output?: string;
};
