import Component from 'can-component';
import InputViewModel from './input-view-model';
import view from './form-input.stache!';

export default Component.extend({
    tag: 'cs-form-input',
    ViewModel: InputViewModel,
    view
});


