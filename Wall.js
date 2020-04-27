import React from "react";
import { View, StyleSheet, Image } from "react-native";
import constants from "./constants";
import images from "./images";
export default class Wall extends React.Component {
  render() {
    const { body, size, type } = this.props;
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    const imageRepeat = Math.ceil(
      (height - constants.pipeTopHeight) / constants.pipeCoreHeight
    );
    return (
      <View
        style={{
          position: "absolute",
          top: y,
          left: x,
          height: height,
          flexDirection: "column",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        {type === "bottom" && (
          <View
            style={{
              height: constants.pipeTopHeight,
              flexDirection: "column",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <Image
              source={images["pipeTop"]}
              style={{
                height: constants.pipeTopHeight,
                width: width + 10,
              }}
              resizeMode="stretch"
            />
          </View>
        )}
        <View
          style={{
            height: height - constants.pipeTopHeight,
            flexDirection: "column",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          {Array.apply(null, Array(imageRepeat)).map((el, indexKey) => {
            return (
              <Image
                source={images["pipeCore"]}
                style={{
                  height: constants.pipeCoreHeight,
                  width: width,
                }}
                key={indexKey}
                resizeMode="stretch"
              />
            );
          })}
        </View>
        {type === "top" && (
          <View
            style={{
              height: constants.pipeTopHeight,
              flexDirection: "column",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <Image
              source={images["pipeTop"]}
              style={{
                height: constants.pipeTopHeight,
                width: width + 10,
              }}
              resizeMode="stretch"
            />
          </View>
        )}
      </View>
    );
  }
}
