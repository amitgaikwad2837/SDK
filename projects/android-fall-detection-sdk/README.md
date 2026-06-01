# Android Fall Detection SDK

## Overview

Real-time fall detection for elderly and worker safety

## Installation

Add the Maven dependency once artifacts are published:

~~~kotlin
dependencies {
  implementation("io.github.amitgaikwad2837:android-fall-detection-sdk:1.0.0")
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
