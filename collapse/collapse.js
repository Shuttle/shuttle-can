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
    hasAccordionId: {
        type: 'boolean',
        get() {
            return !!this.accordionId;
        }
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
        default: function(){
            return !!this.accordionId;
        }
    },
    collapseIconClass: {
        get() {
            return 'float-right ' + this.iconClass + ' ' + (!!this.collapsed ? this.collapsedIconClass : this.expandedIconClass);
        }
    },
    connectedCallback(){
        var self = this;
        var el = $('#' + this.collapseId);

        el.on('hidden.bs.collapse', function () {
            self.collapsed = true;
        });
        el.on('shown.bs.collapse', function () {
            self.collapsed = false;
        });
    }
});

export default Component.extend({
    tag: 'cs-collapse',
    view,
    ViewModel
});