import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Menu Principal',
                    headerTintColor: '#3e0a79ff',
                    headerShown: false
                }}
            />
            <Screen
                name='gallery'
                component={GalleryScreen}
            />
        </Navigator>
    )
}