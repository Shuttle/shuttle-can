import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './form-group.stache!';

export default Component.extend({
    tag: 'cs-form-group',
    ViewModel: ComponentViewModel,
    view
});


