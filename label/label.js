import {Component} from 'can';
import view from './label.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ViewModel = ComponentViewModel.extend({
    requiredClass: {
        type: 'string',
        default: 'fa-asterisk'
    },
    labelClass: {
        get(){
            return this.iconClass + ' ' + this.requiredClass;
        }
    }
});
export default Component.extend({
    tag: 'cs-label',
    view,
    ViewModel
});


