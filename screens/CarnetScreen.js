import * as React from "react";
import {
  Container,
  Content,
  View,
  Footer,
  Button,
  Icon,
  FooterTab,
  Form,
} from "native-base";
import { Card, Divider,Header,ListItem,Input, } from "react-native-elements";
import { StyleSheet, ScrollView,TouchableHighlight,Text} from "react-native";
import { DataTable } from "react-native-paper";
import { LineChart, Grid,Path,XAxis, YAxis,} from "react-native-svg-charts";

const list = [
  {
    enfermedad: "colitis",
    vacuna:"paracetamol",
    fecha: "05/05/2020",
  },
  {
    enfermedad: "colitis",
    vacuna:"paracetamol",
    fecha: "05/05/2020",
  },
  
];

export default function carnet({ navigation }) {
  const [vraza, setText] = React.useState("");
  console.log("Raza", vraza);
  var data1=[]
  var data2=[]
  var data3=[]
  var data4=[]
  var data5=[]
  var data6=[]
  if (vraza==="Chihuahua"){
   
    data1[0]=85;
    data1[1]=269;
    data1[2]=454;
    data1[3]=594;
    data1[4]=706;
    data1[5]=846;
    data1[6]=958;
    data1[7]=1070;
    data1[8]=1210;
    data1[9]=1322;
    data1[10]=1434;
    data1[11]=1574;
    data1[12]=1686;
    
    data2[0]=156;
    data2[1]=595;
    data2[2]=936;
    data2[3]=1076;
    data2[4]=1188;
    data2[5]=1328;
    data2[6]=1440;
    data2[7]=1552;
    data2[8]=1692;
    data2[9]=1804;
    data2[10]=1916;
    data2[11]=2056;
    data2[12]=2168;
          
     }
     if (vraza==="Pug"){
      data1[0]=200;
      data1[1]=400;
      data1[2]=900;
      data1[3]=1511;
      data1[4]=2000;
      data1[5]=2555.5;
      data1[6]=3000;
      data1[7]=3444.4;
      data1[8]=4000;
      data1[9]=4444.4;
      data1[10]=4888.8;
      data1[11]=5444.4;
      data1[12]=6000;
      
      data2[0]=400;
      data2[1]=800;
      data2[2]=1800;
      data2[3]=2410.5;
      data2[4]=3000;
      data2[5]=4111;
      data2[6]=5000;
      data2[7]=5444.4;
      data2[8]=6272;
      data2[9]=7014;
      data2[10]=7756;
      data2[11]=8663.5;
      data2[12]=9425.5;
    
     }

     if (vraza==="Yorkshire terrier"){
      data1[0]=70.8;
      data1[1]=226.8;
      data1[2]=340.2;
      data1[3]=482;
      data1[4]=595.35;
      data1[5]=708.7;
      data1[6]=765.4;
      data1[7]=878.8;
      data1[8]=1020.6;
      data1[9]=1134;
      data1[10]=1219;
      data1[11]=1332.4;
      data1[12]=1445.8;
      
      data2[0]=99.2;
      data2[1]=340.2;
      data2[2]=538.6;
      data2[3]=850.5;
      data2[4]=1077.3;
      data2[5]=1360.8;
      data2[6]=1587.6;
      data2[7]=1814.4;
      data2[8]=2097.9;
      data2[9]=2324.7;
      data2[10]=2551.5;
      data2[11]=2835;
      data2[12]=3061.8;
    
     }
     if (vraza==="Schnauzer"){
      data1[0]=700;
      data1[1]=1400;
      data1[2]=2800;
      data1[3]=5600;
      data1[4]=11200;
      data1[5]=22400;
      data1[6]=22550;
      data1[7]=22700
      data1[8]=22850;
      data1[9]=23000;
      data1[10]=23150;
      data1[11]=24900;
      data1[12]=25000;
      
      data2[0]=900;
      data2[1]=1800;
      data2[2]=3900;
      data2[3]=8100;
      data2[4]=16500;
      data2[5]=33000;
      data2[6]=33200;
      data2[7]=33400;
      data2[8]=33600;
      data2[9]=33800;
      data2[10]=34000;
      data2[11]=34200;
      data2[12]=34600;
//mediano
      data3[0]=400;
      data3[1]=800;
      data3[2]=1600;
      data3[3]=3200;
      data3[4]=6400;
      data3[5]=12800;
      data3[6]=12950;
      data3[7]=13100;
      data3[8]=13250;
      data3[9]=13400;
      data3[10]=13550;
      data3[11]=13700;
      data3[12]=13850;
      
      data4[0]=550;
      data4[1]=1100;
      data4[2]=2200;
      data4[3]=4400;
      data4[4]=8800;
      data4[5]=17600;
      data4[6]=17750;
      data4[7]=17900;
      data4[8]=18050;
      data4[9]=18200;
      data4[10]=18350;
      data4[11]=18500;
      data4[12]=18650;
//pequeño

      data5[0]=113.4;
      data5[1]=226.8;
      data5[2]=453.6;
      data5[3]=907.2;
      data5[4]=1814.45;
      data5[5]=3628.8;
      data5[6]=4989.5;
      data5[7]=5089.5
      data5[8]=5189.5;
      data5[9]=5289.5;
      data5[10]=5389.5;
      data5[11]=5489.5;
      data5[12]=5589.5;
      
      data6[0]=453.6;
      data6[1]=907.2;
      data6[2]=1814.4;
      data6[3]=3628.8;
      data6[4]=7257.6;
      data6[5]=7357.6;
      data6[6]=8164.6;
      data6[7]=8264.6;
      data6[8]=8364.6;
      data6[9]=8464.6;
      data6[10]=8564.6;
      data6[11]=8664.6;
      data6[12]=8764.6;



      
    
     }
           
 
    
  
    const data = [
      {
          data: data1,
          svg: { stroke: 'pink' },
      },
      {
          data: data2,
          svg: { stroke: 'blue' },
      },
        {
          data: data3,
          svg: { stroke: 'purple' },
      },
      {
          data: data4,
          svg: { stroke: 'green' },
      },
      {
        data: data5,
        svg: { stroke: 'red' },
    },
    {
      data: data6,
      svg: { stroke: 'black' },
  },
 
  ]

  const axesSvg = { fontSize:6, fill: 'black' };
  const verticalContentInset = { top: 2, bottom: 2 }
  const xAxisHeight = 1
  
  return (
    <Container style ={styles.container}>
       <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Carnet', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
       <Content >
        <ScrollView>  
        <Card containerStyle={{backgroundColor: "#ffffff",borderRadius:5,}}>
          <Text>
            Nombre del perro:{/*Aqui va el nombre del perro, cainal */}
          </Text>
          <Text>Raza:{/*Aqui va la raza cainal segun alonso */}
          </Text>
          <Input
            style={{ padding: 40 }}
            placeholder="Raza"
            onChangeText={(vraza) => setText(vraza)}
            defaultValue={vraza}
          />
        </Card>
        <Text style ={{backgroundColor:'skyblue',}}></Text>
        <Card
          title="Proyeccion de crecimiento"
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 5,
          }}
        >
          <View style={{ height: 320, padding:3, flexDirection: 'row' }}>
                <YAxis
                    data={data2}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    numberOfTicks={25}
                    formatLabel={(value) => `${value}g`}
                />
                <View style={{ flex: 1, marginLeft:5 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data1}
                        formatLabel={(value, index) => index+"sem"}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>


           
        </Card>
        
       
            {/* aqui va el map segun omaña */}
            <Text style ={{backgroundColor:'skyblue',}}></Text>
              
             <Card title="Enfermedades y vacunas" containerStyle={{alignItems:"stretch", borderRadius:5,}} >
              
           
            <TouchableHighlight style= {styles.button}
              onPress={() => navigation.navigate("AgregarDogScreen")}>
              <Text style ={styles.textButton}>Agregar nuevo dato</Text>
              </TouchableHighlight>      
                         
              {               
                 list.map((l, i) => {
                  return (
                  <ListItem
                    key={i}
                    title={l.enfermedad}
                    subtitle={"Vacuna: "+l.vacuna+ "  "+ l.fecha}
                    rightIcon= { <> 
                      <Icon  name="md-close-circle" style={{color: 'skyblue'}} onPress={() => navigation.navigate("Tutoriales")}/>
                      <Icon  name="md-create" style={{color: 'skyblue'}} onPress={() => navigation.navigate("Carnet")}/></>}
                  />
                  );
                })
              }          
          </Card>
            </ScrollView>
            </Content> 
           
      <Footer>
          <FooterTab style={{backgroundColor: "#33ccff"}}>
            <Button onPress={() => navigation.navigate("Perros")}>
              <Icon name="ios-paw"  style={{color: 'black'}}/>
              <Text style={{color: 'black'}}>Mis perros</Text>
            </Button>
            <Button onPress={() => navigation.navigate("")}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding:2,
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
    marginTop:6,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth:1
  },
  textButton:{
    textAlign:'center',
    color:'white',
  },
});