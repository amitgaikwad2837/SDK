# Frontend UX Linter

## 📦 Registry & Repository

- **npm**: [@amitgaikwad37/frontend-ux-linter](https://www.npmjs.com/package/@amitgaikwad37/frontend-ux-linter)
- **GitHub**: [amitgaikwad2837/frontend-ux-linter](https://github.com/amitgaikwad2837/frontend-ux-linter)

## Overview

Lint and validate UI/UX patterns including accessibility (WCAG), responsive design, performance, and design consistency. Catch user experience issues early in development.

## Installation

~~~bash
npm install @amitgaikwad37/frontend-ux-linter
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
