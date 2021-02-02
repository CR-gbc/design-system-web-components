import { r as registerInstance, h, H as Host } from './index-d7bc6b18.js';

const BcgovForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { className: "bcgov-form" }, h("slot", null)));
    }
};

export { BcgovForm as bcgov_form };
