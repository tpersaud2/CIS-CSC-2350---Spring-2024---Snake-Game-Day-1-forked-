import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private sna: Snake;

  constructor(s: Snake) {
    this.sna = s;
  }

  update(steps: number) {
    this.sna.move(steps);
  }

  get snake() {
    return this.sna;
  }
}

export default WorldModel;
