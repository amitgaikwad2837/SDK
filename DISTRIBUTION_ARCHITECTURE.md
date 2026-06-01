# SDK Distribution Architecture

This document explains how the 23 SDKs flow from the monorepo to individual package registries.

## Complete Distribution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  Monorepo (d:\Amit\GIthubPublic\SDK)                            │
│                                                                  │
│  projects/                                                       │
│  ├── api-contract-drift-detector/          (Web SDK)            │
│  ├── ai-powered-migration-generator/       (Web SDK)            │
│  ├── ...                                                         │
│  ├── android-emergency-sos-sdk/            (Android SDK)        │
│  ├── android-voice-assistant-sdk/          (Android SDK)        │
│  └── ...                                                         │
│                                                                  │
│  .github/workflows/                                              │
│  ├── mirror-sdks.yml                ◄─── Triggered on push      │
│  ├── publish-web-sdks.yml           ◄─── Triggered on tag       │
│  └── publish-android-sdks.yml       ◄─── Triggered on tag       │
└─────────────────────────────────────────────────────────────────┘
                    │
                    │ 1. MIRROR (automatic on every push)
                    ▼
┌──────────────────────────────────────────────────────────────────┐
│  Individual GitHub Repositories (23 total)                       │
│                                                                   │
│  YOUR_ORG/api-contract-drift-detector                            │
│  YOUR_ORG/ai-powered-migration-generator                         │
│  YOUR_ORG/android-emergency-sos-sdk                              │
│  YOUR_ORG/android-voice-assistant-sdk                            │
│  ... (19 more)                                                   │
└──────────────────────────────────────────────────────────────────┘
                    │
                    │ 2. PUBLISH (automatic on git tag v1.0.0+)
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
   ┌─────────────┐         ┌──────────────┐
   │   npm       │         │ Maven        │
   │  Registry   │         │ Central      │
   ├─────────────┤         ├──────────────┤
   │ Web SDKs    │         │ Android      │
   │ (15 pkgs)   │         │ SDKs (8)     │
   └─────────────┘         └──────────────┘
        │                        │
        │ npm install            │ gradle dependency
        │ @your-org/...          │ io.github.amitgaikwad2837:...
        │                        │
        ▼                        ▼
   ┌─────────────┐         ┌──────────────┐
   │   npm Apps  │         │ Android      │
   │   & Tools   │         │ Applications │
   └─────────────┘         └──────────────┘
