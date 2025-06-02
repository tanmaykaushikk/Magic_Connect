import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import useAuth from '../hooks/useAuth';
import SplashScreen from '../screens/SplashScreen';
import { useState, useEffect } from 'react';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <Stack.Screen name="splash" component={SplashScreen} />
        ) : user ? (
          <>
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="chat" component={ChatScreen} />
          </>
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation