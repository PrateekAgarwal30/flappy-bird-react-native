import React from "react";
import { View, StyleSheet, Image } from "react-native";
import images from "./images";
export default class Bird extends React.Component {
  render() {
    const { body, size, pose } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    return (
      <View
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: width,
          height: height,
        }}
      >
        <Image
          source={images[`bird-yellow-${pose}`]}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height: height,
            width: width,
          }}
          resizeMode="stretch"
        />
      </View>
    );
  }
}
