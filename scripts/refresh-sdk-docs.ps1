$ErrorActionPreference = 'Stop'
Set-Location 'D:\Amit\GIthubPublic\SDK'

$webInfo = @{
  'api-contract-drift-detector' = @{ title='API Contract Drift Detector'; purpose='Detect drift between OpenAPI specs and backend implementations before it reaches production.' }
  'ai-powered-migration-generator' = @{ title='AI-Powered Migration Generator'; purpose='Generate SQL migration plans from schema changes with review-friendly output.' }
  'api-mock-data-intelligence' = @{ title='API Mock Data Intelligence'; purpose='Create realistic mock payloads from API contracts and schema hints.' }
  'architecture-decision-record-generator' = @{ title='Architecture Decision Record Generator'; purpose='Generate ADR documents from pull request and design inputs.' }
  'database-query-explainer' = @{ title='Database Query Explainer'; purpose='Explain SQL queries and suggest performance and readability improvements.' }
  'enterprise-readiness-scanner' = @{ title='Enterprise Readiness Scanner'; purpose='Scan projects for enterprise-readiness signals including security and compliance checks.' }
  'frontend-ux-linter' = @{ title='Frontend UX Linter'; purpose='Lint UI and accessibility patterns and report actionable UX issues.' }
  'openapi-full-stack-generator' = @{ title='OpenAPI Full Stack Generator'; purpose='Generate backend and frontend starter components from OpenAPI definitions.' }
  'production-incident-copilot' = @{ title='Production Incident Copilot'; purpose='Analyze incident context from logs and produce triage-focused diagnostics.' }
  'prompt-testing-framework' = @{ title='Prompt Testing Framework'; purpose='Evaluate prompts with repeatable scoring and regression comparisons.' }
  'pull-request-reviewer-agent' = @{ title='Pull Request Reviewer Agent'; purpose='Automate PR review checks and produce structured reviewer feedback.' }
  'readme-intelligence-sdk' = @{ title='README Intelligence SDK'; purpose='Keep README content aligned with implementation and release changes.' }
  'saas-boilerplate-analyzer' = @{ title='SaaS Boilerplate Analyzer'; purpose='Audit SaaS starter projects for architecture and production gaps.' }
  'screen-intelligence-sdk' = @{ title='Screen Intelligence SDK'; purpose='Analyze UI screens and return structured design and usability signals.' }
  'ai-sdk-internal-tools' = @{ title='AI SDK Internal Tools'; purpose='Provide utility workflows used to develop and validate AI SDK pipelines.' }
}

$webExamples = @{
  'api-contract-drift-detector' = @{
    command = 'npx drift-check --openapi ./examples/openapi.yaml --backend ./examples/backend.yaml --json'
    output = @'
{
  "command": "drift-check",
  "summary": "2 warnings detected",
  "stats": {
    "totalEndpoints": 18,
    "errors": 0,
    "warnings": 2
  }
}
'@
  }
  'ai-powered-migration-generator' = @{
    command = 'npx migration-gen --before ./examples/schema-before.sql --after ./examples/schema-after.sql --dryrun --json'
    output = @'
{
  "command": "migration-gen",
  "summary": "Generated 1 migration",
  "stats": {
    "tablesCreated": 1,
    "columnsAdded": 3
  }
}
'@
  }
  'api-mock-data-intelligence' = @{
    command = 'npx mock-data-gen --schema ./examples/schema.json --scale 250 --locale en_US --json'
    output = @'
{
  "command": "mock-data-gen",
  "summary": "Generated mock datasets",
  "integrityReport": {
    "totalRecords": 250,
    "integrityChecks": ["foreignKeyConsistency", "enumValidity"]
  }
}
'@
  }
}

