import { _decorator, Component, tween, Vec3, Tween, view, Canvas } from 'cc';
const { ccclass, property } = _decorator;

@ccclass
export class PanelButtonManager extends Component {
    @property
    public scaleTo = new Vec3(1.8, 1.8, 1.8)
    @property
    public transDuration = 1

    public initScale = new Vec3()
    public initPosition = new Vec3()


    private _scale = new Vec3(1.0, 1.0, 1.0)
    private _lastScale = new Vec3()
    private _lastPositions = new Vec3()
    private _tweenCenter: Tween<any>
    private _tweenPosition: Tween<any>

    private _clickAfter: boolean = false

    onLoad() {
        const visibleHeight = view.getVisibleSize().height
        this.initPosition = this.node.position
        this._tweenCenter = tween(this._scale)
        this._tweenPosition = tween(this.initPosition)
        this._tweenCenter.to(
            this.transDuration,
            this.scaleTo,
            { easing: 'cubicInOut' }
        )

        this._tweenPosition.to(
            this.transDuration,
            new Vec3(0.0, -visibleHeight / 2, this.initPosition.z),
            { easing: 'cubicInOut' }
        )
    
        
    }
    scaleToCenter() {
        this._tweenCenter.start()
        this._tweenCenter.call(() => {
            console.log('12312312321');
            
            this._tweenCenter.stop()
        })
        this._tweenPosition.start()
    }

    update() {
        if (!this._scale.equals(this._lastScale)) {
            this.node.setScale(this._scale)
            this.node.setSiblingIndex(10)
            this._lastScale.set(this._scale)
        }
        if (!this.initPosition.equals(this._lastPositions)) {
            this.node.setPosition(this.initPosition)
            this._lastPositions.set(this.initPosition)
        }
    }
}


