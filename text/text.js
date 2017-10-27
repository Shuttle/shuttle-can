import Component from 'can-component';
import InputViewModel from './input-view-model';
import view from './text.stache!';

export default Component.extend({
    tag: 'shuttle-text',
    ViewModel: InputViewModel,
    view
});


