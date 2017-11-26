import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-group.stache!';

export const ViewModel = ComponentViewModel.extend({
    validationMessage: {
        type: 'string',
        value: ''
    }
});

export default Component.extend({
    tag: 'cs-form-group',
    ViewModel,
    view
});


