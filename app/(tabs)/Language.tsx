import React, { useState, forwardRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

interface LanguageOption {
  id: string;
  name: string;
  isSelected: boolean;
}

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

const LanguageSettingsScreen = () => {
  const [activeTab, setActiveTab] = useState('account');
  const router = useRouter();
  
  const [languages, setLanguages] = useState<LanguageOption[]>([
    { id: "1", name: "English", isSelected: true },
    { id: "2", name: "සිංහල", isSelected: false },
    { id: "3", name: "தமிழ்", isSelected: false },
  ]);

  const selectLanguage = (id: string) => {
    const updatedLanguages = languages.map((lang) => ({
      ...lang,
      isSelected: lang.id === id,
    }));
    setLanguages(updatedLanguages);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Text style={styles.headerTitle}>Language Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Language Selection */}
      <View style={styles.contentContainer}>
        <FlatList
          data={languages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.languageItem,
                item.isSelected && styles.selectedLanguageItem,
              ]}
              onPress={() => selectLanguage(item.id)}
            >
              <Text
                style={[
                  styles.languageText,
                  item.isSelected && styles.selectedLanguageText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
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
    backgroundColor: "#0066cc",
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: 20,
  },
  languageItem: {
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  selectedLanguageItem: {
    backgroundColor: "#0066cc",
  },
  languageText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  selectedLanguageText: {
    color: "white",
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  activeTabCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0066cc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
  },
  activeTabLabel: {
    color: "#0066cc",
    fontWeight: "bold",
  },
});

export default LanguageSettingsScreen;