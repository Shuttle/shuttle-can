import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import view from './button.stache!';
import access from '../infrastructure/access';
import click from '../infrastructure/click';
import i18n from '../infrastructure/i18n';

const ActionItem = DefineMap.extend({
    isSeparator: {
        type: 'boolean',
        value: false
    },
    text: {
        type: 'string',
        get: function(value) {
            return i18n.value(value);
        }
    }
});

const ActionItemList = DefineList.extend({
    '#': ActionItem
});

export const ViewModel = DefineMap.extend({
    context: {
        value: null
    },
    buttonType: {
        get: function() {
            return (this.actions && this.actions.length > 0)
                       ? 'dropdown'
                       : 'button';
        }
    },
    type: {
        get: function(type) {
            return type || 'button';
        }
    },
    elementClass: {
        type: 'string',
        get: function(type) {
            return type || 'btn-primary';
        }
    },
    classVisibility: {
        get: function() {
            var visible = this.visible;

            return visible != undefined && !visible ? 'hidden' : '';
        }
    },
    iconName: {
        get: function(value) {
            return value || '';
        }
    },
    text: {
        type: 'string',
        get: function(value) {
            return i18n.value(value);
        }
    },
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
    actions: {Type: ActionItemList},
    _click: function(ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

export default Component.extend({
    tag: 'cs-button',
    view,
    ViewModel
});