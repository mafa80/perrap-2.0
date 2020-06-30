import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

export default function HeaderStyled(nombre) {
  console.log(nombre.children);

  const value = nombre.children;

  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: value, style: { color: "#fff" } }}
      containerStyle={{
        backgroundColor: "#DBA901",
        justifyContent: "space-around"
      }}
    />
  );
}
