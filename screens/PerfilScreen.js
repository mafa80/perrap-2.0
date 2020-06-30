import * as React from "react";
import { Avatar, Card } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView,ImageBackground } from "react-native";
import { ListItem,Header,Input } from "react-native-elements";
import firebase from "firebase";
import imagef from "../assets/images/huellitas.png";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";
var correo = "";

export default function PerfilScreen({ navigation }) {
const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          console.log(user.email);
          correo = user.email;
        } else {
          navigation.navigate("Login");
        }
      }.bind(this)
    );
  };

  firebase.database().ref("/users/" + user.uid);

  console.log("aqui va el correo", correo);

  checkIfLoggedIn();

  return (
    <Container>
       <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Perfil', style: { color: 'black',fontSize: 20, } }}
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
              <Card
              title="Mis datos"
              containerStyle={{
                backgroundColor: "#ffffff",
                borderRadius: 0,
              }}
            >
              <View style={{ alignItems: "center", padding: 40 }}>
                <Avatar
                  rounded
                  size="xlarge"
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                />
              </View>

              <View style={{ alignItems: "center", padding: 40 }}>
                <Text>Correo : tysha_5@gmail.com {correo}</Text>
                <Text>Nombre: Tysha </Text>
                <Text>Perros: 2</Text>
              </View>
            </Card>
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
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
