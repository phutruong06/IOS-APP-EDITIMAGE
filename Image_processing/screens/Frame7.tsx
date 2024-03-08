import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
        <View style={[styles.libraryParent, styles.frameWrapperLayout]}>
          <Text style={[styles.library, styles.todayTypo]}>Library</Text>
          <Pressable
            style={[styles.arrowPointingLeft, styles.image6IconPosition]}
            onPress={() => navigation.navigate("Frame6")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/arrow-pointing-left1.png")}
            />
          </Pressable>
          <Image
            style={[styles.image6Icon, styles.image6IconPosition]}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
          <Image
            style={styles.image3Icon}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Text style={[styles.today, styles.todayTypo]}>Today</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperLayout: {
    width: 269,
    left: 0,
    position: "absolute",
    height: 471,
  },
  todayTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image6IconPosition: {
    left: 13,
    position: "absolute",
  },
  library: {
    top: 20,
    left: 110,
    fontSize: 15,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowPointingLeft: {
    top: 16,
    width: 47,
    height: 33,
  },
  image6Icon: {
    top: 72,
    width: 83,
    height: 55,
  },
  image3Icon: {
    top: 73,
    left: 103,
    width: 88,
    height: 54,
    position: "absolute",
  },
  today: {
    top: 56,
    left: 23,
    fontSize: FontSize.size_3xs,
  },
  libraryParent: {
    top: 7,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 0,
  },
  frameParent: {
    flex: 1,
    height: 471,
    width: "100%",
  },
});

export default Frame7;
