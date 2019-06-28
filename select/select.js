import {DefineList,Component, set} from 'can';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './select.stache!';

export const OptionMap = ComponentViewModel.extend({
    value: {
        type: 'string',
        default: ''
    },
    label: {
        type: 'string',
        default: ''
    }
});

export const OptionList = DefineList.extend({
    '#': OptionMap
});

export const ViewModel = ComponentViewModel.extend({
    options: {
        Type: OptionList
    },
    selectClass: {
        get() {
            return `form-control ${this.elementClass}`;
        }
    }
});

export default Component.extend({
    tag: 'cs-select',
    ViewModel,
    view
});