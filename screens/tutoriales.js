import { View, StyleSheet, ScrollView,ImageBackground,Text,} from "react-native";
import React, { useState } from "react";
import { Card,Header} from "react-native-elements";
import { WebView } from 'react-native-webview';
import {Container,Footer,FooterTab,Icon,Button} from "native-base";
import imagen2 from "../assets/images/cuidadosal.png";
import imagen1 from "../assets/images/cuidadoali.png";
import imagen3 from "../assets/images/cuidadohig.png";
import imagen4 from "../assets/images/cuidadoadi.png";
import imagen5 from "../assets/images/cuidadoent.png";
export default function Tutoriales({ navigation }) {
      const [toggled, toggle] = useState(false);
      const [toggled1, toggle1] = useState(false);
      const [toggled2, toggle2] = useState(false);
      const [toggled3, toggle3] = useState(false);
      const [toggled4, toggle4] = useState(false);
      
      const list = [
      {
        title: "Aqui Van los links Compa y van asi => https://www.youtube.com/embed/dFKhWe2bBkM ",
      },
    ];
    return (
      <Container>
         <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Cuidados basicos', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
        <ScrollView>
       
          <View>

            <Card
              title={ 
                <ImageBackground source={imagen1} style={styles.image}>
                <Button
                  onPress={() => toggle((toggled) => !toggled)}
                  transparent
                  block
                  style={{justifyContent: 'flex-start'}}
                  
                ><Text style={{fontSize: 16,
                  color: 'black',
                 }} >Cuidados de alimentación</Text>
                </Button>
                </ImageBackground>
              }
              cardStyle={{ borderRadius: 80 }}
            >
              
          <View style={{justifyContent:"center"}}>
          {toggled && (
              <>
              {list.map((item, i) => (
                <WebView
                  key={i}
                  style={{ width: 320, height: 230 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'Aqui van los links' }}
                  />
              ))}
              </>
            )}
          </View>
        </Card>

        <Card
              title={
                <ImageBackground source={imagen2} style={styles.image}>
                <Button
                  onPress={() => toggle1((toggled1) => !toggled1)}
                  transparent
                  block
                  style={{justifyContent: 'flex-start'}}
                ><Text style={{fontSize: 16,
                  color: 'black',
                  }} >Cuidados de salud</Text>
                </Button>
                </ImageBackground>
              }
              cardStyle={{ borderRadius: 80 }}
            >
          <View style={{justifyContent:"center"}}>
          {toggled1 && (
              <>
                {list.map((item, i) => (
                <WebView
                  key={i}
                  style={{ width: 320, height: 230 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'Aqui van los links' }}
                  />
              ))}
              </>
            )}
          </View>
        </Card>

        <Card
              title={
                <ImageBackground source={imagen3} style={styles.image}>
                <Button
                  onPress={() => toggle2((toggled2) => !toggled2)}
                  transparent
                  block
                  style={{justifyContent: 'flex-start'}}
                ><Text style={{fontSize: 16,
                  color: 'black',
                  }} >Cuidados de higiene</Text>
                </Button>
                </ImageBackground>
              }
              cardStyle={{ borderRadius: 80 }}
            >
          <View style={{justifyContent:"center"}}>
          {toggled2 && (
              <>
                {list.map((item, i) => (
                <WebView
                  key={i}
                  style={{ width: 320, height: 230 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'Aqui van los links' }}
                  />
              ))}
              </>
            )}
          </View>
        </Card>

        <Card
              title={
                <ImageBackground source={imagen4} style={styles.image}>
                <Button
                  onPress={() => toggle3((toggled3) => !toggled3)}
                  transparent
                  block
                  style={{justifyContent: 'flex-start'}}
                ><Text style={{fontSize: 16,
                  color: 'black',
                }}  >Adiestramiento</Text></Button></ImageBackground>
              }
              cardStyle={{ borderRadius: 80 }}
            >
          <View style={{justifyContent:"center"}}>
          {toggled3 && (
              <>
                {list.map((item, i) => (
                <WebView
                  key={i}
                  style={{ width: 320, height: 230 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'Aqui van los links' }}
                  />
              ))}
              </>
            )}
          </View>
        </Card>

        <Card
              title={
                <ImageBackground source={imagen5} style={styles.image}>
                <Button
                  onPress={() => toggle4((toggled4) => !toggled4)}
                  transparent
                  block
                  style={{justifyContent: 'flex-start'}}
                ><Text style={{fontSize: 16,
                  color: 'black',
                  }} >Ejercicio</Text></Button></ImageBackground>
              }
              cardStyle={{ borderRadius: 80 }}
            >
          <View style={{justifyContent:"center"}}>
          {toggled4 && (
              <>
                {list.map((item, i) => (
                <WebView
                  key={i}
                  style={{ width: 320, height: 230 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'Aqui van los links' }}
                  />
              ))}
              </>
            )}
          </View>
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
      </Container>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
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
    
  },
});