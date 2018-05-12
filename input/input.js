import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './input.stache!';
import nextId from "../infrastructure/id-generator";
import options from '../infrastructure/options';

export const ViewModel = ComponentViewModel.extend({
    init() {
        this.id = 'input-' + nextId().toString();
    },
    id: {
        type: 'string'
    },
    type: {
        type: 'string',
        default: 'input',
        set(value) {
            return (value || '').toLowerCase();
        }
    },
    isDateTime: {
        type: 'boolean',
        get() {
            switch (this.type) {
                case 'date':
                case 'datetime':
                case 'time': {
                    return true;
                }
                default: {
                    return false;
                }
            }
        }
    },
    datetimeClass: {
        type: 'string',
        get() {
            return this.isDateTime ? options.datetime.datetimeClass : '';
        }
    },
    inputClass: {
        type: 'string',
        get() {
            return `form-control ${this.datetimeClass} ${this.elementClass}`;
        }
    },
    connectedCallback: function () {
        var self = this;
        var el = $('#' + this.id);

        switch (this.type) {
            case 'date':
            case 'datetime':
            case 'time': {
                try {
                    el.datetimepicker();
                }
                catch (e) {
                    if (!!console.warn) {
                        console.warn('The \'cs-input\' component makes use of https://tempusdominus.github.io/bootstrap-4/Installing/');
                        console.warn('$ npm install tempusdominus-bootstrap-4');
                    }

                    throw new Error('Could not call \'$.datetimepicker\'.');
                }
            }
        }
    }
});

export default Component.extend({
    tag: 'cs-input',
    view,
    ViewModel
});