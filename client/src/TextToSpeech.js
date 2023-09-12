import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { styles } from "./Styles";

const TextToSpeech = ({ word }) => {
  console.log(word.description);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = async () => {
    const enableSound = async () => {
      if (Platform.OS === "ios") {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });

        await soundObject.playAsync();
      }

      setInterval(() => {
        Speech.speak(word.description, {rate: 0.8});
      }, 1000);
    };
    

    
    
    setIsSpeaking(true);
    await Speech.speak(word.description, { rate: 0.8 });
    setIsSpeaking(false);
  };

  

  return (
    <View>
     
      <Button title={word.name} onPress={speakText} disabled={isSpeaking} />
      
    </View>
  );
};

export default TextToSpeech;
