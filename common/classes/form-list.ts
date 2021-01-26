import { matchOperator } from '../types/common';
export class FormListFilter {
    constructor(
        public left: string,
        public center: matchOperator = '=',
        public right: any = null,
        public isFixed?: boolean) { }
}

export class FormListOrder {
    order: 'asc' | 'desc' | '' = '';

    constructor(public field: string) { }
}

export class FormListSettings {
    filter: FormListFilter[] = [];
    order: FormListOrder[] = [];

    isValid = (limitDays: number, sortableColumns: string[]): boolean => {
        const nonSortable = this.order.find(e => !sortableColumns.includes(e.field.toLowerCase()));
        if (!nonSortable) return true;
        const dateFilter = this.filter.find(f => f.left.toLowerCase() === 'date');
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
