import React, { Component, useEffect, useState } from "react";
import {
  Button,
  View,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { styles } from "./Styles";

export default function FrameCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frame, setFrame] = useState([])
  
  const handleCreateFrame = () => {
    console.log("Created frame");
    
    fetch("http://127.0.0.1:5555/frames", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data)
          setFrame(data);
        });
        
    }
  
  return (
    <Formik>
      <View style={styles.frameCreator}>
        
        <TextInput
          style={styles.frameinput}
          placeholder="Frame Name"
          onChangeText={(text) => setName(text)}
        />
        
        <TextInput
          style={styles.frameinput}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
        />
        <Button style={styles.button} title="Submit" onPress={handleCreateFrame} />
      </View>
    </Formik>
  );
}
