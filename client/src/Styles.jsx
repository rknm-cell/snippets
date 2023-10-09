import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  words: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  wordscontainer:{
    flex: 1,
    justifyContent: "center"
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 10,
  },
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
    flex: 1,
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
  button: {
    flex: 1,
    marginVertical: 8,
    width: 30,
    height: 50,
    backgroundColor: "red",
  },
  blue: {
    
  },
  red: {
    backgroundColor: "red",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    padding: 25,
    position: "relative",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  background: {
    height: 1000,
    width: 1000,
    justifyContent: "center",
    flex: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  picker: {
    alignSelf: "top",
    width: 100,
    height: 30,
    fontSize: 16,
  },
});
