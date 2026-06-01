# Architecture Decision Record Generator

## 📦 Registry & Repository

- **npm**: [@amitgaikwad37/architecture-decision-record-generator](https://www.npmjs.com/package/@amitgaikwad37/architecture-decision-record-generator)
- **GitHub**: [amitgaikwad2837/architecture-decision-record-generator](https://github.com/amitgaikwad2837/architecture-decision-record-generator)

## Overview

Automatically generate Architecture Decision Records (ADRs) from pull request metadata and commit history. Helps teams document technical decisions, rationale, and consequences for future reference.

## Installation

~~~bash
npm install @amitgaikwad37/architecture-decision-record-generator
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
