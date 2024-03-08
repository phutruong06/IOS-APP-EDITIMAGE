import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.frameLayout1]}>
        <View style={[styles.frameContainer, styles.frameWrapperPosition]}>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Frame6")}
          >
            <View style={[styles.frameView, styles.frameWrapperPosition]}>
              <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
                <View style={[styles.frameGroup, styles.frameLayout]}>
                  <View style={[styles.frameParent1, styles.frameLayout]}>
                    <View
                      style={[styles.frameWrapper2, styles.frameWrapperLayout]}
                    >
                      <Pressable
                        style={[
                          styles.frameWrapper3,
                          styles.frameWrapperLayout,
                        ]}
                        onPress={() => navigation.navigate("Frame1")}
                      >
                        <View
                          style={[
                            styles.frameWrapper4,
                            styles.frameWrapperLayout,
                          ]}
                        >
                          <View
                            style={[
                              styles.frameWrapper4,
                              styles.frameWrapperLayout,
                            ]}
                          >
                            <View
                              style={[
                                styles.frameWrapper4,
                                styles.frameWrapperLayout,
                              ]}
                            >
                              <View
                                style={[
                                  styles.frameWrapper3,
                                  styles.frameWrapperLayout,
                                ]}
                              >
                                <Image
                                  style={[
                                    styles.frameWrapper3,
                                    styles.frameWrapperLayout,
                                  ]}
                                  contentFit="cover"
                                  source={require("../assets/ellipse-4.png")}
                                />
                                <Image
                                  style={[
                                    styles.dizzyPersonIcon,
                                    styles.frameWrapper7Layout,
                                  ]}
                                  contentFit="cover"
                                  source={require("../assets/dizzy-person.png")}
                                />
                                <Text
                                  style={[styles.editAi, styles.editAiTypo]}
                                >
                                  Edit AI
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Pressable>
                    </View>
                    <View
                      style={[styles.frameWrapper7, styles.frameWrapper7Layout]}
                    >
                      <Pressable
                        style={[
                          styles.frameWrapper8,
                          styles.frameWrapperPosition,
                        ]}
                        onPress={() => navigation.navigate("Frame8")}
                      >
                        <View
                          style={[
                            styles.frameWrapper8,
                            styles.frameWrapperPosition,
                          ]}
                        >
                          <Image
                            style={[
                              styles.frameWrapper3,
                              styles.frameWrapperLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/ellipse-5.png")}
                          />
                          <Image
                            style={[
                              styles.naturalUserInterface2,
                              styles.frameWrapper7Layout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/natural-user-interface-2.png")}
                          />
                          <Text style={[styles.handmade, styles.editAiTypo]}>
                            Handmade
                          </Text>
                        </View>
                      </Pressable>
                    </View>
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
                  <Image
                    style={[styles.frameInner, styles.image4Position]}
                    contentFit="cover"
                    source={require("../assets/rectangle-10.png")}
                  />
                  <Image
                    style={styles.image2Icon}
                    contentFit="cover"
                    source={require("../assets/image-2.png")}
                  />
                  <Image
                    style={styles.rectangleIcon}
                    contentFit="cover"
                    source={require("../assets/rectangle-12.png")}
                  />
                  <View
                    style={[styles.rectangleView, styles.frameChild1Border]}
                  />
                  <View
                    style={[styles.frameChild1, styles.frameChild1Border]}
                  />
                  <View style={[styles.image4, styles.image4Position]} />
                  <View style={styles.image5} />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 474,
    position: "absolute",
  },
  frameWrapperPosition: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    height: 471,
    position: "absolute",
  },
  frameWrapperLayout: {
    height: 58,
    position: "absolute",
  },
  frameWrapper7Layout: {
    height: 20,
    width: 24,
    position: "absolute",
  },
  editAiTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  turnLayout: {
    height: 29,
    width: 46,
    top: 12,
    position: "absolute",
  },
  image4Position: {
    left: 13,
    position: "absolute",
  },
  frameChild1Border: {
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  frameWrapper3: {
    width: 98,
    top: 0,
    left: 0,
  },
  dizzyPersonIcon: {
    top: 5,
    left: 37,
    width: 24,
  },
  editAi: {
    top: 29,
    left: 30,
  },
  frameWrapper4: {
    width: 92,
    top: 0,
    left: 0,
  },
  frameWrapper2: {
    left: 12,
    width: 98,
    top: 353,
  },
  naturalUserInterface2: {
    left: 37,
    width: 24,
    top: 9,
  },
  handmade: {
    top: 31,
    left: 22,
  },
  frameWrapper8: {
    height: 62,
    width: 98,
    position: "absolute",
  },
  frameWrapper7: {
    left: 154,
    top: 353,
  },
  uTurnToRight: {
    left: 157,
  },
  uTurnToLeft: {
    left: 67,
  },
  frameParent1: {
    width: 269,
    top: 0,
    left: 0,
  },
  frameInner: {
    top: 252,
    width: 241,
    height: 31,
  },
  image2Icon: {
    top: 62,
    left: 18,
    width: 236,
    height: 152,
    position: "absolute",
  },
  rectangleIcon: {
    top: 91,
    left: 33,
    width: 70,
    height: 100,
    position: "absolute",
  },
  rectangleView: {
    top: 106,
    left: 117,
    borderColor: Color.colorYellow,
    width: 42,
    height: 102,
  },
  frameChild1: {
    top: 98,
    left: 167,
    borderColor: Color.colorMediumblue,
    width: 53,
    height: 116,
  },
  image4: {
    top: 337,
    width: 22,
    height: 46,
  },
  image5: {
    top: 390,
    left: 14,
    width: 21,
    height: 51,
    position: "absolute",
  },
  frameGroup: {
    top: -6,
    left: 7,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    width: 267,
    overflow: "hidden",
    borderWidth: 2,
    borderStyle: "solid",
    height: 471,
  },
  frameWrapper1: {
    width: 276,
    height: 465,
    position: "absolute",
  },
  frameView: {
    width: 138,
    height: 35,
    position: "absolute",
  },
  framePressable: {
    left: 8,
    width: 144,
    height: 43,
    top: 9,
    position: "absolute",
  },
  frameContainer: {
    width: 288,
    height: 474,
    position: "absolute",
  },
  frameWrapper: {
    top: 22,
    width: 284,
    left: 0,
    height: 474,
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 496,
  },
});

export default Frame;
