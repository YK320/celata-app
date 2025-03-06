import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

type ScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

const VerificationCodeScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [code, setCode] = useState(['4', '8', '1', '2']);
  const maskedEmail = 'example@gmail.com';

  const handleResend = () => {
    // Implement resend logic here
    console.log('Resending code');
  };

  const handleSendBySMS = () => {
    // Implement SMS sending logic here
    console.log('Sending code by SMS');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Welcome back, Lahiru</Text>

        <Text style={styles.instructionText}>
          Enter the 4-digit code sent to you at{'\n'}
          <Text style={styles.emailText}>- {maskedEmail}</Text>
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <View key={index} style={styles.codeBox}>
              <Text style={styles.codeDigit}>{digit}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.tipText}>
          Tip: Be sure to check your inbox and spam folders
        </Text>

        <View style={styles.actionButtonContainer}>
          <TouchableOpacity style={styles.smsButton} onPress={handleSendBySMS}>
            <Text style={styles.smsButtonText}>Send code by SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
            <Text style={styles.resendButtonText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077c2',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  instructionText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    lineHeight: 24,
  },
  emailText: {
    fontWeight: 'bold',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeDigit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077c2',
  },
  tipText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 30,
    opacity: 0.8,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smsButton: {
    backgroundColor: '#ffeb3b',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  smsButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resendButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#0077c2',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default VerificationCodeScreen;