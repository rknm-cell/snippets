import React, { Component, useEffect, useState, navigate } from "react";
import { Audio } from "expo-av";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
} from "react-native";
import { styles } from "./Styles";
export default function Words({
  word,
  audio,
  navigation,
  frame,
  filteredArray,
  edit,
}) {
  const [sound, setSound] = useState();

  const [buttons, setButtons] = useState(true);

  

  // const hasMatch = filteredArray.includes(word.name);
  const hasArray = filteredArray ? true : false;
  const hasWord = filteredArray
    ? Object.values(filteredArray).some((w) => w.name === word.name)
    : null;
  
  
  function handleWordClick() {
    
    navigate(`/words/${word.id}`, state.id);
    useEffect(() => {
      fetch("http://127.0.0.1:5555/wordframes")
        

        .then((r) => r.json())
        .then((data) => {
         
          setWordFrames(data);
        });
    }, []);
  }

  function handleAddToWordFrame() {
    setButtons(!buttons);
    fetch("http://127.0.0.1:5555/wordframes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        word_ids: [word.id],
        frame_ids: [frame.id],
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setFrame(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleRemoveFromFrame() {
    fetch(`http://127.0.0.1:5555/wordframes/${frame.id}/words/${word.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
      });
  }
  const handleButtonColor = () => {
    hasWord ? styles.button : styles.blue;
  };
  function handleEditButtons() {
    return edit ? (
      <Button
        style={handleButtonColor}
        title={hasWord ? "✭" : "✩"}
        onPress={() => {
          hasWord ? handleRemoveFromFrame() : handleAddToWordFrame();
        }}
      />
    ) : (
      <></>
    );
  }
  return (
    <>
      <View style={styles.words}>
        <TextToSpeech key={word.name} word={word} />

        {handleEditButtons()}
      </View>
    </>
  );
}
