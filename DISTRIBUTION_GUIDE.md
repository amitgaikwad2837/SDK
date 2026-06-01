# SDK Distribution Guide

This guide explains how to upload each SDK to individual repositories with automated publishing to registries.

## Overview

All 23 SDKs are currently in a monorepo structure under `projects/`. This guide shows how to:
- Mirror each SDK folder to separate GitHub repositories
- Publish web SDKs to npm Registry
- Publish Android SDKs to Maven Central
- Automate publishing via GitHub Actions

## Strategy: Automated Mirroring + Publishing

Instead of manually managing 23 separate repos, we use a **split & publish** approach:
- Keep the monorepo as source of truth
- GitHub Actions automatically mirrors each SDK folder to its own repo
- CI/CD pipelines publish to npm/Maven Central on each release

---

## Part 1: Setup Individual GitHub Repositories

### Step 1: Create 23 GitHub Repositories

Create empty repositories with these names:

**Web SDKs (15):**
- `api-contract-drift-detector`
- `ai-powered-migration-generator`
- `api-mock-data-intelligence`
- `architecture-decision-record-generator`
- `database-query-explainer`
- `enterprise-readiness-scanner`
- `frontend-ux-linter`
- `openapi-full-stack-generator`
- `production-incident-copilot`
- `prompt-testing-framework`
- `pull-request-reviewer-agent`
- `readme-intelligence-sdk`
- `saas-boilerplate-analyzer`
- `screen-intelligence-sdk`
- `ai-sdk-internal-tools`

**Android SDKs (8):**
- `android-ai-provider-core`
- `android-emergency-sos-sdk`
- `android-fall-detection-sdk`
- `android-distress-detection-sdk`
- `android-voice-assistant-sdk`
- `android-ocr-explain-sdk`
- `android-accessibility-assistant-sdk`
- `android-vision-assistance-sdk`

### Step 2: Initialize Each Repository

For each new repo, clone it locally and initialize:

```bash
git clone https://github.com/YOUR_ORG/api-contract-drift-detector.git
cd api-contract-drift-detector
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

---

## Part 2: Mirror Monorepo Subfolders to Individual Repos

### Option A: GitHub Actions (Recommended - Automated)

Create a GitHub Actions workflow to automatically sync monorepo subfolders:

**File:** `.github/workflows/mirror-sdks.yml` (in monorepo)

```yaml
name: Mirror SDKs to Individual Repos

on:
  push:
    branches: [main]
    paths:
      - 'projects/**'
  workflow_dispatch:

