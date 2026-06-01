# README Intelligence SDK

## Overview

Keep README content aligned with implementation and release changes.

## Installation

~~~bash
npm install @public-sdk/readme-intelligence-sdk
~~~

## Quick Start

~~~bash
npx readme-sync --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx readme-sync --json
~~~

## Typical Output

~~~json
{
  "command": "readme-sync",
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
