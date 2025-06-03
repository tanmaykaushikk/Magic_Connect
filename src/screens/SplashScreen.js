import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { logo } from '../assets/Images'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      
      <Text style={styles.title}>Magic Connect</Text>
      <Text style={styles.subtitle}>Find someone just like you...</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C6F19D',
    // backgroundColor:"#EC5E95",
      backgroundColor:"#E6CFFD",
  },
  logoContainer: {
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    color: '#2D5016',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(255,255,255,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  subtitle: {
    color: '#4A7C23',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.8,
  },
})