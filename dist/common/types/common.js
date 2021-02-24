"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchOperatorByType = void 0;
exports.matchOperatorByType = {
    string: ['like', '=', 'not like'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['=', 'in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'is null', 'is not null']
};
//# sourceMappingURL=common.js.map