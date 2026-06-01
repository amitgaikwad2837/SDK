package com.sdk.ocr

import org.junit.Test
import kotlin.test.assertEquals

class OCRExplainSDKTest {
    @Test
    fun testOCRConfig() {
        val config = OCRConfig(
            language = "eng",
            enableStructuredExtraction = true
        )
        
        assertEquals("eng", config.language)
        assertEquals(true, config.enableStructuredExtraction)
    }

    @Test
    fun testExtractionResult() {
        val result = ExtractionResult(
            id = "extract-123",
            rawText = "Hello World",
            cleanedText = "Hello World",
            confidence = 0.99f
        )
        
        assertEquals("extract-123", result.id)
        assertEquals("Hello World", result.rawText)
        assertEquals(0.99f, result.confidence)
    }

    @Test
    fun testEntity() {
        val entity = Entity(
            type = "PERSON",
            value = "John Doe",
            confidence = 0.95f
        )
        
        assertEquals("PERSON", entity.type)
        assertEquals("John Doe", entity.value)
    }
}
