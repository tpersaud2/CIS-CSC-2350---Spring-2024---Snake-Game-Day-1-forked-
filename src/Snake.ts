import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  private currentDirection: number;
  private currentPosition: number;
  private p: Point;
  color: string;

  constructor(snakeColor: string) {
    this.currentDirection = 1;
    this.currentPosition = 0;
    this.p = new Point(0, 0);
    this.color = snakeColor;
  }

  move(squares: number) {
    /**  if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + squares;
    } if (this.currentDirection === -1) {
      this.currentPosition = this.currentPosition - squares;
    } */
    if (this.currentDirection === 1) {
      this.p = new Point(this.p.x + 1, this.p.y);
    } else if (this.currentDirection === -1) {
      this.p = new Point(this.p.x - 1, this.p.y);
    } else if (this.currentDirection === 0) {
      this.p = new Point(this.p.x, this.p.y + 1);
    } else if (this.currentDirection === 2) {
      this.p = new Point(this.p.x, this.p.y - 1);
    }
  }
  /**
   * @deprecated Use turnLeft or turnRight instead
   */
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }

  turnLeft() {
    // currentDirection 1 is right
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
      // currentDirection 0 is up
    } else if (this.currentDirection === 0) {
      this.currentDirection = -1;
      // currentDirection 2 is down
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    }
  }

  turnRight() {
    // currentDirection -1 is left
    if (this.currentDirection === -1) {
      this.currentDirection = 1;
    } // currentDirection 0 is up
    else if (this.currentDirection === 0) {
      this.currentDirection = 1;
    } // currentDirection 2 is down
    else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    }
  }

  get position() {
    return this.currentPosition;
  }
}

export default Snake;
