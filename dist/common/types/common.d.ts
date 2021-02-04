export declare type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'in group' | 'not in group' | 'beetwen' | 'is null' | 'is not null';
export declare const matchOperatorByType: {
    [x: string]: matchOperator[];
};
