import React from 'react'
import { Platform, TouchableOpacity } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from "@expo/vector-icons/Ionicons"

import { COLORS } from '../constants' 

// screens
import PlaceListScreen from '../screens/PlaceListScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import MapScreen from '../screens/MapScreen'

import OnboardingPresentation from '../screens/OnboardingPresentation'
import OnboardingLegal from '../screens/OnboardingLegal'
import OnboardingNextStep from '../screens/OnboardingNextStep'



const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
    initialRouteName="Präsentation"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.LILA : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.LILA,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Filial"
            component={PlaceListScreen}
            options={({navigation}) =>({
            title:'Filial',
            headerRight:() =>(
                <TouchableOpacity onPress={()=> navigation.navigate('New')}>
                    <Ionicons name='md-add' color={Platform.OS === "android" ? 'white' : COLORS.LILA} size={23}/>
                </TouchableOpacity>
            )

            })} 
        />
        <PlaceStack.Screen
            name="Detail"
            component={PlaceDetailScreen}
            options={{title: 'Einzelheiten'}} 
        />
        <PlaceStack.Screen
            name="New"
            component={NewPlaceScreen}
            options={({navigation}) =>({
                title:'New Addrese',
                headerRight:() =>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Präsentation')}>
                        <Ionicons name='home-outline' color={Platform.OS === "android" ? 'white' : COLORS.LILA} size={23}/>
                    </TouchableOpacity>
                )
    
                })} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
        

    <PlaceStack.Screen
        name="Präsentation" component={OnboardingPresentation}  options={{headerShown:false}} 
        />
        
    <PlaceStack.Screen 
     name="Legal" component={OnboardingLegal} options={{headerShown:false}} 
        />
         <PlaceStack.Screen
     name="NächsteStufe" component={OnboardingNextStep}  options={{headerShown:false}} 
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator