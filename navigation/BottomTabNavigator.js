import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Text from "react-native";
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return <Text>Hola</Text>;
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Links":
      return "Mis perros";
    case "Menu":
      return "Menu";
    case "Veterinario":
      return "Veterinario";
  }
}
