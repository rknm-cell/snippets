import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { styles } from "./Styles";

export default function SignupScreen({ setSession }) {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true)
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  function handleSubmit() {
    setLogin(!login)
    fetch("http://127.0.0.1:5555/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // onLogin(user);
          fetch("http://127.0.0.1:5555/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
            }),
          })
          console.log(login)
          {navigation.navigate("Home", {login})}
        });
      }
    });
    console.log(login)
    setLogin(!login)
      navigation.navigate("Home", {})
  }
  return (
    <>
      <Formik>
        <View style={styles.view}>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Submit" onPress={() => handleSubmit()}/>
        </View>
      </Formik>
    </>
  );
}

