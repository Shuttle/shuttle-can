import {DefineMap,DefineList} from 'can';

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
