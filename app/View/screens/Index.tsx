import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"
import NewTask from "./NewTask"


const Stack = createNativeStackNavigator()

export default function Index(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
                <Stack.Screen name="NewTask" component={NewTask} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


