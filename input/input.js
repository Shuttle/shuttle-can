import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './input.stache!';

export const ViewModel = ComponentViewModel.extend({
    placeholder: {
        type: 'string',
        value: ''
    },
    focus: {
        type: 'boolean',
        value: false
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