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
    back: { Type: IconNameOption },
    refresh: { Type: IconNameOption },
    remove: { Type: RemoveButtonOptions },
    submit: { Type: IconNameOption }
});

export const TableOptions = DefineMap.extend({
    containerClass: 'string',
    tableClass: 'string',
    buttonClass: 'string'
});

export const FormOptions = DefineMap.extend({
    elementClass: 'string'
});

export const Options = DefineMap.extend({
    iconClass: 'string',
    iconSpacingClass: 'string',
    button: { Type: ButtonOptions },
    form: { Type: FormOptions }
});

let options = new Options({
    iconClass: 'fa',
    iconSpacingClass: 'pr-2',
    button: {
        back: {
            iconNameClass: 'fa-chevron-left'
        },
        refresh: {
            iconNameClass: 'fa-refresh'
        },
        remove: {
            iconNameClass: 'fa-times',
            i18n: {}
        },
        submit: {
            iconNameClass: 'fa-play'
        },
    },
    table: {
        tableClass: 'table-responsive table-sm table-dark'
    },
    form: {
        elementClass: 'form-group'
    }
});

export default options;