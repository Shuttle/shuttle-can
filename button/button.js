import Component from 'can-component';
import DefineList from 'can-define/list/';
import view from './button.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ActionItem = ComponentViewModel.extend({
    isSeparator: {
        type: 'boolean',
        value: false
    }
});

export const ActionItemList = DefineList.extend({
    '#': ActionItem
});

export const ViewModel = ComponentViewModel.extend({
    buttonType: {
        get: function() {
            return (this.actions && this.actions.length > 0)
                       ? 'dropdown'
                       : 'button';
        }
    },
    type: {
        get: function(type) {
            return type || 'button';
        }
    },
    actions: {Type: ActionItemList},
});

export default Component.extend({
    tag: 'cs-button',
    view,
    ViewModel
});