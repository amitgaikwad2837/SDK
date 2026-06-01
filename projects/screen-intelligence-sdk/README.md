# Screen Intelligence SDK

## Overview

Analyze UI screens and return structured design and usability signals.

## Installation

~~~bash
npm install @public-sdk/screen-intelligence-sdk
~~~

## Quick Start

~~~bash
npx screen-intel --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx screen-intel --json
~~~

## Typical Output

~~~json
{
  "command": "screen-intel",
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
