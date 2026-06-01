pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "SDK"

include(
    ":android-ai-provider-core",
    ":android-emergency-sos-sdk",
    ":android-fall-detection-sdk",
    ":android-distress-detection-sdk",
    ":android-voice-assistant-sdk",
    ":android-ocr-explain-sdk",
    ":android-accessibility-assistant-sdk",
    ":android-vision-assistance-sdk"
)

project(":android-ai-provider-core").projectDir = file("projects/android-ai-provider-core")
project(":android-emergency-sos-sdk").projectDir = file("projects/android-emergency-sos-sdk")
project(":android-fall-detection-sdk").projectDir = file("projects/android-fall-detection-sdk")
project(":android-distress-detection-sdk").projectDir = file("projects/android-distress-detection-sdk")
project(":android-voice-assistant-sdk").projectDir = file("projects/android-voice-assistant-sdk")
project(":android-ocr-explain-sdk").projectDir = file("projects/android-ocr-explain-sdk")
project(":android-accessibility-assistant-sdk").projectDir = file("projects/android-accessibility-assistant-sdk")
project(":android-vision-assistance-sdk").projectDir = file("projects/android-vision-assistance-sdk")
