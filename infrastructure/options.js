import DefineMap from 'can-define/map/';

export const DateTimeOptions = DefineMap.extend({
    datetimeClass: {
        type: 'string',
        default: 'datetimepicker-input'
    }
});

export const IconNameOptions = DefineMap.extend({
    iconNameClass: 'string'
});

export const RemoveButtonI18NOptions = DefineMap.extend({
    removeItemConfirmation: {
        type: 'string',
        default: 'removeItemConfirmation'
    },
    removeItemConfirmationNamed: {
        type: 'string',
        default: 'removeItemConfirmationNamed'
    }
});

export const RemoveButtonOptions = IconNameOptions.extend({
    confirmation: { type: '*' },
    i18n: { Type: RemoveButtonI18NOptions }
});

export const ButtonOptions = DefineMap.extend({
    back: {
        Type: IconNameOptions,
        default: {
            iconNameClass: 'fa-chevron-left'
        }
    },
    refresh: {
        Type: IconNameOptions,
        default: {
            iconNameClass: 'fa-refresh'
        }
    },
    remove: {
        Type: RemoveButtonOptions,
        default: {
            iconNameClass: 'fa-times',
            i18n: {}
        }
    },
    submit: {
        Type: IconNameOptions,
        default: {
            iconNameClass: 'fa-arrow-circle-right'
        }
    }
});

export const TableOptions = DefineMap.extend({
    containerClass: {
        type: 'string',
        default: ''
    },
    tableClass: {
        type: 'string',
        default: ''
    },
    buttonClass: {
        type: 'string',
        default: ''
    }
});

export const FormOptions = DefineMap.extend({
    elementClass: {
        type: 'string'
    }
});

export const FormGroupOptions = DefineMap.extend({
    elementClass: {
        type: 'string',
        default: 'form-group'
    }
});

export const Options = DefineMap.extend({
    iconClass: {
        type: 'string',
        default: 'fa'
    },
    iconSpacingClass: {
        type: 'string',
        default: 'pr-2'
    },
    button: {
        Type: ButtonOptions,
        default: {}
    },
    form: {
        Type: FormOptions,
        default: {}
    },
    formGroup: {
        Type: FormOptions,
        default: {}
    },
    table: {
        Type: TableOptions,
        default: {}
    },
    datetime: {
        Default: DateTimeOptions
    }
});

let options = new Options({});

export default options;