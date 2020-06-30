import React, { useState, useEffect } from "react";
import { Avatar, Card, Input, Header } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView, TouchableHighlight, ImageBackground } from "react-native";
import { Footer, FooterTab, Button, Icon, CardItem,DatePicker, Picker, Form, Item } from "native-base";
import imagef from "../assets/images/huellitas.png";
import firebase from "firebase";

function useData() {
  try {
    const [datas, setdatas] = useState([]);
    useEffect(() => {
      firebase
        .firestore()
        .collection("Perro")
        .onSnapshot((snapshot) => {
          const newData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setdatas(newData);
        });
    }, []);
    return datas;
  }
  catch (e) {
    console.log(e);
  }
}




export default function AgregarRecordatorio({ navigation }) {
  const perros = useData();
  const [vtit, setText] = useState(" ");
  console.log("Nombre del recordatorio: ",vtit);
  const [nwdat, setText2] = useState(" ");
  console.log("Fecha del recordatorio: ",nwdat);
  const [Per, setText3] = useState(" ");
  console.log("Perro asignado al recordatorio: ",Per);
  const [imp, setText4] = useState(" ");
  console.log("Importancia del recordatorio: ",imp);

  function addRecordatorio() {
    try {
      firebase
        .firestore()
        .collection("Recordatorios")
        .add({
          Titulo:vtit,
          Fecha:nwdat,
          Perro:Per,
          Nivel:imp,
        })
        .then(() => navigation.navigate("Recordatorio"));
    } catch (e) {
  
    }
  }
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            placement="center"
            leftComponent={{ icon: 'pets', color: '#000000' }}
            centerComponent={{ text: 'Agregar Recordatorio', style: { color: 'black', fontSize: 20, } }}
            containerStyle={{
              backgroundColor: "#ffffff",
              justifyContent: 'space-around',
              paddingTop: 1,
            }}
          />
          <Card
            title="Nuevo recordatorio"
            containerStyle={{
              ba3ckgroundColor: "#ffffff",
              borderRadius: 0,
            }}
          >
            <ImageBackground source={imagef} style={styles.image}>
              <CardItem>

                <Input
                  style={{ padding: 40 }}
                  placeholder="Recordatorio"
                  onChangeText={(vtit) => setText(vtit)}
                  value={vtit}
                />
              </CardItem>

              <CardItem>
                <Text>
                  Seleccione la fecha:
                </Text>
                <DatePicker
                  format="YYYY-MM-DD"
                  defaultDate={new Date(2020, 6, 25)}
                  minimumDate={new Date(2020, 6, 25)}
                  maximumDate={new Date(2022, 12, 31)}
                  locale={"en"}
                  animationType={"fade"}
                  androidMode={"calendar"}
                  placeHolderText="Selecione fecha"
                  textStyle={{ color: "black" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={(nwdat) => setText2(nwdat.toString().substr(4, 12))}
                  Value={nwdat}
                  disabled={false}
                />
              </CardItem>
              <CardItem>
                <Form >
                <Text>Seleccione un perro</Text>
                  <Item picker>
                    <Picker
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: "80%" }}
                      placeholderIconColor="#007aff"
                      selectedValue={Per}
                      onValueChange={(Per) => setText3(Per)}
                    >
                      <Picker.Item label="Selecciona tú respuesta" value=" " />
                      {perros.map((datas, i) => (
                        <Picker.Item label={datas.Nombre} value={datas.Nombre} />
                      ))}
                    </Picker>
                  </Item>
                </Form>
              </CardItem>

              <CardItem>
                <Form >
                <Text>Nivel de importancia</Text>
                  <Item picker>
                    <Picker
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: "80%" }}
                      placeholderIconColor="#007aff"
                      selectedValue={imp}
                      onValueChange={(imp) => setText4(imp)}>
                      <Picker.Item label="Selecciona tú respuesta" value=" " />
                      <Picker.Item label="Alto" value="Alto" />
                      <Picker.Item label="Medio" value="Medio" />
                      <Picker.Item label="Bajo" value="Bajo" />
                    </Picker>
                  </Item>
                </Form>
              </CardItem>

              <TouchableHighlight style={styles.button}
                onPress={() => addRecordatorio()}>
                <Text style={styles.textButton}>Guardar</Text>
              </TouchableHighlight>
            </ImageBackground>
          </Card>
        </View>
      </ScrollView>
      <Footer>
        <FooterTab style={styles.colorm}>
          <Button onPress={() => navigation.navigate("Perros")}>
            <Icon name="ios-paw" style={styles.textom} />
            <Text style={styles.textom}>Mis perros</Text>
          </Button>
          <Button onPress={() => navigation.navigate("Mapas")}>
            <Icon name="ios-pin" style={styles.textom} />
            <Text style={styles.textom}>Veterinarios</Text>
          </Button>
          <Button onPress={() => navigation.navigate("Menu")} >
            <Icon name="menu" style={styles.textom} />
            <Text style={styles.textom}>Menú</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  colorm: {
    backgroundColor: "#33ccff",
  },
  textom: {
    color: 'black',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
  },
});
