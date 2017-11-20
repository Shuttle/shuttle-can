import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import view from './select-input.stache!';

const OptionItem = DefineMap.extend({
    elementClass: 'string',
    value: { type: 'string', value: '' },
    label: { type: 'string', value: '' }
});

const OptionItemList = DefineList.extend({
    '#': OptionItem
});

export const ViewModel = DefineMap.extend({
    options: { Value: OptionItemList },
    value: { type: 'string', value: '' }
});

export default Component.extend({
    tag: 'cs-select-input',
    ViewModel,
    view
});