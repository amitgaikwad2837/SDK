# SaaS Boilerplate Analyzer

## Overview

Audit SaaS starter projects for architecture and production gaps.

## Installation

~~~bash
npm install @public-sdk/saas-boilerplate-analyzer
~~~

## Quick Start

~~~bash
npx boilerplate-audit --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx boilerplate-audit --json
~~~

## Typical Output

~~~json
{
  "command": "boilerplate-audit",
  "summary": "Execution completed successfully"
}
~~~

## Local Development

~~~bash
npm ci
npm run build
npm test
~~~

## License

MIT
