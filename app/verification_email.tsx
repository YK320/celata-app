import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';

type ScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

const VerificationEmailScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>What is your email address?</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>✉️</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Link href="/auth_screen" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Previous</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/verification_email1" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Next</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077c2',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 30,
    height: 50,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
  iconText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#0077c2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 5,
    color: '#0077c2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#ffeb3b',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VerificationEmailScreen;