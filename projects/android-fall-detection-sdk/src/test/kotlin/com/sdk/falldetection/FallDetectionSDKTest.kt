package com.sdk.falldetection

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

    @Test
    fun testFallDetectionConfigDefaults() {
        val config = FallDetectionConfig()
        assertEquals(SensitivityLevel.NORMAL, config.sensitivityLevel)
        assertEquals(true, config.enableAccelerometer)
        assertEquals(true, config.enableGyroscope)
        assertEquals(true, config.enableMLModel)
    }

    @Test
    fun testSensitivityLevelValues() {
        assertEquals(3, SensitivityLevel.values().size)
        assertTrue(SensitivityLevel.values().contains(SensitivityLevel.LOW))
        assertTrue(SensitivityLevel.values().contains(SensitivityLevel.NORMAL))
        assertTrue(SensitivityLevel.values().contains(SensitivityLevel.HIGH))
    }

    @Test
    fun testFallEventConfidence() {
        val event = FallEvent(
            id = "fall-1",
            timestamp = System.currentTimeMillis(),
            confidence = 0.95f,
            impactForce = 30f,
            userResponsive = true
        )
        
        assertTrue(event.confidence in 0f..1f)
        assertEquals(0.95f, event.confidence)
    }

    @Test
    fun testFallLocationCoordinates() {
        val location = FallLocation(x = 1f, y = 2f, z = 3f)
        assertEquals(1f, location.x)
        assertEquals(2f, location.y)
        assertEquals(3f, location.z)
    }

    @Test
    fun testFallDetectionConfigSensitivityLevels() {
        val lowConfig = FallDetectionConfig(sensitivityLevel = SensitivityLevel.LOW)
        val normalConfig = FallDetectionConfig(sensitivityLevel = SensitivityLevel.NORMAL)
        val highConfig = FallDetectionConfig(sensitivityLevel = SensitivityLevel.HIGH)
        
        assertEquals(SensitivityLevel.LOW, lowConfig.sensitivityLevel)
        assertEquals(SensitivityLevel.NORMAL, normalConfig.sensitivityLevel)
        assertEquals(SensitivityLevel.HIGH, highConfig.sensitivityLevel)
    }
}
