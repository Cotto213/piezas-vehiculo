import marcasData from "../../marcas.json";
import React, { useState } from "react";
import { View, TextInput, Button, Picker } from "react-native";
import { Layout } from "../../layout/Layout";

export const PartsForm = ({ navigation }) => {
  const [newPart, setNewPart] = useState({
    pieza: "",
    marca:"",
    serial: "",
    precio: "",
    fecha: "",
  });

  const marcas = marcasData.marcas;

  const handleAddPart = () => {
    navigation.navigate("Lista de Partes", { nuevaPart: { ...newPart, id: Date.now() } });
  };

  return (
    <Layout>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "100%", maxWidth: "sm" }}>
          <TextInput
            style={{
              backgroundColor: "#1E2A4A",
              color: "#FFFFFF",
              borderColor: "#3C5E8F",
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
            }}
            placeholder="Ingrese la pieza"
            value={newPart.pieza}
            onChangeText={(text) => setNewPart({ ...newPart, pieza: text })}
          />
          <Picker
            style={{
              backgroundColor: "#1E2A4A",
              color: "#FFFFFF",
              borderColor: "#3C5E8F",
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
            }}
            selectedValue={newPart.marca}
            onValueChange={(itemValue, itemIndex) =>
              setNewPart({ ...newPart, marca: itemValue })
            }
          >
            <Picker.Item label="Seleccione la marca de la pieza " value={null} />
            {marcas.map((marca, index) => (
              <Picker.Item key={index} label={marca} value={marca} />
            ))}
          </Picker>
          <TextInput
            style={{
              backgroundColor: "#1E2A4A",
              color: "#FFFFFF",
              borderColor: "#3C5E8F",
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
            }}
            placeholder="Ingese el numero de serie"
            value={newPart.serial}
            onChangeText={(text) =>
              setNewPart({ ...newPart, serial: text })
            }
          />
          <TextInput
            style={{
              backgroundColor: "#1E2A4A",
              color: "#FFFFFF",
              borderColor: "#3C5E8F",
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
            }}
            placeholder="Ingrese el precio"
            value={newPart.precio}
            onChangeText={(text) =>
              setNewPart({ ...newPart, precio: text })
            }
          />
          <TextInput
            style={{
              backgroundColor: "#1E2A4A",
              color: "#FFFFFF",
              borderColor: "#3C5E8F",
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
            }}
            placeholder="Ingrese la fecha en formato (YYYY-MM-DD)"
            value={newPart.fecha}
            onChangeText={(text) =>
              setNewPart({ ...newPart, fecha: text })
            }
          />
          <Button
            title="Add Part"
            onPress={handleAddPart}
            color="#3C5E8F"
          />
        </View>
      </View>
    </Layout>
  );
};

export const crearPartes = ({ navigation, route }) => {
  const [part, setPart] = useState(route.params.nuevaParte);

  const [errors, setErrors] = useState({});

  const handleAddPart = () => {
    const newErrors = {};

    if (!part.pieza
) newErrors.pieza = "Debe ingresar la pieza";
    if (!part.marca) newErrors.marca = "Debe ingresar la marca";
    if (!part.serial)
      newErrors.serial = "Debe ingresar el numero serial";
    if (!part.precio) newErrors.precio = "Debe ingresar el precio";
    else if (isNaN(part.precio)) newErrors.precio = "El precio debe ser un número";
    if (!part.fecha) newErrors.fecha = "La fecha es obligatoria";
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(part.fecha))
      newErrors.fecha = "La fecha debe estar en formato YYYY-MM-DD";

    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
    else {
      navigation.navigate("Lista de Partes", {
        
        nuevaParte: part,
      });
    }
  };

  const handleChange = (name, value) => {
    setPart((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
        }}
      >
        <View style={{ width: "100%", padding: 8, maxWidth: "sm" }}>

          <View
            style={{
              backgroundColor: "gray",
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            <Picker
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "gray",
                borderRadius: 8,
                marginBottom: 4,
                color: "white",
                paddingHorizontal: 10,
              }}
              onValueChange={(value) => handleChange("marca", value)}
              selectedValue={part.marca}
            >

              ))}
            </Picker>
          </View>

          <View
            style={{
              backgroundColor: "gray",
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            <TextInput
              style={{ height: 40, color: "white", paddingHorizontal: 10 }}
              placeholder="pieza
        "
              value={part.pieza
        }
              onChangeText={(value) => handleChange("pieza", value)}
            />
          </View>

          <View
            style={{
              backgroundColor: "gray",
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            <TextInput
              style={{ height: 40, color: "white", paddingHorizontal: 10 }}
              placeholder="# Serial - Number"
              value={part.serial}
              onChangeText={(value) => handleChange("serial", value)}
            />
          </View>

          <View
            style={{
              backgroundColor: "gray",
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            <TextInput
              style={{ height: 40, color: "white", paddingHorizontal: 10 }}
              placeholder="precio"
              value={part.precio}
              onChangeText={(value) => handleChange("precio", value)}
            />
          </View>

          <View
            style={{
              backgroundColor: "gray",
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            <TextInput
              style={{ height: 40, color: "white", paddingHorizontal: 10 }}
              placeholder="Fecha de Cambio (YYYY-MM-DD)"
              value={part.fecha}
              onChangeText={(value) => handleChange("fecha", value)}
            />
          </View>

          <View style={{ width: "100%", marginTop: 8 }}>
            <Pressable
              style={{ backgroundColor: "gray", borderRadius: 8, padding: 10 }}
              onPress={handleAddPart}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Add Part
              </Text>
            </Pressable>
          </View>

          {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([key, value]) => (
              <View
                key={key}
                style={{
                  backgroundColor: "red",
                  borderRadius: 8,
                  padding: 10,
                  marginTop: 4,
                }}
              >
                <Text style={{ color: "white" }}>{value}</Text>
              </View>
            ))}
        </View>
      </View>
    </Layout>
  );
};
