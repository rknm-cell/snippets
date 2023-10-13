import React, { useState } from "react";
import { Button, View, TextInput, ImageBackground, Alert } from "react-native";

import { Formik } from "formik";
import * as Speech from "expo-speech";
import { styles } from "./Styles";
import TextToSpeech from "./TextToSpeech";

export default function WordCreator() {
  const [description, setDescription] = useState("");
  const [word, setWord] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const handleCreateWord = () => {
    console.log(`Created ${description}`);

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

  const speakText = async () => {
    setIsSpeaking(true);
    Speech.speak(description, { rate: 0.75 });
    setIsSpeaking(false);
  };

  const handleSubmission = () => {
    if (description.trim() === "") {
      Alert.alert("Error", "Please enter a word.");
    } else {
      // Add the logic to handle the word submission (e.g., add it to a list).
      // You can replace the following line with your specific logic.

      handleCreateWord();
      console.log(`Word added to list: ${description}`);

      // Show an alert
      Alert.alert("Success", "Word added to list");

      // Clear the input field
      setDescription("");
    }
  };
  return (
    <Formik>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("./assets/dddepth-202.jpg")}
        >
          <TextInput
            style={styles.ttsinput}
            value={description}
            placeholder="Text to speech"
            onChangeText={(text) => setDescription(text)}
          />

          {/* <Button
            title="Play phrase"
            style={styles.ttsplaybutton}
            onPress={speakText}
            disabled={isSpeaking}
          /> */}
          <TextToSpeech title="play phrase"/>
          <Button
            title="Add word"
            style={styles.ttsbutton}
            onPress={handleSubmission}
          />
        </ImageBackground>
      </View>
    </Formik>
  );
}

// const styles = StyleSheet.create({
//   header: {
//     height: 80,
//     paddingTop: 38,
//     backgroundColor: "coral",
//     borderRadius: 25,
//   },
//   view: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//   },
//   input: {
//     textAlign: "center",
//     fontSize: 25,
//     padding: 0,
//     width: 300,
//     height: 50,
//     alignSelf: "center",
//     borderWidth: 2,
//     borderColor: "blue",
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   button: {
//     flex: 1,
//     marginVertical: 8,
//     width: 10,
//   },
// });
