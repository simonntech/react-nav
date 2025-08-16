import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'blue'}}>
            <Text style={{color: 'white', fontSize: 24}}>Home works</Text>
        </View>
    )
}