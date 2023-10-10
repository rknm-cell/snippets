import React, { useState, useEffect } from "react";
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
import { styles } from "./Styles";

export default function FrameDetails({ route }) {
  const { frame, edit } = route.params;
  // console.log(edit);
  const [words, setWords] = useState([]);
  const [wordFrames, setWordFrames] = useState([]);
  // console.log(frame);
  // const filteredWords
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setWords(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/wordframes`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setWordFrames(data);
      });
  }, []);
// console.log(frame.id)
  function handleDeleteFrame(){

    fetch(`http://127.0.0.1:5555/frames/${frame.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary headers (e.g., authorization token) here
      },
    })
      .then((response) => {
        if (response.ok) {
          // Resource was successfully deleted
          this.setState({ deleted: true });
        } else {
          // Handle error responses here
          console.error('Error deleting resource:', response.status, response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  const filteredFrames = wordFrames.filter(
    (wordFrame) => wordFrame.id === frame.id
  );

  const filteredWords = wordFrames.map((wordFrame) =>
    wordFrame.words.filter((word) => wordFrame.id == frame.id)
  );

  const filteredArray = words.filter((word) =>
    filteredWords.some((wordGroup) => wordGroup.includes(word.id))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.framename}>{frame.name}</Text>
      <Text style={styles.framedescription}>{frame.description}</Text>
      {/* <WordContainerScreen frame={frame} words={filteredArray}/> */}
      <WordContainerScreen
        edit={edit}
        filteredArray={filteredArray}
        frame={frame}
      />
      <Button style={styles.deleteframebutton} title={'Delete Frame'}onPress={()=> handleDeleteFrame()}/>
    </View>
  );
}
