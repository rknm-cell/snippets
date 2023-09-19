import React, {Component, useContext, useEffect, useState} from "react";
import { Audio } from "expo-av";
import { Icon, IconButton } from '@rneui/themed';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ImageBackground,
    
  } from "react-native";
import FramesContextProvider from "./store/context/framesContext";
import { styles } from "./Styles";

//set up word details

export default function WordDetails({ route, frame }){
    const frameWordCtx = useContext(FramesContextProvider);

    const {word} = route.params; 
    const [sound, setSound] = useState();
    // const wordInFrame = frameWordCtx.ids.includes(word.id);

    console.log(word)
    // const soundPlay = require(`${word.audio_url}`);
    // async function playSound() {
    //     console.log("Loading Sound");
    
    //     const { sound } = await Audio.Sound.createAsync(require(`${word.audio_url}`));
    //     //   const { sound } = await Audio.Sound.createAsync({uri: `./assets/audio/oh-brother-this-guy-stinks.mp3`}, {shouldPlay: true});
    //     setSound(sound);
    
    //     console.log("Playing Sound");
    //     await sound.playAsync();
    
        //patch to add a counter for everytime pressed
        // useEffect(() => {
        //   fetch("http://127.0.0.1:5555/words")
        // })
      // }
      // React.useEffect(() => {
      //   return sound
      //     ? () => {
      //         console.log("Unloading Sound");
      //         sound.unloadAsync();
      //       }
      //     : undefined;
      // }, [sound]);
console.log(word.id)
console.log(frame.id)
function handleAddToFrame () {
    console.log(`${word.name} added to ${frame.name}`)
    console.log(word.id)
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
          console.log(data)
        //   setFrame(data);
        });
   
}

    return (
        <View>
            <Text>{word.name}</Text>
            <Text>{word.description}</Text>
            
        <Button title={`Play ${word.name}`} onPress={playSound} />
            <Button title={`Add to frame`} onPress={handleAddToFrame}/>
          
        </View>

    )
}