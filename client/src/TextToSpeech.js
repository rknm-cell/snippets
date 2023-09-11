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

  //   const saveAudio = async () => {
  //     const { uri } = await Speech.synthesizeSpeech({ text });
  //     const fileUri = FileSystem.documentDirectory + 'text_to_speech_audio.wav';
  //     await FileSystem.moveAsync({ from: uri, to: fileUri });
  //     alert(`Audio saved to ${fileUri}`);
  //   };

  return (
    <View>
      {/* <Text>Enter the text to convert:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setText}
        value={text}
      /> */}
      <Button title={word.name} onPress={speakText} disabled={isSpeaking} />
      {/* <Button
        title="Save Audio"
        onPress={saveAudio}
        disabled={isSpeaking || text === ''}
      /> */}
    </View>
  );
};

export default TextToSpeech;
