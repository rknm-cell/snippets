import React, { Component } from "react";
import { useState, createContext, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";

const homeBackground = { uri: "/assets/dddepth-316.jpg" };

export default function HomeScreen({ navigation, user, route}) {
  const {login} = route.params; 


  return (
    <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("./assets/dddepth-316.jpg")}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.melodytitle}>Melody Talker</Text>
          
          <TouchableOpacity 
            style={styles.homescreenbutton}
            onPress={() => {navigation.navigate("WordCreator")}}
          >
            <Text style={styles.buttonText}>Talk to text</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  );
}