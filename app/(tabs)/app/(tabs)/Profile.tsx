import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

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

const AccountProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>K.R.K. Kumara</Text>
        <Text style={styles.profileEmail}>kumara@gmail.com</Text>
        <Text style={styles.profilePhone}>0783451231</Text>
      </View>
      
      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="headset-outline" size={24} color="#0066cc" />
          </View>
          <Text style={styles.menuText}>Help and support</Text>
          <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="people-outline" size={24} color="#0066cc" />
          </View>
          <Text style={styles.menuText}>About us</Text>
          <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
        </TouchableOpacity>
        
        <Link href="/AccountSettings" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="settings-outline" size={24} color="#0066cc" />
            </View>
            <Text style={styles.menuText}>Account settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
          </TouchableOpacity>
        </Link>
        
        <Link href="/Language" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="language-outline" size={24} color="#0066cc" />
            </View>
            <Text style={styles.menuText}>Language change</Text>
            <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
          </TouchableOpacity>
        </Link>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="log-out-outline" size={24} color="#0066cc" />
          </View>
          <Text style={styles.menuText}>Sign Out</Text>
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
        
        <BottomTab 
          name="Account" 
          icon="settings-outline" 
          isActive={activeTab === 'account'} 
          onPress={() => setActiveTab('account')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066cc',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
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
  menuContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
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

export default AccountProfileScreen;