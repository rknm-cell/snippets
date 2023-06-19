import React, { Component } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { Formik } from "formik";

export default function LoginScreen() {
  return (
    <>
      <Formik>
        <View style={styles.view}>
          <Text>Username</Text>
          <TextInput placeholder="email" style={styles.input} />
          <Text>Password</Text>
          <TextInput placeholder="password" style={styles.input} />
          <Button title="Submit" />
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
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    fontSize: 25,
    padding: 0,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red',
  }
});
