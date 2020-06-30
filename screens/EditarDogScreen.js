import * as React from "react";
import { Avatar, Card,Input, Header} from "react-native-elements";
import { View, StyleSheet, Text, ScrollView,TouchableHighlight, ImageBackground} from "react-native";
import { Footer, FooterTab,Button, Icon,} from "native-base";
import imagef from "../assets/images/huellitas.png";
import firebase from "firebase";


export default function EditarDogScreen({ route,navigation }) {

  const {id}  = route.params;
  const {Nombre}  = route.params;
  const {Raza}  = route.params;
  const {Peso}  = route.params;
  const {Edad}  = route.params;

  const [vnom, setText] = React.useState(Nombre);
  console.log("Nombre :", vnom);
  const [vraza, setText1] = React.useState(Raza);
  console.log("Raza", vraza);
  const [vedad, setText2] = React.useState(Edad);
  console.log("Edad", vedad);
  const [vpeso, setText3] = React.useState(Peso);
  console.log("Peso", vpeso);

  function Editar(){
    try{
    firebase
    .firestore()
    .collection("Perro")
    .doc(id)
    .set({
      Nombre: vnom,
      Edad: vedad,
      Raza: vraza,
      Peso: vpeso,
    })
    .then(()=>navigation.navigate("Perros"))
    }
    catch(e){
      console.log(e);
    }
    }

  return (


<View style={styles.container}>
  <ScrollView>
  <View>
  <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Editar datos', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
        <Card
          title="Datos de mi perro"
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
            onChangeText={(Nombre) => setText(Nombre)}
            defaultValue={Nombre}
            Value={vnom}
          />

          <Input
            placeholder="Raza"
            onChangeText={(Raza) => setText1(Raza)}
            defaultValue={Raza}
            Value={vraza}
          />
          <Input
            placeholder="Edad"
            onChangeText={(Edad) => setText2(Edad)}
            defaultValue={Edad}
            Value={vedad}
          />
          <Input
            placeholder="Peso"
            onChangeText={(Peso) => setText3(Peso)}
            defaultValue={Peso}
            Value={vpeso}
          />
          <TouchableHighlight style= {styles.button}
         onPress={() => Editar()}
         >
          <Text style ={styles.textButton}>Guardar cambios</Text>
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
