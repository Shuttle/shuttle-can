import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form.stache';
import i18n from '../infrastructure/i18n';
import options from "../infrastructure/options";

export const ViewModel = ComponentViewModel.extend({
    title: {
        type: 'string',
        default: '',
        get: function(title) {
            return i18n.value(title);
        }
    }
});

export default Component.extend({
    tag: 'cs-form',
    view,
    ViewModel
});


