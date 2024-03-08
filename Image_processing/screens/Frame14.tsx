import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.slrCameraParent}>
      <Image
        style={styles.slrCameraIcon}
        contentFit="cover"
        source={require("../assets/slr-camera.png")}
      />
      <Pressable
        style={[styles.image, styles.imagePosition]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
      </Pressable>
      <Image
        style={[styles.switchCameraIcon, styles.imagePosition]}
        contentFit="cover"
        source={require("../assets/switch-camera.png")}
      />
      <Text style={[styles.editAi, styles.editAiTypo]}>Edit AI</Text>
      <Text style={[styles.handmade, styles.editAiTypo]}>Handmade</Text>
      <View style={styles.frameChild} />
      <Pressable
        style={[styles.frameWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Frame")}
      >
        <View style={[styles.frameContainer, styles.vectorParentPosition]}>
          <View style={[styles.vectorParent, styles.vectorParentPosition]}>
            <Image
              style={[styles.vectorParent, styles.vectorParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.dizzyPersonIcon, styles.dizzyPersonIconLayout]}
              contentFit="cover"
              source={require("../assets/dizzy-person.png")}
            />
          </View>
        </View>
      </Pressable>
      <View
        style={[styles.naturalUserInterface2Wrapper, styles.wrapperPosition]}
      >
        <Image
          style={[styles.naturalUserInterface2, styles.dizzyPersonIconLayout]}
          contentFit="cover"
          source={require("../assets/natural-user-interface-2.png")}
        />
      </View>
      <View style={styles.frameInner} />
      <Pressable
        style={[styles.uTurnToLeft, styles.turnLayout]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/u-turn-to-left.png")}
        />
      </Pressable>
      <Image
        style={[styles.uTurnToRight, styles.turnLayout]}
        contentFit="cover"
        source={require("../assets/u-turn-to-right.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    width: 52,
    top: 283,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  editAiTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 384,
    position: "absolute",
  },
  wrapperLayout: {
    height: 58,
    top: 355,
    width: 98,
  },
  vectorParentPosition: {
    left: 0,
    top: 0,
    height: 58,
    position: "absolute",
  },
  dizzyPersonIconLayout: {
    height: 20,
    width: 24,
    left: 37,
    position: "absolute",
  },
  wrapperPosition: {
    left: 154,
    position: "absolute",
  },
  turnLayout: {
    height: 29,
    width: 46,
    top: 7,
    position: "absolute",
  },
  slrCameraIcon: {
    top: 270,
    left: 110,
    width: 65,
    height: 51,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_31xl,
  },
  image: {
    left: 34,
    height: 36,
  },
  switchCameraIcon: {
    left: 199,
    height: 40,
  },
  editAi: {
    left: 52,
  },
  handmade: {
    left: 171,
  },
  frameChild: {
    top: 44,
    left: 26,
    backgroundColor: Color.colorRosybrown,
    width: 217,
    height: 226,
    position: "absolute",
  },
  vectorParent: {
    width: 98,
  },
  dizzyPersonIcon: {
    top: 5,
  },
  frameContainer: {
    width: 92,
  },
  frameWrapper: {
    left: 19,
    position: "absolute",
  },
  naturalUserInterface2: {
    top: 0,
    height: 20,
    width: 24,
    left: 37,
  },
  naturalUserInterface2Wrapper: {
    top: 358,
    width: 79,
    height: 24,
  },
  frameInner: {
    top: 284,
    left: 211,
    height: 62,
    width: 98,
    position: "absolute",
  },
  uTurnToLeft: {
    left: 71,
  },
  uTurnToRight: {
    left: 135,
  },
  wrapper: {
    height: 58,
    top: 355,
    width: 98,
  },
  slrCameraParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    flex: 1,
    height: 471,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame14;
