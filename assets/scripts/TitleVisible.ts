import { _decorator, Component, Animation } from "cc";
import { Main } from './Main'
const { ccclass, property } = _decorator;

@ccclass
export class TitleVisible extends Component {
  @property(Animation)
  public anim: Animation = null!;

  private _main: Main = null;

  init(main: Main) {
    // this.node.active = true;
    this._main = main;
  }

  show() {
    // this.node.active = true
    this.anim.play("title_intro");
  }

  update(deltaTime: number) {}
}


