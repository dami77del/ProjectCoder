import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from "../screens/AuthScreen";

const PlaceStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <PlaceStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <PlaceStack.Screen name="Auth" component={AuthScreen} />
        </PlaceStack.Navigator>
    )
}
export default AuthNavigator