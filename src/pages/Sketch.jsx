import React from "react";
import Sketch from "react-p5";

class SpiralWavePattern extends React.Component {
  constructor(props) {
    super(props);
    this.cols = 0;
    this.rows = 0;
    this.size = 10;
    this.circles = [];
    this.k = 20;
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    this.cols = p5.width / this.size;
    this.rows = p5.height / this.size;

    for (let i = 0; i < this.cols; i++) {
      this.circles[i] = [];
      for (let j = 0; j < this.rows; j++) {
        let x = this.size / 2 + i * this.size;
        let y = this.size / 2 + j * this.size;
        let d = p5.dist(x, y, p5.width / 2, p5.height / 2);
        let angle = d / this.k;
        this.circles[i][j] = { x, y, angle };
      }
    }
  };

  draw = (p5) => {
    p5.background(220);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let { x, y, angle } = this.circles[i][j];
        let r = this.size / 2;
        let newX = x + r * p5.cos(angle);
        let newY = y + r * p5.sin(angle);
        p5.ellipse(newX, newY, 4, 4);
        this.circles[i][j].angle += 0.05;
      }
    }
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

export default SpiralWavePattern;
