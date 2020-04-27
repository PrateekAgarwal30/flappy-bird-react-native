import React from "react";
import { View, StyleSheet, Image } from "react-native";
import constants from "./constants";
import images from "./images";
export default class Wall extends React.Component {
  render() {
    const { body, size } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    const imageRepeat = Math.ceil(height / constants.pipeHeight);
    return (
      <View
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: width,
          height: height,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {Array.apply(null, Array(imageRepeat)).map((el, indexKey) => {
          return (
            <Image
              source={images["pipeTop"]}
              style={{
                height: constants.pipeHeight,
                width: width,
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
