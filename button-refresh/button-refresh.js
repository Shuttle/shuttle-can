import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './button-refresh.stache!';
import click from '../infrastructure/click';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    disabled: 'boolean',
    context: {
        value: null
    },
    text: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    _click: function(ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

export default Component.extend({
    tag: 'cs-button-refresh',
    ViewModel,
    view
});