rootProject.name = "android-sdks"

include(":ai-provider-core")
include(":emergency-sos-sdk")
include(":fall-detection-sdk")
include(":distress-detection-sdk")
include(":voice-assistant-sdk")
include(":ocr-explain-sdk")
include(":accessibility-assistant-sdk")
include(":vision-assistance-sdk")

project(":ai-provider-core").projectDir = file("ai-provider-core")
project(":emergency-sos-sdk").projectDir = file("emergency-sos-sdk")
project(":fall-detection-sdk").projectDir = file("fall-detection-sdk")
project(":distress-detection-sdk").projectDir = file("distress-detection-sdk")
project(":voice-assistant-sdk").projectDir = file("voice-assistant-sdk")
project(":ocr-explain-sdk").projectDir = file("ocr-explain-sdk")
project(":accessibility-assistant-sdk").projectDir = file("accessibility-assistant-sdk")
project(":vision-assistance-sdk").projectDir = file("vision-assistance-sdk")
