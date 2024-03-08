import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View style={styles.frameContainer}>
          <View style={styles.frameContainer}>
            <View style={styles.frameContainer}>
              <View style={styles.frameContainer}>
                <View style={styles.image2Parent}>
                  <Image
                    style={styles.image2Icon}
                    contentFit="cover"
                    source={require("../assets/image-21.png")}
                  />
                  <View style={[styles.frameChild, styles.frameBorder]} />
                  <View style={[styles.frameItem, styles.frameBorder]} />
                  <View style={[styles.frameInner, styles.frameBorder]} />
                  <Pressable
                    style={[styles.rectangleWrapper, styles.rectangleLayout]}
                    onPress={() => navigation.navigate("Frame10")}
                  >
                    <View
                      style={[styles.rectangleView, styles.rectangleLayout]}
                    />
                  </Pressable>
                  <Text style={styles.delete}>Delete</Text>
                  <View style={styles.frameChild1} />
                  <Image
                    style={styles.doneIcon}
                    contentFit="cover"
                    source={require("../assets/done.png")}
                  />
                  <Image
                    style={[styles.uTurnToRight, styles.turnLayout]}
                    contentFit="cover"
                    source={require("../assets/u-turn-to-right.png")}
                  />
                  <Image
                    style={[styles.uTurnToLeft, styles.turnLayout]}
                    contentFit="cover"
                    source={require("../assets/u-turn-to-left.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBorder: {
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleLayout: {
    height: 27,
    width: 64,
    position: "absolute",
  },
  turnLayout: {
    height: 29,
    width: 46,
    top: 13,
    position: "absolute",
  },
  image2Icon: {
    top: 66,
    left: 14,
    width: 242,
    height: 142,
    position: "absolute",
  },
  frameChild: {
    top: 92,
    left: 35,
    borderColor: "rgba(66, 200, 44, 0.99)",
    width: 65,
    height: 98,
  },
  frameItem: {
    top: 105,
    left: 117,
    borderColor: Color.colorYellow,
    width: 39,
    height: 102,
  },
  frameInner: {
    top: 97,
    left: 165,
    borderColor: Color.colorMediumblue,
    width: 53,
    height: 111,
  },
  rectangleView: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBlue,
    left: 0,
    top: 0,
    width: 64,
  },
  rectangleWrapper: {
    top: 258,
    left: 97,
  },
  delete: {
    top: 266,
    left: 125,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    position: "absolute",
  },
  frameChild1: {
    top: 6,
    left: 101,
    width: 55,
    height: 21,
    position: "absolute",
  },
  doneIcon: {
    top: 263,
    left: 106,
    width: 17,
    height: 18,
    position: "absolute",
  },
  uTurnToRight: {
    left: 156,
  },
  uTurnToLeft: {
    left: 66,
  },
  image2Parent: {
    top: -2,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    overflow: "hidden",
    borderWidth: 2,
    borderStyle: "solid",
    height: 471,
    left: 0,
    width: 269,
    position: "absolute",
  },
  frameContainer: {
    height: 471,
    left: 0,
    top: 0,
    width: 269,
    position: "absolute",
  },
  frameWrapper: {
    top: 10,
    left: 29,
    height: 476,
    width: 269,
    position: "absolute",
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 486,
  },
});

export default Frame1;
