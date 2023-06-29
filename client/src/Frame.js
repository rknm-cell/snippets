import React, { Component, useState } from "react";
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
import Words from "./Words";
export default function Frame({ frame, edit}) {
  // const {words} = route.params; 
  const [frameWords, setFrameWords] = useState([]);
  // const filteredWords = frameWords.filter(
  //   (item) => localStorage.getItem("frame") == frame.word_id
  // );
  console.log(words)
  function renderWords(){
    return words.map((word) => {
        return (<Words key={word.id} word={word} name={word.name} audio={word.audio_url} navigation={navigation}/>)
    })
}

  return (
    <View style={styles.container}>
      {/* <WordContainerScreen /> */}
      {renderWords()}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "red",
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
    width: 10,
  },
});