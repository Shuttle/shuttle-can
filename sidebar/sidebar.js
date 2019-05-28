import { Component, DefineList } from 'can';
import view from './sidebar.stache';
import i18n from '../infrastructure/i18n';
import nextId from '../infrastructure/id-generator';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ItemMap = ComponentViewModel.extend({
    init() {
        this.id = 'sidebar-item-' + nextId().toString();
    },
    id: {
        type: 'string',
        default: ''
    },
    parentId: {
        type: 'string',
        get(value) {
            return '#' + value;
        }
    },
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
    },
    list: {
        Default: ItemList,
        set(value) {
            if (!!value.length && !!this.href) {
                throw new Error('Cannot set \'list\' when a \'href\' has been set.');
            }

            return value;
        }
    },
    expandedIconClass: {
        type: 'string',
        default: 'fa-chevron-right'
    },
    collapsedIconClass: {
        type: 'string',
        default: 'fa-chevron-down'
    },
    collapsed: {
        type: 'boolean',
        default: true
    },
    collapseIconClass: {
        get() {
            return 'float-right ' + this.iconClass + ' ' + (!!this.collapsed ? this.collapsedIconClass : this.expandedIconClass);
        }
    },
    connectedCallback() {
        var self = this;
        var el = $('#' + this.id);

        el.on('hidden.bs.collapse', function () {
            self.collapsed = true;
        });
        el.on('shown.bs.collapse', function () {
            self.collapsed = false;
        });
    }
});

export const ItemList = DefineList.extend({
    '#': ItemMap
});

var ViewModel = ComponentViewModel.extend({
    init() {
        this.id = this.id || 'sidebar-' + nextId().toString();
    },
    id: {
        type: 'string'
    },
    list: {
        Type: ItemList
    },
    connectedCallback() {
        if (!this.togglerId) {
            return;
        }

        var toggler = $('#' + this.togglerId);
        var sidebar = $('#' + this.id);

        if (!toggler.length || !sidebar.length) {
            return;
        }

        $(window).resize(function () {
            if (!toggler.is(':visible') && !sidebar.is(':visible')) {
                toggler.click();
            }
        });
    }
});

export default Component.extend({
    tag: 'cs-sidebar',
    view,
    ViewModel
});