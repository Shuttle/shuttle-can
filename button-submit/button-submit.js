import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import options from '../infrastructure/options';
import view from './button-submit.stache!';

export const ViewModel = ComponentViewModel.extend({
    iconNameClass: {
        type: 'string',
        get: function(value){
            return value || options.button.submitIconNameClass;
        }
    }
});

export default Component.extend({
    tag: 'cs-button-submit',
    view,
    ViewModel
});