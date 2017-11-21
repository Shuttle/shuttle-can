import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './label.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    required: 'boolean',
    label: {
        type: 'string',
        get: function(value) {
            return i18n.value(value);
        }
    }
});

export default Component.extend({
    tag: 'cs-label',
    view,
    ViewModel
});


