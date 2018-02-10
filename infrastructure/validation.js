import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';

export const ErrorMap = DefineMap.extend({
    message: {
        type: 'string',
        default: ''
    },
    related: {
        Type: DefineList,
        default: []
    }
});

export const ErrorList = DefineList.extend({
    '#': ErrorMap
});
