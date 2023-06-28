import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { Formik } from "formik";

export default function LoginScreen({navigation, setSession}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    // Create an object with the username and password
    const data = {
      email: email,
      password: password,
    };

    try {
      // Make the API post request
      const response = await fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle the response
      if (response.ok) {
        console.log("Post request successful!");
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // function handleClick() {
  //   setUser = true;
  // }
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

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    borderRadius: 25,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    fontSize: 25,
    padding: 0,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});
