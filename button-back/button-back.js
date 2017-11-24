import Component from 'can-component';
import view from './button-back.stache!';
import DefineMap from 'can-define/map/';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    elementClass: {
        type: 'string',
        get: function (type) {
            return type || '';
        }
    },
    text: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    back: function () {
        window.history.back();
    }
});

export default Component.extend({
    tag: 'cs-button-back',
    view,
    ViewModel
});