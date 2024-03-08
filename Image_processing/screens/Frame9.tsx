import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View style={[styles.frameContainer, styles.framePosition]}>
          <View style={[styles.frameView, styles.frameViewLayout]}>
            <View style={[styles.image2Parent, styles.frameViewLayout]}>
              <Image
                style={styles.image2Icon}
                contentFit="cover"
                source={require("../assets/image-22.png")}
              />
              <Pressable
                style={[styles.frameChild, styles.doneIconLayout]}
                onPress={() => navigation.navigate("Frame6")}
              />
              <Text style={[styles.save, styles.saveTypo]}>Save</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.uTurnToRight, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/u-turn-to-right.png")}
      />
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Image
          style={[styles.doneIcon, styles.doneIconLayout]}
          contentFit="cover"
          source={require("../assets/done.png")}
        />
        <Text style={[styles.delete, styles.saveTypo]}>Delete</Text>
      </View>
      <View style={styles.frameWrapper1}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Frame")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/u-turn-to-left.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
  },
  frameViewLayout: {
    height: 471,
    width: 267,
    left: 0,
    position: "absolute",
  },
  doneIconLayout: {
    height: 18,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  wrapperLayout: {
    height: 29,
    width: 46,
    top: 20,
    position: "absolute",
  },
  frameItemLayout: {
    height: 27,
    width: 64,
    position: "absolute",
  },
  image2Icon: {
    top: 70,
    left: 13,
    width: 242,
    height: 142,
    position: "absolute",
  },
  frameChild: {
    top: 13,
    left: 197,
    backgroundColor: Color.colorGainsboro_100,
    width: 54,
    borderRadius: Border.br_11xl,
  },
  save: {
    top: 16,
    left: 215,
    color: Color.colorBlack,
  },
  image2Parent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    overflow: "hidden",
    top: 0,
    height: 471,
  },
  frameView: {
    top: 3,
  },
  frameContainer: {
    width: 258,
    position: "absolute",
    height: 474,
  },
  frameWrapper: {
    width: 267,
    left: 0,
    top: 0,
    position: "absolute",
    height: 474,
  },
  uTurnToRight: {
    left: 138,
  },
  frameItem: {
    backgroundColor: Color.colorBlue,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  doneIcon: {
    top: 5,
    left: 8,
    width: 17,
  },
  delete: {
    top: 8,
    left: 28,
    color: Color.colorWhitesmoke,
  },
  rectangleParent: {
    top: 258,
    left: 97,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 74,
  },
  frameWrapper1: {
    top: 2,
    left: 6,
    width: 128,
    height: 46,
    position: "absolute",
  },
  frameParent: {
    flex: 1,
    height: 474,
    width: "100%",
  },
});

export default Frame9;
