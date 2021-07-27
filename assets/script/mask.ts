// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onTouch(e: cc.Event.EventTouch) {
        // 不显示父视图的遮罩层
        let maskNode:cc.Node = cc.find('Canvas/Mask');
        maskNode.active = false;
        // this.node.active = false;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 监控
        this.node.on('touchstart', this.onTouch, this);
    }

    start() {

    }

    // update (dt) {}
}
