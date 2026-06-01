# OpenAPI Full Stack Generator

## Overview

Generate backend and frontend starter components from OpenAPI definitions.

## Installation

~~~bash
npm install @public-sdk/openapi-full-stack-generator
~~~

## Quick Start

~~~bash
npx generate-stack --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx generate-stack --json
~~~

## Typical Output

~~~json
{
  "command": "generate-stack",
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
