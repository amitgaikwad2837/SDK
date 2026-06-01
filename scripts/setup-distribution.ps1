# SDK Distribution Setup Script
# This script helps set up GitHub repositories and configure publishing for all SDKs

param(
    [string]$GitHubOrg = "YOUR_ORG",
    [string]$GitHubToken = "",
    [string]$NpmToken = "",
    [Alias("SonatypeUsername")]
    [string]$CentralPortalUsername = "",
    [Alias("SonatypePassword")]
    [string]$CentralPortalPassword = "",
    [string]$SigningKey = "",
    [string]$SigningKeyId = "",
    [string]$SigningPassword = "",
    [switch]$SkipGitHub,
    [switch]$SkipSecrets
)

# Define all SDKs
$webSdks = @(
    "api-contract-drift-detector",
    "ai-powered-migration-generator",
    "api-mock-data-intelligence",
    "architecture-decision-record-generator",
    "database-query-explainer",
    "enterprise-readiness-scanner",
    "frontend-ux-linter",
    "openapi-full-stack-generator",
    "production-incident-copilot",
    "prompt-testing-framework",
    "pull-request-reviewer-agent",
    "readme-intelligence-sdk",
    "saas-boilerplate-analyzer",
    "screen-intelligence-sdk",
    "ai-sdk-internal-tools"
)

$androidSdks = @(
    "android-ai-provider-core",
    "android-emergency-sos-sdk",
    "android-fall-detection-sdk",
    "android-distress-detection-sdk",
    "android-voice-assistant-sdk",
    "android-ocr-explain-sdk",
    "android-accessibility-assistant-sdk",
    "android-vision-assistance-sdk"
)

$allSdks = $webSdks + $androidSdks

Write-Host "=== SDK Distribution Setup ===" -ForegroundColor Cyan
Write-Host "Organization: $GitHubOrg" -ForegroundColor Cyan
Write-Host "Total SDKs: $($allSdks.Count)" -ForegroundColor Cyan
Write-Host ""

# Step 1: Verify GitHub CLI
if (-not $SkipGitHub) {
    Write-Host "Checking GitHub CLI..." -ForegroundColor Yellow
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        Write-Host "ERROR: GitHub CLI not installed. Install from https://cli.github.com" -ForegroundColor Red
        exit 1
    }
    Write-Host "GitHub CLI found [OK]" -ForegroundColor Green
}

# Step 2: Create repositories
if (-not $SkipGitHub) {
    Write-Host ""
    Write-Host "Creating GitHub repositories..." -ForegroundColor Yellow
    
    foreach ($sdk in $allSdks) {
        Write-Host "  Creating $sdk..." -ForegroundColor Cyan
        gh repo create "$GitHubOrg/$sdk" --public --confirm 2>$null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "    (Repository may already exist or creation failed)" -ForegroundColor Gray
        }
    }
    Write-Host "Repository creation complete [OK]" -ForegroundColor Green
}

# Step 3: Add GitHub Secrets
if (-not $SkipSecrets) {
    Write-Host ""
    Write-Host "Adding secrets to repositories..." -ForegroundColor Yellow
    
    # npm token for web SDKs
    if ($NpmToken) {
        foreach ($sdk in $webSdks) {
            Write-Host "  Adding NPM_TOKEN to $sdk..." -ForegroundColor Cyan
            gh secret set NPM_TOKEN -b $NpmToken -R "$GitHubOrg/$sdk" 2>$null
            if ($LASTEXITCODE -ne 0) {
                Write-Host "    (Could not set secret)" -ForegroundColor Yellow
            }
        }
    }
    
    # Central Portal token credentials for Android SDKs
    if ($CentralPortalUsername -and $CentralPortalPassword) {
        foreach ($sdk in $androidSdks) {
            Write-Host "  Adding Central Portal credentials to $sdk..." -ForegroundColor Cyan

            gh secret set CENTRAL_PORTAL_USERNAME -b $CentralPortalUsername -R "$GitHubOrg/$sdk" 2>$null
            if ($LASTEXITCODE -ne 0) {
                Write-Host "    (Could not set CENTRAL_PORTAL_USERNAME)" -ForegroundColor Yellow
            }

            gh secret set CENTRAL_PORTAL_PASSWORD -b $CentralPortalPassword -R "$GitHubOrg/$sdk" 2>$null
            if ($LASTEXITCODE -ne 0) {
                Write-Host "    (Could not set CENTRAL_PORTAL_PASSWORD)" -ForegroundColor Yellow
            }

            # Backward-compatible aliases for existing build scripts
            gh secret set SONATYPE_USERNAME -b $CentralPortalUsername -R "$GitHubOrg/$sdk" 2>$null
            if ($LASTEXITCODE -ne 0) {
                Write-Host "    (Could not set SONATYPE_USERNAME compatibility secret)" -ForegroundColor Yellow
            }

            gh secret set SONATYPE_PASSWORD -b $CentralPortalPassword -R "$GitHubOrg/$sdk" 2>$null
            if ($LASTEXITCODE -ne 0) {
                Write-Host "    (Could not set SONATYPE_PASSWORD compatibility secret)" -ForegroundColor Yellow
            }

            if ($SigningKey) {
                gh secret set SIGNING_KEY -b $SigningKey -R "$GitHubOrg/$sdk" 2>$null
                if ($LASTEXITCODE -ne 0) {
                    Write-Host "    (Could not set SIGNING_KEY)" -ForegroundColor Yellow
                }
            }

            if ($SigningKeyId) {
                gh secret set SIGNING_KEY_ID -b $SigningKeyId -R "$GitHubOrg/$sdk" 2>$null
                if ($LASTEXITCODE -ne 0) {
                    Write-Host "    (Could not set SIGNING_KEY_ID)" -ForegroundColor Yellow
                }
            }

            if ($SigningPassword) {
                gh secret set SIGNING_PASSWORD -b $SigningPassword -R "$GitHubOrg/$sdk" 2>$null
                if ($LASTEXITCODE -ne 0) {
                    Write-Host "    (Could not set SIGNING_PASSWORD)" -ForegroundColor Yellow
                }
            }
        }
    }
    
    Write-Host "Secrets added [OK]" -ForegroundColor Green
}

# Step 4: Summary
Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Add GitHub Actions workflows to monorepo:"
Write-Host "   - .github/workflows/mirror-sdks.yml (mirror to individual repos)"
Write-Host "   - .github/workflows/publish-web-sdks.yml (npm publishing)"
Write-Host "   - .github/workflows/publish-android-sdks.yml (Maven publishing)"
Write-Host ""
Write-Host "2. Create first release:"
Write-Host "   git tag v1.0.0; git push origin v1.0.0"
Write-Host ""
Write-Host "3. Monitor publishing:"
Write-Host "   - npm: https://www.npmjs.com"
Write-Host "   - Maven: https://central.sonatype.com/publishing/deployments"
Write-Host ""
