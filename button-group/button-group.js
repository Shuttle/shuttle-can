import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './button-group.stache!';
import access from '../infrastructure/access';
import click from '../infrastructure/click';
import i18n from '../infrastructure/i18n';

const ButtonItem = DefineMap.extend({
    disabled: {
        get: function(value) {
            var disabled = value || false;

            if (this.permission && !disabled) {
                disabled = !access.hasPermission(this.permission);
            }

            return disabled;
        }
    },
    permission: {
        value: ''
    },
    text: {
        type: 'string',
        get: function(value) {
            return i18n.value(value);
        }
    },
    type: {
        get: function(type) {
            return type || 'button';
        }
    },
    _click: function(ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

const ButtonItemList = DefineList.extend({
    '#': ButtonItem
});

export const ViewModel = DefineMap.extend({
    buttons: {Type: ButtonItemList}
});

export default Component.extend({
	tag: 'cs-button-group',
    view,
    ViewModel
});


