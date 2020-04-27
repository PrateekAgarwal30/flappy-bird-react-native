import React from "react";
import { View, StyleSheet, Image } from "react-native";
import constants from "./constants";
export default class Floor extends React.Component {
  render() {
    const { size, body } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    const imageRepeat = Math.ceil(width / constants.floorWidth);
    return (
      <View
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: width,
          height: height,
          flexDirection: "row",
        }}
      >
        {Array.apply(null, Array(imageRepeat)).map((el, indexKey) => {
          return (
            <Image
              source={require("./assets/sprites/base.png")}
              style={{
                height: height,
                width: constants.floorWidth,
              }}
              key={indexKey}
              resizeMode="stretch"
            />
          );
        })}
      </View>
    );
  }
}
