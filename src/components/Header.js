import { Image, StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { logo, user,chat } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window');




const Header = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <TouchableOpacity>
                <Image source={user} style={styles.headerIcon}/>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Image source={logo} style={styles.logoIcon}/>
            </TouchableOpacity>
        </View>
        <View>
             <TouchableOpacity onPress={() => navigation.navigate('chat')}>
                <Image source={chat} style={styles.headerIcon}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        height: height * 0.05,

    },
    headerIcon: {
        width: width * 0.1,
        height: height * 0.05,
        resizeMode: 'contain',
        marginHorizontal: width * 0.02,
        top:-height * 0.04,
    
    },
    logoIcon: {
        width: width * 0.12,
        height: height * 0.1,
        resizeMode: 'contain',
        top:-height * 0.063,
        alignSelf:'center'
    }
    

})