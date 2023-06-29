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
import { useSelector, useDispatch } from "react-redux";
import { useGlobalState } from "./GlobalState";

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
console.log(filteredArray)
  console.log(edit);
  // const [words, setWords] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      // change fetch addres to ip address of local network
      // 10.129.3.215

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);

  // const renderItem = ({word}) => {<Words wordObj={word} />}
  function renderWords() {
    console.log("rendering words")
    return (edit ? [...words] : [...filteredArray])
      .sort((a, b) => (eval(sortValue) ? 1 : -1))
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

  const wordsDescending = [...words].sort((b, a) => (b.name > a.name ? 1 : -1));
  const wordsAscending = [...words].sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <>
      <View style={styles.container}>
        

        <Picker
          style={styles.picker}
          selectedValue={sortValue}
          onValueChange={(itemValue, itemIndex) => setSortValue(itemValue)}
          >
          <Picker.Item label="A-Z" value="a.name > b.name" />
          <Picker.Item label="Z-A" value="b.name > a.name" />
        </Picker>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <UserContext.Consumer> */}
        {/* {words.map((word) => {return <Words word={word} key={word.name} description={word.description} audio_url={word.audio_url}/>})} */}

        {/* <FlatList
        word={words}
        renderItem={renderItem}
      keyExtractor={words => words.id}/> */}
        {/* {[...words]
          .sort((a, b) => (eval(sortValue) ? 1 : -1))
          .map((word) => {
            return (
              <Words
              style={styles.words}
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
            })} */}
        {renderWords()}
        {/* </UserContext.Consumer> */}
            </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: 16,
    marginVertical: 5,
    
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: 390,
  },
  // words:{
  //   flex: 1,
  //   flexDirection: "row"
  // },
  title: {
    textAlign: "center",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    padding: 25,
    position: "relative",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  background: {
    height: 1000,
    width: 1000,

    justifyContent: "center",
    flex: 1,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 10,
    height: 40,
  },
  picker: {
    alignSelf: "top",
    width: 100,
    height: 30,
    fontSize: 16
  },
});
