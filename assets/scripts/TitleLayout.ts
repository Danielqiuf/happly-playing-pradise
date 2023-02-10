import { _decorator, Component, Animation } from "cc";
import { Main } from "./Main";
const { ccclass, property } = _decorator;

@ccclass
export class TitleLayout extends Component {
  @property(Animation)
  public anim1: Animation = null;
  @property(Animation)
  public anim2: Animation = null;

  private _main: Main = null;

  init(main: Main) {
    this._main = main;
  }

  show() {
    this.anim1.play('title_intro')
    this.scheduleOnce(() => {
        this.anim2.play("title_intro2");
    }, 0.4)
    
    // const n1 = this.getComponent(Animation);
    // console.log("n1n1n1", n1);
  }

  update(deltaTime: number) {}
}


