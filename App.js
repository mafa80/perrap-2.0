import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AgregarDogScreen,
  CalendarioScreen,
  LinksScreen,
  LoadingScreen,
  Login,
  MapsScreen,
  MenuScreen,
  PerfilScreen,
  TestScreen,
  Tutoriales,
  CarnetScreen,
  RecScreen,
  AgregarCarnetScreen,
  EditarDogScreen,
  AgregarRecordatorio,
} from "./screens/Screens";

import { firebaseConfig } from "./constants/ApiKeys";
import * as firebase from "firebase";
const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Test" 
            component={TestScreen} 
            options={{  headerShown: false}}
            />
            <Stack.Screen 
            name="AgregarRecordatorio" 
            component={AgregarRecordatorio} 
            options={{  headerShown: false}}
            />
            <Stack.Screen
              name="Perros"
              component={LinksScreen}
              options={{headerShown: false}}
              />
            <Stack.Screen
              name="Loading"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mapas"
              component={MapsScreen}
              options={{headerShown: false}}
              />
            <Stack.Screen
              name="Carnet"
              component={CarnetScreen}
              options={{headerShown: false}}
              />
            <Stack.Screen
              name="Menu"
              component={MenuScreen}
              options={{ headerShown: false }}  
            />

            <Stack.Screen
              name="AgregarDogScreen"
              component={AgregarDogScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Calendario" 
              component={CalendarioScreen}
              options={{ headerShown: false }} 
            />

            <Stack.Screen 
              name="Tutoriales" 
              component={Tutoriales}
              options={{ headerShown: false }}
            />

            <Stack.Screen 
              name="Perfil" 
              component={PerfilScreen} 
              options={{ headerShown: false }}
            />

            <Stack.Screen 
              name="Recordatorio" 
              component={RecScreen}
              options={{ headerShown: false }}
             />
             
             <Stack.Screen 
              name="AgregarCarnetScreen" 
              component={AgregarCarnetScreen}
              options={{ headerShown: false }}
             />
             <Stack.Screen 
              name="EditarDogScreen" 
              component={EditarDogScreen}
              options={{ headerShown: false }}
             />

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33ccff",
  },
});
