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
import { styles } from "./Styles";

export default function FrameContainerScreen({ route, navigation }) {
  const [frames, setFrames] = useState([]);
  const [edit, setEdit] = useState(false);
  const { words } = route.params;
  useEffect(() => {
    fetch("http://127.0.0.1:5555/frames")
      .then((r) => r.json())
      .then((data) => {
        setFrames(data), console.log(data);
      });
  }, []);
  function renderFrames() {
    return frames.map((frame) => {
      return (
        <Button
          key={frame.name}
          title={frame.name}
          style={styles.button}
          onPress={() => {
            navigation.navigate(`FrameDetails`, { frame, edit });
            console.log(frame);
          }}
        />

        // <Frame
        //   key={frame.id}
        //   frame={frame}
        //   name={frame.name}
        //   description={frame.description}
        // />
      );
    });
  }
  console.log(frames);

  return <View style={styles.container}>{renderFrames()}</View>;
}

