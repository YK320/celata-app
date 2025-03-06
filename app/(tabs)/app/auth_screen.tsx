import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";

const AuthScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./../assets/background_images.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.card}>
            <Text style={styles.headerText}>Enter your mobile number</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Mobile number"
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  keyboardType="phone-pad"
                />
                <Image
                  source={require("./../assets/phone-icon.png")}
                  style={styles.phoneIcon}
                />
              </View>
            </View>

            <Link href="/verification_mobile" asChild>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.buttonText}>Continue</Text>
                <View style={styles.arrowCircle}>
                  <Text style={styles.arrowText}>→</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <View style={styles.dividerCircle}>
                <Text style={styles.dividerText}>or</Text>
              </View>
              <View style={styles.divider} />
            </View>
            
            <Link href="/verification_email" asChild>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("./../assets/google-icon.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            </Link>

            <Link href="/verification_email" asChild>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("./../assets/facebook-icon.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
            </Link>

            <Link href="/verification_email" asChild>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("./../assets/email-icon.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Email</Text>
            </TouchableOpacity>
            </Link>
            
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <View style={styles.dividerCircle}>
                <Text style={styles.dividerText}>or</Text>
              </View>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.findAccountButton}>
              <Image
                source={require("./../assets/search-icon.png")}
                style={styles.searchIcon}
              />
              <Text style={styles.findAccountText}>Find Account</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "transparent",
    borderRadius: 25,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputLabel: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#333",
  },
  phoneIcon: {
    width: 24,
    height: 24,
  },
  continueButton: {
    backgroundColor: "#ffcc00",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 30,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  arrowCircle: {
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowText: {
    color: "#333",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  dividerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  dividerText: {
    color: "#333",
    fontSize: 12,
  },
  socialButton: {
    backgroundColor: "#ffcc00",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  socialButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
  },
  findAccountButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: "white",
  },
  findAccountText: {
    color: "white",
    fontSize: 14,
  },
});

export default AuthScreen;
