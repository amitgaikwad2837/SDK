# Android SDKs - Complete Suite

Production-grade Android SDKs solving real-world problems for safety, accessibility, elderly-care, and productivity.

## Overview

This monorepo contains 7 specialized Android SDKs + 1 shared AI provider framework, built with:

- **Kotlin First** - Modern, null-safe Kotlin with coroutines
- **Clean Architecture** - Layered design with separation of concerns
- **SOLID Principles** - Interface-driven, modular, extensible
- **AndroidX & Jetpack** - Modern Android components
- **Dependency Injection** - Hilt for compile-time DI
- **Pluggable AI Providers** - Support for local and cloud AI backends

## Modules

### Shared Foundation
- **ai-provider-core** - Pluggable AI provider architecture (ChatProvider, VisionProvider, OCRProvider, SpeechProvider, etc.)

### Safety & Emergency
- **emergency-sos-sdk** - Fast emergency response with manual, gesture, and voice triggers
- **fall-detection-sdk** - Real-time fall detection for elderly and worker safety
- **distress-detection-sdk** - Audio-based distress detection (scream, cry, panic)

### Intelligence & Productivity
- **voice-assistant-sdk** - Offline-first voice assistant with multi-provider AI support
- **ocr-explain-sdk** - Extract, clean, and explain information from documents and images
- **accessibility-assistant-sdk** - Screen explanation and voice-guided navigation for elderly users
- **vision-assistance-sdk** - Real-time vision assistance for visually impaired users

## Quick Start

### 1. Clone the Repository
```bash
git clone <repo-url>
cd android-sdks
```

### 2. Build All Modules
```bash
./gradlew build
```

### 3. Run Tests
```bash
./gradlew test
```

### 4. Use an SDK in Your App

Example: Emergency SOS SDK

```kotlin
import com.sdk.sos.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setupEmergencySDK()
    }

    private suspend fun setupEmergencySDK() {
        val config = SOSConfig(
            enableShakeDetection = true,
            enableVoiceDetection = true,
            countdownSeconds = 5
        )
        
        EmergencySOSSDK.initialize(config)
        EmergencySOSSDK.startMonitoring()
        
        // Listen to SOS events
        EmergencySOSSDK.observeEvents().collect { event ->
            if (event != null) {
                handleSOS(event)
            }
        }
    }

    private fun handleSOS(event: SOSEvent) {
        // Notify emergency contacts
        // Log location
        // etc.
    }
}
```

## Module Structure

Each SDK follows Clean Architecture with these layers:

```
sdk-api/           # Public API, data structures
├── types.kt       # Domain models, configuration
├── SDK.kt         # Main singleton SDK interface

domain/            # Business logic
├── use-cases/     # Core functionality
├── models/        # Domain models
└── repositories/  # Repository interfaces

data/              # Data layer
├── repositories/  # Repository implementations
├── sources/       # Data sources (APIs, local, etc.)
└── mappers/       # DTO to domain model conversion

platform/          # Android-specific implementations
├── sensors/       # Sensor handling
├── location/      # GPS/location services
├── audio/         # Audio processing
└── sensors/       # Camera, accelerometer, etc.

core/              # Cross-cutting concerns
├── di/            # Dependency injection
├── config/        # Configuration
├── events/        # Event streaming
└── logging/       # Logging utilities
```

## AI Provider Framework

All AI-enabled SDKs support a pluggable provider architecture.

### Supported Providers

#### Local AI (Offline)
- MLC LLM (Gemma, Qwen, Phi models)
- llama.cpp

#### Cloud Providers
- OpenAI (GPT-5, GPT-5 Mini)
- Google Gemini (Gemini 2.5 Pro, Gemini Flash)
- Anthropic Claude (Sonnet, Opus)
- Ollama
- OpenRouter
- Hugging Face

#### Custom Providers
Implement `ChatProvider`, `VisionProvider`, `OCRProvider`, etc. with custom REST APIs.

### Example: Using Different AI Providers

```kotlin
// Use local AI (offline)
val localProvider = LocalAIProvider(context, Model.GEMMA)

// Use OpenAI
val openaiProvider = OpenAIProvider(apiKey)

// Use Gemini
val geminiProvider = GeminiProvider(apiKey)

// Use custom endpoint
val customProvider = CustomProvider("https://api.example.com")

// Initialize with your provider
VoiceAssistantSDK.initialize(config, openaiProvider)
OCRExplainSDK.initialize(config, geminiProvider)
AccessibilityAssistantSDK.initialize(config, customProvider)
```

## Security

All SDKs follow Android security best practices:

