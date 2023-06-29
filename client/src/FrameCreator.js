import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  
  ImageBackground,
} from "react-native";
import WordContainerScreen from "./WordContainerScreen";
import { Formik } from "formik";
import { TextInput } from "react-native-web";
// import { TextInput } from "react-native-web";
export default function FrameCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frame, setFrame] = useState([])
  
  const handleCreateFrame = () => {
    console.log("Created frame");
    
    fetch("http://127.0.0.1:5555/frames", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setFrame(data);
        });
        navigation.navigate(`FrameContainerScreen`)
    }
  
  return (
    <Formik>
      <View style={styles.container}>
        
        <TextInput
          style={styles.input}
          placeholder="Frame Name"
          onChangeText={(text) => setName(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
        />
        <Button style={styles.button} title="Submit" onPress={handleCreateFrame} />
      </View>
    </Formik>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    borderRadius: 25,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    flex: 1
  },
  input: {
    textAlign: "center",
    fontSize: 25,
    padding: 0,
    width: 300,
    height: 50,
    
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    
    
    marginVertical: 10
  },
  button: {
    flex: 1,
    width: 10,
    height: 25,
    fontSize: 15
    
  }
});
