package com.sdk.voice

import org.junit.Test
import kotlin.test.assertEquals

class VoiceAssistantSDKTest {
    @Test
    fun testVoiceAssistantConfig() {
        val config = VoiceAssistantConfig(
            enableWakeWord = true,
            wakeWord = "Hello Assistant",
            language = "en-US"
        )
        
        assertEquals("Hello Assistant", config.wakeWord)
        assertEquals("en-US", config.language)
    }

    @Test
    fun testCommandResult() {
        val result = CommandResult(
            id = "cmd-123",
            transcript = "turn on the lights",
            intent = "turn_on",
            confidence = 0.95f,
            params = mapOf("device" to "lights")
        )
        
        assertEquals("cmd-123", result.id)
        assertEquals("turn_on", result.intent)
        assertEquals("lights", result.params["device"])
    }

    @Test
    fun testAssistantEvent() {
        val event = AssistantEvent(
            id = "event-123",
            timestamp = System.currentTimeMillis(),
            type = AssistantEventType.COMMAND_RECOGNIZED
        )
        
        assertEquals(AssistantEventType.COMMAND_RECOGNIZED, event.type)
    }
}
