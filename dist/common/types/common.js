"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchOperatorByType = void 0;
exports.matchOperatorByType = {
    string: ['like', 'not like', '=', 'start with', 'end with', 'matching', 'don\'t matching'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['in', 'not in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'in group', 'not in group', 'is null', 'is not null']
};
//# sourceMappingURL=common.js.map