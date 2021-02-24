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

export type settingsKind = 'columns' | 'filter';