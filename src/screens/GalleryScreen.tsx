import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';

export default function GalleryScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'green'}}>
            <Text style={{color: 'white', fontSize: 24}}>Gallery works</Text>
            <StatusBar style='auto'></StatusBar>
        </View>
    )
}