import { _decorator, Component, Node, Sprite, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BgScrolling")
export class BgScrolling extends Component {
  @property([Node])
  bgNodeList: Node[] = [];
  @property(Sprite)
  baseNode: Sprite = null;

  public readonly dis: number;
  public readonly bg_speed: number;

  constructor(...a) {
    super(...a);
    this.bg_speed = 2;
    this.dis = this.bg_speed * 10;
  }

  start() {
    // console.log("view", this.bgNodeList[0].);
    // this.startScroll()
    //    console.log('node', this.bgNode1, this.bgNode2)
  }

  startScroll() {
    // const size: Size =
    for (let index = 0; index < this.bgNodeList.length; index++) {
      this.bgNodeList[index].setPosition(
        this.bgNodeList[index].position.x,
        this.bgNodeList[index].position.y + this.bg_speed
      );
      // console.log("yyyy", this.bgNodeList[0].position.y);
      if (
        this.bgNodeList[index].position.y >=
        960
      ) {
        console.log('ssss')
        this.bgNodeList[index].setPosition(
          this.bgNodeList[index].position.x,
          -1033
        );
      }
    }
  }

  update(deltaTime: number) {
    this.startScroll();
  }
}


