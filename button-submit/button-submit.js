import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './submit-button.stache!';

export const ViewModel = ComponentViewModel.extend({
    working: { type: 'boolean' }
});

export default Component.extend({
    tag: 'cs-button-submit',
    view,
    ViewModel
});