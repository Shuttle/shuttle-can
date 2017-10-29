import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './validation.stache!';

export const ViewModel = DefineMap.extend({
    define: {
        message: { type: 'string', value: '' }
    }
});

export default Component.extend({
    tag: 'cs-validation',
    ViewModel,
    view
});


