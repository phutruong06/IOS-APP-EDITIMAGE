import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("Frame4")}
    >
      <View style={[styles.settingParent, styles.frameParentLayout]}>
        <Text style={[styles.setting, styles.gmailTypo]}>Setting</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
          </View>
        </View>
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
        <Text style={[styles.feedback, styles.gmailTypo]}>Feedback</Text>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Image
          style={[styles.letterIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/letter.png")}
        />
        <Image
          style={[styles.termsAndConditions, styles.iconLayout1]}
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
          style={[styles.discussionForumIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/discussion-forum.png")}
        />
        <Text style={[styles.contactUs, styles.contactUsTypo]}>Contact us</Text>
        <Image
          style={[styles.frameIcon, styles.gmailPosition]}
          contentFit="cover"
          source={require("../assets/frame-55.png")}
        />
        <Pressable
          style={[styles.vectorParent, styles.frameParentLayout]}
          onPress={() => navigation.navigate("Frame4")}
        >
          <Image
            style={[styles.rectangleIcon, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Pressable
            style={[styles.vectorGroup, styles.frameParentLayout]}
            onPress={() => navigation.navigate("Frame4")}
          >
            <Image
              style={[styles.frameChild2, styles.frameParentLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-23.png")}
            />
            <Image
              style={[styles.forwardIcon5, styles.forwardIconLayout]}
              contentFit="cover"
              source={require("../assets/forward.png")}
            />
            <Image
              style={[styles.discussionForumIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/discussion-forum.png")}
            />
            <Text style={[styles.youtube, styles.gmailTypo]}>{`Youtube `}</Text>
            <Text style={[styles.wechat, styles.xTypo]}>WeChat</Text>
            <Text style={[styles.x, styles.xTypo]}>{`X
`}</Text>
            <Text style={[styles.instagram, styles.zaloTypo]}>Instagram</Text>
            <Image
              style={[styles.pngtreeInstagramIconPngIma, styles.tiXung11Layout]}
              contentFit="cover"
              source={require("../assets/pngtreeinstagramiconpngimage-6315974-1.png")}
            />
            <Image
              style={[styles.tiXung11, styles.tiXung11Position]}
              contentFit="cover"
              source={require("../assets/ti-xung-1-1.png")}
            />
            <Image
              style={[styles.tiXung1, styles.tiXung1Layout]}
              contentFit="cover"
              source={require("../assets/ti-xung-1.png")}
            />
            <Image
              style={[
                styles.f5322062944x5yya7e42abtniolxIcon,
                styles.snapchatPosition,
              ]}
              contentFit="cover"
              source={require("../assets/360-f-532206294-4x5yya7e42abtniolxocniavnlmft4go-1.png")}
            />
            <Image
              style={[styles.xLogo1Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/x-logo-1.png")}
            />
            <Image
              style={[
                styles.tikTokAndroidApplicationLoIcon,
                styles.iconPosition1,
              ]}
              contentFit="cover"
              source={require("../assets/tiktokandroidapplicationlogos3-1.png")}
            />
            <Image
              style={[
                styles.wechatLogoC88c575be0SeeklogIcon,
                styles.iconPosition1,
              ]}
              contentFit="cover"
              source={require("../assets/wechatlogoc88c575be0seeklogo-1.png")}
            />
            <Image
              style={[styles.gmailNewIcon51981, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/gmailnewicon5198-1.png")}
            />
            <Image
              style={[
                styles.f474059464QldyuzxauwewnttybjIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/360-f-474059464-qldyuzxauwewnttybj44vn89arufkthw-1.png")}
            />
            <Image
              style={[styles.snapchat1Icon, styles.linkedlnPosition]}
              contentFit="cover"
              source={require("../assets/756-snapchat-1.png")}
            />
            <Text style={[styles.linkedln, styles.linkedlnPosition]}>
              Linkedln
            </Text>
            <Text style={[styles.zalo, styles.zaloTypo]}>{`Zalo
`}</Text>
            <Text style={[styles.facebook, styles.gmailTypo]}>Facebook</Text>
            <Text style={[styles.tiktok, styles.xTypo]}>Tiktok</Text>
            <Text style={[styles.gmail, styles.gmailPosition]}>Gmail</Text>
            <Text style={[styles.snapchat, styles.snapchatPosition]}>
              Snapchat
            </Text>
            <View style={[styles.frameView, styles.frameParentLayout]} />
          </Pressable>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    width: 260,
    position: "absolute",
  },
  gmailTypo: {
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
  iconLayout1: {
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
  gmailPosition: {
    left: 17,
    position: "absolute",
  },
  xTypo: {
    top: 322,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  zaloTypo: {
    top: 255,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  tiXung11Layout: {
    height: 39,
    position: "absolute",
  },
  tiXung11Position: {
    left: 143,
    width: 40,
  },
  tiXung1Layout: {
    height: 40,
    width: 40,
    top: 209,
  },
  snapchatPosition: {
    left: 14,
    position: "absolute",
  },
  iconPosition1: {
    top: 280,
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    width: 53,
    height: 40,
  },
  iconPosition: {
    top: 348,
    position: "absolute",
  },
  linkedlnPosition: {
    left: 10,
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
  frameIcon: {
    top: 12,
    width: 33,
    height: 48,
  },
  rectangleIcon: {
    top: -28,
    left: 0,
    height: 471,
  },
  frameChild2: {
    top: 163,
    borderRadius: Border.br_11xl,
    height: 323,
    left: 0,
  },
  youtube: {
    top: 390,
    left: 74,
    position: "absolute",
  },
  wechat: {
    left: 204,
  },
  x: {
    left: 87,
  },
  instagram: {
    left: 71,
    position: "absolute",
  },
  pngtreeInstagramIconPngIma: {
    width: 40,
    left: 77,
    top: 209,
    height: 39,
  },
  tiXung11: {
    height: 39,
    position: "absolute",
    top: 210,
  },
  tiXung1: {
    left: 201,
    position: "absolute",
  },
  f5322062944x5yya7e42abtniolxIcon: {
    height: 40,
    width: 40,
    top: 209,
  },
  xLogo1Icon: {
    width: 32,
    left: 77,
  },
  tikTokAndroidApplicationLoIcon: {
    left: 143,
    width: 40,
  },
  wechatLogoC88c575be0SeeklogIcon: {
    left: 205,
    width: 40,
  },
  gmailNewIcon51981: {
    left: 5,
    top: 348,
    position: "absolute",
  },
  f474059464QldyuzxauwewnttybjIcon: {
    left: 67,
    width: 56,
    height: 44,
  },
  snapchat1Icon: {
    top: 276,
    width: 53,
    height: 40,
  },
  linkedln: {
    top: 255,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  zalo: {
    left: 151,
    width: 23,
    height: 13,
    position: "absolute",
  },
  facebook: {
    top: 256,
    left: 195,
    position: "absolute",
  },
  tiktok: {
    left: 146,
  },
  gmail: {
    top: 388,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  snapchat: {
    top: 320,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  frameView: {
    top: 20,
    left: 0,
    height: 471,
  },
  vectorGroup: {
    top: -36,
    left: 0,
    height: 471,
  },
  vectorParent: {
    top: 21,
    height: 443,
    left: 0,
  },
  settingParent: {
    left: -7,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    overflow: "hidden",
    top: 0,
    height: 471,
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 471,
  },
});

export default Frame5;
