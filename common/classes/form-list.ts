import { matchOperator } from '../types/common';
export class FormListFilter {
    constructor(
        public left: string,
        public center: matchOperator = '=',
        public right: any = null,
        public isActive?: boolean,
        public isFixed?: boolean,
        public isOR?: boolean,
        public interval?: { start: any, end: any }) { }
}

export class FormListOrder {
    order: 'asc' | 'desc' | '' = '';

    constructor(public field: string) { }
}

export interface FormListColumnProps {
    color: { [field: string]: string };
    width: { [field: string]: string };
    order: string[];
    visibility: { [field: string]: boolean };
}
export class FormListSettings {
    filter: FormListFilter[] = [];
    order: FormListOrder[] = [];
    columns?: FormListColumnProps = { color: {}, width: {}, order: [], visibility: {} };

    static isValid = (settings: FormListSettings, limitDays: number, sortableColumns: string[]): boolean => {
        if (!settings.order) return true;
        if (!settings.filter) return false;
        const nonSortable = settings.order.find(e => !sortableColumns.includes(e.field.toLowerCase()));
        if (!nonSortable) return false;
        const dateFilter = settings.filter.find(f => f.left.toLowerCase() === 'date');
        if (!dateFilter) return false;
        const [from, to] = dateFilter.right;
        const dayDiff = (date1: Date, date2: Date) => {
            const diff = Math.abs(date1.getTime() - date2.getTime());
            return Math.ceil(diff / (1000 * 3600 * 24));
        };
        const days = dayDiff(from || Date.now(), to || Date.now());
        return days <= limitDays;
    }
}
