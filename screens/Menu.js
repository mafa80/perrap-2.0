import React from "react";
import { ListItem, Header } from "react-native-elements";
import { View, Text, ImageBackground } from "react-native";
import firebase from "firebase";
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Container,
  Content,
} from "native-base";
import imagef from "../assets/images/huellitas.png";
export default function MenuScreen({ navigation }) {
  /*APP2
   const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          navigation.navigate("Menu");
        } else {
          navigation.navigate("Login");
        }
      }.bind(this)
    );
  };
  checkIfLoggedIn();*/
  return (
    <Container>
      <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Menú', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
      <Content >
     
        <ListItem
          leftIcon={<Icon name="person" />}
          title={" Perfil"}
          onPress={() => navigation.navigate("Perfil")}
          bottomDivider
          chevron={{ color: "skyblue" }}
         
        />
        <ListItem
          leftIcon={<Icon name="ios-paw" />}
          title={" Mis perros"}
          bottomDivider
          chevron={{ color: "skyblue" }}
          onPress={() => navigation.navigate("Perros")}
        />
        <ListItem
          leftIcon={<Icon name="alarm" />}
          title={" Recordatorios"}
          bottomDivider
          chevron={{ color: "skyblue" }}
          onPress={() => navigation.navigate("Recordatorio")}
          
        />
        <ListItem
          leftIcon={<Icon name="medkit" />}
          title={" Cuidados basicos"}
          bottomDivider
          onPress={() => navigation.navigate("Tutoriales")}
          chevron={{ color: "skyblue" }}
        />
        <ListItem
         leftIcon={<Icon name="close" />}
        title={"Cerrar sesion"}
        onPress={() => firebase.auth().signOut()}
        bottomDivider
        chevron={{ color: "skyblue" }}
      />
      </Content>
      <Footer>
          <FooterTab style={{backgroundColor: "#33ccff"}}>
            <Button onPress={() => navigation.navigate("Perros")}>
              <Icon name="ios-paw"  style={{color: 'black'}}/>
              <Text style={{color: 'black'}}>Mis perros</Text>
            </Button>
            <Button onPress={() => navigation.navigate("Mapas")}>
              <Icon name="ios-pin"  style={{color: 'black'}} />
              <Text  style={{color: 'black'}} >Veterinarios</Text>
            </Button>
            <Button onPress={() => navigation.navigate("Menu")}>
              <Icon name="menu"  style={{color: 'black'}} />
              <Text  style={{color: 'black'}} >Menú</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
  );
}
