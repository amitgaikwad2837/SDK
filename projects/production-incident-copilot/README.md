# Production Incident Copilot

## Overview

Analyze incident context from logs and produce triage-focused diagnostics.

## Installation

~~~bash
npm install @public-sdk/production-incident-copilot
~~~

## Quick Start

~~~bash
npx incident-analyze --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx incident-analyze --json
~~~

## Typical Output

~~~json
{
  "command": "incident-analyze",
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
