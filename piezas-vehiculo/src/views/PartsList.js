import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Picker, Pressable, FlatList  } from 'react-native';
import { useRoute } from '@react-navigation/native';
import datosMarcas from '../../marcas.json';


export default function PartsList({ navigation, route }) {
   

    const [partes, setPartes] = useState([]); 
    const {nuevaParte} = route.params;
   

    useEffect(()=>{
onAdd();
    }, [route.params.level]);

    const onAdd=()=>{
        if(route.params.level !=''){
            setPartes([...partes, route.params?.nuevaParte]);
        }
    }

 
   return (
      <View>
        <Text>Pieza: {nuevaParte?.pieza}</Text>
        <Text>Marca: {nuevaParte?.marca}</Text>
        <Text>No de Serie: {nuevaParte?.serie}</Text>
        <Text>Fecha de cambio: {nuevaParte?.fecha}</Text>
      </View>
    );
  

console.log(nuevaParte);
return (
    <View>
    <FlatList
        data={nuevaParte}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {return (<View className="ml-4"/>);}}
    />
    </View>
);

}
    