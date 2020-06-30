import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,ImageBackground,TouchableHighlight} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Avatar, Card, Header } from "react-native-elements";
import imagef from "../assets/images/huellitas.png";
import firebase from "firebase";

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
  Image
  
} from "native-base";

function useData() {
  try {
    const [datas, setdatas] = useState([]);
    useEffect(() => {
      firebase
        .firestore()
        .collection("Recordatorios")
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


const deteleteData = (i) => () => {
  try{
    console.log(i);
    firebase
      .firestore()
      .collection("Recordatorios")
      .doc(i)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    }
  catch(e){
    console.log(e);
  }
};



export default function RecScreen({ navigation }) {
  const Rec = useData();

  if (Rec) {
    console.log("que onda rza");
  } else {
    console.log("que onda rza  enn else");
  }
  return (
    <View style={styles.container}>
      
      <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Recordatorios', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
        <ImageBackground source={imagef} style={styles.image}>
        <ScrollView>
        <Content>
          <View>
          <TouchableHighlight style= {styles.button}
         onPress={() => navigation.navigate("AgregarRecordatorio")}
         >
          <Text style ={styles.textButton}>Agregar nuevo recordatorio</Text>
        </TouchableHighlight>
            {/* aqui va el map */}

            {Rec.map((l, i) => (
              <Card
                key={i}
                title={l.Titulo}
                containerStyle={{
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center" }}>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{"Fecha: "+l.Fecha} </Text>
                    <Text>{"Perro: "+l.Perro} </Text>
                    <Text>{"Impotancia: "+l.Nivel} </Text>
                    
                  </View>
                  
                  <Button style= {{ backgroundColor:'white',alignItems: "flex-end"}} onPress={deteleteData(l.id)}>
                  <Icon name="md-close-circle"  style={{color: 'skyblue'}}/>
                  </Button>
                  <Button style= {{ backgroundColor:'white',alignItems: "flex-end",}} onPress={() => navigation.navigate("Perros")}>
                  <Icon name="md-create"  style={{color: 'skyblue'}}/>
                  </Button>
                </View>
              </Card>
            ))}
          </View>
        </Content>
      </ScrollView>
      </ImageBackground>
      <Footer>
      <FooterTab style={styles.colorm}>
        <Button onPress={() => navigation.navigate("Perros")}>
          <Icon name="ios-paw" style ={styles.textom}/>
          <Text style ={styles.textom}>Mis perros</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Mapas")}>
          <Icon name="ios-pin" style ={styles.textom}/>
          <Text style ={styles.textom}>Veterinarios</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Menu")}>
          <Icon name="menu" style ={styles.textom} />
          <Text style ={styles.textom}>Menú</Text>
        </Button>
      </FooterTab>
    </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  buttonEdit: {
    borderRadius: 10,
    marginLeft: -2,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "#FBF8EF",
  },
  buttonAdd: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  colorm:{
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
  button:{
    backgroundColor:'skyblue',
    width:300,
    height:50,
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth:1
  },
  textButton:{
    textAlign:'center',
    color:'white',
  },
});