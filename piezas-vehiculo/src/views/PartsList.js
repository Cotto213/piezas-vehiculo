import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { Layout } from "../../layout/Layout";

export const PartsList = ({ navigation, route }) => {
  const [partList, setPartList] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const porFecha = partList.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  

  useEffect(() => {
    if (route.params?.nuevaPart) {
      setPartList([...partList, route.params.nuevaPart]);
    }
  }, [route.params?.nuevaPart]);

  const handleDelete = (id) => {
    setPartList((prevParts) => prevParts.filter((part) => part.id !== id));
  };
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          width: "50%",
          padding: 6,
          borderRadius: 8,
          backgroundColor: "#04364A",
          marginTop: 4,
        }}
      >
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <View style={{ flexGrow: 1 }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedPart(item);
                setModalVisible(true);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: "md",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.pieza}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: "md",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.marca}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: "md",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.fecha}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                paddingHorizontal: 8,
                paddingVertical: 2.5,
                borderRadius: 999,
                marginHorizontal: 4,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handleDelete(item.id)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: "sm",
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Borrar Pieza
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Layout
     
    >
      <Modal visible={modalVisible} animationpieza="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 8, borderRadius: 8 }}
          >
            <Text
              style={{
                color: "black",
                fontSize: "lg",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              Detalles de la Pieza
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: "md",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Marca: {selectedPart?.marca}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: "md",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Pieza: {selectedPart?.pieza}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: "md",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Numero de Serie: {selectedPart?.serial}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: "md",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Precio: ${selectedPart?.precio}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: "md",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Fecha: {selectedPart?.fecha}
            </Text>
            <View style={{ marginTop: 8 }}>
              <Pressable
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2.5,
                  borderRadius: 999,
                  marginHorizontal: 4,
                  backgroundColor: "gray",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: "sm",
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Cerrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "100%", maxWidth: "sm" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginTop: 1  }}>
           
  <TouchableOpacity
    onPress={() => navigation.navigate("Ingrese su Parte")}
    style={{
      backgroundColor: "#3C5E8F",
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    }}
  >
    <Text
      style={{
        position: "relative",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Agregar una pieza
    </Text>
  </TouchableOpacity>

            </View>
          </View>
        </View>
        <View style={{ flex: 1, width: "100%", maxWidth: "sm" }}>
          {partList.length == 0 ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: "md",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
          No hay partes aún 
          </Text>
        </View>
          ) : (
            <FlatList 
            numColumns={2}
              data={porFecha}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => {
                return <View style={{ marginLeft: 4,
                  justifyContent: "space-between", }} />;

              }}
            />
          )}
        </View>
      </View>
    </Layout>
  );
};
