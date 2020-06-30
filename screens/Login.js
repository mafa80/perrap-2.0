import { View, Text, StyleSheet, ImageBackground, Button,Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

import imagef from "../assets/images/huellitas.png";
import imagen from "../assets/images/splash.png";
const ANDROID_CLIENT_ID =
  "948490764552-qppb70nqjtmgu8p7urkh5scipk8v3hd4.apps.googleusercontent.com";

import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  if(user) {
    this.Perfil();
  }

  Test = () => {
    this.props.navigation.navigate("Test");
  };
  Perfil = () => {
    this.props.navigation.navigate("Menu");
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = (googleUser) => {
    console.log("Google Auth Response");
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          console.log("entro  al is user equal");

          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          console.log("entro  al credencials"),
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(function (result) {
                console.log("user signed in ");
                if (result.additionalUserInfo.isNewUser) {
                  firebase
                    .firestore()
                    .collection("/users/" )
                    .add({
                      id: result.user.uid,
                      gmail: result.user.email,
                      profile_picture:
                        result.additionalUserInfo.profile.picture,
                      first_name: result.additionalUserInfo.profile.given_name,
                      last_name: result.additionalUserInfo.profile.family_name,
                      created_at: Date.now(),
                    })
                    .then(function (snapshot) {
                      // console.log('Snapshot', snapshot);
                    });
                } else {
                  firebase
                    .firestore()
                    .collection("/users/" + result.user.uid)
                    .update({
                      last_logged_in: Date.now(),
                    });
                }
              })

               
                  
    
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.onSignIn(result);
        this.props.navigation.navigate("Loading", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
      return { error: true };
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fffff" }}>
        <ImageBackground source={imagef} style={styles.image}>
        <View style={styles.container}>
        <Image source={imagen} style={styles.image2} />
          <View>
            <SocialIcon
              title="Ingresar con cuenta de Facebook"
              style={{ backgroundColor: "#0174DF90" }}
              button
              type="facebook"
              onPress={this.Perfil}
            />

            <SocialIcon
              title="Ingresar con cuenta de Google"
              style={{ backgroundColor: "#FF400090" }}
              button
              type="google"
              onPress={this.signInWithGoogle}
            />
          </View>
          <View style={styles.containerRegister}>
            <Text style={{ color: "black", fontWeight: "bold",fontSize: 15 }}>
              Descubre que perro es ideal para ti.
              <Text
                style={{ color: "skyblue", fontWeight: "bold" }}
                onPress={this.Test}
              >
                {" "}
                Aqui
              </Text>
            </Text>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  containerSignIn: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "2%",
    borderRadius: 100,
  },
  containerUserName: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 80,
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 100,
  },
  containerRegister: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "transparent",
    flex: 5,
    color: "gray",
    paddingLeft: "25%",
  },
  boton: {
    borderRadius: 100,
    flex: 3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image2: {
    height: 300,
    width: "100%",
    marginLeft: "0%",
    marginRight: "2%",
    paddingTop: "15%",
    borderRadius: 3,
  },
});
