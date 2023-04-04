import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  containerMainText: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 15,
    marginTop: 200,
  },
  mainText: {
    fontSize: 24,
    color: "#8D99AE",
    fontFamily: "Lexend_700Bold",
  },
  containerInputAlcool: {
    marginTop: 20,
    width: 330,
  },
  error: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "red",
  },
  textInputAlcool: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#8D99AE",
  },
  inputAlcool: {
    width: 330,
    height: 40,
    backgroundColor: "#8D99AE",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 20,
    fontFamily: "Lexend_400Regular",
  },
  containerInputGasoline: {
    marginTop: 15,
  },
  textInputGasoline: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#8D99AE",
  },
  inputGasoline: {
    width: 330,
    height: 40,
    backgroundColor: "#8D99AE",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 20,
    fontFamily: "Lexend_400Regular",
  },
  containerButton: {
    marginTop: 30,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#8D99AE",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lexend_700Bold",
  },
  containerMainTextModal: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 15,
  },
  mainTextModal: {
    fontSize: 24,
    color: "green",
    fontFamily: "Lexend_700Bold",
  },
  containerSubText: {
    alignItems: "center",
    rowGap: 10,
  },
  subText: {
    fontSize: 20,
    fontFamily: "Lexend_500Medium",
    color: "#8D99AE",
  },
  priceText: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#8D99AE",
  },
  buttonModal: {
    width: 330,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#8D99AE",
  },
  textButtonModal: {
    fontSize: 16,
    color: "#8D99AE",
    fontFamily: "Lexend_700Bold",
  },
});
