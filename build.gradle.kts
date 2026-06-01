import com.android.build.gradle.LibraryExtension
import org.gradle.api.publish.PublishingExtension
import org.gradle.api.publish.maven.MavenPublication
import org.gradle.plugins.signing.SigningExtension

plugins {
    id("com.android.library") version "8.4.2" apply false
    kotlin("android") version "1.9.23" apply false
    kotlin("kapt") version "1.9.23" apply false
    kotlin("plugin.serialization") version "1.9.23" apply false
    id("com.google.dagger.hilt.android") version "2.50" apply false
}

allprojects {
    group = "io.github.amitgaikwad2837"
    version = (findProperty("version") as String?) ?: "0.1.0-SNAPSHOT"
}

subprojects {
    plugins.withId("com.android.library") {
        pluginManager.apply("maven-publish")
        pluginManager.apply("signing")

        extensions.configure(LibraryExtension::class.java) {
            publishing {
                singleVariant("release") {
                    withSourcesJar()
                }
            }
        }

        afterEvaluate {
            extensions.configure(PublishingExtension::class.java) {
                publications {
                    create("release", MavenPublication::class.java) {
                        from(components.getByName("release"))
                        groupId = project.group.toString()
                        artifactId = project.name
                        version = project.version.toString()

                        pom {
                            name.set(project.name)
                            description.set("${project.name} Android SDK")
                            url.set("https://github.com/amitgaikwad2837/SDK")
                            licenses {
                                license {
                                    name.set("MIT License")
                                    url.set("https://opensource.org/licenses/MIT")
                                }
                            }
                            developers {
                                developer {
                                    id.set("amitgaikwad37")
                                    name.set("Amit Gaikwad")
                                }
                            }
                            scm {
                                connection.set("scm:git:https://github.com/amitgaikwad2837/SDK.git")
                                developerConnection.set("scm:git:ssh://git@github.com:amitgaikwad2837/SDK.git")
                                url.set("https://github.com/amitgaikwad2837/SDK")
                            }
                        }
                    }
                }

                repositories {
                    maven {
                        name = "CentralPortal"
                        url = uri("https://ossrh-staging-api.central.sonatype.com/service/local/staging/deploy/maven2/")
                        credentials {
                            username = System.getenv("CENTRAL_PORTAL_USERNAME") ?: System.getenv("SONATYPE_USERNAME")
                            password = System.getenv("CENTRAL_PORTAL_PASSWORD") ?: System.getenv("SONATYPE_PASSWORD")
                        }
                    }
                }
            }

            extensions.configure(SigningExtension::class.java) {
                val signingKey = System.getenv("SIGNING_KEY")
                val signingPassword = System.getenv("SIGNING_PASSWORD")
                if (!signingKey.isNullOrBlank() && !signingPassword.isNullOrBlank()) {
                    useInMemoryPgpKeys(signingKey, signingPassword)
                    sign(extensions.getByType(PublishingExtension::class.java).publications)
                }
            }
        }
    }
}
