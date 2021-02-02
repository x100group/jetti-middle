"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormListSettings = exports.FormListOrder = exports.FormListFilter = void 0;
class FormListFilter {
    constructor(left, center = '=', right = null, isActive, isFixed) {
        this.left = left;
        this.center = center;
        this.right = right;
        this.isActive = isActive;
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
        this.columns = { color: {}, width: {}, order: [], visibility: {} };
    }
}
exports.FormListSettings = FormListSettings;
FormListSettings.isValid = (settings, limitDays, sortableColumns) => {
    if (!settings.order)
        return true;
    if (!settings.filter)
        return false;
    const nonSortable = settings.order.find(e => !sortableColumns.includes(e.field.toLowerCase()));
    if (!nonSortable)
        return false;
    const dateFilter = settings.filter.find(f => f.left.toLowerCase() === 'date');
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
//# sourceMappingURL=form-list.js.map