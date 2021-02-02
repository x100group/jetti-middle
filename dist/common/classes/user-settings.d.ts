import { FormListSettings } from './form-list';
export declare class UserDefaultsSettings {
    company: string;
    department: string;
}
export declare class UserSettings {
    formListSettings: {
        [x: string]: FormListSettings;
    };
    defaults: UserDefaultsSettings;
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
