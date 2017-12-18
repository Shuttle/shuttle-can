import DefineMap from 'can-define/map/';

export const IconNameOption = DefineMap.extend({
    iconNameClass: 'string'
});

export const RemoveButtonI18NOptions = DefineMap.extend({
    removeItemConfirmation: {
        type: 'string',
        value: 'removeItemConfirmation'
    },
    removeItemConfirmationNamed: {
        type: 'string',
        value: 'removeItemConfirmationNamed'
    }
});

export const RemoveButtonOptions = IconNameOption.extend({
    confirmation: { type: '*' },
    i18n: { Type: RemoveButtonI18NOptions }
});

export const ButtonOptions = DefineMap.extend({
    back: {
        Type: IconNameOption,
        value: {
            iconNameClass: 'fa-chevron-left'
        }
    },
    refresh: {
        Type: IconNameOption,
        value: {
            iconNameClass: 'fa-refresh'
        }
    },
    remove: {
        Type: RemoveButtonOptions,
        value: {
            iconNameClass: 'fa-times',
            i18n: {}
        }
    },
    submit: {
        Type: IconNameOption,
        value: {
            iconNameClass: 'fa-arrow-circle-right'
        }
    }
});

export const TableOptions = DefineMap.extend({
    containerClass: {
        type: 'string',
        value: ''
    },
    tableClass: {
        type: 'string',
        value: ''
    },
    buttonClass: {
        type: 'string',
        value: ''
    }
});

export const FormOptions = DefineMap.extend({
    elementClass: {
        type: 'string',
        value: 'form-group'
    }
});

export const Options = DefineMap.extend({
    iconClass: {
        type: 'string',
        value: 'fa'
    },
    iconSpacingClass: {
        type: 'string',
        value: 'pr-2'
    },
    button: {
        Type: ButtonOptions,
        value: {}
    },
    form: {
        Type: FormOptions,
        value: {}
    },
    table: {
        Type: TableOptions,
        value: {}
    }
});

let options = new Options({});

export default options;