import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import JogoGalo from './JogoGalo';
import Results from './screens/Results';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Play' component={JogoGalo}  options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Results' component={Results}  options={{headerShown: true, headerStyle:{backgroundColor:'white'}}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;