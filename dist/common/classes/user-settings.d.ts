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
    kind?: settingsKind;
    user?: string;
    description?: string;
    selected?: boolean;
    settings?: FormListSettings;
    timestamp?: Date;
}
export interface IUserSettingsState {
    settings?: IUserSettings[];
    selected?: IUserSettings;
    isModify?: boolean;
    isNew?: boolean;
    isReadonly?: boolean;
    apply?: boolean;
}
export declare type settingsKind = 'columns' | 'filter';
