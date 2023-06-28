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
import TextToSpeech from "./TextToSpeech";
export default function Words({
  word,
  audio,
  navigation,
  frame,
  filteredArray,
}) {
  const [sound, setSound] = useState();
  const [inFrame, setInFrame] = useState();
  console.log(filteredArray);
  console.log(word.id);
  // const hasMatch = filteredArray.includes(word.name);
  const hasWord = Object.values(filteredArray).some(
    (w) => w.name === word.name
    
  );
  
  console.log(hasWord);
  // console.log(word);
  // console.log(word.audio_url)
  // console.log('here')

  // const soundPlay = require(`${audio}`);
  // function playClip(){
  //    const {sound} = Audio.Sound.createAsync(`${audio}`)
  //    await
  //    return sound.unloadAsync()
  // }
  async function playSound() {
    
    console.log("Loading Sound");

    const { sound } = await Audio.Sound.createAsync(require(`${audio}`));
    //   const { sound } = await Audio.Sound.createAsync({uri: `./assets/audio/oh-brother-this-guy-stinks.mp3`}, {shouldPlay: true});
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    
    
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  //navigate to word details
  function handleWordClick() {
    console.log(word);
    navigate(`/words/${word.id}`, state.id);
    useEffect(() => {
      fetch("http://127.0.0.1:5555/wordframes")
        // change fetch addres to ip address of local network
        // 10.129.3.215

        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          setWordFrames(data);
        });
    }, []);
  }
  // console.log(word.id)
  // console.log(frame.id)
  function handleAddToWordFrame() {
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
        console.log(data);
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
        console.log(data);
      });
      
    
  }

  return (
    <>
      <View style={styles.container}>
        {audio ? (<Button title={word.name} onPress={playSound} />) :(<TextToSpeech key={word.name} word={word}/>)}
        {/* <Button
          style={styles.button}
          title="Word detail"
          word={word}
          onPress={() => {
            navigation.navigate(`WordDetails`, { word });
            console.log(word);
          }}
        /> */}
        
        {inFrame ? (
          <Button
            title="Remove from frame"
            onPress={() => {
              handleRemoveFromFrame();
              console.log("removed from frame");
            }}
          />
        ) : (
          <Button
            title="Add to frame"
            onPress={() => {
              handleAddToWordFrame();
            }}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 10,
  },
});
