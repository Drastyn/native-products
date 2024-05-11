"use strict";
import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
  },
  barcode: {
    width: 200,
    height: 200,
  },
  barcodeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "cyan",
    padding: 7,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: "green",
    position: "absolute",
    bottom: 60,
    right: 30,
  },
  scope: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "rgba(60, 60, 60, 0.4)",
    height: "20%",
    width: "70%",
  },
  inputsContainer: {
    marginTop: 20,
    width: "70%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 2,
    marginBottom: 20,
    width: "70%",
    padding: 10,
  },
  textArea: {
    height: 80,
  },
});
