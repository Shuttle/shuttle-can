import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-checkbox.stache!';

export default Component.extend({
    tag: 'cs-form-checkbox',
    ViewModel: ComponentViewModel,
    view
});


