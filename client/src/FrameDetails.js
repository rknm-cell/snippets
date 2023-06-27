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

export default function FrameDetails({ route }) {
  const { frame } = route.params;
  const [words, setWords] = useState([]);
  const [wordFrames, setWordFrames] = useState([]);
  console.log(frame);
  // const filteredWords
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      // change fetch addres to ip address of local network
      // 10.129.3.215

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/wordframes`)
      // change fetch addres to ip address of local network
      // 10.129.3.215

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWordFrames(data);
        
      });
  }, []);
  //   const filteredWords = words.filter((word) => {frames.words.includes(word.id)})
//   console.log(wordFrames);
  console.log(frame);
  const filteredFrames = wordFrames.filter(wordFrame => wordFrame.id === frame.id);
  console.log(filteredFrames)
//   console.log(filteredFrames[0].name)
//   console.log(filteredFrames?.words)
//   console.log(words)
// const filteredWords = wordFrames.map(wordFrame => wordFrame.words.filter(word => wordFrame.id == frame.id))
//   console.log(filteredWords)
//   const filteredArray = words.filter(word => filteredWords.some(wordGroup => wordGroup.includes(word.id)))
//   console.log(filteredArray)
  
  return (
    <View>
      <Text>{frame.name}</Text>
      <Text>{frame.description}</Text>
      {/* <WordContainerScreen frame={frame} words={filteredArray}/> */}
      <WordContainerScreen frame={frame}/>
    </View>
  );
}
