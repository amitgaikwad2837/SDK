# Architecture Decision Record Generator

## Overview

Generate ADR documents from pull request and design inputs.

## Installation

~~~bash
npm install @public-sdk/architecture-decision-record-generator
~~~

## Quick Start

~~~bash
npx adr-gen --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx adr-gen --json
~~~

## Typical Output

~~~json
{
  "command": "adr-gen",
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
