import {Component} from 'can';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-input.stache!';

export const ViewModel = ComponentViewModel.extend({
    type: {
        get: function(type) {
            return type || 'text';
        }
    }
});

export default Component.extend({
    tag: 'cs-form-input',
    ViewModel,
    view
});


