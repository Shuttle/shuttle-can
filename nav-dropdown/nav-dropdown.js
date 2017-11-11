import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './nav-dropdown.stache';
import each from 'can-util/js/each/';

export const DropdownItem = DefineMap.extend({
    href: 'string',
    text: 'string',
    items: { Value: DropdownItemList }
});

export const DropdownItemList = DefineList.extend({
    '#': DropdownItem
});

var ViewModel = DefineMap.extend({
    items: { Value: DropdownItemList }
});

export default Component.extend({
    tag: 'cs-nav-dropdown',
    view,
    ViewModel
});