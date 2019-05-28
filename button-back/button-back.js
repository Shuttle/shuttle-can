import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import options from '../infrastructure/options';
import view from './button-back.stache!';

export const ViewModel = ComponentViewModel.extend({
    back: function () {
        window.history.back();
    },
    iconNameClass: {
        type: 'string',
        default: '',
        get: function(value){
            return value || options.button.back.iconNameClass;
        }
    },
    elementClass: {
        default: 'btn-primary'
    },
    buttonClass: {
        get(){
            return `btn ${this.elementClass} ${this.visibilityClass}`;
        }
    },
    buttonIconClass: {
        get(){
            return `${this.iconClass} ${this.iconNameClass}${(!!this.text ? ' ' + this.iconSpacingClass : '')}`;
        }
    }
});

export default Component.extend({
    tag: 'cs-button-back',
    view,
    ViewModel
});