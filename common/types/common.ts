export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['like', '='],
    enum: ['='],
    number: ['=', '<=', '<', '>', '>='],
    date: ['=', '<=', '<', '>', '>='],
    datetime: ['=', '<=', '<', '>', '>='],
    default: ['=']
}