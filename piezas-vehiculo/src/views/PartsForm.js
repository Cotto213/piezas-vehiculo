import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Pressable } from 'react-native';
import datosMarcas from '../../marcas.json';
export default function PartsForm({ navigation }) {
  const [pieza, setPieza] = useState('');
  const [fecha, setFecha] = useState('');
  const [serie, setSerie] = useState('');
  const [marca, setMarca] = useState('');

const brands=datosMarcas.marcas;

const handleAgregarParte = () => {
  const nuevaParte = {
    pieza,
    marca,
    serie,
    fecha,
  };

  setPieza('');
  setMarca('');
  setSerie('');
  setFecha('');



navigation.navigate('PartsList', { nuevaParte } );
};

  return (
    <View >
      <Picker
      label="Marca"
      placeholder="Seleccione la marca"
  selectedValue={marca}
  onValueChange={(itemValue, itemIndex) => setMarca(itemValue)}
>
  {brands.map((brand, index) => (
    <Picker.Item key={index} label={brand} value={brand} />
  ))}
</Picker>
      <Text >Pieza:</Text>
      <TextInput
       label="Pieza"
        value={pieza}
        onChangeText={setPieza}
        placeholder="Seleccione la pieza"
      />


      <Text >No de Serie:</Text>
      <TextInput
        label="No de Serie"
        value={serie}
        onChangeText={setSerie}
        placeholder="Seleccione el No de Serie"
      />

      <Text >Fecha de cambio:</Text>
      <TextInput
        label="Fecha de cambio"
        value={fecha}
        onChangeText={setFecha}
        placeholder="Ingrese fecha de cambio"
      />

      <Button onPress={handleAgregarParte}  title="Agregar pieza" >
      </Button>
     
    </View>
  );
}