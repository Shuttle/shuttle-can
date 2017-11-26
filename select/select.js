import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import DefineList from 'can-define/list/';
import view from './select.stache!';

const OptionItem = ComponentViewModel.extend({
    value: { type: 'string', value: '' },
    label: { type: 'string', value: '' }
});

const OptionItemList = DefineList.extend({
    '#': OptionItem
});

export const ViewModel = ComponentViewModel.extend({
    options: { Value: OptionItemList },
    value: { type: 'string', value: '' }
});

export default Component.extend({
    tag: 'cs-select',
    ViewModel,
    view
});