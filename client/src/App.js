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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import LogoutScreen from "./LogoutScreen";
import SignupScreen from "./SignupScreen";
import WordContainerScreen from "./WordContainerScreen";
import FrameContainerScreen from "./FrameContainerScreen";
import { useState } from "react";

import { GlobalStateProvider, useGlobalState } from "./GlobalState";
import FramesContextProvider from "./store/context/framesContext";
import WordDetails from "./WordDetails";
import FrameCreator from "./FrameCreator";
import WordCreator from "./WordCreator";
import FrameDetails from "./FrameDetails";
import FrameEditScreen from "./FrameEditScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const [words, setWords] = useState([]);
  const [user, setUser] = useState(true);
  const [session, setSession] = useState(null);
  const [word, setWord] = useState([]);

  return (
    <GlobalStateProvider>
      <FramesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{ words }}
              options={{ title: "Melody Talker", headerShown: false }}
            />
            
            <Stack.Screen
              name="WordContainerScreen"
              component={WordContainerScreen}
              options={{ title: "Words" }}
            />
            <Stack.Screen
              name="WordDetails"
              component={WordDetails}
              options={{ title: "Word" }}
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
              options={{ title: "Edit Frame" }}
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
              options={{ title: "Create a Frame" }}
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
