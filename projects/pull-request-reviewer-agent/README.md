# Pull Request Reviewer Agent

## Overview

Automate PR review checks and produce structured reviewer feedback.

## Installation

~~~bash
npm install @public-sdk/pull-request-reviewer-agent
~~~

## Quick Start

~~~bash
npx ai-pr-reviewer --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx ai-pr-reviewer --json
~~~

## Typical Output

~~~json
{
  "command": "ai-pr-reviewer",
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
