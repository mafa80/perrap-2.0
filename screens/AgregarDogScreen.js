import * as React from "react";
import { Avatar, Card,Input, Header} from "react-native-elements";
import { View, StyleSheet, Text, ScrollView,TouchableHighlight, ImageBackground} from "react-native";
import { Footer, FooterTab,Button, Icon,} from "native-base";
import imagef from "../assets/images/huellitas.png";
import firebase from "firebase";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


function generateUUID() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}



export default function AgregarDogScreen({ navigation }) {
  const [vnom, setText] = React.useState("");
  const [image, setImage] = React.useState("");
  console.log("Nombre :", vnom);
  const [vraza, setText1] = React.useState("");
  console.log("Raza", vraza);
  const [vedad, setText2] = React.useState("");
  console.log("Edad", vedad);
  const [vpeso, setText3] = React.useState("");
  console.log("Peso", vpeso);
//navigation.navigate("Agregarcarnet"),
function uploadImage(uri)  {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onerror = reject;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.response);
      }
    };

    xhr.open("GET", uri);
    xhr.responseType = "blob";
    xhr.send();
  });
};
const aydi = generateUUID()
async function openGallery(){
  console.log('galeria abridA');
  const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if (result){
    const resultImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3]
    })
    
    if(resultImage.cancelled === false){
      const imageUri = resultImage.uri
      uploadImage(imageUri)
      .then(resolve =>{
        let ref = firebase.storage().ref().child(`images/${aydi}`);
        ref.put(resolve).then(resolve =>{
          console.log('imagen subido bien :D');
          loadImage()
        }).catch(E =>{
          console.log('error : ',E);
          
        })
        
      }).catch(error =>{
        console.log('error al subir la imagen');
        
      })
      console.log(imageUri);
      
    }
  }
  
}

async function loadImage(){
  firebase.storage().ref(`images/${aydi}`).getDownloadURL().then(resolve =>{
    setImage(resolve)
    
  }).catch(E =>{
    console.log(E);
    
  })

}


 function addPerr() {
  try{
    firebase
      .firestore()
      .collection("Perro")
      .add({
        Nombre:vnom,
        Raza:vraza,
        Edad:vedad,
        Peso:vpeso,
        Foto: image
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
            backgroundColor: "#ffffff",
            borderRadius: 0,
          }}
        >
          <ImageBackground source={{imagef}} style={styles.image}>
          <View style={{ alignItems: "center", padding: 40 }}>
            <Avatar rounded size="xlarge" showEditButton source={{uri:image}} onEditPress={openGallery} />
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
