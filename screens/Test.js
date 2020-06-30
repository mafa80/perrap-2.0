import {Header } from "react-native-elements";
import { Alert,TouchableHighlight, Text, View, StyleSheet, ScrollView, Image } from "react-native";
7;

import React, { useState } from "react";
import imagen from "../assets/images/examen.png";
import imagen1 from "../assets/images/casa.png";
import imagen2 from "../assets/images/time.png";
import imagen3 from "../assets/images/bebe.png";
import imagen4 from "../assets/images/actividad.png";
import imagen5 from "../assets/images/caracter.png";
import imagen6 from "../assets/images/nose.png";
import imagen7 from "../assets/images/ruido.png";
import imagen8 from "../assets/images/cepillado.png";
import {
  Container,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  Button,
  
} from "native-base";

export default function TestScreen() {
  const [resp1, setText1] = useState(" ");
  const [resp2, setText2] = useState(" ");
  const [resp3, setText3] = useState(" ");
  const [resp4, setText4] = useState(" ");
  const [resp5, setText5] = useState(" ");
  const [resp6, setText6] = useState(" ");
  const [resp7, setText7] = useState(" ");
  const [resp8, setText8] = useState(" ");
        
    
  const perro = () => {
    var respuestas = [
      resp1,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7,
      resp8,
    ];
    
      if (resp1===" " || resp2===" " || resp3===" " || resp4===" " || resp5===" " || resp6===" " || resp7===" " || resp8===" "){
        Alert.alert("Te falta seleccionar la respuesta")
        
     }
      else {
         var contador=0;
        for(var i = 0; i < respuestas.length; i++) {
            if (respuestas[i]=== "a"){
                contador++ 
              }
            }
        if (contador ===0 ||contador ===1 || contador===2){
          Alert.alert('Tu perro ideal es',
            "UN SCHNAUZER GRANDE !!!")
            }
        if (contador ===3){
          Alert.alert('Tu perro ideal es',
            "UN CHIHUAHUA !!!")
            }
        if (contador===4 || contador===5){
          Alert.alert('Tu perro ideal es',
            "UN SCHNAUZER PEQUEÑO O MEDIANO !!!")
                }
        
        if (contador===6){
          Alert.alert('Tu perro ideal es',
            "UN PUG !!!")
               }        
          
        if (contador===7 || contador===8){
          Alert.alert('Tu perro ideal es',
            "UN YORKSHIE TERRIER!!!")
                } 
        
        }         
 
    console.log(respuestas);
  };

  return (
    <Container style ={styles.container}>
      <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Test', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
      <Image source={imagen} style={styles.image} />
      <Text ></Text>
      <Text style={styles.titulo}> Contesta las siguientes preguntas
         </Text>
      <Content >
        <Form >
        <Text></Text>
        <Text style ={styles.esp}></Text>
        <Text></Text>
        <Image source={imagen1} style={styles.image} />
          <Text style ={styles.texto}>¿Cómo es tu hogar?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp1}
              onValueChange={(resp1) => setText1(resp1)}
            >
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Apartamento (menos de 60m2)" value="a" />
              <Picker.Item label="Casa (más de 60m2)" value="b" />
            </Picker>
          </Item>
         
            <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
          <Image source={imagen2} style={styles.image} />
          <Text style ={styles.texto} >¿Cuantas horas estas fuera de casa?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp2}
              onValueChange={(resp2) => setText2(resp2)}
            >
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Menos de 5 horas" value="a" />
              <Picker.Item label="Más de 5 horas" value="b" />
            </Picker>
          </Item>
          <Text></Text>
          <Text style ={styles.esp}></Text>
          <Text></Text>
          <Image source={imagen3} style={styles.image} />
          <Text style ={styles.texto}>¿Hay niños pequeños en el hogar?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp3}
              onValueChange={(resp3) => setText3(resp3)}
            >
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b"/>
            </Picker>
          </Item>
          <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
            <Image source={imagen4} style={styles.image} />
          <Text style ={styles.texto}>¿Cuál es el motivo de que quieras adquirir un perro?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              selectedValue={resp4}
              onValueChange={(resp4) => setText4(resp4)}
            >
               <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Para que me haga compañia" value="a" />
              <Picker.Item label="Para hacer actividades" value="b" />           
            </Picker>
          </Item>
          <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
            <Image source={imagen5} style={styles.image} />
          <Text style ={styles.texto}>¿Cómo quieres que sea el carácter de tu perro?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp5}
              onValueChange={(resp5) => setText5(resp5)}
            >
               <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Amigable" value="a" />
              <Picker.Item label="Guardián" value="b" />
            </Picker>
          </Item>
          <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
            <Image source={imagen6} style={styles.image} />
          <Text style ={styles.texto}>¿Te molesta el pelo de los animales?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp6}
              onValueChange={(resp6) => setText6(resp6)}
            >
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b" />
            </Picker>
          </Item>
          <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
            <Image source={imagen7} style={styles.image} />
          <Text style ={styles.texto}>¿Te molesta el ruido?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp7}
              onValueChange={(resp7) => setText7(resp7)}
            >
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b" />
            </Picker>
          </Item>
          <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
            <Image source={imagen8} style={styles.image} />
          <Text style ={styles.texto}>¿Cada cuando cepillarías el pelo de tu perro?</Text>
          <Item picker>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholderIconColor="#007aff"
              selectedValue={resp8}
              onValueChange={(resp8) => setText8(resp8)}
            >  
              <Picker.Item label="Selecciona tú respuesta" value=" " />
              <Picker.Item label="Diariamente" value="a" />
              <Picker.Item label="Semanalmente" value="b" />
            </Picker>
          </Item>
        </Form>
        <Text></Text>
            <Text style ={styles.esp}></Text>
            <Text></Text>
        <TouchableHighlight style= {styles.button}
          onPress={perro}> 
          <Text style ={styles.textButton}>Ver resultado</Text>
        </TouchableHighlight>
      </Content>
    </Container>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    height: 135,
    width: "100%",
    marginLeft: "0%",
    marginRight: "2%",
    paddingTop: "15%",
    borderRadius: 3,
  },
  texto: {
    fontSize: 20,
    color: 'black',

  },
  esp:{
    backgroundColor:'skyblue',
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
  titulo: {
    fontSize: 30,
    color: 'black',
    textAlign:'center',

  },
});