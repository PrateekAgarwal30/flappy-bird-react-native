import { Dimensions } from "react-native";
const { height: maxHeight, width: maxWidth } = Dimensions.get("screen");
const pipeGap = 250;
const pipeCoreWidth = 212 / 3 + 11;
const pipeCoreHeight = 95 / 3 + 5;
const pipeTopWidth = 212 / 3;
const pipeTopHeight = 95 / 3;
const birdWidth = 50;
const birdHeight = 35;
const floorHeight = 56;
const floorWidth = 168;
export default {
  maxHeight,
  maxWidth,
  pipeGap,
  pipeTopWidth,
  pipeTopHeight,
  pipeCoreWidth,
  pipeCoreHeight,
  birdWidth,
  birdHeight,
  floorHeight,
  floorWidth,
};
