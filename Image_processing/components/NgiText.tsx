import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NgiText = () => {
  return <Text style={styles.ngi}>Người</Text>;
};

const styles = StyleSheet.create({
  ngi: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "none",
  },
});

export default NgiText;
