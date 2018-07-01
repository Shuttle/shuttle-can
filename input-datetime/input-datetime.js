import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './input-datetime.stache!';
import nextId from "../infrastructure/id-generator";
import options from '../infrastructure/options';
import moment from 'moment';

export const ViewModel = ComponentViewModel.extend({
    init() {
        this.id = 'input-' + nextId().toString();
    },
    id: {
        type: 'string'
    },
    showFormat: {
        type: 'boolean',
        get(value) {
            return value || options.datetime.showFormat
        }
    },
    placeholder: {
        type: 'string',
        get(value) {
            var format = (this.showFormat ? this.format : '');

            return (!!value) ? `${value} (${format})` : format;
        }
    },
    settingText: {
        type: 'boolean',
        default: false
    },
    text: {
        type: 'string',
        set(value){
            this.settingText = true;

            var m = moment(value, this.format);

            if (!this.settingValue) {
                this.value = m.isValid() ? m.toDate() : undefined;
            }

            this.settingText = false;

            return value;
        }
    },
    settingValue: {
        type: 'boolean',
        default: false
    },
    value: {
        type: 'date',
        set(value){
            this.settingValue = true;

            if (!this.settingText){
                this.text = !!value ? moment(value).format(this.format) : '';
            }

            this.settingValue = false;

            return value;
        }
    },
    type: {
        type: 'string',
        default: 'datetime',
        set(value) {
            return value === 'datetime' || value === 'date' || value === 'time' ? value : 'datetime';
        }
    },
    format: {
        type: 'string',
        get(value) {
            if (!!value) {
                return value;
            }

            switch (this.type) {
                case 'date': {
                    return options.datetime.dateFormat;
                }
                case 'datetime': {
                    return options.datetime.format;
                }
                case 'time': {
                    return options.datetime.timeFormat;
                }
                default: {
                    return false;
                }
            }
        }
    },
    datetimeClass: {
        type: 'string',
        get(value) {
            return !!value ? value : options.datetime.datetimeClass;
        }
    },
    containerClass: {
        type: 'string'
    },
    inputClass: {
        type: 'string',
        get() {
            return `form-control ${this.datetimeClass} ${this.elementClass}`;
        }
    },
    minDate: {
        type: 'date',
        set(value) {
            if (!!this.value && value > this.value){
                value = this.value;
            }

            if (!!this.maxDate && value > this.maxDate) {
                value = this.maxDate;
            }

            if (!!value){
                value = moment(value);
            }

            this._setDateTimeOption('minDate', value || false);

            return value;
        }
    },
    maxDate: {
        type: 'date',
        set(value) {
            if (!!this.value && value < this.value){
                value = this.value;
            }

            if (!!this.minDate && value < this.minDate) {
                value = this.minDate;
            }

            this._setDateTimeOption('maxDate', value || false);

            return value;
        }
    },
    _setDateTimeOption(name, value) {
        return;

        // will re-enable tempus dominus once it works error-free

        var el = $('#' + this.id);

        if (!el.length) {
            return;
        }

        el.datetimepicker(name, value);
    },
    connectedCallback: function () {
        return;

        // will re-enable tempus dominus once it works error-free

        var self = this;
        var el = $('#' + this.id);

        try {
            el.datetimepicker({format: this.format});
            el.on("change.datetimepicker", function (e) {
                self.value = e.date.toDate();
            });
        }
        catch (e) {
            if (!!console.warn) {
                console.warn('The \'cs-input\' component makes use of https://tempusdominus.github.io/bootstrap-4/Installing/');
                console.warn('$ npm install tempusdominus-bootstrap-4');
            }

            throw new Error('Could not call \'$.datetimepicker\'.');
        }
    }
});

export default Component.extend({
    tag: 'cs-input-datetime',
    view,
    ViewModel
});