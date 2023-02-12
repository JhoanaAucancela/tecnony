export default {
    expo: {
        extra: {
            eas: {
                projectId: "da044388-8e36-47d8-9cf0-76a0c1d64e2f"
            }
        },
        name: "Tecnony",
        slug: "Tecnony",
        version: "2.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          
        },
        updates: {
          "fallbackToCacheTimeout": 0
        },
        assetBundlePatterns: [
          "**/*"
        ],
        ios: {
          supportsTablet: true
        },
        android: {
            package:'com.tecnony',
          adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#FFFFFF"

          }
        },
      }
    }
