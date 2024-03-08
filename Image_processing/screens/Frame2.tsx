import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <ImageBackground
        style={styles.frameWrapperPosition}
        resizeMode="cover"
        source={require("../assets/frame54.png")}
      >
        <View style={[styles.reflectiveParent, styles.frameInnerBorder]}>
          <Text style={[styles.reflective, styles.proTypo]}>Reflective</Text>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.imageReproduction, styles.deleteObjectTypo]}>
            Image reproduction
          </Text>
          <Text style={[styles.deleteObject, styles.deleteObjectTypo]}>
            Delete object
          </Text>
          <Image
            style={styles.eraseImageIcon}
            contentFit="cover"
            source={require("../assets/erase-image.png")}
          />
          <Image
            style={styles.faceSwapperIcon}
            contentFit="cover"
            source={require("../assets/face-swapper.png")}
          />
          <Text style={[styles.sharpen, styles.textTypo]}>Sharpen</Text>
          <Image
            style={[styles.pencilSharpenerIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/pencil-sharpener.png")}
          />
          <Text style={[styles.removeBackground, styles.proTypo]}>{`Remove
 background`}</Text>
          <Image
            style={[styles.backgroundRemoverIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/background-remover.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>Text</Text>
          <Image
            style={[styles.lowercaseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/lowercase.png")}
          />
          <Text style={[styles.makeup, styles.proTypo]}>{`Makeup
`}</Text>
          <Image
            style={[styles.lipstickIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/lipstick.png")}
          />
          <View style={styles.picture} />
          <View style={[styles.rectangleWrapper, styles.frameInnerLayout]}>
            <View style={[styles.frameInner, styles.frameInnerPosition]} />
          </View>
          <Pressable
            style={styles.startEditingPhotosContainer}
            onPress={() => navigation.navigate("Frame14")}
          >
            <Text style={[styles.startEditingPhotos, styles.proTypo]}>
              Start editing photos
            </Text>
          </Pressable>
          <Image
            style={[styles.image1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Frame12")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/frame-51.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectangleContainer, styles.rectangleLayout]}
            onPress={() => navigation.navigate("Frame11")}
          >
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
          </Pressable>
          <Text style={[styles.pro, styles.proTypo]}>PRO</Text>
          <Image
            style={styles.imageSiderIcon}
            contentFit="cover"
            source={require("../assets/image-sider.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  frameInnerBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  proTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  frameLayout: {
    height: 57,
    top: 166,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  deleteObjectTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    top: 273,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 35,
    width: 166,
    position: "absolute",
  },
  frameInnerPosition: {
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    top: 0,
  },
  rectangleLayout: {
    width: 64,
    height: 21,
    position: "absolute",
  },
  reflective: {
    top: 318,
    left: 48,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    left: 13,
    width: 109,
  },
  frameItem: {
    left: 133,
    width: 119,
  },
  imageReproduction: {
    top: 200,
    left: 135,
    textAlign: "center",
  },
  deleteObject: {
    top: 197,
    left: 29,
    textAlign: "left",
  },
  eraseImageIcon: {
    left: 23,
    width: 55,
    height: 21,
    top: 173,
    position: "absolute",
  },
  faceSwapperIcon: {
    left: 170,
    width: 51,
    height: 24,
    top: 173,
    position: "absolute",
  },
  sharpen: {
    left: 45,
  },
  pencilSharpenerIcon: {
    left: 51,
    width: 27,
    height: 15,
    top: 253,
  },
  removeBackground: {
    top: 268,
    left: 98,
    textAlign: "center",
    position: "absolute",
  },
  backgroundRemoverIcon: {
    left: 117,
    width: 27,
    height: 15,
    top: 253,
  },
  text: {
    left: 183,
  },
  lowercaseIcon: {
    left: 179,
    width: 27,
    height: 15,
    top: 253,
  },
  makeup: {
    top: 317,
    left: 144,
    width: 42,
    height: 13,
    textAlign: "center",
    position: "absolute",
  },
  lipstickIcon: {
    top: 300,
    left: 148,
    width: 27,
    height: 15,
  },
  picture: {
    top: 41,
    left: 32,
    width: 187,
    height: 117,
    position: "absolute",
  },
  frameInner: {
    borderWidth: 1,
    height: 35,
    width: 166,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  rectangleWrapper: {
    top: 367,
    left: 44,
  },
  startEditingPhotos: {
    textAlign: "center",
  },
  startEditingPhotosContainer: {
    left: 73,
    top: 378,
    position: "absolute",
  },
  image1Icon: {
    top: 303,
    left: 70,
    width: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 222,
    top: 12,
    width: 30,
    height: 25,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 16,
    left: 158,
  },
  pro: {
    top: 20,
    left: 176,
    textAlign: "center",
    position: "absolute",
  },
  imageSiderIcon: {
    top: 54,
    left: 78,
    width: 97,
    height: 108,
    position: "absolute",
  },
  reflectiveParent: {
    backgroundColor: Color.colorWhite,
    borderWidth: 2,
    overflow: "hidden",
    width: 260,
    left: 0,
    top: 0,
    position: "absolute",
    height: 471,
  },
  frameWrapperPosition: {
    width: 260,
    left: 0,
    top: 0,
    position: "absolute",
    height: 471,
  },
  frameParent: {
    flex: 1,
    height: 471,
    width: "100%",
  },
});

export default Frame2;
