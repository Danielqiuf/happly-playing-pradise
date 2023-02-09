import { _decorator, Component, Graphics, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass("Circle")
export class Circle extends Component {
  start() {
    const node = this.getComponent(Graphics);
    node.lineWidth = 4
    node.fillColor = new Color().fromHEX('#ffffff');
    node.arc(0 ,0, 50, 0, 2 * Math.PI, false)
    node.fill()
    node.stroke();
  }

  update(deltaTime: number) {}
}


