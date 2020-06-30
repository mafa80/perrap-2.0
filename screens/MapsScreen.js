import React from "react";
import MapView,{Marker, Polygon} from "react-native-maps";
import { Header } from "react-native-elements";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";

var mapStyle = [
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#76aee3"
          },
          {
              "saturation": 38
          },
          {
              "lightness": -11
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#8dc749"
          },
          {
              "saturation": -47
          },
          {
              "lightness": -17
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#c6e3a4"
          },
          {
              "saturation": 17
          },
          {
              "lightness": -2
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#cccccc"
          },
          {
              "saturation": -100
          },
          {
              "lightness": 13
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#5f5855"
          },
          {
              "saturation": 6
          },
          {
              "lightness": -31
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#ffffff"
          },
          {
              "saturation": -100
          },
          {
              "lightness": 100
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": []
  }
]

export default class MapsScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    cordenadas : [
      {name: '1', latitude:19.448794,   longitude:-99.134292 },
      {name: '2', latitude:19.452740,  longitude: -99.146029  },
      {name: '3', latitude:19.437908,   longitude:  -99.149184},
      {name: '4', latitude:19.436006,    longitude:-99.140600  },
    ]
    
  };
  Menu = () => {
    this.props.navigation.navigate("Menu");
  };
  Mapas = () => {
    this.props.navigation.navigate("Mapas");
  };
  Perros = () => {
    this.props.navigation.navigate("Perros");
  };
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status != "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log("Error:", error)
    );

    const {locations: [sampleLocation]} = this.state
  }

  getUrlWithParameters(latitude, longitude, API) {
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const localitation = `location=${latitude},${longitude}&radius=500`;
    const typeData = `&types=veterinario`;
    const key = `&key=AIzaSyCnebIjn396xPqbd0Gz5CjwV9BtU-YEz5A`;
  }

  render() {
    const key = "AIzaSyCnebIjn396xPqbd0Gz5CjwV9BtU-YEz5A";
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <View style={{ flex: 1 }}>
          <Header
          placement="center"
          leftComponent={{ icon: 'pets', color: '#000000'}}
          centerComponent={{ text: 'Veterinarios', style: { color: 'black',fontSize: 20, } }}
          containerStyle={{
            backgroundColor: "#ffffff",
            justifyContent: 'space-around',
            paddingTop:1,
          }}
        />
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{ 
            latitude: 19.446063, 
            longitude: -99.147145,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
          provider= {MapView.PROVIDER_GOOGLE}
          customMapStyle= {mapStyle}
        >
          <Polygon
          coordinates={this.state.cordenadas  }
          />
        <Marker
        coordinate= {{latitude:19.446589,  longitude:-99.145621}}
        title= {'Veterinaria canito'}>
        </Marker>
        <Marker
        coordinate= {{latitude:19.443250,   longitude:-99.141083}}
        title= {'Veterinaria Bombón'}>
        </Marker>
        <Marker
        coordinate= {{latitude:19.443534,   longitude: -99.144012}}
        title= {'Golden Pets, Veterinaria, Estética y Boutique'}>
        </Marker>
        <Marker
        coordinate= {{latitude:19.445608,    longitude:-99.145793}}
        title= {'Clínica Veterinaria Caramelo'}>
        </Marker>
        <Marker
        coordinate= {{latitude:19.452375,   longitude: -99.145858}}
        title= {'Clinica Veterinaria de Ssanchez López Rafael'}>
        </Marker>
        </MapView>
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
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text> no tengo acceso a tu ubicación </Text>
        <Content />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});