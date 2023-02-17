import { _decorator, Component, Node, UIOpacity } from 'cc';
import { Game1Main } from './Game1Main';
const { ccclass, property } = _decorator;

@ccclass
export class Game1BackgroundUI extends Component {
   

    private _main: Game1Main
    
    init(main: Game1Main) {
        this._main = main
        this.node.active = false
    }

    show() {
        this.node.getComponent(UIOpacity).opacity = 255
        this.node.active = true
    }

    update(deltaTime: number) {
        
    }
}


