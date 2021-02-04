export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'in group' | 'not in group' | 'beetwen' | 'is null' | 'is not null';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['=', 'like', 'not like'],
    enum: ['=', 'in'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    default: ['=', 'in', 'not in', 'is null', 'is not null', 'in group', 'not in group']
}