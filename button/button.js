import {DefineList,Component} from 'can';
import view from './button.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ActionMap = ComponentViewModel.extend({
    isSeparator: {
        type: 'boolean',
        default: false
    }
});

export const ActionList = DefineList.extend({
    '#': ActionMap
});

export const ViewModel = ComponentViewModel.extend({
    hasActions: {
        get() {
            return (this.actions && this.actions.length > 0);
        }
    },
    actions: {
        Type: ActionList
    },
    elementClass: {
        default: 'btn-primary'
    },
    buttonClass: {
        get(){
            return `btn ${this.hasActions ? 'dropdown-toggle' : ''} ${this.elementClass} ${this.visibilityClass}`;
        }
    },
    buttonIconClass: {
        get(){
            return `${this.iconClass} ${this.iconNameClass}${!!this.text ? ' ' + this.iconSpacingClass : ''}`;
        }
    }
});

export default Component.extend({
    tag: 'cs-button',
    view,
    ViewModel
});