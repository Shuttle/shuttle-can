import DefineMap from 'can-define/map/';
import options from '../infrastructure/options';
import access from '../infrastructure/access';
import click from '../infrastructure/click';
import i18n from '../infrastructure/i18n';

export const ComponentViewModel = DefineMap.extend({
    elementClass: {
        type: 'string'
    },
    visibilityClass: {
        get: function() {
            var visible = this.visible;

            return visible != undefined && !visible ? 'invisible' : '';
        }
    },
    iconClass: {
        type: 'string',
        get: function(value){
            return value || options.iconClass || 'fa';
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
        type: 'string',
        value: ''
    },
    _click: function(ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

