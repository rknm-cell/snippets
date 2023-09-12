import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import LogoutScreen from "./LogoutScreen";
import SignupScreen from "./SignupScreen";
import WordContainerScreen from "./WordContainerScreen";
import FrameContainerScreen from "./FrameContainerScreen";
import { createContext, useContext, useEffect, useState } from "react";
import AppStateProvider from "./AppStateContext";
import { UserContext } from "./UserContext";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GlobalStateProvider, useGlobalState } from "./GlobalState";
import FramesContextProvider from "./store/context/framesContext";
import WordDetails from "./WordDetails";
import FrameCreator from "./FrameCreator";
import WordCreator from "./WordCreator";
// import WordFrames from "./wordFrames";
import FrameDetails from "./FrameDetails";
import FrameEditScreen from "./FrameEditScreen";
import TextToSpeechContainer from "./TextToSpeechContainer";
const Tab = createBottomTabNavigator();
// const UserContext = createContext();
const Stack = createNativeStackNavigator();
export default function App() {
  const [words, setWords] = useState([]);
  const [user, setUser] = useState(true);
  const [session, setSession] = useState(null);
  // const [login, setLogin] = useState(true);
  const [word, setWord] = useState([]);
  console.log(user);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/words")
  //     // change fetch addres to ip address of local network
  //     // 10.129.3.215

  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       setWords(data);
  //     });
  // }, []);

  // const footerConfig = {
  //   tabBarPosition: "bottom",
  // };
  // const Tabs = createMaterialTopTabNavigator();
  // const MyFooter = () => (
  //   <Tabs.Navigator {...footerConfig}>
  //     <Tabs.Screen name="Words" component={WordContainerScreen} />
  //     <Tabs.Screen name="Home" component={HomeScreen} />
  //   </Tabs.Navigator>
  // );
  return (
    // <UserContext.Provider value={words}>
    <GlobalStateProvider>
      <FramesContextProvider>
        <NavigationContainer>
          
            <Stack.Navigator>
              {/* <Stack.Screen name="Tabs" component={MyFooter} /> */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                initialParams={{ words }}
                options={{ title: "Home" }}
              />
              <Stack.Screen 
                name="TextToSpeechContainer"
                component={TextToSpeechContainer}
                options={{title: "TextToSpeechContainer"}}
              />
              <Stack.Screen
                name="WordContainerScreen"
                component={WordContainerScreen}
                options={{ title: "Words" }}
              >
                
              </Stack.Screen>
              <Stack.Screen
                name="WordDetails"
                component={WordDetails}
                options={{ title: "WordDetails" }}
              />
              <Stack.Screen
                name="FrameContainerScreen"
                component={FrameContainerScreen}
                initialParams={{ words }}
                options={{ title: "Frames" }}
              />
              <Stack.Screen
                name="FrameEditScreen"
                component={FrameEditScreen}
                initialParams={{ words }}
                options={{ title: "FrameEditScreen" }}
              />
              <Stack.Screen
                name="FrameDetails"
                component={FrameDetails}
                initialParams={{ words }}
                options={{ title: "Frame Details" }}
              />
              <Stack.Screen
                name="FrameCreator"
                component={FrameCreator}
                initialParams={{ words }}
                options={{ title: "FrameCreator" }}
              />
              <Stack.Screen
                name="Login"
                
                component={LoginScreen}
                setSession={setSession}
                options={{ title: "Login" }}
              />
              <Stack.Screen
                name="Logout"
                component={LogoutScreen}
                options={{ title: "Logout" }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                setSession={setSession}
                options={{ title: "Signup" }}
              />
              <Stack.Screen
                name="Word Details"
                component={WordDetails}
                options={{ title: "Word Details" }}
                initialParams={{ itemId: words.id }}
              />
              <Stack.Screen
                name="WordCreator"
                component={WordCreator}
                options={{ title: "Word Creator" }}
              />
            </Stack.Navigator>
          
        </NavigationContainer>
      </FramesContextProvider>
    </GlobalStateProvider>
  );
}


