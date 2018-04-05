import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-checkbox.stache!';

export const ViewModel = ComponentViewModel.extend({
    click: function() {
        this.checked = !this.checked;
    }
});

export default Component.extend({
    tag: 'cs-form-checkbox',
    ViewModel,
    view
});


