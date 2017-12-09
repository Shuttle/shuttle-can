import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import DefineList from 'can-define/list/';
import view from './select.stache!';

export const OptionMap = ComponentViewModel.extend({
    value: {
        type: 'string',
        value: ''
    },
    label: {
        type: 'string',
        value: ''
    }
});

export const OptionList = DefineList.extend({
    '#': OptionMap
});

export const ViewModel = ComponentViewModel.extend({
    options: {
        Type: OptionList
    },
    value: {
        type: 'string',
        value: ''
    }
});

export default Component.extend({
    tag: 'cs-select',
    ViewModel,
    view
});