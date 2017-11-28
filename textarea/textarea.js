import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './textarea.stache!';

export const ViewModel = ComponentViewModel.extend({
    rows: {
        type: 'number',
        value: 3
    },
    columns: {
        type: 'number',
        value: 80
    },
    value: {
        type: 'string',
        value: ''
    }
});

export default Component.extend({
    tag: 'cs-textarea',
    ViewModel,
    view
});


