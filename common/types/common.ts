export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null' | 'start with' | 'end with' | 'matching' | 'don\'t matching';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['like', 'not like', '=', 'start with', 'end with', 'matching', 'don\'t matching'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['=', 'in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'is null', 'is not null']
}