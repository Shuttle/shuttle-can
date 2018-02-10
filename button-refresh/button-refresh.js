import Component from 'can-component';
import view from './button-refresh.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';
import options from '../infrastructure/options';

export const ViewModel = ComponentViewModel.extend({
    iconNameClass: {
        type: 'string',
        default: '',
        get: function(value){
            return value || options.button.refresh.iconNameClass;
        }
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
    tag: 'cs-button-refresh',
    ViewModel,
    view
});