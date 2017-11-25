import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './button-group.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ButtonItem = ComponentViewModel.extend({
    type: {
        get: function(type) {
            return type || 'button';
        }
    }
});

export const ButtonItemList = DefineList.extend({
    '#': ButtonItem
});

export const ViewModel = DefineMap.extend({
    buttons: {Type: ButtonItemList}
});

export default Component.extend({
	tag: 'cs-button-group',
    view,
    ViewModel
});


