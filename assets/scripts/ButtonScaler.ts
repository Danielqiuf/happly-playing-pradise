import { _decorator, Component, tween, Vec3, Button, Input, Tween } from 'cc';
import { Game1Main } from './game1/Game1Main';
const { ccclass, property } = _decorator;

@ccclass
export class ButtonScaler extends Component {
    @property
    public scaleTo = new Vec3(1.05, 1.05, 1.05)
    @property
    public transDuration = 0.2
    
    

    public initScale = new Vec3()
    public button: Button | null = null

    private _scale = new Vec3(1, 1, 1)
    private _lastScale = new Vec3()
    private _start = new Vec3()

    private _tweenDown: Tween<any>
    private _tweenUp: Tween<any>

    onLoad() {
        this.initScale = this.node.scale
        this.button = this.getComponent(Button)
        this.tween()
    }

    tween() {
        this._tweenDown = tween(this._scale)
        this._tweenUp = tween(this._scale)

        this.node.getScale(this._start)

        this._tweenDown.to(
            this.transDuration,
            this.scaleTo,
            { easing: 'cubicInOut' }
        )

        this._tweenUp.to(
            this.transDuration,
            this._start,
            { easing: 'cubicInOut' }
        )

        this.node.on(
            Input.EventType.TOUCH_START,
            this.onTouchDown,
            this
        )

        this.node.on(
            Input.EventType.TOUCH_END,
            this.onTouchUp,
            this
        )

        this.node.on(
            Input.EventType.TOUCH_CANCEL,
            this.onTouchUp,
            this
        )

    }

    onTouchDown() {
        this._tweenDown.start()
    }

    onTouchUp() {
        this._tweenDown.stop()
        this._tweenUp.start()
    }

    update() {
        if (!this._scale.equals(this._lastScale)) {
            this.node.setScale(this._scale)
            this._lastScale.set(this._scale)
        }
    }
}


