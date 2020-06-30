import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ListItem, Card } from "react-native-elements";

export default function CardAcord(name) {
  const [toggled, toggle] = useState(false);
  const list = [
    {
      title: "Video 1",
    },
    {
      title: "Video 2",
    },
  ];
  const titulo = name.children;
  return (
    <View>
      <Card
        title={
          <Button
            title={titulo}
            onPress={() => toggle((toggled) => !toggled)}
          ></Button>
        }
        cardStyle={{ backgroundColor: "red", borderRadius: 80 }}
      >
        <View>
          {toggled && (
            <>
              {list.map((item, i) => (
                <ListItem key={i} title={item.title} bottomDivider chevron />
              ))}
            </>
          )}
        </View>
      </Card>
    </View>
  );
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
  containerCard: {
    backgroundColor: "red",
    borderRadius: 80,
  },
});
