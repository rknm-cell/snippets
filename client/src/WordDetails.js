import React, {Component, useEffect, useState} from "react";
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

//set up word details

export default function WordDetails({ route}){
    const {word} = route.params; 
    const [sound, setSound] = useState();
    console.log(word)
    const soundPlay = require(`${word.audio_url}`);
    async function playSound() {
        console.log("Loading Sound");
    
        const { sound } = await Audio.Sound.createAsync(require(`${word.audio_url}`));
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

function handleAddToFrame(){
    console.log(word.name)
}

    return (
        <View>
            <Text>{word.name}</Text>
            <Text>Word Description</Text>
            
        <Button title={`Play ${word.name}`} onPress={playSound} />
            <Button title="Add to frame"/>
            {/* <Button title={word.name} onPress={playSound}/>
            <Button title="add to frame" onPress={handleAddToFrame}/> */}
        </View>

    )
}