- **Sensitive Data Encryption** - Android Keystore for secrets
- **EncryptedSharedPreferences** - For local storage
- **No Plaintext Storage** - All sensitive data encrypted
- **Minimal Permissions** - Least-privilege principle
- **API Key Management** - Host app provides credentials (SDK doesn't store)

## Performance

Optimized for:
- **Battery Usage** - Minimal background processing
- **Memory** - Efficient data structures, streaming
- **CPU** - Async processing with coroutines
- **Startup Time** - Lazy initialization
- **Background** - WorkManager for deferred tasks

## Testing

Each SDK includes:
- **Unit Tests** - Core logic testing with JUnit
- **Integration Tests** - End-to-end flows
- **Test Fixtures** - Mock data and fake repositories
- **Mock Implementations** - MockK for easy mocking

**Coverage Goal:** 80%+

## Dependency Management

### Dependencies Used

**Kotlin & Coroutines**
- `org.jetbrains.kotlin:kotlin-stdlib`
- `org.jetbrains.kotlinx:kotlinx-coroutines-android`

**Android**
- `androidx.core:core-ktx`
- `androidx.appcompat:appcompat`
- `androidx.work:work-runtime-ktx`
- `androidx.camera:camera-*`

**Dependency Injection**
- `com.google.dagger:hilt-android`

**Machine Learning**
- `org.tensorflow:tensorflow-lite`

**Networking**
- `com.squareup.okhttp3:okhttp`

**Utilities**
- `com.jakewharton.timber:timber` (Logging)
- `org.jetbrains.kotlinx:kotlinx-serialization-json`

See each module's `build.gradle.kts` for full dependency list.

## Gradle Build System

All modules use **Gradle 8.2.0** with:

- **Android Gradle Plugin 8.2.0**
- **Kotlin 1.9.23**
- **Hilt 2.50**

### Building Specific Modules

```bash
# Build a single module
./gradlew :emergency-sos-sdk:build

# Run tests for a module
./gradlew :fall-detection-sdk:test

# Assemble AAR
./gradlew :voice-assistant-sdk:assembleDebug
```

## Publishing to Maven Central

Each SDK is configured for publication to Maven Central.

**Coordinates:**
```
groupId: com.sdk.android
artifactId: emergency-sos
version: 1.0.0

groupId: com.sdk.android
artifactId: fall-detection
version: 1.0.0

... (etc. for all 7 SDKs)
```

## API Reference

### Emergency SOS SDK

```kotlin
// Initialize
EmergencySOSSDK.initialize(config)

// Manual SOS
EmergencySOSSDK.triggerSOS(reason)

// Monitoring
EmergencySOSSDK.startMonitoring()
EmergencySOSSDK.stopMonitoring()

// Events & Contacts
EmergencySOSSDK.observeEvents()
EmergencySOSSDK.addEmergencyContact(contact)
```

### Fall Detection SDK

```kotlin
// Start/Stop
FallDetectionSDK.start(config)
FallDetectionSDK.stop()

// Events
FallDetectionSDK.events()

// Status
FallDetectionSDK.currentStatus()
```

### Voice Assistant SDK

```kotlin
// Initialize
VoiceAssistantSDK.initialize(config, aiProvider)

// Listen & Process
VoiceAssistantSDK.listen()
VoiceAssistantSDK.processCommand(audioData)

// Events
VoiceAssistantSDK.observeEvents()
```

### OCR Explain SDK

```kotlin
// Initialize
OCRExplainSDK.initialize(config, aiProvider)

// Scan & Extract
OCRExplainSDK.scan()
OCRExplainSDK.extract(imageData)

// Analyze
OCRExplainSDK.summarize(text)
OCRExplainSDK.analyze(text, context)
```

### (See individual SDK READMEs for full API reference)

## Architecture Decision Records (ADRs)

Each SDK includes ADRs documenting:
- Architectural decisions and rationale
- Technology choices
- Trade-offs
- Alternative approaches considered

## Configuration

All SDKs support builder pattern configuration:

```kotlin
val config = SOSConfig(
    enableShakeDetection = true,
    enableVoiceDetection = false,
    countdownSeconds = 5,
    enableGPSCollection = true
)

EmergencySOSSDK.initialize(config)
```

## Event Streaming

All SDKs use Kotlin Flow for event observation:

```kotlin
// Observe events
EmergencySOSSDK.observeEvents().collect { event ->
    if (event != null) {
        // Handle event
    }
}

// With filtering
FallDetectionSDK.events()
    .filter { it?.confidence ?: 0f > 0.8f }
    .collect { event ->
        // Handle high-confidence falls
    }
```

## Logging

Built-in logging using Timber:

```kotlin
import timber.log.Timber

Timber.d("Debug message")
Timber.e(exception, "Error occurred")
Timber.i("Info message")
```

Configure in your app:

```kotlin
if (BuildConfig.DEBUG) {
    Timber.plant(Timber.DebugTree())
}
```

## Permissions Required

Varies by SDK. Examples:

**Emergency SOS SDK:**
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
```

**Fall Detection SDK:**
```xml
<uses-permission android:name="android.permission.SENSORS" />
<uses-permission android:name="android.permission.INTERNET" />
```

**Distress Detection SDK:**
```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
```

Consult individual SDK documentation for complete permission list.

## Troubleshooting

### SDK Not Initializing
- Ensure all dependencies are installed: `./gradlew build`
- Check that required permissions are declared in AndroidManifest.xml
- Verify Hilt is properly configured in your Activity/Fragment

### Events Not Flowing
- Make sure to call `startMonitoring()` before observing events
- Check that observers are collected in a coroutine scope (e.g., `lifecycleScope.launch`)

### AI Provider Not Working
- Verify API keys or endpoint URLs are correctly configured
- Ensure network connectivity for cloud providers
- Check that local AI models are properly downloaded/initialized

## Contributing

This is an open-source project maintained for production use. Contributions welcome!

See CONTRIBUTING.md for guidelines.

## License

[TBD - Choose appropriate license]

## Support

For issues, feature requests, or questions:
- GitHub Issues: [link]
- Documentation: [link]
- Email: [support email]

---

**Build Date:** May 2026
**Status:** Active Development
**Target Audience:** Android Developers, Accessibility Specialists, IoT/Wearable Developers
