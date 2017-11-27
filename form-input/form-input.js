import Component from 'can-component';
import { ViewModel as InputViewModel } from '../input/';
import view from './form-input.stache!';

export const ViewModel = InputViewModel.extend({
    label: {
        type: 'string',
        value: ''
    },
    required: {
        type: 'boolean',
        value: false
    },
    checked: {
        type: 'boolean'
    },
});

export default Component.extend({
    tag: 'cs-form-input',
    ViewModel,
    view
});


