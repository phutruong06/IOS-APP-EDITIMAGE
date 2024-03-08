import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.framePosition]} />
        <View style={[styles.frameInner, styles.framePosition]} />
        <Text style={[styles.annual3Day, styles.vndTypo]}>
          Annual + 3-day free trial
        </Text>
        <Text style={[styles.vndyear, styles.vndTypo]}>592.000VND/year</Text>
        <Text style={[styles.only49000vndmonth, styles.save50Typo]}>
          Only 49.000VND/month
        </Text>
        <Text style={[styles.justBuyOnce, styles.save50Typo]}>
          Just buy once
        </Text>
        <Text style={[styles.vnd, styles.vndTypo]}>4.800.000VND</Text>
        <Text style={[styles.lifetimeProUser, styles.vndTypo]}>
          Lifetime Pro User
        </Text>
        <View style={styles.rectangleView} />
        <Text style={[styles.save50, styles.save50Typo]}>Save 50%</Text>
        <Text style={[styles.vnd1, styles.vndTypo]}>2.400.000VND</Text>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={[styles.weekly3DayFreeTrialParent, styles.parentPosition]}>
          <Text style={[styles.weekly3Day, styles.vndTypo]}>
            Weekly + 3-day free trial
          </Text>
          <Text style={[styles.vndweekly, styles.vndTypo]}>
            95.000VND/Weekly
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.arrowPointingLeft}
        onPress={() => navigation.navigate("Frame2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-pointing-left.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  framePosition: {
    left: 22,
    right: 24,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vndTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  save50Typo: {
    fontSize: FontSize.size_8xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild: {
    top: 74,
    left: 20,
    width: 219,
    height: 79,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameItem: {
    top: 181,
    bottom: 240,
  },
  frameInner: {
    top: 252,
    bottom: 169,
  },
  annual3Day: {
    top: 257,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    left: 33,
  },
  vndyear: {
    top: 283,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    left: 33,
  },
  only49000vndmonth: {
    top: 288,
    left: 140,
  },
  justBuyOnce: {
    top: 220,
    left: 44,
  },
  vnd: {
    top: 208,
    left: 108,
    fontSize: FontSize.size_9xs,
    width: 29,
    height: 4,
  },
  lifetimeProUser: {
    top: 183,
    left: 37,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
  },
  rectangleView: {
    top: 182,
    left: 129,
    backgroundColor: Color.colorLightgray,
    width: 44,
    height: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  save50: {
    top: 184,
    left: 139,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  vnd1: {
    top: 202,
    left: 32,
    fontSize: FontSize.size_3xs,
  },
  lineIcon: {
    top: 211,
    left: 110,
    maxHeight: "100%",
    width: 28,
    opacity: 0.5,
    position: "absolute",
  },
  weekly3Day: {
    top: 17,
    left: 10,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
  },
  vndweekly: {
    top: 39,
    left: 12,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
  },
  weekly3DayFreeTrialParent: {
    top: 75,
    left: 19,
    width: 220,
    height: 78,
  },
  rectangleParent: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    width: 260,
    borderRadius: Border.br_3xs,
    height: 471,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowPointingLeft: {
    left: 13,
    top: 14,
    width: 39,
    height: 39,
    position: "absolute",
  },
  frameParent: {
    flex: 1,
    height: 471,
    width: "100%",
  },
});

export default Frame11;
