import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/homeScreen";

const Stack = createNativeStackNavigator();


export const AppNavigationUser = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
