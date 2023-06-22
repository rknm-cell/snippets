import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
} from "react-native";
import WordContainerScreen from "./WordContainerScreen";
import Frame from "./Frame";
export default function FrameContainerScreen() {

  const [frames, setFrames] = useState([])
useEffect(()=> {
  fetch("/frames")
  .then((r) => r.json())
  .then((data) => 
  setFrames(data),
  console.log(data))
}, [])

  return (
  <View>
<Frame />
  </View>
  );
}
