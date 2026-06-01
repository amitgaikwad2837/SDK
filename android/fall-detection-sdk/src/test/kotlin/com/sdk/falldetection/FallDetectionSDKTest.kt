package com.sdk.falldetection

import kotlinx.coroutines.test.runTest
import org.junit.Test
import kotlin.test.assertEquals

class FallDetectionSDKTest {
    @Test
    fun testFallDetectionConfigCreation() {
        val config = FallDetectionConfig(
            sensitivityLevel = SensitivityLevel.HIGH,
            impactThreshold = 25f
        )
        
        assertEquals(SensitivityLevel.HIGH, config.sensitivityLevel)
        assertEquals(25f, config.impactThreshold)
        assertEquals(true, config.enableMLModel)
    }

    @Test
    fun testFallEventCreation() {
        val event = FallEvent(
            id = "fall-123",
            timestamp = System.currentTimeMillis(),
            confidence = 0.95f,
            impactForce = 30f,
            userResponsive = true
        )
        
        assertEquals("fall-123", event.id)
        assertEquals(0.95f, event.confidence)
        assertEquals(30f, event.impactForce)
    }

    @Test
    fun testFallDetectionStatus() {
        val status = FallDetectionStatus(
            isMonitoring = true,
            accelerometerAvailable = true,
            gyroscopeAvailable = true,
            mlModelLoaded = true
        )
        
        assertEquals(true, status.isMonitoring)
        assertEquals(true, status.accelerometerAvailable)
    }
}
