package com.sdk.accessibility

import org.junit.Test
import kotlin.test.assertEquals

class AccessibilityAssistantSDKTest {
    @Test
    fun testAccessibilityConfig() {
        val config = AccessibilityConfig(
            enableVoiceNavigation = true,
            voiceSpeed = 1.5f,
            language = "en-US"
        )
        
        assertEquals(true, config.enableVoiceNavigation)
        assertEquals(1.5f, config.voiceSpeed)
    }

    @Test
    fun testAccessibleElement() {
        val element = AccessibleElement(
            id = "elem-123",
            type = "Button",
            text = "Submit",
            isClickable = true
        )
        
        assertEquals("Submit", element.text)
        assertEquals(true, element.isClickable)
    }

    @Test
    fun testAccessibilityScore() {
        val score = AccessibilityScore(
            wcagLevel = "AAA",
            readabilityScore = 0.95f
        )
        
        assertEquals("AAA", score.wcagLevel)
        assertEquals(0.95f, score.readabilityScore)
    }
}
