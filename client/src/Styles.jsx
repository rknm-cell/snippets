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
  frameCreator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 10,
  },
  ttsbutton: {
    height: 30,
    fontSize: 25,
    padding: 5

  },

  ttsplaybutton: {
    height: 30,
    fontSize: 25,
    padding: 5,
    color: "red"
  },

  ttsinput: {
    textAlign: "center",
    fontSize: 25,
    padding: 0,
    width: 300,
    height: 50,
    alignSelf: "center",
    
   
    borderRadius: 5,
    marginVertical: 10,

  },
  framesbutton: {

  },
  homescreenbutton: {

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
  frameinput:{
    height: 50,
    fontSize: 20,

  },
  framename:{
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,

  },
  framedescription:{
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    width: 30,
    height: 50,
    backgroundColor: "red",
  },
  deleteframebutton: 
  {
    padding: 20,
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
  melodytitle: {
    textAlign: "center",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    // justifyContent: "center",
    // alignSelf: "center",
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
