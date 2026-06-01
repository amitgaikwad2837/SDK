export type PromptSuite = {
  name: string;
  description: string;
  testCases: TestCase[];
};

export type TestCase = {
  id: string;
  name: string;
  prompt: string;
  expectedOutput?: string;
  model?: string;
  parameters?: Record<string, unknown>;
};

export type ModelAdapter = {
  name: string;
  apiKey?: string;
  baseUrl?: string;
  version?: string;
};

export type TestResult = {
  testId: string;
  testName: string;
  passed: boolean;
  actualOutput: string;
  score?: number;
  duration: number;
};

export type Scorecard = {
  suiteId: string;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  averageScore: number;
  results: TestResult[];
};

export type TestTrace = {
  testId: string;
  model: string;
  tokensUsed: number;
  cost: number;
  latency: number;
};

export type BudgetMetric = {
  totalTokens: number;
  totalCost: number;
  costPerTest: number;
  remainingBudget: number;
};

export type TestingResult = {
  project: string;
  command: string;
  summary: string;
  scorecard: Scorecard;
  traces: TestTrace[];
  budget: BudgetMetric;
};

export type RunOptions = {
  json: boolean;
  suite?: string;
  model?: string;
  budget?: number;
};
