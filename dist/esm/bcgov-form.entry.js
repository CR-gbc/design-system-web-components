import { r as registerInstance, h, H as Host } from './core-10536731.js';

const BcgovForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bcgov-form" }, h("div", null, "This is a form component"), h("slot", null)));
    }
};

export { BcgovForm as bcgov_form };
