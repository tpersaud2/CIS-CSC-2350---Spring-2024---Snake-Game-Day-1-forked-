import WorldModel from "./WorldModel";
import Snake from "./Snake";

const newModel = new WorldModel(new Snake("blue"));
newModel.snake.move(5);
newModel.snake.turnLeft();
newModel.update(2);
