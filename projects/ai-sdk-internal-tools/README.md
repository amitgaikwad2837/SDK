# AI SDK Internal Tools

## Overview

Provide utility workflows used to develop and validate AI SDK pipelines.

## Installation

~~~bash
npm install @public-sdk/ai-sdk-internal-tools
~~~

## Quick Start

~~~bash
npx workflow-ai --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx workflow-ai --json
~~~

## Typical Output

~~~json
{
  "command": "workflow-ai",
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