jobs:
  mirror:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        sdk:
          # Web SDKs
          - { folder: 'api-contract-drift-detector', repo: 'api-contract-drift-detector' }
          - { folder: 'ai-powered-migration-generator', repo: 'ai-powered-migration-generator' }
          - { folder: 'api-mock-data-intelligence', repo: 'api-mock-data-intelligence' }
          - { folder: 'architecture-decision-record-generator', repo: 'architecture-decision-record-generator' }
          - { folder: 'database-query-explainer', repo: 'database-query-explainer' }
          - { folder: 'enterprise-readiness-scanner', repo: 'enterprise-readiness-scanner' }
          - { folder: 'frontend-ux-linter', repo: 'frontend-ux-linter' }
          - { folder: 'openapi-full-stack-generator', repo: 'openapi-full-stack-generator' }
          - { folder: 'production-incident-copilot', repo: 'production-incident-copilot' }
          - { folder: 'prompt-testing-framework', repo: 'prompt-testing-framework' }
          - { folder: 'pull-request-reviewer-agent', repo: 'pull-request-reviewer-agent' }
          - { folder: 'readme-intelligence-sdk', repo: 'readme-intelligence-sdk' }
          - { folder: 'saas-boilerplate-analyzer', repo: 'saas-boilerplate-analyzer' }
          - { folder: 'screen-intelligence-sdk', repo: 'screen-intelligence-sdk' }
          - { folder: 'ai-sdk-internal-tools', repo: 'ai-sdk-internal-tools' }
          # Android SDKs
          - { folder: 'android-ai-provider-core', repo: 'android-ai-provider-core' }
          - { folder: 'android-emergency-sos-sdk', repo: 'android-emergency-sos-sdk' }
          - { folder: 'android-fall-detection-sdk', repo: 'android-fall-detection-sdk' }
          - { folder: 'android-distress-detection-sdk', repo: 'android-distress-detection-sdk' }
          - { folder: 'android-voice-assistant-sdk', repo: 'android-voice-assistant-sdk' }
          - { folder: 'android-ocr-explain-sdk', repo: 'android-ocr-explain-sdk' }
          - { folder: 'android-accessibility-assistant-sdk', repo: 'android-accessibility-assistant-sdk' }
          - { folder: 'android-vision-assistance-sdk', repo: 'android-vision-assistance-sdk' }

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Mirror ${{ matrix.sdk.folder }} to ${{ matrix.sdk.repo }}
        run: |
          # Extract SDK folder to temp directory
          mkdir -p /tmp/sdk-mirror
          cp -r projects/${{ matrix.sdk.folder }}/* /tmp/sdk-mirror/
          
          # Clone target repo (create if doesn't exist)
          cd /tmp
          git clone https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository_owner }}/${{ matrix.sdk.repo }}.git target-repo || \
          git init target-repo
          
          cd target-repo
          git config user.email "github-actions@github.com"
          git config user.name "GitHub Actions"
          
          # Copy SDK files
          rm -rf * .gitignore
          cp -r /tmp/sdk-mirror/* .
          
          # Commit and push
          git add .
          if git commit -m "Mirror from monorepo: ${{ github.sha }}"; then
            git push https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository_owner }}/${{ matrix.sdk.repo }}.git main || true
          fi
```

### Option B: Manual Script (One-time setup)

Run this PowerShell script to manually sync each SDK:

```powershell
# Script: mirror-sdks.ps1

$sdks = @(
    "api-contract-drift-detector",
    "ai-powered-migration-generator",
    # ... (add all 23 SDK names)
)

$gitOrg = "YOUR_ORG"
$gitToken = "YOUR_GITHUB_TOKEN"  # Create at https://github.com/settings/tokens

foreach ($sdk in $sdks) {
    Write-Host "Mirroring $sdk..." -ForegroundColor Green
    
    # Clone target repo or init if doesn't exist
    $repoPath = "C:\temp\sdk-repos\$sdk"
    if (Test-Path $repoPath) {
        Remove-Item -Recurse -Force $repoPath
    }
    
    git clone "https://${gitToken}@github.com/${gitOrg}/${sdk}.git" $repoPath
    
    # Copy files from monorepo
    Copy-Item -Path "D:\Amit\GIthubPublic\SDK\projects\$sdk\*" -Destination $repoPath -Recurse -Force
    
    # Commit and push
    cd $repoPath
    git config user.email "your-email@example.com"
    git config user.name "Your Name"
    git add .
    git commit -m "Initial SDK mirror from monorepo"
    git push origin main
}
```

---

## Part 3: Configure npm Publishing (Web SDKs)

### Step 1: Update package.json for Each Web SDK

Ensure each web SDK's `package.json` has:

```json
{
  "name": "@your-org/api-contract-drift-detector",
  "version": "1.0.0",
  "description": "Detect API contract drift between OpenAPI specs and backend implementation",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_ORG/api-contract-drift-detector.git"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "scripts": {
    "build": "tsc",
    "test": "vitest",
    "prepublishOnly": "npm test && npm run build"
  }
}
```

### Step 2: Create npm Publishing Workflow

**File:** `.github/workflows/publish-npm.yml` (in individual SDK repos)

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org/'
      
      - run: npm ci
      - run: npm run build
      - run: npm test
      
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Step 3: Add npm Token to GitHub Secrets

For each SDK repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add `NPM_TOKEN` = your npm token (create at https://npmjs.com/settings/tokens)

---

## Part 4: Configure Maven Publishing (Android SDKs)

Note: OSSRH reached end-of-life in 2025. Use Central Publisher Portal tokens and the Portal compatibility endpoint for Gradle maven-publish flows.

### Step 1: Update build.gradle.kts

Ensure each Android SDK has Maven publishing configured:

```kotlin
plugins {
    id("com.android.library")
    id("kotlin-android")
    id("maven-publish")
    id("signing")
}

publishing {
    publications {
        register<MavenPublication>("release") {
            groupId = "io.github.amitgaikwad2837"
            artifactId = "android-emergency-sos-sdk"
            version = "1.0.0"
            
            afterEvaluate {
                from(components["release"])
            }
        }
    }
    
    repositories {
        maven {
        name = "ossrh-staging-api"
        url = uri("https://ossrh-staging-api.central.sonatype.com/service/local/staging/deploy/maven2/")
            credentials {
          username = System.getenv("CENTRAL_PORTAL_USERNAME") ?: System.getenv("SONATYPE_USERNAME")
          password = System.getenv("CENTRAL_PORTAL_PASSWORD") ?: System.getenv("SONATYPE_PASSWORD")
            }
        }
    }
}

signing {
    sign(publishing.publications["release"])
}
```

### Step 2: Create Maven Publishing Workflow

**File:** `.github/workflows/publish-maven.yml` (in Android SDK repos)

```yaml
name: Publish to Maven Central

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'temurin'
      
      - run: ./gradlew build
      
      - run: ./gradlew publish
        env:
         CENTRAL_PORTAL_USERNAME: ${{ secrets.CENTRAL_PORTAL_USERNAME }}
         CENTRAL_PORTAL_PASSWORD: ${{ secrets.CENTRAL_PORTAL_PASSWORD }}
         SONATYPE_USERNAME: ${{ secrets.SONATYPE_USERNAME }}
         SONATYPE_PASSWORD: ${{ secrets.SONATYPE_PASSWORD }}
          SIGNING_KEY_ID: ${{ secrets.SIGNING_KEY_ID }}
          SIGNING_PASSWORD: ${{ secrets.SIGNING_PASSWORD }}
```

  ### Step 3: Configure Central Portal Token (Maven Central)

  1. Create account at https://central.sonatype.com
  2. Generate a user token at https://central.sonatype.com/usertoken
  3. Save token username and token password
3. Add to each repo's GitHub Secrets:
    - `CENTRAL_PORTAL_USERNAME`
    - `CENTRAL_PORTAL_PASSWORD`
    - Optional compatibility fallback: `SONATYPE_USERNAME`, `SONATYPE_PASSWORD`
   - `SIGNING_KEY_ID`
   - `SIGNING_PASSWORD`

---

## Part 5: Release & Publish Workflow

### Create a Release

```bash
cd projects/api-contract-drift-detector
git tag v1.0.0
git push origin v1.0.0
```

### Automated Flow

1. **Tag pushed** → GitHub Actions mirrors to individual repo
2. **Release created** → npm/Maven CI/CD publishes automatically

---

## Quick Start Checklist

- [ ] Create 23 GitHub repositories
- [ ] Add GitHub Actions workflow to monorepo (mirror-sdks.yml)
- [ ] Configure npm tokens for web SDKs
- [ ] Configure Sonatype/signing for Android SDKs
- [ ] Test mirroring with one SDK
- [ ] Create first release tag
- [ ] Verify packages published to npm/Maven Central

---

## Alternative: Manual Publication

If you prefer manual control:

```bash
# Publish Web SDK to npm
cd projects/api-contract-drift-detector
npm version patch
npm publish

# Publish Android SDK to Maven
cd projects/android-emergency-sos-sdk
./gradlew publish
```

---

## For Help

- npm publishing: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
- Maven Central: https://central.sonatype.org/publishing/publish-guide/
- GitHub Actions: https://docs.github.com/en/actions
