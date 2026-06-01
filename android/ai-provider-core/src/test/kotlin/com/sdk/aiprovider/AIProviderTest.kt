package com.sdk.aiprovider

import com.sdk.aiprovider.api.*
import kotlinx.coroutines.test.runTest
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class AIProviderTest {
    @Test
    fun testProviderRegistry() {
        val registry = AIProviderRegistry(android.app.Application())
        
        // Test empty state
        assertTrue(registry.getAvailableProviders().isEmpty())
        
        // Test registering a provider
        val mockProvider = object : AIProvider {
            override suspend fun isAvailable() = true
            override suspend fun initialize() {}
            override suspend fun shutdown() {}
            override fun getMetadata() = ProviderMetadata(
                id = "test-provider",
                name = "Test Provider",
                version = "1.0.0",
                isLocal = true,
                supportsStreaming = false
            )
        }
        
        registry.registerProvider("test", mockProvider)
        assertEquals(1, registry.getAvailableProviders().size)
        
        // Test getting active provider
        val active = registry.getActiveProvider()
        assertEquals("test-provider", active?.getMetadata()?.id)
    }

    @Test
    fun testResultType() {
        val successResult: Result<String> = Result.Success("test")
        assertEquals("test", successResult.getOrNull())
        assertTrue(successResult.isSuccess())

        val errorResult: Result<String> = Result.Error(Exception("error"))
        assertTrue(errorResult.isError())
    }

    @Test
    fun testProviderMetadata() {
        val metadata = ProviderMetadata(
            id = "test",
            name = "Test Provider",
            version = "1.0.0",
            isLocal = true,
            supportsStreaming = true,
            capabilityFlags = setOf(ProviderCapability.CHAT, ProviderCapability.VISION)
        )
        
        assertEquals("test", metadata.id)
        assertTrue(metadata.capabilityFlags.contains(ProviderCapability.CHAT))
    }
}
