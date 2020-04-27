import Matter from "matter-js";
import _ from "lodash";
import constants from "./constants";
let ticks = 0;
const Physics = (entities, { touches, time }) => {
  const pressTouches = _.filter(touches, (touch) => touch.type === "press");
  const bird = entities.bird.body;
  ticks++;
  if (ticks % 30 === 0) {
    const pose = (entities.bird.pose + 1) % 4;
    entities.bird.pose = pose;
  }
  if (
    pressTouches.length &&
    entities.bird.body.position.y > 1.5 * constants.birdHeight
  ) {
    Matter.Body.setVelocity(bird, { x: 0, y: -9.8 });
  }
  for (var i = 1; i < 5; i++) {
    if (
      entities[`pipe${i}`].body.position.x + constants.pipeCoreWidth / 2 <
      0
    ) {
      Matter.Body.setPosition(entities[`pipe${i}`].body, {
        x: constants.maxWidth * 2 - constants.pipeCoreWidth / 2,
        y: entities[`pipe${i}`].body.position.y,
      });
    } else {
      Matter.Body.translate(entities[`pipe${i}`].body, { x: -1, y: 0 });
    }
  }
  for (var i = 1; i < 3; i++) {
    if (entities[`floor${i}`].body.position.x + constants.maxWidth / 2 < 0) {
      Matter.Body.setPosition(entities[`floor${i}`].body, {
        x: (constants.maxWidth * 3) / 2 - 28,
        y: entities[`floor${i}`].body.position.y,
      });
    } else {
      Matter.Body.translate(entities[`floor${i}`].body, { x: -2, y: 0 });
    }
  }
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;
