import * as React from "react";
import { Avatar, Card,Input, Header} from "react-native-elements";
import { View, StyleSheet, Text, ScrollView,TouchableHighlight, ImageBackground} from "react-native";
import { Footer, FooterTab,Button, Icon,} from "native-base";
import imagef from "../assets/images/huellitas.png";
import firebase from "firebase";

export default function AgregarDogScreen({ navigation }) {
  const [vnom, setText] = React.useState("");
  console.log("Nombre :", vnom);
  const [vraza, setText1] = React.useState("");
  console.log("Raza", vraza);
  const [vedad, setText2] = React.useState("");
  console.log("Edad", vedad);
  const [vpeso, setText3] = React.useState("");
  console.log("Peso", vpeso);
//navigation.navigate("Agregarcarnet"),
 function addPerr() {
  try{
    firebase
      .firestore()
      .collection("Perro")
      .add({
        Nombre:vnom,
        Raza:vraza,
        Edad:vedad,
        Peso:vpeso
      })
      .then(()=>navigation.navigate("Perros"));
  }catch (e) {
    
    }
  }
  return (
<View style={styles.container}>
<ScrollView>
  <View>
  <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Agregar nuevo perro', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
        <Card
          title="Nuevo perro"
          containerStyle={{
            ba3ckgroundColor: "#ffffff",
            borderRadius: 0,
          }}
        >
          <ImageBackground source={imagef} style={styles.image}>
          <View style={{ alignItems: "center", padding: 40 }}>
            <Avatar rounded size="xlarge" showEditButton />
          </View>

          <Input
            style={{ padding: 40 }}
            placeholder="Nombre"
            onChangeText={(vnom) => setText(vnom)}
            value={vnom}
          />

          <Input
            placeholder="Raza"
            onChangeText={(vraza) => setText1(vraza)}
            value={vraza}
          />
          <Input
            placeholder="Edad"
            onChangeText={(vedad) => setText2(vedad)}
            value={vedad}
          />
          <Input
            placeholder="Peso"
            onChangeText={(vpeso) => setText3(vpeso)}
            Value={vpeso}
          />
          <TouchableHighlight style= {styles.button}
         onPress={() => addPerr()}>
          <Text style ={styles.textButton}>Guardar</Text>
        </TouchableHighlight>
        </ImageBackground>
          </Card>
          </View>
     </ScrollView>
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
          <Button onPress={() => navigation.navigate("Menu")} >
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
