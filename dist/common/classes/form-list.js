"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormListFilter {
    constructor(left, center = '=', right = null, isFixed) {
        this.left = left;
        this.center = center;
        this.right = right;
        this.isFixed = isFixed;
    }
}
exports.FormListFilter = FormListFilter;
class FormListOrder {
    constructor(field) {
        this.field = field;
        this.order = '';
    }
}
exports.FormListOrder = FormListOrder;
class FormListSettings {
    constructor() {
        this.filter = [];
        this.order = [];
        this.isValid = (limitDays, sortableColumns) => {
            const nonSortable = this.order.find(e => !sortableColumns.includes(e.field.toLowerCase()));
            if (!nonSortable)
                return true;
            const dateFilter = this.filter.find(f => f.left.toLowerCase() === 'date');
            if (!dateFilter)
                return false;
            const [from, to] = dateFilter.right;
            const dayDiff = (date1, date2) => {
                const diff = Math.abs(date1.getTime() - date2.getTime());
                return Math.ceil(diff / (1000 * 3600 * 24));
            };
            const days = dayDiff(from || Date.now(), to || Date.now());
            return days <= limitDays;
        };
    }
}
exports.FormListSettings = FormListSettings;
//# sourceMappingURL=form-list.js.map