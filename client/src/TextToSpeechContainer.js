import React from 'react';
import { View } from 'react-native';
import TextToSpeech from './TextToSpeech';
import { styles } from "./Styles";

class TextToSpeechContainer extends React.Component {
  render() {
    return (
      <View>
        <TextToSpeech />
      </View>
    );
  }
}

export default TextToSpeechContainer;
