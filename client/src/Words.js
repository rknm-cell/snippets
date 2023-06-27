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

export default function Words({ word, audio, navigation, frame }) {
  const [sound, setSound] = useState();
  
  
  console.log(word);
  // console.log(word.audio_url)
  // console.log('here')

  const soundPlay = require(`${audio}`);
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

    //patch to add a counter for everytime pressed
    // useEffect(() => {
    //   fetch("http://127.0.0.1:5555/words")
    // })
  }
  React.useEffect(() => {
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
  console.log(word.id)
  console.log(frame.id)
function handleAddToWordFrame () {
    fetch("http://127.0.0.1:5555/wordframes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word_id: [5],
          frame_id: [1],
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setFrame(data);
        })
        .catch(error => {
          console.error(error)
        })
  }
  return (
    <>
      <View style={styles.container}>
        <Button title={word.name} onPress={playSound} />
        <Button
          style={styles.button}
          title="Word detail"
          word={word}
          onPress={() => {
            navigation.navigate(`WordDetails`, { word });
            console.log(word);
          }}
        />
        <Button
          title="Add to frame"
          onPress={() => {
            {handleAddToWordFrame}
            console.log(word.name);
            console.log(word.id);
            console.log(frame.id)
          }}
        />
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
