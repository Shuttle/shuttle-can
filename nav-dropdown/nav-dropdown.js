import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './nav-dropdown.stache';
import i18n from '../infrastructure/i18n';

export const DropdownMap = DefineMap.extend({
    href: {
        type: 'string',
        default: ''
    },
    text: {
        type: 'string',
        default: '',
        get: function (value) {
            return i18n.value(value);
        }
    }
});

export const DropdownList = DefineList.extend({
    '#': DropdownMap
});

var ViewModel = DefineMap.extend({
    href: {
        type: 'string',
        default: '',
        set(value) {
            if (!!this.list && !!this.list.length) {
                throw new Error('Cannot set \'href\' when a \'list\' has been set.');
            }

            return value;
        }
    },
    text: {
        type: 'string',
        default: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    list: {
        Default: DropdownList,
        set(value) {
            if (!!value.length && !!this.href) {
                throw new Error('Cannot set \'list\' when a \'href\' has been set.');
            }

            return value;
        }
    }
});

export default Component.extend({
    tag: 'cs-nav-dropdown',
    view,
    ViewModel
});