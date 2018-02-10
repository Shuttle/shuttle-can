import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './textarea.stache!';

export const ViewModel = ComponentViewModel.extend({
    rows: {
        type: 'number',
        default: 3
    },
    columns: {
        type: 'number',
        default: 80
    },
    value: {
        type: 'string',
        default: ''
    },
    textareaClass: {
        get(){
            return `form-control ${this.elementClass} ${this.visibilityClass}`;
        }
    }
});

export default Component.extend({
    tag: 'cs-textarea',
    ViewModel,
    view
});


