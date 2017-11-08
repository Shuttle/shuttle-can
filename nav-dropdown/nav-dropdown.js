import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache';
import each from 'can-util/js/each/';

export const NavigationItem = DefineMap.extend({
    href: 'string',
    text: 'string',
	items: { Value: NavigationItemList }
});

export const NavigationItemList = DefineList.extend({
    '#': NavigationItem
});

var ViewModel = DefineMap.extend({
    items: { Value: NavigationItemList }
});

export default Component.extend({
    tag: 'cs-nav-dropdown',
    view,
    ViewModel
});