import React, { Component } from "react";
import { useState, createContext, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { styles } from "./Styles";

const homeBackground = { uri: "/assets/dddepth-316.jpg" };

export default function HomeScreen({ navigation, user, route}) {
  const {login} = route.params; 


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("./assets/dddepth-316.jpg")}
      >
        <Text style={styles.melodytitle}>Melody Talker</Text>
      
     
      <Button style={styles.homescreenbutton}
      title="Talk to text"
      onPress={() => {navigation.navigate("WordCreator")}}/>
      
      </ImageBackground>
    </View>
  );
}