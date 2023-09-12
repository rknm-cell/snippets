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


export default function FrameDetails({ route}) {
  const { frame, edit } = route.params;
  console.log(edit)
  const [words, setWords] = useState([]);
  const [wordFrames, setWordFrames] = useState([]);
  console.log(frame);
  // const filteredWords
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/wordframes`)

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWordFrames(data);
        
      });
  }, []);
 
  console.log(frame);
  const filteredFrames = wordFrames.filter(wordFrame => wordFrame.id === frame.id);
  console.log(filteredFrames)

const filteredWords = wordFrames.map(wordFrame => wordFrame.words.filter(word => wordFrame.id == frame.id))
  console.log(filteredWords)
  const filteredArray = words.filter(word => filteredWords.some(wordGroup => wordGroup.includes(word.id)))
  console.log(filteredArray)
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{frame.name}</Text>
      <Text style={styles.text}>{frame.description}</Text>
      {/* <WordContainerScreen frame={frame} words={filteredArray}/> */}
      <WordContainerScreen edit={edit} filteredArray={filteredArray} frame={frame}/>
    </View>
  );
}
