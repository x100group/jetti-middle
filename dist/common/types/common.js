"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchOperatorByType = void 0;
exports.matchOperatorByType = {
    string: ['like', '='],
    enum: ['='],
    number: ['=', '<=', '<', '>', '>='],
    date: ['=', '<=', '<', '>', '>='],
    datetime: ['=', '<=', '<', '>', '>='],
    default: ['=']
};
//# sourceMappingURL=common.js.map