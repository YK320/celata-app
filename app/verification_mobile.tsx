import React, { useState, useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StatusBar,
  Dimensions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { router } from 'expo-router'; // Import router from expo-router

interface VerificationScreenProps {
  phoneNumber?: string;
  onVerify?: (code: string) => void;
  onResend?: () => void;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({ 
  phoneNumber = '07023145651', 
  onVerify, 
  onResend 
}) => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    // Set a timeout to navigate to the HomeScreen after 5 seconds
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home'); // Use router.replace to navigate
    }, 5000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCodeChange = (text: string, index: number): void => {
    if (text.length > 1) {
      text = text[text.length - 1];
    }
    
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    
    // Auto-focus next input
    if (text !== '' && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if code is complete
    if (newCode.join('').length === 4 && onVerify) {
      // Optional: automatically submit code
      // onVerify(newCode.join(''));
    }
  };
  
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>, 
    index: number
  ): void => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <LinearGradient
      colors={['#0070B8', '#004C7A']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0070B8" />
      
      <View style={styles.content}>
        <Text style={styles.title}>
          Enter the 4-digit code sent to you
        </Text>
        <Text style={styles.phoneText}>
          at <Text style={styles.phoneHighlight}>~ {phoneNumber}</Text>
        </Text>
        
        <View style={styles.codeContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              ref={(ref: TextInput | null) => {
                inputRefs.current[index] = ref;
              }}
              style={styles.codeInput}
              value={code[index]}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>
        
        <TouchableOpacity 
          style={styles.resendButton}
          onPress={onResend}
        >
          <Text style={styles.resendText}>I didn't receive a code (R26)</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  phoneText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
  },
  phoneHighlight: {
    fontWeight: 'bold',
    color: '#FFEB3B',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 50,
  },
  codeInput: {
    backgroundColor: '#FFFFFF',
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 8,
    color: '#000000',
  },
  resendButton: {
    backgroundColor: '#FFEB3B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  resendText: {
    color: '#006EB5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;