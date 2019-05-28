import DefineMap from 'can-define/map/';

export const DateTimeOptions = DefineMap.extend({
    datetimeClass: {
        type: 'string',
        default: 'datetimepicker-input'
    },
    format: {
        type: 'string',
        default: 'DD/MM/YYYY HH:mm'
    },
    dateFormat: {
        type: 'string',
        default: 'DD/MM/YYYY'
    },
    timeFormat: {
        type: 'string',
        default: 'HH:mm'
    },
    showFormat: {
        type: 'boolean',
        default: true
    },
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
    confirmation: {type: '*'},
    i18n: {
        Default: RemoveButtonI18NOptions
    }
});

export const ButtonOptions = DefineMap.extend({
    back: {
        Type: IconNameOptions,
        default: function () {
            return {
                iconNameClass: 'fa-chevron-left'
            };
        }
    },
    close: {
        Type: IconNameOptions,
        default: function () {
            return {
                iconNameClass: 'fa-times-circle'
            };
        }
    },
    refresh: {
        Type: IconNameOptions,
        default: function () {
            return {
                iconNameClass: 'fa-sync'
            };
        }
    },
    remove: {
        Type: RemoveButtonOptions,
        default: function () {
            return {
                iconNameClass: 'fa-times',
                i18n: {}
            };
        }
    },
    submit: {
        Type: IconNameOptions,
        default: function () {
            return {iconNameClass: 'fa-arrow-circle-right'};
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
        default: 'fas'
    },
    iconSpacingClass: {
        type: 'string',
        default: 'pr-2'
    },
    button: {
        Default: ButtonOptions
    },
    form: {
        Default: FormOptions
    },
    formGroup: {
        Default: FormOptions
    },
    table: {
        Default: TableOptions
    },
    datetime: {
        Default: DateTimeOptions
    }
});

let options = new Options({});

export default options;