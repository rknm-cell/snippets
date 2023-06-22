import React, { Component, useEffect, useState } from "react";
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

export default function Words({word, audio}) {
    const [sound, setSound] = React.useState();
   
    console.log(word)
    // console.log(word.audio_url)
    // console.log('here')
    const soundPlay = require(`${audio}`)
    // function playClip(){
    //    const {sound} = Audio.Sound.createAsync(`${audio}`)
    //    await 
    //    return sound.unloadAsync()
    // }
    async function playSound() {
      console.log('Loading Sound');
      
      const { sound } = await Audio.Sound.createAsync(require(`${audio}`));
    //   const { sound } = await Audio.Sound.createAsync({uri: `./assets/audio/oh-brother-this-guy-stinks.mp3`}, {shouldPlay: true});
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
  
  return (
    <>
      <View style={styles.container}>
        <Button title={word.name} onPress={playSound}/>
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
