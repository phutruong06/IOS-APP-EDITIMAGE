import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.settingParent, styles.framePosition]}>
        <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
        <Pressable
          style={[styles.frameWrapper, styles.frameLayout]}
          onPress={() => navigation.navigate("Frame13")}
        >
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
          </View>
        </Pressable>
        <Image
          style={[styles.forwardIcon, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <Text style={[styles.termsOfService, styles.contactUsTypo]}>
          Terms of service
        </Text>
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
        <Text style={[styles.feedback, styles.settingTypo]}>Feedback</Text>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Image
          style={[styles.letterIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/letter.png")}
        />
        <Image
          style={[styles.termsAndConditions, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/terms-and-conditions.png")}
        />
        <Image
          style={[styles.shareIcon, styles.sharePosition]}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
        <Image
          style={[styles.starHalfEmpty, styles.appReviewsPosition]}
          contentFit="cover"
          source={require("../assets/star-half-empty.png")}
        />
        <Text style={[styles.appReviews, styles.appReviewsPosition]}>
          App reviews
        </Text>
        <Text style={[styles.shareTheApplication, styles.sharePosition]}>
          Share the application
        </Text>
        <Image
          style={[styles.forwardIcon1, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.forwardIcon1, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.forwardIcon3, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.forwardIcon4, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.forwardIcon5, styles.forwardIconLayout]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.discussionForumIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/discussion-forum.png")}
        />
        <Text style={[styles.contactUs, styles.contactUsTypo]}>Contact us</Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/frame-55.png")}
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
  settingTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  frameLayout: {
    height: 28,
    width: 206,
    position: "absolute",
  },
  frameChildLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    height: 28,
    width: 206,
    position: "absolute",
  },
  forwardIconLayout: {
    height: 24,
    width: 14,
    left: 211,
    position: "absolute",
  },
  contactUsTypo: {
    left: 62,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  iconLayout: {
    height: 16,
    width: 20,
    left: 34,
  },
  sharePosition: {
    top: 80,
    position: "absolute",
  },
  appReviewsPosition: {
    top: 111,
    position: "absolute",
  },
  setting: {
    top: 29,
    left: 102,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    top: 0,
  },
  frameContainer: {
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 74,
    left: 27,
  },
  forwardIcon: {
    top: 76,
  },
  frameItem: {
    top: 140,
    left: 27,
  },
  frameInner: {
    top: 175,
    left: 27,
  },
  termsOfService: {
    top: 183,
    position: "absolute",
  },
  rectangleView: {
    top: 210,
    left: 27,
  },
  feedback: {
    top: 218,
    left: 65,
    position: "absolute",
  },
  frameChild1: {
    top: 105,
    left: 27,
  },
  letterIcon: {
    top: 146,
    position: "absolute",
  },
  termsAndConditions: {
    top: 181,
    position: "absolute",
  },
  shareIcon: {
    height: 16,
    width: 20,
    left: 34,
  },
  starHalfEmpty: {
    height: 16,
    width: 20,
    left: 34,
  },
  appReviews: {
    left: 62,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  shareTheApplication: {
    left: 59,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  forwardIcon1: {
    top: 109,
  },
  forwardIcon3: {
    top: 144,
  },
  forwardIcon4: {
    top: 178,
  },
  forwardIcon5: {
    top: 212,
  },
  discussionForumIcon: {
    top: 216,
    position: "absolute",
  },
  contactUs: {
    top: 147,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 17,
    top: 12,
    width: 33,
    height: 48,
    position: "absolute",
  },
  settingParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    width: 260,
    overflow: "hidden",
    position: "absolute",
    height: 471,
  },
  frameParent: {
    flex: 1,
    height: 471,
    width: "100%",
  },
});

export default Frame12;
