# Frontend UX Linter

## Overview

Lint UI and accessibility patterns and report actionable UX issues.

## Installation

~~~bash
npm install @public-sdk/frontend-ux-linter
~~~

## Quick Start

~~~bash
npx ux-lint --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx ux-lint --json
~~~

## Typical Output

~~~json
{
  "command": "ux-lint",
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
