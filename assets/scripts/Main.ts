import { _decorator, Component, SystemEvent } from 'cc';
import { TitleLayout } from "./TitleLayout";
const { ccclass, property } = _decorator;

@ccclass
export class Main extends Component {
  @property(TitleLayout)
  titleLayout: TitleLayout = null;

  start() {
    this.titleLayout.init(this);
    this.scheduleOnce(() => {
      this.titleLayout.show();
    }, 0.1);
  }

  update(deltaTime: number) {}
}


