export declare type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in group' | 'not in group' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null' | 'start with' | 'end with' | 'matching' | 'don\'t matching';
export declare const matchOperatorByType: {
    [x: string]: matchOperator[];
};
