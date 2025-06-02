import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'

const HomePage = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigation.replace("Login");
  }

  return (
    <View>
      <Text>This is my home page</Text>
      <Text>Welcome, {user}</Text>
      <Button title="Go to chat" onPress={() => navigation.navigate('chat')} />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  )
}

export default HomePage