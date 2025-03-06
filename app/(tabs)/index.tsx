import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens
import HomeScreen from './home';
import AccountProfileScreen from './Profile';
import AccountSettingsScreen from './AccountSettings';
import LanguageSettingsScreen from './Language';

// Create the stack navigator
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0066cc' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AccountProfile" component={AccountProfileScreen} />
        <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
        <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}