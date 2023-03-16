import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../constants'
import React from 'react'


const SPACING = 20
const AVATAR_SIZE = 70

const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <View>
      <TouchableOpacity  onPress={onSelect} >
        <View style={styles.containerList}>
        <Image source={{ uri: image }} style={styles.images} />
        <View >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.addresse}>{address}</Text>
        </View>
        </View>
      </TouchableOpacity>
      </View>
      
      

  )
}

export default PlaceItem

const styles = StyleSheet.create({
  containerList:{
    flexDirection: "row", padding:SPACING, marginBottom:SPACING, backgroundColor:"rgba(255,255,255,0.8)", borderRadius:12, shadowColor:'#000',shadowOffset:{ width:0, height:10
    }, shadowOpacity:.3, shadowRadius:20,
  },

    images:{
      width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight:SPACING/2 
    },
    title:{
      fontSize:22,
fontWeight:'700'
    },
    addresse:{
      fontSize:18,
      maxWidth:280,
      opacity:.7
      
    }
})