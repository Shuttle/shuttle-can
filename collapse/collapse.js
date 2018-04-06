import Component from 'can-component';
import view from './collapse.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';
import nextId from '../infrastructure/id-generator';
import $ from 'jquery';

export const ViewModel = ComponentViewModel.extend({
    init() {
        this.collapseId = 'collapse-' + nextId().toString();
    },

    text: {
        type: 'string',
        default: 'Collapse Header'
    },
    collapseId: {
        type: 'string'
    },
    accordionId: {
        type: 'string'
    },
    expandedIconClass: {
        type: 'string',
        default: 'fa-chevron-down'
    },
    collapsedIconClass: {
        type: 'string',
        default: 'fa-chevron-right'
    },
    collapsed: {
        type: 'boolean',
        default: false,
        set(value) {
            $('#' + this.collapseId).collapse(!!value ? 'hide' : 'show');

            return value;
        }
    },
    collapseIconClass: {
        get() {
            return this.iconClass + ' ' + (!!this.collapsed ? this.collapsedIconClass : this.expandedIconClass);
        }
    },
    click: function () {
        this.collapsed = !this.collapsed;
    }
});

export default Component.extend({
    tag: 'cs-collapse',
    view,
    ViewModel
});