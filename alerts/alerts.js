import {Component, DefineMap, DefineList, Reflect} from 'can';
import view from './alerts.stache!';
import stache from 'can-stache/';

export const MessageMap = DefineMap.extend({
    message: {
        type: 'any'
    },
    type: {
        type: 'string'
    },
    mode: {
        type: 'string'
    },
    key: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    expiryDate: {
        type: 'date'
    }
});

export const MessageList = DefineList.extend({
    '#': MessageMap,
})

export const Alerts = DefineMap.extend({
    _key: {type: 'number', default: 1},

    messages: {
        Default: MessageList
    },

    add: function (options) {
        if (!options || !options.message) {
            return;
        }

        if (options.key || options.name) {
            this.remove(options);
        }

        this._push(options);
    },

    clear: function () {
        this.messages = new DefineList();
    },

    remove: function (options) {
        if (!options || (!options.key && !options.name && !options.type)) {
            return;
        }

        this.messages = this.messages.filter(function (item) {
            var keep = true;

            if (options.key) {
                keep = item.key !== options.key;
            } else {
                if (options.name) {
                    keep = item.name !== options.name;
                } else {
                    if (options.type) {
                        keep = (item.type || 'info') !== options.type;
                    }
                }
            }

            return keep;
        });
    },

    _push: function (options, mode) {
        var key = this._key + 1;
        var self = this;
        var expiryDate = new Date();

        if (!options || !options.message) {
            return;
        }

        var type = options.type || 'info';

        expiryDate.setSeconds(expiryDate.getSeconds() + 10);

        const message = new MessageMap({
            message: stache.safeString(options.message),
            type: type,
            mode: mode,
            key: key,
            name: options.name,
            expiryDate: expiryDate
        });

        this.messages.push(message);

        this._key = key;
    }
})

export const ViewModel = DefineMap.extend({
    alerts: {
        Default: Alerts
    },

    init: function () {
        this._removeExpiredAlerts();
    },

    _removeExpiredAlerts: function () {
        var self = this;
        var date = new Date();

        if (!this.alerts ||
            !this.alerts.remove) {
            return;
        }

        Reflect.each(this.alerts.messages, function (item) {
            if (item.expiryDate &&
                item.expiryDate < date) {
                self.alerts.remove({key: item.key});
            }
        });

        setTimeout(() => {
            self._removeExpiredAlerts();
        }, 500);
    }
});

export default Component.extend({
    tag: 'cs-alerts',
    view,
    ViewModel
});