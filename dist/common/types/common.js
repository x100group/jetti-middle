"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchOperatorByType = void 0;
exports.matchOperatorByType = {
    string: ['=', 'like', 'not like'],
    enum: ['=', 'in'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    default: ['=', 'in', 'not in', 'is null', 'is not null', 'in group', 'not in group']
};
//# sourceMappingURL=common.js.map