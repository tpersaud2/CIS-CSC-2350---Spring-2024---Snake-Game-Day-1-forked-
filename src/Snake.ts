import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentDirection: number;
  private currentPosition: number;

  constructor() {
    this.currentDirection = 1;
    this.currentPosition = 0;
  }

  move(squares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + squares;
    } else {
      this.currentPosition = this.currentPosition - squares;
    }
  }
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }

  get position() {
    return this.currentPosition;
  }
}

export default Snake;
