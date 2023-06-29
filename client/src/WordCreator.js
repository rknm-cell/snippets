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
export default function WordCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [word, setWord] = useState([])
  
  const handleCreateWord = () => {
    console.log("Created Word");
    
    fetch("http://127.0.0.1:5555/words", {
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
          setWord(data);
        });
        navigation.navigate(`WordContainerScreen`,{})
    }
  
  return (
    <Formik>
      <View>
        <Text>Create Word</Text>
        <TextInput
          style={styles.input}
          placeholder="Word Name"
          onChangeText={(text) => setName(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
        />
        <Button title="Submit" onPress={handleCreateWord} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    fontSize: 25,
    padding: 0,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});
