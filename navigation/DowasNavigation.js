

import OnboardingPresentation from '../screens/OnboardingPresentation'
import OnboardingLegal from '../screens/OnboardingLegal'
import OnboardingNextStep from '../screens/OnboardingNextStep'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()


const DowasNavigation = () => {
    return (<>
        <Stack.Navigator initialRouteName="Präsentation">
            <Stack.Screen name="Präsentation" component={OnboardingPresentation} />
            <Stack.Screen name="Legal" component={OnboardingLegal} />
            <Stack.Screen name="NächsteStufe" component={OnboardingNextStep} />
        </Stack.Navigator>
        </>


    )
}

export default DowasNavigation

