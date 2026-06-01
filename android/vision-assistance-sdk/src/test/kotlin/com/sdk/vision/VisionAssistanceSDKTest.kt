package com.sdk.vision

import org.junit.Test
import kotlin.test.assertEquals

class VisionAssistanceSDKTest {
    @Test
    fun testVisionConfig() {
        val config = VisionConfig(
            enableObjectDetection = true,
            enableVoiceFeedback = true,
            confidenceThreshold = 0.75f
        )
        
        assertEquals(true, config.enableObjectDetection)
        assertEquals(0.75f, config.confidenceThreshold)
    }

    @Test
    fun testDetectedObject() {
        val obj = DetectedObject(
            label = "Person",
            confidence = 0.98f,
            distance = 2.5f
        )
        
        assertEquals("Person", obj.label)
        assertEquals(0.98f, obj.confidence)
        assertEquals(2.5f, obj.distance)
    }

    @Test
    fun testObstacle() {
        val obstacle = Obstacle(
            type = "Door",
            distance = 1.5f,
            direction = "ahead"
        )
        
        assertEquals("Door", obstacle.type)
        assertEquals(1.5f, obstacle.distance)
    }
}
