import DefineMap from 'can-define/map/';

export const Options = DefineMap.extend({
    iconClass: {
        type: 'string',
        value: 'fa'
    }
});

export default options = new Options({
    iconClass: 'fa'
});