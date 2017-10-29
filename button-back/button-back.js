import Component from 'can-component';
import view from './button-back.stache!';
import DefineMap from 'can-define/map/';

export const ViewModel = DefineMap.extend({
    elementClass: {
        type: 'string',
        get: function(type) {
            return type || '';
        }
    },
    back: function() {
        window.history.back();
    }
});

export default Component.extend({
    tag: 'cs-button-back',
    view,
    ViewModel
});