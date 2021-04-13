import { StyleSheet } from "react-native";
import { baseContainer } from "./BaseStyles";
import colors from "./constants/colors";
import { LarghezzaDevice } from "./constants/Layout";

export const styles = StyleSheet.create({
  container: {
    //stile esteso
    ...baseContainer,
    flex: 1,
    backgroundColor: colors.GREEN,
  },
  text: {
    color: "purple",
    fontSize: 50,
  },
  green: {},
  textInput: {
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: LarghezzaDevice,
    backgroundColor: "white",
  },
});
