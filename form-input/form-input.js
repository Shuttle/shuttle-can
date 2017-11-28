import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-input.stache!';

export default Component.extend({
    tag: 'cs-form-input',
    ViewModel: ComponentViewModel,
    view
});


