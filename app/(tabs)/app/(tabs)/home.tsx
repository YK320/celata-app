import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Define interfaces for our data types
interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap; // Ensure icon is a valid Ionicons name
}

// Sample data for the services list
const servicesData: ServiceItem[] = [
  {
    id: '1',
    name: 'GeoBizz',
    description: 'Geographical business intelligence',
    icon: 'folder-outline' as const,
  },
  {
    id: '2',
    name: 'Waystar Apps',
    description: 'Demo environment apps',
    icon: 'folder-outline' as const,
  },
  {
    id: '3',
    name: 'Bank of Hindenburg',
    description: 'Banking app',
    icon: 'folder-outline' as const,
  },
  {
    id: '4',
    name: 'Waystar Distribution',
    description: 'Distribution apps',
    icon: 'folder-outline' as const,
  },
  {
    id: '5',
    name: 'Waystar Insurance',
    description: 'Insurance app',
    icon: 'folder-outline' as const,
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  
  // Header component with user info and weather
  const Header = () => (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.userName}>K.R.K. Kumara</Text>
          <Text style={styles.greeting}>Good Morning</Text>
        </View>
      </View>
      
      <View style={styles.weatherInfo}>
        <Text style={styles.location}>Panadura, LK</Text>
        <Text style={styles.temperature}>26°C</Text>
        <Text style={styles.weatherCondition}>light rain</Text>
      </View>
    </View>
  );
  
  // Service item component with proper typing
  const ServiceItem = ({ item }: { item: ServiceItem }) => (
    <TouchableOpacity style={styles.serviceItem}>
      <View style={styles.serviceIconContainer}>
        <Ionicons name={item.icon} size={24} color="#3498db" />
      </View>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
    </TouchableOpacity>
  );

  // Bottom Navigation Tab - Modified to use forwardRef
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
        onPress={onPress || (() => setActiveTab(name.toLowerCase()))}
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Header />
      
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#a0a0a0" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search app"
          placeholderTextColor="#a0a0a0"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* Services list */}
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: ServiceItem }) => <ServiceItem item={item} />}
        contentContainerStyle={styles.servicesList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <BottomTab name="Files" icon="folder-outline" isActive={activeTab === 'files'} />
        <BottomTab name="Home" icon="home" isActive={activeTab === 'home'} />
        <Link href="/Profile" asChild>
          <BottomTab 
            name="Account" 
            icon="settings-outline" 
            isActive={activeTab === 'account'} 
          />
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066cc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  greeting: {
    color: 'white',
    fontSize: 14,
  },
  weatherInfo: {
    alignItems: 'flex-end',
  },
  location: {
    color: '#90ee90',
    fontSize: 14,
  },
  temperature: {
    color: '#90ee90',
    fontSize: 14,
  },
  weatherCondition: {
    color: '#90ee90',
    fontSize: 14,
  },
  searchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  servicesList: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 1000, 
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
  },
  // Bottom Navigation Styles
  bottomNavigation: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
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