package com.sdk.sos

import kotlinx.coroutines.test.runTest
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

class EmergencySOSSDKTest {
    @Test
    fun testSOSConfigCreation() {
        val config = SOSConfig(
            enableShakeDetection = true,
            enableVoiceDetection = false,
            countdownSeconds = 3
        )
        
        assertEquals(true, config.enableShakeDetection)
        assertEquals(false, config.enableVoiceDetection)
        assertEquals(3, config.countdownSeconds)
    }

    @Test
    fun testSOSEventCreation() {
        val event = SOSEvent(
            id = "test-sos",
            timestamp = System.currentTimeMillis(),
            triggerType = TriggerType.MANUAL,
            reason = "Test trigger"
        )
        
        assertEquals("test-sos", event.id)
        assertEquals(TriggerType.MANUAL, event.triggerType)
        assertEquals("Test trigger", event.reason)
    }

    @Test
    fun testEmergencyContactCreation() {
        val contact = EmergencyContact(
            id = "contact-1",
            name = "John Doe",
            phoneNumber = "+1234567890",
            isPrimary = true
        )
        
        assertEquals("John Doe", contact.name)
        assertEquals("+1234567890", contact.phoneNumber)
        assertEquals(true, contact.isPrimary)
    }

    @Test
    fun testLocationCreation() {
        val location = Location(
            latitude = 40.7128,
            longitude = -74.0060,
            accuracy = 10f
        )
        
        assertEquals(40.7128, location.latitude)
        assertEquals(-74.0060, location.longitude)
        assertEquals(10f, location.accuracy)
    }
}
