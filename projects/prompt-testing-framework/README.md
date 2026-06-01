# Prompt Testing Framework

## Overview

Evaluate prompts with repeatable scoring and regression comparisons.

## Installation

~~~bash
npm install @public-sdk/prompt-testing-framework
~~~

## Quick Start

~~~bash
npx prompt-test --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx prompt-test --json
~~~

## Typical Output

~~~json
{
  "command": "prompt-test",
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
