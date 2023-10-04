
import { NativeWindStyleSheet } from "nativewind";
import {Navigator} from './Navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';

NativeWindStyleSheet.setOutput({
  default: "native",
});
 

export default function App() {
  return (
    <NavigationContainer>
   <Navigator/>
    </NavigationContainer>
  );
}
