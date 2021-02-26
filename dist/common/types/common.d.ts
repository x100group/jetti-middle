export declare type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null' | 'start with' | 'end with' | 'match' | 'don\'t match';
export declare const matchOperatorByType: {
    [x: string]: matchOperator[];
};
