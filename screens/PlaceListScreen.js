import React,  { useEffect } from 'react'
import  {View, Text, StyleSheet, FlatList,StatusBar } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItem'

import * as addressAction from '../store/places.actions'

import {SPACING} from '../constants/theme'
const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const places = useSelector(state => state.places.places)

    useEffect(() => {
        dispatch(addressAction.loadAddress());
      }, []);



const renderItem = ({item}) =>(
    <PlaceItem 
    title={item.title} 
    image={item.image}
    address={item.address}
    onSelect={() => navigation.navigate('Detail', {
        placeId: item.id
    })}
    />
)

  
    return (
        
       <FlatList data={places} keyExtractor={item => item.id} renderItem={renderItem} contentContainerStyle={styles.container}/>)
}

const styles = StyleSheet.create({
    container: {
        flex:1, backgroundColor:'fff',
        padding:SPACING, 
        paddingTop: StatusBar.currentHeight || 42,

    }
})

export default PlaceListScreen
