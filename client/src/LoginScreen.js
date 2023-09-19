import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { Formik } from "formik";
import { styles } from "./Styles";
export default function LoginScreen({navigation, setSession}) {
  const [login, setLogin] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    setLogin(!login)
    
    // Create an object with the username and password
    const data = {
      email: email,
      password: password,
    };

    
      // Make the API post request
      fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(login)
      {navigation.navigate("Home", {login})}
    }
    
  return (
    <>
      <Formik>
        <View style={styles.view}>
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            autoCapitalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Submit" onPress={handleSubmit} />
          <Button
            style={styles.button}
            title="Signup"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </Formik>
    </>
  );
}


