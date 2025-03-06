import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as ExpSplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
ExpSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // Hide the native Expo splash screen
      ExpSplashScreen.hideAsync();

      // If showing our custom splash, set a timer to navigate to auth_screen
      if (showCustomSplash) {
        const timer = setTimeout(() => {
          setShowCustomSplash(false);
          router.replace("/auth_screen"); // Navigate to auth_screen
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
      }
    }
  }, [loaded, showCustomSplash, router]);

  // Show custom splash screen
  if (showCustomSplash && loaded) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../assets/flash_screen.png")}
          style={styles.splashImage}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/logo.png")}
          style={styles.splashImage1}
          resizeMode="contain"
        />
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </View>
    );
  }

  // Return null if fonts aren't loaded
  if (!loaded) {
    return null;
  }

  // Regular app layout
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth_screen" options={{ headerShown: false }} />
        <Stack.Screen
          name="VerificationMobile" 
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="VerificationEmail" 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Change to match your splash screen background
  },
  splashImage: {
    width: width * 0.8,
    height: height * 0.4,
  },
  splashImage1: {
    width: width * 0.4,
    height: height * 0.2,
  },
});