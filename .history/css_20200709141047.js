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
    backgroundColor: "#E5E5E5",
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
    backgroundColor: "##7041EE",
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
    left: 15,
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
    marginLeft: 15,
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
    left: 15,
  },
  loginLogo: {
    width: 175,
    height: 172,
    marginLeft: 120,
    top: -25,
  },
  icon: {
    top: -61,
    left: 265,
    left: 275,
    color: "gray",
  },
  signup: {
    width: 305,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b4ae6",
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    left: 15,
  },
  signupLogo: {
    width: 100,
    height: 97,
    marginLeft: 140,
    top: 0,
  },
  RegTitle: {
    color: "#9b4ae6",
    fontSize: 25,
    width: 200,
    height: 30,
    top: 5,
    left: -60,
  },

  RegText: {
    color: "#9b4ae6",
    fontSize: 25,
    fontWeight: "bold",
    width: 400,
    height: 45,
    top: -60,
    left: -60,
  },

  RegInfo: {
    color: "#9b4ae6",
    fontSize: 16,
    width: 280,
    height: 80,
    top: -65,
    left: -60,
    flexWrap: "wrap",
  },
  RegBox: {
    marginHorizontal: 70,
    marginVertical: 20,
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

  //changes made below
  QRegScreen: {
    backgroundColor: "#52307c",
    flex: 1,
    alignItems: "center",
  },

  RecoveryText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    width: 400,
    height: 45,
    top: -60,
    left: 20,
  },

  RecoveryInfo: {
    color: "white",
    fontSize: 16,
    width: 240,
    height: 45,
    top: -65,
    left: -60,
  },

  PhoneNumber: {
    color: "black",
    fontSize: 25,
    width: 165,
    height: 30,
    top: 40,
    left: -95,
  },

  EmailTitle: {
    color: "white",
    fontSize: 25,
    width: 160,
    height: 30,
    top: 50,
    left: -75,
  },

  EmailInput: {
    width: 305,
    height: 58,
    backgroundColor: "white",
    top: 60,
    right: 25,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  PhoneInput: {
    backgroundColor: "white",
    width: 250,
    height: 40,
    top: 45,
    left: -55,
  },

  RecoverySubmit: {
    width: 300,
    height: 40,
    backgroundColor: "white",
    top: 220,
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
    bottom: -10,
  },

  Recoverylogo: {
    width: 175,
    height: 172,
    left: -140,
    top: -25,
  },

  ForgotEmailbtn: {
    color: "white",
    top: 0,
    left: 0,
  },
  ForgotEmailbtnDesign: {
    top: 45,
    left: 60,
  },
  PhoneRecInfo: {
    color: "white",
    fontSize: 16,
    width: 340,
    height: 85,
    top: -65,
    left: -10,
  },

  phoneTitle: {
    color: "white",
    fontSize: 25,
    width: 200,
    height: 30,
    top: 5,
    left: -60,
  },

  PhoneInput: {
    width: 305,
    height: 58,
    backgroundColor: "white",
    top: 15,
    right: 25,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  RecoverySubmit2: {
    width: 300,
    height: 40,
    backgroundColor: "white",
    top: 200,
    left: 0,
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },

  submitText2: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 25,
    bottom: -10,
  },

  CodeTitle: {
    color: "white",
    fontSize: 25,
    width: 200,
    height: 30,
    top: 5,
    left: -60,
  },

  CodeInput: {
    width: 305,
    height: 58,
    backgroundColor: "white",
    top: 15,
    right: 25,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  CodeText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    width: 400,
    height: 45,
    top: -60,
    left: 20,
  },

  CodeInfo: {
    color: "white",
    fontSize: 16,
    width: 280,
    height: 45,
    top: -65,
    left: -40,
  },
  RecoverySubmit3: {
    width: 300,
    height: 40,
    backgroundColor: "white",
    top: 70,
    left: 0,
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },

  submitText3: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 25,
    bottom: -10,
  },
  iconRec1: {
    top: -45,
    left: 93,
  },
  iconRec2: {
    top: -45,
    left: 93,
  },
  NewTitle: {
    color: "white",
    fontSize: 25,
    width: 200,
    height: 30,
    top: 5,
    left: -60,
  },
  ConfirmTitle: {
    color: "white",
    fontSize: 25,
    width: 250,
    height: 30,
    top: 5,
    left: -40,
  },

  yes: {
    width: 305,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b4ae6",
    borderRadius: 24,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    margin: 30,
    left: 15,
  }
});

export default styles;
