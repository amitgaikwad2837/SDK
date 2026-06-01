# OpenAPI Full Stack Generator

## 📦 Registry & Repository

- **npm**: [@amitgaikwad37/openapi-full-stack-generator](https://www.npmjs.com/package/@amitgaikwad37/openapi-full-stack-generator)
- **GitHub**: [amitgaikwad2837/openapi-full-stack-generator](https://github.com/amitgaikwad2837/openapi-full-stack-generator)

## Overview

Generate complete full-stack applications (frontend + backend + database schemas) from OpenAPI specifications. Reduces boilerplate and accelerates API-driven development.

## Installation

~~~bash
npm install @amitgaikwad37/openapi-full-stack-generator
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
