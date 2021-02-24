export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['like', '=', 'not like'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['=', 'in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'is null', 'is not null']
}