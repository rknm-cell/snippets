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
  // const login = user ? true : false
  const {login} = route.params; 

// console.log(words)

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("./assets/dddepth-316.jpg")}
      >
        <Text style={styles.title}>Melody Talker</Text>
        
      <Button style={styles.homescreenbutton}
      title="Frames"
      onPress={() => {navigation.navigate("FrameContainerScreen")}}/>
      
     
      <Button style={styles.homescreenbutton}
      title="Talk to text"
      onPress={() => {navigation.navigate("WordCreator")}}/>
      
      </ImageBackground>
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
    
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 30,
//     padding: 25,
//     position: "relative",
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   background: {
//     height: 1000,
//     width: 1000,
    
//     justifyContent: "center",
//     flex: 1,
//   },
//   button: {
//     flex: 1,
//     marginVertical: 8,
//     width: 15,
    
    
//   },
// });
