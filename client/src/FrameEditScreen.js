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

export default function FrameEditScreen({ route, navigation }) {
  const [frames, setFrames] = useState([]);
  const [edit, setEdit] = useState(true);
  const { words } = route.params;
  useEffect(() => {
    fetch("http://127.0.0.1:5555/frames")
      .then((r) => r.json())
      .then((data) => {
        setFrames(data)
        // console.log(data);
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
          navigation.navigate(`FrameDetails`, { frame, edit })
          
        }}
        />
        
        );
      });
    }
    console.log(frames)
    
  return (
  <View>
    
    {renderFrames()}
    </View>);
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16,
//   },
//   button: {
//     flex: 1,
//     marginVertical: 8,
//     width: 10,
//   },
// });