```

---

## Detailed Workflow Steps

### Step 1: Developer Pushes to Monorepo

```bash
# Update a SDK in monorepo
cd d:\Amit\GIthubPublic\SDK
git add projects/api-contract-drift-detector/
git commit -m "Update drift detector logic"
git push origin main
```

**Triggers:** `mirror-sdks.yml` workflow

---

### Step 2: GitHub Actions Mirrors SDK

```yaml
# mirror-sdks.yml does this for EACH SDK:
1. Checkout monorepo
2. Copy projects/{sdk-name}/* to temp directory
3. Clone https://github.com/YOUR_ORG/{sdk-name}
4. Copy files to cloned repo
5. git commit -m "Mirror from monorepo"
6. git push to individual repo
```

**Result:** Individual repo `api-contract-drift-detector` is updated with latest code

---

### Step 3: Create Release Tag

```bash
# Developer creates semantic version tag
git tag v1.2.3
git push origin v1.2.3
```

**Triggers:** 
- `publish-web-sdks.yml` (for all 15 web SDKs)
- `publish-android-sdks.yml` (for all 8 Android SDKs)

---

### Step 4: CI/CD Publishes Packages

#### For Web SDKs:
```yaml
# publish-web-sdks.yml does this for EACH web SDK:
1. Checkout monorepo
2. cd projects/{sdk-name}
3. npm ci (install dependencies)
4. npm test (run tests)
5. npm run build (compile TypeScript)
6. npm publish (publish to npm registry)
```

**Result:** Package published to npm as `@your-org/{sdk-name}@1.2.3`

#### For Android SDKs:
```yaml
# publish-android-sdks.yml does this for EACH Android SDK:
1. Checkout monorepo
2. cd projects/{sdk-name}
3. ./gradlew build (build AAR)
4. ./gradlew test (run tests)
5. ./gradlew publish (publish to Sonatype/Maven Central)
```

**Result:** Package published to Maven Central as `io.github.amitgaikwad2837:{sdk-name}:1.2.3`

---

## Example: End-to-End Flow

### Scenario: Fix bug in Fall Detection SDK

```bash
# 1. Developer makes fix in monorepo
cd d:\Amit\GIthubPublic\SDK
git checkout -b fix/fall-detection-accuracy
# Edit projects/android-fall-detection-sdk/src/main/kotlin/...
git add .
git commit -m "Improve fall detection ML model accuracy"

# 2. Create PR, get reviewed, merge to main
git push origin fix/fall-detection-accuracy
# Create PR on GitHub, get approved
# Merge to main

# 3. Create release
git checkout main
git pull origin main
git tag v1.0.1
git push origin v1.0.1
```

**Automatic actions:**

```
Within 60 seconds:
  ✅ Mirror workflow runs
     - Syncs all 23 SDKs to individual repos
     - Updates https://github.com/YOUR_ORG/android-fall-detection-sdk

Within 5 minutes:
  ✅ Publish workflow runs
     - Builds and tests all SDKs
     - Publishes to registries:
       - npm: @your-org/api-contract-drift-detector@1.0.1 ... (15 packages)
       - Maven: io.github.amitgaikwad2837:android-fall-detection-sdk:1.0.1 ... (8 packages)

Your users can now:
  $ npm install @your-org/api-contract-drift-detector@1.0.1
  # or
  implementation 'io.github.amitgaikwad2837:android-fall-detection-sdk:1.0.1'
```

---

## SDK Installation Examples

### After First Release (v1.0.0)

#### Web SDK Users

```javascript
// Install
npm install @your-org/api-contract-drift-detector

// Use
import { runCore } from '@your-org/api-contract-drift-detector';

const result = runCore({
  openapi: '/path/to/openapi.yaml',
  backend: '/path/to/backend.yaml'
});
```

#### Android SDK Users

```kotlin
// Add to build.gradle.kts
dependencies {
    implementation("io.github.amitgaikwad2837:android-emergency-sos-sdk:1.0.0")
}

// Use
import com.sdk.sos.EmergencySOSSDK

EmergencySOSSDK.initialize(config)
    .onSuccess { startMonitoring() }
    .onError { Log.e("SOS", it.message) }
```

---

## Repository Structure After Mirroring

### Individual Repository: `api-contract-drift-detector`

```
api-contract-drift-detector/
├── src/
│   ├── adapters/
│   ├── core/
│   ├── types.ts
│   └── index.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docs/
├── examples/
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── README.md
├── LICENSE
└── .github/workflows/
    └── publish-npm.yml
```

### Individual Repository: `android-emergency-sos-sdk`

```
android-emergency-sos-sdk/
├── src/main/kotlin/
│   └── com/sdk/sos/
│       ├── EmergencySOSSDK.kt
│       ├── SOSManager.kt
│       └── types/
├── src/test/kotlin/
│   └── com/sdk/sos/
│       └── EmergencySOSSDKTest.kt
├── build.gradle.kts
├── settings.gradle.kts
├── proguard-rules.pro
├── README.md
├── LICENSE
└── .github/workflows/
    └── publish-maven.yml
```

---

## Rollback & Version Management

### Semantic Versioning

```
v1.0.0      v1.0.1      v1.1.0      v2.0.0
  |           |           |           |
  └─ Initial  └─ Bug fix  └─ Feature  └─ Major change
```

### Publishing Previous Version

```bash
# If v1.0.1 had a bug, create patch
git tag v1.0.2
git push origin v1.0.2
# Automatically publishes v1.0.2 to all registries

# Users can pin to specific version:
npm install @your-org/api-contract-drift-detector@1.0.0
```

---

## Monitoring Publishing

### npm Registry

```bash
# Check all published packages
https://www.npmjs.com/org/your-org

# Check specific package
https://www.npmjs.com/package/@your-org/api-contract-drift-detector

# Check version history
npm view @your-org/api-contract-drift-detector versions
```

### Maven Central

```bash
# Search all published packages
https://central.sonatype.com/search?q=io.github.amitgaikwad2837

# Check specific package
https://central.sonatype.com/artifact/io.github.amitgaikwad2837/android-emergency-sos-sdk
```

### GitHub Actions

```bash
# Watch workflows
https://github.com/YOUR_ORG/SDK/actions

# Check individual SDK repo
https://github.com/YOUR_ORG/api-contract-drift-detector/actions
```

---

## Summary of Files Created

| File | Purpose |
|------|---------|
| `DISTRIBUTION_GUIDE.md` | Comprehensive guide with all options |
| `SETUP_DISTRIBUTION.md` | Quick setup checklist (5-20 min) |
| `.github/workflows/mirror-sdks.yml` | Auto-mirrors subfolders to repos |
| `.github/workflows/publish-web-sdks.yml` | Auto-publishes web SDKs to npm |
| `.github/workflows/publish-android-sdks.yml` | Auto-publishes Android SDKs to Maven |
| `scripts/setup-distribution.ps1` | PowerShell setup automation |

---

## Next: Quick Start

1. Follow **SETUP_DISTRIBUTION.md** for 5-20 minutes
2. Create GitHub repos (manual or automated)
3. Configure npm tokens and Sonatype credentials
4. Push tag `v1.0.0`
5. Watch workflows publish packages

Done! 🚀
