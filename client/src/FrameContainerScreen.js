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
import Logo from './assets/orange_noise.svg'
import { styles } from "./Styles";

export default function FrameContainerScreen({ route, navigation }) {
  const [frames, setFrames] = useState([]);
  const [edit, setEdit] = useState(false);
  const { words } = route.params;
  useEffect(() => {
    fetch("http://127.0.0.1:5555/frames")
      .then((r) => r.json())
      .then((data) => {
        setFrames(data);
      });
  }, []);
  function renderFrames() {
    return frames.map((frame) => {
      return (
        <Button
          key={frame.id}
          title={frame.name}
          style={styles.button}
          onPress={() => {
            navigation.navigate(`FrameDetails`, { frame, edit });
            
          }}
        />
        
      );
    });
  }
  console.log(frames);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("./assets/dddepth-290.jpg")}
      >{renderFrames()}
      <Button style={styles.framesbutton}
      title="Edit Frames"
      onPress={() => {navigation.navigate("FrameEditScreen")}}/>
       <Button style={styles.framesbutton}
      title="Create a Frame"
      onPress={() => {navigation.navigate("FrameCreator")}}/>
      </ImageBackground>
    </View>
  );
}
