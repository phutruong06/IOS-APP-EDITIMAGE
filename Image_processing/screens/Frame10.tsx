import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Frame10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/u-turn-to-left.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    left: 74,
    top: 20,
    width: 46,
    height: 29,
  },
  frameParent: {
    flex: 1,
    height: 46,
    width: "100%",
  },
});

export default Frame10;
