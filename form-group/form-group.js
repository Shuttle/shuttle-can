import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-group.stache!';
import options from "../infrastructure/options";

export const ViewModel = ComponentViewModel.extend({
    elementClass: {
        type: 'string',
        get: function (value) {
            return value || options.formGroup.elementClass;
        }
    }
});

export default Component.extend({
    tag: 'cs-form-group',
    ViewModel: ViewModel,
    view
});


