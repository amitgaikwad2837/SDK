# Android Fall Detection SDK

## 📦 Registry & Repository

- **Maven Central**: [io.github.amitgaikwad2837:android-fall-detection-sdk](https://central.sonatype.com/artifact/io.github.amitgaikwad2837/android-fall-detection-sdk)
- **GitHub**: [amitgaikwad2837/android-fall-detection-sdk](https://github.com/amitgaikwad2837/android-fall-detection-sdk)

## Overview

Real-time fall detection using device accelerometer data. Automatically triggers alerts and notifications when falls are detected, with high accuracy and low false positives. Ideal for elderly care and worker safety applications.

## Installation

Add the Maven dependency:

~~~kotlin
dependencies {
  implementation("io.github.amitgaikwad2837:android-fall-detection-sdk:0.0.9")
}
~~~

## Integration Example

~~~kotlin
import com.sdk.falldetection.FallDetectionSDK

class ExampleUsage {
    fun setup() {
        val sdk = FallDetectionSDK()
        // Configure and call SDK APIs here based on your app flow.
    }
}
~~~

## Feature Highlights

- accelerometer-monitoring
- gyroscope-monitoring
- impact-detection
- immobility-detection
- ml-scoring
- event-streaming

## Android Permissions

- SENSORS
- INTERNET

## Development

~~~bash
./gradlew build
./gradlew test
~~~

## License

MIT
