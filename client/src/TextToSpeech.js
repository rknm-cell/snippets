import React from 'react';
import { View, Button } from 'react-native';
import Tts from 'react-native-tts';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

class TextToSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.audioPath = '';
    this.audioRecorderPlayer = new AudioRecorderPlayer();
  }

  componentDidMount() {
    this.setupTextToSpeech();
  }

  setupTextToSpeech = async () => {
    await Tts.getInitStatus();
    Tts.setDefaultRate(0.5);
    Tts.setDefaultLanguage('en-US');
  };

  speakText = async (text) => {
    Tts.stop();
    Tts.speak(text);
    const utteranceId = await Tts.speak(text);
    Tts.addEventListener('tts-finish', () => {
      this.saveAudio(utteranceId);
    });
  };

  saveAudio = async (utteranceId) => {
    const audioPath = await this.audioRecorderPlayer.startRecorder();
    this.audioPath = audioPath;
  };

  stopRecording = async () => {
    await this.audioRecorderPlayer.stopRecorder();
  };

  playAudio = async () => {
    await this.audioRecorderPlayer.startPlayer(this.audioPath);
  };

  render() {
    return (
      <View>
        <Button
          title="Speak Text"
          onPress={() => this.speakText('Hello, world!')}
        />
        <Button title="Stop Recording" onPress={this.stopRecording} />
        <Button title="Play Audio" onPress={this.playAudio} />
      </View>
    );
  }
}

export default TextToSpeech;
