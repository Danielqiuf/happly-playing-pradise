import { _decorator, Component, Node, Sprite, UITransform, Widget } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BgScrolling")
export class BgScrolling extends Component {
  @property([Node])
  bgNodeList: Node[] = [];
  @property(Sprite)
  baseNode: Sprite = null;

  public readonly dis: number;
  public readonly bg_speed: number;

  private _perHeight: number = 0
  private _widgetNodes: Widget[] = []

  constructor(...a) {
    super(...a);
    this.bg_speed = 2;
    this.dis = this.bg_speed * 10;
  }

  start() {
    this._perHeight = this.bgNodeList[0].getComponent(UITransform).height
    this._widgetNodes = this.bgNodeList.map((node) => node.getComponent(Widget))

  }

  startScroll() {
    for (let index = 0; index < this.bgNodeList.length; index++) {
      this._widgetNodes[index].top -= this.bg_speed
  
      if (
        this._widgetNodes[index].top <=
        -this._perHeight
      ) {
        this._widgetNodes[index].top = this._perHeight * (this.bgNodeList.length - 1)
        // console.log('this._widgetNodes[index].top', this._widgetNodes[index].top);
        
      }
    }
  }

  update() {
    this.startScroll();
  }
}


