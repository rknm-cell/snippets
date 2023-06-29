import React, { Component } from "react";
import { useState, createContext, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
} from "react-native";

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
        <Text style={styles.title}>Home Screen</Text>
        {login ? <View><Button style={styles.button}
        title="Frames"
        onPress={() => {navigation.navigate("FrameContainerScreen")}}/>
        <Button style={styles.button}
        title="Edit Frames"
        onPress={() => {navigation.navigate("FrameEditScreen")}}/>
        <Button style={styles.button}
        title="Create a Frame"
        onPress={() => {navigation.navigate("FrameCreator")}}/>
        <Button style={styles.button}
        title="Create a button"
        onPress={() => {navigation.navigate("WordCreator")}}/></View> : <Button
        style={styles.button}
        title="Login"
        onPress={() => {navigation.navigate("Login")}}
      /> }
      {/* <Button style={styles.button}
      title="Words"
      onPress={() => {navigation.navigate("WordContainerScreen"), {words}}}/> */}
      {/* <Button style={styles.button}
      title="Frames"
      onPress={() => {navigation.navigate("FrameContainerScreen")}}/>
      <Button style={styles.button}
      title="Edit Frames"
      onPress={() => {navigation.navigate("FrameEditScreen")}}/>
      <Button style={styles.button}
      title="Create a Frame"
      onPress={() => {navigation.navigate("FrameCreator")}}/>
      <Button style={styles.button}
      title="Create a button"
      onPress={() => {navigation.navigate("WordCreator")}}/> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    padding: 25,
    position: "relative",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  background: {
    height: 1000,
    width: 1000,
    
    justifyContent: "center",
    flex: 1,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 15,
    
    
  },
});
