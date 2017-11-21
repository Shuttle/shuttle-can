import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './page-title.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    title: {
        get: function(value) {
            return i18n.value(value);
        }
    }
});

export default Component.extend({
    tag: 'cs-page-title',
    view,
    ViewModel
});


