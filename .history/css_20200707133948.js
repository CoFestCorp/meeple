import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const stylesApp = StyleSheet.create({
  title: {
    marginTop: 50,
  },
});


const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 1000,
    backgroundColor: "#FCD2FF",
  },

  logo: {
    width: 375,
    height: 472,
    left: 17,
    top: 0,
  },

  login: {
    width: 305,
    height: 58,
    left: 55,
    top: -40,
    backgroundColor: "#9b4ae6",
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },

  loginG: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 25,
    left: 90,
    bottom: -20,
  },

  login2: {
    width: 305,
    height: 58,
    left: 55,
    top: -20,
    backgroundColor: "white",
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },
  login3: {
    width: 305,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b4ae6",
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    margin: 30,
  },

  loginT: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 25,
    left: 117,
    bottom: -20,
  },

  loginT2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  details: {
    marginLeft: 30,
    marginBottom: 40,
  },
  input: {
    width: 305,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
    left: 15
  },
  loginLogo: {
    width: 175,
    height: 172,
    marginLeft: 100,
    top: -25,
  },
  icon: {
    top: -61,
    left: 275,
    color: "gray",
  },

  btm: {
    top: 40,
    left: 110,
    width: 195,
  },

  btm2: {
    top: 45,
    left: 126,
    width: 165,
  },

  QRegScreen: {
    backgroundColor: "#FCD2FF",
    flex: 1,
    alignItems: "center",
  },

  RecoveryText: {
    color: "white",
    backgroundColor: "#9b4ae6",
    fontSize: 30,
    fontWeight: "bold",
    width: 400,
    height: 45,
    top: -77,
    textAlign: "center",
  },

  PhoneNumber: {
    color: "black",
    fontSize: 25,
    width: 165,
    height: 30,
    top: 0,
    left: -95,
  },

  EmailTitle: {
    color: "black",
    fontSize: 25,
    width: 160,
    height: 30,
    top: -25,
    left: -100,
  },

  EmailInput: {
    backgroundColor: "white",
    width: 250,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    top: -20,
    left: -55,
  },

  PhoneInput: {
    backgroundColor: "white",
    width: 250,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    top: 5,
    left: -55,
  },

  RecoverySubmit: {
    width: 260,
    height: 58,
    backgroundColor: "white",
    top: 180,
    left: 0,
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },

  submitText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 25,
    bottom: -20,
  },

  Recoverylogo: {
    width: 175,
    height: 172,
    left: 0,
    top: -25,
  },

  RecoveryInfo: {
    fontWeight: "bold",
    fontSize: 15,
    width: 380,
    right: 0,
    top: -50,
  },
});

export default styles;
