import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './page-title.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    localize: {
        type: 'boolean',
        value: true
    },
    title: {
        type: 'string',
        value: '',
        get: function(value) {
            return this.localize ? i18n.value(value) : value;
        }
    }
});

export default Component.extend({
    tag: 'cs-page-title',
    view,
    ViewModel
});


