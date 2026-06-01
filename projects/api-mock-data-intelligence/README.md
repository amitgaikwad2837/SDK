# API Mock Data Intelligence

## Overview

Create realistic mock payloads from API contracts and schema hints.

## Installation

~~~bash
npm install @public-sdk/api-mock-data-intelligence
~~~

## Quick Start

~~~bash
npx mock-data-gen --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
npx mock-data-gen --schema ./examples/schema.json --scale 250 --locale en_US --json
~~~

## Typical Output

~~~json
{
  "command": "mock-data-gen",
  "summary": "Generated mock datasets",
  "integrityReport": {
    "totalRecords": 250,
    "integrityChecks": ["foreignKeyConsistency", "enumValidity"]
  }
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
