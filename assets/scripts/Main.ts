import { _decorator, Component, SystemEvent } from 'cc';
import { TitleVisible } from './TitleVisible'
const { ccclass, property } = _decorator;

@ccclass
export class Main extends Component {
  @property(TitleVisible)
  titleVisible: TitleVisible = null

  start() {
    this.titleVisible.init(this)
    this.scheduleOnce(() => {
        this.titleVisible.show()
    }, 0.2)
  }

  update(deltaTime: number) {}
}


