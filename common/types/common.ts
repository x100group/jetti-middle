export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null' | 'start with' | 'end with' | 'match' | 'don\'t match';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['like', 'not like', '=', 'start with', 'end with', 'match', 'don\'t match'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['=', 'in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'is null', 'is not null']
}