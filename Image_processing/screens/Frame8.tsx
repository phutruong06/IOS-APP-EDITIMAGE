import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={[styles.frameGroup, styles.frameLayout]}
        onPress={() => navigation.navigate("Frame10")}
      >
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame-30.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.frameItemLayout]}
          onPress={() => navigation.navigate("Frame10")}
        >
          <View style={[styles.frameItem, styles.frameItemLayout]} />
          <Image
            style={styles.doneIcon}
            contentFit="cover"
            source={require("../assets/done.png")}
          />
          <Text style={styles.delete}>Delete</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 473,
    width: 286,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  frameItemLayout: {
    height: 27,
    width: 64,
    position: "absolute",
  },
  frameChild: {
    height: 473,
    width: 286,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBlue,
    top: 0,
    left: 0,
  },
  doneIcon: {
    top: 5,
    left: 8,
    width: 17,
    height: 18,
    position: "absolute",
  },
  delete: {
    top: 8,
    left: 29,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 225,
    left: 102,
  },
  frameGroup: {
    top: -1,
    left: 0,
    height: 473,
    width: 286,
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 472,
  },
});

export default Frame8;
