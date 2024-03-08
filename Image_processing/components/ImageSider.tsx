import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ImageSider = () => {
  return (
    <View style={styles.imageSider}>
      <Image
        style={[styles.property1defaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1default.png")}
      />
      <Image
        style={[styles.property1variant2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1variant2.png")}
      />
      <Image
        style={[styles.property1variant3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1variant3.png")}
      />
      <Image
        style={[styles.property1variant4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1variant4.png")}
      />
      <Image
        style={[styles.property1variant5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1variant5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 108,
    width: 100,
    position: "absolute",
  },
  property1defaultIcon: {
    top: 20,
    left: 20,
    height: 108,
    width: 100,
    position: "absolute",
  },
  property1variant2Icon: {
    top: 148,
    left: 20,
    height: 108,
    width: 100,
    position: "absolute",
  },
  property1variant3Icon: {
    top: 276,
    left: 20,
    height: 108,
    width: 100,
    position: "absolute",
  },
  property1variant4Icon: {
    top: 404,
    left: 20,
    height: 108,
    width: 100,
    position: "absolute",
  },
  property1variant5Icon: {
    top: 526,
    left: 26,
    height: 108,
    width: 100,
    position: "absolute",
  },
  imageSider: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 140,
    height: 660,
    overflow: "hidden",
  },
});

export default ImageSider;
