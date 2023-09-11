import React, { Component, useState } from "react";
import {
  View,
} from "react-native";
import Words from "./Words";
import { styles } from "./Styles";

export default function Frame({ frame, edit}) {
  const [frameWords, setFrameWords] = useState([]);
  
  function renderWords(){
    return words.map((word) => {
        return (<Words key={word.id} word={word} name={word.name} navigation={navigation}/>)
    })
}

  return (
    <View style={styles.container}>
      {renderWords()}
    </View>
  );
}

