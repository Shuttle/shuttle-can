import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './input.stache!';

export const ViewModel = ComponentViewModel.extend({
    type: {
        type: 'string',
        get: function (type) {
            return type || 'text';
        }
    },
    checked: {
        type: 'boolean'
    },
    placeholder: {
        type: 'string',
        value: ''
    },
    focus: {
        type: 'boolean',
        value: true
    },
    value: {
        type: 'string',
        value: ''
    }
});

export default Component.extend({
    tag: 'cs-input',
    view,
    ViewModel
});