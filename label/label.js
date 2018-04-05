import Component from 'can-component';
import view from './label.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export default Component.extend({
    tag: 'cs-label',
    view,
    ViewModel: ComponentViewModel
});


