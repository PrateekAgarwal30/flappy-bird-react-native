import React from "react";
import { View, StyleSheet } from "react-native";
export default class Wall extends React.Component {
  render() {
    const { color, body, size } = this.props;
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
          backgroundColor: color,
        }}
      />
    );
  }
}
