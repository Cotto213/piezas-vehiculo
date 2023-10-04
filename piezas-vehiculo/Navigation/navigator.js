import React from "react";
import { PartsForm } from "../src/views/PartsForm";
import { PartsList } from "../src/views/PartsList";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Lista de Partes" component={PartsList} initialParams={{nuevaParte:{}}} />
      <Stack.Screen name="Ingrese su Parte" component={PartsForm} />
    </Stack.Navigator>
  );
};
