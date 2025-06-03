import { View,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import Cards from '../components/Cards'


const HomePage = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigation.replace("Login");
  }

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor:"#E6CFFD", }}>
      <Header />
      {/* <Text>This is my home page</Text>
      <Text>Welcome, {user}</Text>
      <Button title="Sign Out" onPress={handleSignOut} /> */}
      <View style={{ flex: 1 }}>
        <Cards/>
      </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:"space-around",
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  icon:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 20
  }
})