import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  DatePicker,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";

import { Text } from "react-native";

export default class CalendarioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Content>
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
            onDateChange={this.setDate}
            disabled={false}
          />

          <Text>Fecha: {this.state.chosenDate.toString().substr(4, 12)}</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active
              onPress={() => this.props.navigation.navigate("Perros")}
            >
              <Icon name="ios-paw" />
              <Text>Mis perros</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Mapas")}>
              <Icon name="map" />
              <Text>Veterinarios</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Menu")}>
              <Icon name="menu" />
              <Text>Menu</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
