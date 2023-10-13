import React from 'react'
import * as Speech from "expo-speech";

export const SpeakText = async () => {
    setIsSpeaking(true);
    Speech.speak(description, { rate: 0.75 });
    setIsSpeaking(false);
  };
