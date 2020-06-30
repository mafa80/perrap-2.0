import * as React from "react";
import { Avatar, Card,Input, Header} from "react-native-elements";
import { View, StyleSheet, Text, ScrollView,TouchableHighlight, ImageBackground} from "react-native";
import { Footer, FooterTab,Button, Icon, Container,Content,DatePicker} from "native-base";
import imagef from "../assets/images/huellitas.png";

export default function EditarCarnetScreen({ navigation }) {
  const [venfermedad, setText] = React.useState("");
  console.log("Nombre de la enfermedad:", venfermedad);
  const [vvm, setText1] = React.useState("");
  console.log("Nombre de la vacuna o medicamento", vvm);
  const [vdate, setText2] = React.useState("");
  console.log("Fecha", vdate);
  return (
    
<Container>
<ImageBackground source={imagef} style={styles.image}>
    <Content>
  <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Editar', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
   
    <ScrollView>
        <Card
          title="Editar enfermedad y vacuna"
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 0,
          }}
        >
          
         
          <Input
            style={{ padding: 40 }}
            placeholder="Nombre de la enfermedad"
            onChangeText={(venfermedad) => setText(venfermedad)}
            defaultValue={venfermedad}
            
          />
           <Input
            style={{ padding: 40 }}
            placeholder="Nombre de Vacuna/Medicamento"
            onChangeText={(vvm) => setText1(vvm)}
            defaultValue={vvm}
            
          />
         <View style={{justifyContent:"center",alignItems: "center"}}>
        <DatePicker 
            mode="datetime"
            format="YYYY-MM-DD HH:mm"
            miniDate="2020-01-01"
            maxDate="2055-01-01"
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Selecciona Fecha"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            
          />
           </View>
          </Card>
          
       
          <TouchableHighlight style= {styles.button}
         onPress={() => navigation.navigate("Carnet")}
         >
          <Text style ={styles.textButton}>Guardar</Text>
        </TouchableHighlight>
     </ScrollView>
     </Content>
     </ImageBackground>
    <Footer>
        <FooterTab style={styles.colorm}>
          <Button onPress={() => navigation.navigate("Perros")}>
            <Icon name="ios-paw" style ={styles.textom}/>
            <Text style ={styles.textom}>Mis perros</Text>
          </Button>
          <Button onPress={() => navigation.navigate("")}>
            <Icon name="ios-pin" style ={styles.textom}/>
            <Text style ={styles.textom}>Veterinarios</Text>
          </Button>
          <Button onPress={() => navigation.navigate("Menu")} >
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
    flex :1,
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
