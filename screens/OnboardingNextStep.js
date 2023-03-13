import React from 'react'
import { useFonts } from 'expo-font'
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import ImgNotification from '../images/card.png'
import { SIZES, COLORBTN, TEXTBTN, BTN, TEXTBTNTRANS, CONTAINER, TITLE, DESCRIPTION } from '../constants/theme'
import { NativeScreenNavigationContainer } from 'react-native-screens'

const OnboardingNextStep = ({ navigation  }) => {
  const [fontsLoaded] = useFonts(
    {
      DancingScript: require("../fonts/Unbounded-VariableFont_wght.ttf")
    }
  )
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={CONTAINER}>
      <Image source={ImgNotification} style={{ width: SIZES.width - 10, height: 400 }} resizeMode="contain" />
      <Text style={[TITLE, { fontFamily: 'DancingScript' }]}>
       DatenüBerpüfung
      </Text>
      <Text style={DESCRIPTION}> Denken Sie daran, dass Sie Ihre aktualisierten Unterlagen mitbringen müssen. Bitte überprüfen Sie alle Unterlagen, bevor Sie in die Einrichtung kommen</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", }}>
        <TouchableOpacity style={[BTN, { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORBTN.primary }]} onPress={() => navigation.navigate("Präsentation")}>
          <Text style={TEXTBTNTRANS}>Zurückkehren</Text>
        </TouchableOpacity >
        <View style={{ width: 15 }}></View>
        <TouchableOpacity style={BTN} onPress={() => console.log("to home")}>
          <Text style={TEXTBTN}>Fortsetzen</Text>
        </TouchableOpacity >
      </View>
    </View>
  )
}

export default OnboardingNextStep

const styles = StyleSheet.create({

})