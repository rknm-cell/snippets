import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";
import WordContainerScreen from "./WordContainerScreen";
import { Formik } from "formik";
import * as Speech from "expo-speech";
// import { styles } from "./Styles";

export default function WordCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [word, setWord] = useState([]);

  const handleCreateWord = () => {
    console.log("Created Word");

    fetch("http://127.0.0.1:5555/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: description,
        description: description,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setWord(data);
      });
  };
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = async () => {
    setIsSpeaking(true);
    Speech.speak(description, { rate: 0.75 });
    setIsSpeaking(false);
  };
  return (
    <Formik>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Phrase"
          onChangeText={(text) => setDescription(text)}
        />
        <Button title="Play phrase" onPress={speakText} disabled={isSpeaking} />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
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
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 10,
  },
});
