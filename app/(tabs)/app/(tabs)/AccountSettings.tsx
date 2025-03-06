import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

// BottomTab component with forwardRef
interface BottomTabProps {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  isActive: boolean;
  onPress?: () => void;
}

const BottomTab = forwardRef<React.ElementRef<typeof TouchableOpacity>, BottomTabProps>(
  ({ name, icon, isActive, onPress }, ref) => (
    <TouchableOpacity
      ref={ref}
      style={styles.tabItem}
      onPress={onPress}
    >
      {isActive ? (
        <View style={styles.activeTabCircle}>
          <Ionicons name={icon} size={24} color="white" />
        </View>
      ) : (
        <Ionicons name={icon} size={24} color="#999" />
      )}
      <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
        {name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
);

const AccountSettingsScreen = () => {
  const [activeTab, setActiveTab] = useState('account');
  const router = useRouter();
  
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('0783451231');
  const [email, setEmail] = useState('kumara@gmail.com');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Text style={styles.headerTitle}>Account Settings</Text>
        </TouchableOpacity>
      </View>
      
      {/* Profile Information */}
      <View style={styles.profileInfo}>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>K.R.K. Kumara</Text>
          <Text style={styles.profileEmail}>{email}</Text>
          <Text style={styles.profilePhone}>{mobileNumber}</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.editIconContainer}>
            <Ionicons name="camera-outline" size={14} color="#0066cc" />
          </View>
        </View>
      </View>
      
      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
            />
            <Ionicons name="person-outline" size={20} color="#999" />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Old Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={oldPassword}
              onChangeText={setOldPassword}
              secureTextEntry
              placeholder="Enter old password"
            />
            <Ionicons name="eye-off-outline" size={20} color="#999" />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              placeholder="Enter new password"
            />
            <Ionicons name="eye-off-outline" size={20} color="#999" />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Mobile Number</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
              placeholder="Enter mobile number"
            />
            <Ionicons name="call-outline" size={20} color="#999" />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter email address"
            />
            <Ionicons name="mail-outline" size={20} color="#999" />
          </View>
        </View>
        
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Link href="/home" asChild>
          <BottomTab 
            name="Files" 
            icon="folder-outline" 
            isActive={activeTab === 'files'} 
            onPress={() => setActiveTab('files')}
          />
        </Link>
        
        <Link href="/home" asChild>
          <BottomTab 
            name="Home" 
            icon="home" 
            isActive={activeTab === 'home'} 
            onPress={() => setActiveTab('home')}
          />
        </Link>
        
        <Link href="/AccountSettings" asChild>
          <BottomTab 
            name="Account" 
            icon="settings-outline" 
            isActive={activeTab === 'account'} 
            onPress={() => setActiveTab('account')}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066cc',
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  profileEmail: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  profilePhone: {
    color: 'white',
    fontSize: 14,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeTabCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  activeTabLabel: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default AccountSettingsScreen;