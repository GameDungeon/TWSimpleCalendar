import { IWidgetEvent } from 'tiddlywiki';
import { widget as Widget } from '$:/core/modules/widgets/widget.js';

class Example extends Widget {
    // @ts-ignore
    render(parent: Node, _nextSibling: Node) {
        this.computeAttributes();
        this.execute();
    }

    invokeAction(triggeringWidget: Widget, event: IWidgetEvent) {
        return true;
    };
}

exports.example = Example;