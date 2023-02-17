import { _decorator, Component, Node } from 'cc';
import { Game1BackgroundUI } from './Game1BackgroundUI';
const { ccclass, property } = _decorator;

@ccclass
export class Game1Main extends Component {
    @property(Game1BackgroundUI)
    public game1BackgroundUI: Game1BackgroundUI = null

    start() {
        this.game1BackgroundUI.init(this)
    }

    show() {
        this.game1BackgroundUI.show()
    }

    update(deltaTime: number) {
        
    }
}


