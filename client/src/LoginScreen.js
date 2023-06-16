import React, { Component } from "react";

export default function LoginScreen() {
  return (
    <>
      <Formik>
        <View>
          <Text>Username</Text>
          <TextInput style={styles.input} />
          <Text>Password</Text>
          <TextInput style={styles.input} />
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
});
