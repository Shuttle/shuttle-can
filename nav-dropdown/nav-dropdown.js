import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './nav-dropdown.stache';

export const DropdownMap = DefineMap.extend({
    href: {
        type: 'string',
        value: ''
    },
    text: {
        type: 'string',
        value: ''
    },
    items: {
        Value: DropdownList
    }
});

export const DropdownList = DefineList.extend({
    '#': DropdownMap
});

var ViewModel = DefineMap.extend({
    items: {
        Value: DropdownList
    }
});

export default Component.extend({
    tag: 'cs-nav-dropdown',
    view,
    ViewModel
});