
import Sketch from "react-p5"

function Bg() {

    let a = 300;
    let b = 300;
    let speed = 3;
    let setup = (p5, canvasParentRef) => {
      let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
      let x = (p5.windowWidth - p5.width) / 2;
      let y = (p5.windowHeight - p5.height) / 2;
      xyz.position(x, y);
    };
    let draw = (p5) => {
      p5.background("rgb(100%,0%,10%)");
      p5.stroke(255);
      p5.strokeWeight(4);
      p5.noFill();
      p5.triangle(a, b,b, 100, 100,100);
      if (a >= p5.width) {
        speed = -3;
      }
      if (a === 90) {
        speed = 3;
      }
    }
    return <Sketch setup={setup} draw={draw} />
}
export default Bg;
