import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import options from './options';
import security from './security';
import click from './click';
import i18n from './i18n';
import each from 'can-util/js/each/';

export const Error = DefineMap.extend({
    message: {
        type: 'string',
        value: ''
    },
    related: {
        Type: DefineList,
        value: []
    }
});

export default DefineMap.extend({
    checked: {
        type: 'boolean'
    },
    value: {
        type: '*',
        value: ''
    },
    label: {
        type: 'string',
        value: ''
    },
    errorAttribute: {
        type: 'string',
        value: ''
    },
    errors: {
        Type: DefineList,
        '#': Error
    },
    validationMessage: {
        type: 'string',
        value: '',
        get(value) {
            var self = this;
            var message = undefined;

            if (this.errors) {
                each(this.errors, function (error) {
                    if (error.related.indexOf(self.errorAttribute) > -1) {
                        message = error.message;
                        return false;
                    }

                    return true;
                });
            }

            return message || value;
        }
    },
    working: {
        type: 'boolean'
    },
    permission: {
        type: 'string',
        value: ''
    },
    context: {
        type: '*'
    },
    elementClass: {
        type: 'string',
        value: ''
    },
    visibilityClass: {
        get: function () {
            var visible = this.visible;

            return visible != undefined && !visible ? 'invisible' : '';
        }
    },
    iconClass: {
        type: 'string',
        value: '',
        get: function (value) {
            return value || options.iconClass || 'fa';
        }
    },
    iconNameClass: {
        type: 'string',
        value: '',
        get: function (value) {
            return value || '';
        }
    },
    iconSpacingClass: {
        type: 'string',
        get: function (value) {
            return value || options.iconSpacingClass;
        }
    },
    formGroupClass: {
        type: 'string',
        get: function (value) {
            return value || options.iconSpacingClass;
        }
    },
    text: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    disabled: {
        get: function (value) {
            var disabled = value || false || this.working;

            if (this.permission && !disabled) {
                disabled = !security.hasPermission(this.permission);
            }

            return disabled;
        }
    },
    required: {
        type: 'boolean',
        value: false
    },
    hasErrors: function () {
        if (!this.errors) {
            return false;
        }

        return !!this.errors();
    },
    _click: function (ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

