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
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import LogoutScreen from "./LogoutScreen";
import SignupScreen from "./SignupScreen"
import WordContainerScreen from "./WordContainerScreen";
import FrameContainerScreen from "./FrameContainerScreen";
import { createContext, useContext, useEffect, useState } from "react";
import AppStateProvider from "./AppStateContext";
import { UserContext } from "./UserContext";
import {Provider} from 'react-redux';
import { Store } from "./redux/store";
// const UserContext = createContext();
const Stack = createNativeStackNavigator();
export default function App() {
  const [words, setWords] = useState([]);
  const [user, setUser] = useState(true);
  const [session, setSession] = useState(null)
  const [login, setLogin] = useState(true)
  
  console.log(user);
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

  return (
    // <UserContext.Provider value={words}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            props={words}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Words"
            component={WordContainerScreen}
            initialParams={{words, setWords}}
            options={{ title: "Words" }}
          >
            {/* <WordContainerScreen words={words}/> */}
          </Stack.Screen>
          <Stack.Screen
            name="Frames"
            component={FrameContainerScreen}
            words={words}
            options={{ title: "Words" }}
          />

          <Stack.Screen
            name="Login"
            login = {login}
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
        </Stack.Navigator>
      </NavigationContainer>
    // </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
