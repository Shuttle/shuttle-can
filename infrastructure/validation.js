import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';

export const ErrorMap = DefineMap.extend({
    message: {
        type: 'string',
        value: ''
    },
    related: {
        Type: DefineList,
        value: []
    }
});

export const ErrorList = DefineList.extend({
    '#': ErrorMap
});
