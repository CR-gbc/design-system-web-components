'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');

const BcgovForm = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
};

exports.bcgov_form = BcgovForm;
