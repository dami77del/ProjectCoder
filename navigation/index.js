import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

// stacks
import PlaceNavigator from './PlaceNavigator'
import DowasNavigation from './DowasNavigation';

export default () => (
    <NavigationContainer>
        <DowasNavigation/>
        <PlaceNavigator />
    </NavigationContainer>
)