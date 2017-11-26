import DefineMap from 'can-define/map/';

export const ButtonOptions = DefineMap.extend({
    backIconNameClass: 'string',
    refreshIconNameClass: 'string',
    submitIconNameClass: 'string'
});

export const Options = DefineMap.extend({
    iconClass: 'string',
    iconSpacingClass: 'string',
    button: { Type: ButtonOptions }
});

let options = options = new Options({
    iconClass: 'fa',
    iconSpacingClass: 'pr-2',
    button: {
        backIconNameClass: 'fa-chevron-left',
        refreshIconNameClass: 'fa-refresh',
        submitIconNameClass: 'fa-play '
    }
});

export default options;