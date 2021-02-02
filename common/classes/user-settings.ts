import { FormListSettings } from './form-list';

export class UserDefaultsSettings {
    company: string;
    department: string;
}

export class UserSettings {
    formListSettings: { [x: string]: FormListSettings } = { '': new FormListSettings() };
    defaults = new UserDefaultsSettings();
}

export interface IUserSettings {
    id?: string;
    type: string;
    kind?: 'filter' | 'columns';
    user?: string;
    description?: string;
    selected?: boolean;
    settings?: FormListSettings;
    isModify?: boolean;
    readonly?: boolean;
    isNew?: boolean;
}
