import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Layout = (props) => {
  const navigation = useNavigation();
 
  return (
    <View style={{ flex: 1, padding: 6, backgroundColor: "#040D12" }}>
      
      {props.children}
    </View>
  );
};