Get-ChildItem projects -Directory | ForEach-Object {
  $sdk = $_.Name
  $pkgPath = Join-Path $_.FullName 'package.json'
  if (Test-Path $pkgPath) {
    $pkg = Get-Content $pkgPath -Raw | ConvertFrom-Json
    $bin = ($pkg.bin.PSObject.Properties | Select-Object -First 1).Name
    $title = $webInfo[$sdk].title
    $purpose = $webInfo[$sdk].purpose
    if ($webExamples.ContainsKey($sdk)) {
      $integrationCommand = $webExamples[$sdk].command
      $sampleOutput = $webExamples[$sdk].output
    } else {
      $integrationCommand = "npx $bin --json"
      $sampleOutput = @"
{
  "command": "$bin",
  "summary": "Execution completed successfully"
}
"@
    }

    $readme = @"
# $title

## Overview

$purpose

## Installation

~~~bash
npm install $($pkg.name)
~~~

## Quick Start

~~~bash
npx $bin --help
~~~

## Integration Example

1. Add this SDK to your CI workflow or local tooling script.
2. Run the command against your project inputs.
3. Fail the pipeline on non-zero exit code to enforce quality gates.

~~~bash
$integrationCommand
~~~

## Typical Output

~~~json
$sampleOutput
~~~

## Local Development

~~~bash
npm ci
npm run build
npm test
~~~

## License

MIT
"@

    Set-Content -Path (Join-Path $_.FullName 'README.md') -Value $readme -Encoding UTF8

    $examplesDir = Join-Path $_.FullName 'examples'
    if (-not (Test-Path $examplesDir)) { New-Item -ItemType Directory -Path $examplesDir | Out-Null }

    $exampleReadme = @"
# $title Examples

## CLI Example

Run this command from your project root:

~~~bash
$integrationCommand
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run $title
  run: $integrationCommand
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
"@
    Set-Content -Path (Join-Path $examplesDir 'README.md') -Value $exampleReadme -Encoding UTF8
  }
}

$androidMap = @{
  'android-ai-provider-core' = @{ title='Android AI Provider Core'; clazz='AIProviderRegistry'; import='com.sdk.aiprovider.api.AIProviderRegistry' }
  'android-emergency-sos-sdk' = @{ title='Android Emergency SOS SDK'; clazz='EmergencySOSSDK'; import='com.sdk.sos.EmergencySOSSDK' }
  'android-fall-detection-sdk' = @{ title='Android Fall Detection SDK'; clazz='FallDetectionSDK'; import='com.sdk.falldetection.FallDetectionSDK' }
  'android-distress-detection-sdk' = @{ title='Android Distress Detection SDK'; clazz='DistressDetectionSDK'; import='com.sdk.distress.DistressDetectionSDK' }
  'android-voice-assistant-sdk' = @{ title='Android Voice Assistant SDK'; clazz='VoiceAssistantSDK'; import='com.sdk.voice.VoiceAssistantSDK' }
  'android-ocr-explain-sdk' = @{ title='Android OCR Explain SDK'; clazz='OCRExplainSDK'; import='com.sdk.ocr.OCRExplainSDK' }
  'android-accessibility-assistant-sdk' = @{ title='Android Accessibility Assistant SDK'; clazz='AccessibilityAssistantSDK'; import='com.sdk.accessibility.AccessibilityAssistantSDK' }
  'android-vision-assistance-sdk' = @{ title='Android Vision Assistance SDK'; clazz='VisionAssistanceSDK'; import='com.sdk.vision.VisionAssistanceSDK' }
}

Get-ChildItem projects\android-* -Directory | ForEach-Object {
  $sdk = $_.Name
  $metaPath = Join-Path $_.FullName 'metadata.json'
  $meta = $null
  if (Test-Path $metaPath) { $meta = Get-Content $metaPath -Raw | ConvertFrom-Json }

  $title = $androidMap[$sdk].title
  $clazz = $androidMap[$sdk].clazz
  $import = $androidMap[$sdk].import
  $description = if ($meta) { $meta.description } else { 'Android SDK module.' }
  $features = if ($meta -and $meta.features) { ($meta.features | ForEach-Object { "- " + $_ }) -join "`n" } else { '- Feature list is documented in source and metadata.' }
  $permissions = if ($meta -and $meta.permissions) { ($meta.permissions | ForEach-Object { "- " + $_ }) -join "`n" } else { '- Permission requirements depend on host app usage.' }

  $androidReadme = @"
# $title

## Overview

$description

## Installation

Add the Maven dependency once artifacts are published:

~~~kotlin
dependencies {
  implementation("io.github.amitgaikwad2837:${sdk}:1.0.0")
}
~~~

## Integration Example

~~~kotlin
import $import

class ExampleUsage {
    fun setup() {
        val sdk = $clazz()
        // Configure and call SDK APIs here based on your app flow.
    }
}
~~~

## Feature Highlights

$features

## Android Permissions

$permissions

## Development

~~~bash
./gradlew build
./gradlew test
~~~

## License

MIT
"@

  Set-Content -Path (Join-Path $_.FullName 'README.md') -Value $androidReadme -Encoding UTF8
}

Write-Host 'Documentation update complete.'
