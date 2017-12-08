import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './nav-dropdown.stache';
import i18n from '../infrastructure/i18n';

export const DropdownMap = DefineMap.extend({
    href: {
        type: 'string',
        value: ''
    },
    text: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    }
});

export const DropdownList = DefineList.extend({
    '#': DropdownMap
});

var ViewModel = DefineMap.extend({
    map: {
        Value: DropdownMap
    },
    list: {
        Value: DropdownList
    }
});

export default Component.extend({
    tag: 'cs-nav-dropdown',
    view,
    ViewModel
});