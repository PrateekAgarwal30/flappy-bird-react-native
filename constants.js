import { Dimensions } from "react-native";
const { height: maxHeight, width: maxWidth } = Dimensions.get("screen");
const pipeGap = 250;
const pipeWidth = 212 / 3;
const pipeHeight = 95 / 3;
const birdWidth = 50;
const birdHeight = 35;
const floorHeight = 56;
const floorWidth = 168;
export default {
  maxHeight,
  maxWidth,
  pipeGap,
  pipeWidth,
  pipeHeight,
  birdWidth,
  birdHeight,
  floorHeight,
  floorWidth,
};
