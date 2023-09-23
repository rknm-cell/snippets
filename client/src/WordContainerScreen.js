import React, { Component, useContext, useEffect, useState } from "react";
import Words from "./Words";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { UserContext } from "./UserContext";

import { useGlobalState } from "./GlobalState";
import { styles } from "./Styles";

export default function WordContainerScreen({
  edit,
  navigation,
  frame,
  filteredArray,
  route,
}) {
  // const words = useSelector(state=> state.userReducer)
  const [words, setWords] = useGlobalState();
  const [sortValue, setSortValue] = useState("a.name > b.name");
// console.log(filteredArray)
//   console.log(edit);
  // const [words, setWords] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      // change fetch addres to ip address of local network
      // 10.129.3.215

      .then((r) => r.json())
      .then((data) => {
        setWords(data);
      });
  }, []);

  // const renderItem = ({word}) => {<Words wordObj={word} />}
  function renderWords() {
    console.log("rendering words")
    return (edit ? [...words] : [...filteredArray])
      // .sort((a, b) => (eval(sortValue) ? 1 : -1))
      .map((word) => {
        return (
          <Words
            key={word.id}
            word={word}
            name={word.name}
            audio={word.audio_url}
            frame={frame}
            navigation={navigation}
            filteredArray={filteredArray}
            edit={edit}
          />
        );
      });
  }

  // sorts words by alphabetical order

  // const wordsDescending = [...words].sort((b, a) => (b.name > a.name ? 1 : -1));
  // const wordsAscending = [...words].sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <>
      <View style={styles.container}>
        

        
        <ScrollView contentContainerStyle={styles.contentContainer}>
      
       
        {renderWords()}
       
            </ScrollView>
      </View>
    </>
  );
}

