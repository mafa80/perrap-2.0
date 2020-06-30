import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React,{useState,useEffect} from "react";
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
} from "native-base";


function useData() {
  try{
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
  catch(e){
    console.log(e);
  }
}

const deteleteData = (i) => () => {
  try{
    console.log(i);
    firebase
      .firestore()
      .collection("Perro")
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

export default function LinksScreen({route, navigation}) {
  const user = route.params.providerData;
  if(user){
    console.log('====================================');
    
     firebase
      .firestore()
      .collection("users").where('gmail','==',user[0].email).get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
    
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
  
    console.log('====================================');
  }
  else{ 
    console.log('====================================');
    console.log('no existe el usuario');
    console.log('====================================');
  }
  
  const datas = useData();
  console.log(datas);
  
  if (datas) {
    console.log("que onda rza");
  } else {
    console.log("que onda rza  enn else");
  }

  
  return (
    <View style={styles.container}>       
      <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Mis perros', style: { color: 'black',fontSize: 20, } }}
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
         onPress={() => navigation.navigate("AgregarDogScreen")}>
        <Text style ={styles.textButton}>Agregar nuevo perro</Text>
        </TouchableHighlight>
            {/* aqui va el map */}

            {datas.map((datas, i) => (
              <Card
                key={i}
                title={datas.Nombre}
                containerStyle={{
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  alignContent:"center",
                }}
              >
                
                <View style={{ flexDirection: "row" }}>
                <Avatar size="large" source={{ uri: datas.Imagen }} rounded/>

                </View>  
                <View style={{alignItems:"center",alignSelf:"center",marginTop:-70,}}>
                    <Text onPress={() => navigation.navigate('Carnet', {id: datas.id})}>{"Edad: "+datas.Edad} </Text>
                    <Text onPress={() => navigation.navigate('Carnet', {id: datas.id})}>{"Raza: "+datas.Raza} </Text>
                    <Text onPress={() => navigation.navigate('Carnet', {id: datas.id})}>{"Peso: "+datas.Peso} </Text>
                    
                  </View >  
                  <View style={{ alignItems: "center",justifyContent:"center",marginTop:-70}}>
                  <Button style= {{ backgroundColor:'white', alignSelf:"flex-end",justifyContent:"center"}} onPress={deteleteData(datas.id)}>
                  <Icon name="md-close-circle"  style={{color: 'skyblue'}}/>
                  </Button>  
                  <Button style= {{ backgroundColor:'white',alignSelf:"flex-end",justifyContent:"center"}} onPress={() => {navigation.navigate('EditarDogScreen', {id: datas.id,Nombre: datas.Nombre,Raza: datas.Raza,Peso: datas.Peso,Edad: datas.Edad});}}>
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