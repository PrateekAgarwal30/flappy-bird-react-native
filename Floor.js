import React from "react";
import { View, StyleSheet, Image } from "react-native";
export default class Floor extends React.Component {
  render() {
    const { size, body } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    // console.log("Body");
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
          source={require("./assets/sprites/base.png")}
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
