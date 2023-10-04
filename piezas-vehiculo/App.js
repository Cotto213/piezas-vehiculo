import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Navigator } from './Navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import PartsForm from './src/views/PartsForm';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App(navigation) {
  return (
    <NavigationContainer >
      <Navigator>
       
      </Navigator>
    </NavigationContainer>
  );
}
;
