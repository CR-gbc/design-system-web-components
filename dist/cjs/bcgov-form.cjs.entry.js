'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-85ceac9a.js');

const BcgovForm = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: "bcgov-form" }, core.h("div", null, "This is a form component"), core.h("slot", null)));
    }
};

exports.bcgov_form = BcgovForm;
