import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import constants from "./constants";
import Bird from "./Bird";
import Wall from "./Wall";
import Physics from "./Physics";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.entities = this.setUpWorld();
    this.state = {
      running: true,
    };
  }
  heightGenerator = (min, max) => {
    return Math.random() * (max - min + 1) + min;
  };
  setUpWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    let bird = Matter.Bodies.rectangle(
      constants.maxWidth / 4,
      constants.maxHeight / 2,
      constants.birdSize,
      constants.birdSize
    );
    let floor = Matter.Bodies.rectangle(
      constants.maxWidth / 2,
      constants.maxHeight - constants.pipeHeight / 2,
      constants.maxWidth,
      constants.pipeHeight,
      { isStatic: true }
    );
    let ceiling = Matter.Bodies.rectangle(
      constants.maxWidth / 2,
      constants.pipeHeight / 2,
      constants.maxWidth,
      constants.pipeHeight,
      { isStatic: true }
    );
    const pipe1Height = this.heightGenerator(100, constants.maxHeight / 2);
    const pipe2Height = constants.maxHeight - constants.pipeGap - pipe1Height;

    let pipe1 = Matter.Bodies.rectangle(
      constants.maxWidth,
      pipe1Height / 2,
      constants.pipeWidth,
      pipe1Height,
      { isStatic: true }
    );
    let pipe2 = Matter.Bodies.rectangle(
      constants.maxWidth,
      constants.maxHeight - pipe2Height / 2,
      constants.pipeWidth,
      pipe2Height,
      { isStatic: true }
    );

    const pipe3Height = this.heightGenerator(100, constants.maxHeight / 2);
    const pipe4Height = constants.maxHeight - constants.pipeGap - pipe3Height;

    let pipe3 = Matter.Bodies.rectangle(
      2 * constants.maxWidth,
      pipe3Height / 2,
      constants.pipeWidth,
      pipe3Height,
      { isStatic: true }
    );
    let pipe4 = Matter.Bodies.rectangle(
      2 * constants.maxWidth,
      constants.maxHeight - pipe4Height / 2,
      constants.pipeWidth,
      pipe4Height,
      { isStatic: true }
    );

    Matter.World.add(world, [bird, floor, ceiling, pipe1, pipe2, pipe3, pipe4]);
    Matter.Events.on(engine, "collisionStart", (event) => {
      // console.log("Collision Detect4ed");
      this.gameEngine.dispatch({ type: "game-over" });
    });
    return {
      physics: { engine: engine, world: world },
      bird: {
        body: bird,
        size: [constants.birdSize, constants.birdSize],
        color: "red",
        renderer: Bird,
      },
      floor: {
        body: floor,
        size: [constants.maxWidth, constants.pipeHeight],
        color: "green",
        renderer: Wall,
      },
      ceiling: {
        body: ceiling,
        size: [constants.maxWidth, constants.pipeHeight],
        color: "green",
        renderer: Wall,
      },
      pipe1: {
        body: pipe1,
        size: [constants.pipeWidth, pipe1Height],
        color: "green",
        renderer: Wall,
      },
      pipe2: {
        body: pipe2,
        size: [constants.pipeWidth, pipe2Height],
        color: "green",
        renderer: Wall,
      },
      pipe3: {
        body: pipe3,
        size: [constants.pipeWidth, pipe3Height],
        color: "green",
        renderer: Wall,
      },
      pipe4: {
        body: pipe4,
        size: [constants.pipeWidth, pipe4Height],
        color: "green",
        renderer: Wall,
      },
    };
  };
  onEvent = (e) => {
    if (e.type === "game-over") {
      this.setState((prevState) => ({
        ...prevState,
        running: false,
      }));
    }
  };
  resetGame = () => {
    this.gameEngine.swap(this.setUpWorld());
    this.setState((prevState) => ({
      ...prevState,
      running: true,
    }));
  };
  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          entities={this.entities}
          systems={[Physics]}
          running={this.state.running}
          onEvent={this.onEvent}
        >
          <StatusBar hidden={true} />
        </GameEngine>
        {!this.state.running && (
          <TouchableOpacity
            style={styles.fullScreenButton}
            onPress={this.resetGame}
          >
            <View style={styles.fullScreen}>
              <Text style={styles.gameOverText}>GameOver</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  fullScreenButton: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  fullScreen: {
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
  gameOverText: {
    color: "white",
    fontSize: 40,
  },
});
