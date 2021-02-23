export declare type matchOperator = '=' | '<>' | '>=' | '<=' | '<' | '>' | 'like' | 'not like' | 'in' | 'not in' | 'beetwen' | 'is null' | 'is not null';
export declare const matchOperatorByType: {
    [x: string]: matchOperator[];
};
