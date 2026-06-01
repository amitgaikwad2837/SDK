package com.sdk.distress

import org.junit.Test
import kotlin.test.assertEquals

class DistressDetectionSDKTest {
    @Test
    fun testDistressDetectionConfigCreation() {
        val config = DistressDetectionConfig(
            enableScreamDetection = true,
            enableCryDetection = true,
            confidenceThreshold = 0.8f
        )
        
        assertEquals(true, config.enableScreamDetection)
        assertEquals(0.8f, config.confidenceThreshold)
    }

    @Test
    fun testDistressEventCreation() {
        val event = DistressEvent(
            id = "distress-123",
            timestamp = System.currentTimeMillis(),
            distressType = DistressType.SCREAM,
            confidence = 0.92f
        )
        
        assertEquals("distress-123", event.id)
        assertEquals(DistressType.SCREAM, event.distressType)
        assertEquals(0.92f, event.confidence)
    }
}
