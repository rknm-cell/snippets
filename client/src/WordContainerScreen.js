import React, { Component, useContext, useEffect, useState } from "react";
import Words from "./Words";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  FlatList
} from "react-native";
import {UserContext} from './UserContext';
import {useSelector, useDispatch} from 'react-redux';
import { useGlobalState } from './GlobalState';
// import {setWords} from './redux/actions'
export default function WordContainerScreen({navigation}) {
    // const words = useSelector(state=> state.userReducer)
    const [words, setWords] = useGlobalState();
    console.log(words)
    // const [words, setWords] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/words")
          // change fetch addres to ip address of local network
          // 10.129.3.215
    
          .then((r) => r.json())
          .then((data) => {
            // console.log(data);
            setWords(data);
          });
      }, []);

// const renderItem = ({word}) => {<Words wordObj={word} />}
function renderWords(){
    return words.map((word) => {
        return (<Words key={word.id} word={word} name={word.name} audio={word.audio_url} navigation={navigation}/>)
    })
}
  return (
    <>
      <View style={styles.container}>
      {/* <UserContext.Consumer> */}
        {/* {words.map((word) => {return <Words word={word} key={word.name} description={word.description} audio_url={word.audio_url}/>})} */}
        
        
        {/* <FlatList
        word={words}
        renderItem={renderItem}
        keyExtractor={words => words.id}/> */}
        {renderWords()}
        {/* </UserContext.Consumer> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "red",
  },
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
  },
});
