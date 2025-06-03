import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'


const { width, height } = Dimensions.get('window');

const data = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    occupation: "Software Engineer",
    photoUrl: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    age: 35,
    occupation: "Graphic Designer",
    photoUrl: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    firstName: "Clara",
    lastName: "Davis",
    age: 42,
    occupation: "Marketing Manager",
    photoUrl: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Lee",
    age: 30,
    occupation: "Data Analyst",
    photoUrl: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Brown",
    age: 25,
    occupation: "UX Designer",
    photoUrl: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = height * 0.6;
const IMAGE_HEIGHT = CARD_HEIGHT * 0.8;

const Cards = () => {

  return (
    <Swiper
      cards={data}
      containerStyle={styles.swiperContainer}
      cardStyle={{}}
      stackSize={5}
      cardIndex={0}
      animateCardOpacity
      verticalSwipe={false}
      onSwipedLeft={()=>console.log('swipe passed')}
      onSwipedRight={()=>console.log('swipe matched')}
      overlayLabels={{
        left:{
            title:"NOPE",
            style:{
                label:{color:'red',fontSize:50},
                wrapper:{flexDirection:'column',alignItems:'flex-end',marginTop:30,marginRight:30}
            }
        },
        right:{
            title:"LIKE",
            style:{
                label:{color:'green',fontSize:50},
                wrapper:{flexDirection:'column',alignItems:'flex-start',marginTop:30,marginLeft:30}
            }
        }
      }}
      renderCard={(card) => (
        <View key={card.id} style={styles.card}>
          <Image
            source={{ uri: card.photoUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>{card.firstName} {card.lastName}</Text>
            <Text style={styles.occupation}>{card.occupation}</Text>
            <Text style={styles.age}>{card.age} years old</Text>
          </View>
          
        </View>
      )}
      backgroundColor="transparent"
      infinite={false}
      showSecondCard={true}
      disableTopSwipe
    />
  )
}

export default Cards

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    paddingBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  cardContent: {
    padding: 16,
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222'
  },
  age: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2
  },
  occupation: {
    fontSize: 15,
    color: '#888'
  }
})

