import {Component} from 'can';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './validation.stache!';

export const ViewModel = ComponentViewModel.extend({
    message: {
        type: 'string',
        default: ''
    }
});

export default Component.extend({
    tag: 'cs-validation',
    ViewModel,
    view
});


