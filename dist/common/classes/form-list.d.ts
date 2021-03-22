import { matchOperator } from '../types/common';
export declare class FormListFilter {
    left: string;
    center: matchOperator;
    right: any;
    isActive?: boolean | undefined;
    isFixed?: boolean | undefined;
    isOR?: boolean | undefined;
    interval?: {
        start: any;
        end: any;
    } | undefined;
    constructor(left: string, center?: matchOperator, right?: any, isActive?: boolean | undefined, isFixed?: boolean | undefined, isOR?: boolean | undefined, interval?: {
        start: any;
        end: any;
    } | undefined);
}
export declare class FormListOrder {
    field: string;
    order: 'asc' | 'desc' | '';
    constructor(field: string);
}
export interface FormListColumnProps {
    color: {
        [field: string]: string;
    };
    width: {
        [field: string]: string;
    };
    order: string[];
    visibility: {
        [field: string]: boolean;
    };
}
export declare class FormListSettings {
    filter: FormListFilter[];
    order: FormListOrder[];
    columns?: FormListColumnProps;
    static isValid: (settings: FormListSettings, limitDays: number, sortableColumns: string[]) => boolean;
}
