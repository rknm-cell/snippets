import React, { Component, useState } from "react";
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
export default function Frame({ frame }) {
  const [frameWords, setFrameWords] = useState([]);
  const filteredWords = frameWords.filter(
    (item) => localStorage.getItem("user_session") == frame.word_id
  );
  return (
    <View>
      <Words />
    </View>
  );
}
