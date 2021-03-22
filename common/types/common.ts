export type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in group' | 'not in group' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null' | 'start with' | 'end with' | 'matching' | 'don\'t matching';

export const matchOperatorByType: { [x: string]: matchOperator[] } = {
    string: ['like', 'not like', '=', 'start with', 'end with', 'matching', 'don\'t matching'],
    number: ['=', '<=', '<', '>', '>=', 'beetwen'],
    date: ['beetwen', '=', '<=', '<', '>', '>=', '='],
    datetime: ['beetwen', '<=', '<', '>', '>=', '='],
    enum: ['in', 'not in'],
    boolean: ['='],
    default: ['=', 'in', 'not in', 'in group', 'not in group', 'is null', 'is not null']
}