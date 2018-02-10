import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './input.stache!';

export const ViewModel = ComponentViewModel.extend({
    type: {
        type: 'string',
        default: 'input'
    },
    inputClass: {
        get(){
            return `form-control ${this.elementClass}`;
        }
    }
});

export default Component.extend({
    tag: 'cs-input',
    view,
    ViewModel
});