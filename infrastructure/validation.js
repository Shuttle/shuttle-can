import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';

export const ErrorMap = DefineMap.extend({
    message: {
        type: 'string',
        default: ''
    },
    related: {
        Default: DefineList
    }
});

export const ErrorList = DefineList.extend({
    '#': ErrorMap
});
