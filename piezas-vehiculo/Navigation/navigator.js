import React from "react";
import PartsForm from "../src/views/PartsForm";
import PartsList from "../src/views/PartsList";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../App";


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PartsList" component={PartsList} />
        <Stack.Screen name="PartsForm" component={PartsForm} />
      
      
    
      
    </Stack.Navigator>
  );
}
