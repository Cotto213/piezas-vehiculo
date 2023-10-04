import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { Layout } from '../../layout/Layout';
import brandsData from '../../marcas.json';
import { v1 as uuidv1 } from 'uuid';
import { Picker } from '@react-native-picker/picker';

export const PartsCreate = ({ navigation }) => {
  const [part, setPart] = useState({
    id: uuidv1(),
    type: '',
    brand: '',
    serialNumber: '',
    price: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleAddPart = () => {
    const newErrors = {};

    if (!part.type) newErrors.type = 'Type is required';
    if (!part.brand) newErrors.brand = 'Brand is required';
    if (!part.serialNumber) newErrors.serialNumber = 'Serial Number is required';
    if (!part.price) newErrors.price = 'Price is required';
    else if (isNaN(part.price)) newErrors.price = 'Price must be a number';
    if (!part.date) newErrors.date = 'Date is required';
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(part.date)) newErrors.date = 'Date must be in YYYY-MM-DD format';

    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
    else {
      navigation.navigate('PartsList', {
        level: 'success',
        flashMessage: 'Part Added Successfully! .',
        nuevaParte: part,
      });
    }
  };

  const handleChange = (name, value) => {
    setPart((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Layout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8 }}>
        <View style={{ width: '100%', padding: 8, maxWidth: 'sm' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4B5563', textAlign: 'center', marginBottom: 8 }}>
            Add new Part
          </Text>

          <View style={{ backgroundColor: 'gray', borderRadius: 8, marginBottom: 4 }}>
            <Picker
              style={{ width: '100%', height: 40, backgroundColor: 'gray', borderRadius: 8, marginBottom: 4, color: 'white', paddingHorizontal: 10 }}
              onValueChange={(value) => handleChange('brand', value)}
              selectedValue={part.brand}
            >
              <Picker.Item label="Select a Brand" value={null} />
              {brandsData.marcas.map((brand, index) => (
                <Picker.Item key={index} label={brand} value={brand} />
              ))}
            </Picker>
          </View>

          <View style={{ backgroundColor: 'gray', borderRadius: 8, marginBottom: 4 }}>
            <TextInput
              style={{ height: 40, color: 'white', paddingHorizontal: 10 }}
              placeholder="Type"
              value={part.type}
              onChangeText={(value) => handleChange('type', value)}
            />
          </View>

          <View style={{ backgroundColor: 'gray', borderRadius: 8, marginBottom: 4 }}>
            <TextInput
              style={{ height: 40, color: 'white', paddingHorizontal: 10 }}
              placeholder="# Serial - Number"
              value={part.serialNumber}
              onChangeText={(value) => handleChange('serialNumber', value)}
            />
          </View>

          <View style={{ backgroundColor: 'gray', borderRadius: 8, marginBottom: 4 }}>
            <TextInput
              style={{ height: 40, color: 'white', paddingHorizontal: 10 }}
              placeholder="Price"
              value={part.price}
              onChangeText={(value) => handleChange('price', value)}
            />
          </View>

          <View style={{ backgroundColor: 'gray', borderRadius: 8, marginBottom: 4 }}>
            <TextInput
              style={{ height: 40, color: 'white', paddingHorizontal: 10 }}
              placeholder="Fecha de Cambio (YYYY-MM-DD)"
              value={part.date}
              onChangeText={(value) => handleChange('date', value)}
            />
          </View>

          <View style={{ width: '100%', marginTop: 8 }}>
            <Pressable
              style={{ backgroundColor: 'gray', borderRadius: 8, padding: 10 }}
              onPress={handleAddPart}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Add Part</Text>
            </Pressable>
          </View>

          {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([key, value]) => (
              <View key={key} style={{ backgroundColor: 'red', borderRadius: 8, padding: 10, marginTop: 4 }}>
                <Text style={{ color: 'white' }}>{value}</Text>
              </View>
            ))}
        </View>
      </View>
    </Layout>
  );
};