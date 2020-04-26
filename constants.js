import { Dimensions } from "react-native";
const { height: maxHeight, width: maxWidth } = Dimensions.get("screen");
const pipeGap = 200;
const pipeWidth = 75;
const pipeHeight = 50;
const birdSize = 50;
export default {
  maxHeight,
  maxWidth,
  pipeGap,
  pipeWidth,
  birdSize,
  pipeHeight
};
