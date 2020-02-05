import { r as registerInstance, h, H as Host } from './core-07a37eb8.js';
var BcgovForm = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return (h(Host, { class: "bcgov-form" }, h("div", null, "This is a form component"), h("slot", null)));
    };
    return class_1;
}());
export { BcgovForm as bcgov_form };
