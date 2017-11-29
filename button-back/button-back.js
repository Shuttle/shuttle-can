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
        value: '',
        get: function(value){
            return value || options.button.backIconNameClass;
        }
    }
});

export default Component.extend({
    tag: 'cs-button-back',
    view,
    ViewModel
});