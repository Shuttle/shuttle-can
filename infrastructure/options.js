import DefineMap from 'can-define/map/';

export const ButtonOptions = DefineMap.extend({
    backIconNameClass: 'string',
    refreshIconNameClass: 'string',
    submitIconNameClass: 'string'
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

let options = options = new Options({
    iconClass: 'fa',
    iconSpacingClass: 'pr-2',
    button: {
        backIconNameClass: 'fa-chevron-left',
        refreshIconNameClass: 'fa-refresh',
        submitIconNameClass: 'fa-play '
    },
    table: {
        tableClass: 'table-responsive table-sm table-dark'
    },
    form: {
        elementClass: 'form-group'
    }
});

export default options;