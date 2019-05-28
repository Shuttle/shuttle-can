import { Component, DefineMap, DefineList, Reflect } from 'can';
import view from './autocomplete.stache!';
import Api from 'shuttle-can-api';
import ComponentViewModel from '../infrastructure/component-view-model';
import guard from 'shuttle-guard';
import i18n from '../infrastructure/i18n';

export const ViewModel = ComponentViewModel.extend({
    _api: {},

    text: {
        type: 'string',
        default: ''
    },

    getText (map) {
        if (!map) {
            return '';
        }

        var text = map[this.textAttribute];

        if (text == undefined) {
            return `['undefined' returned from 'textAttribute' with name '${this.textAttribute}']`;
        }

        return (typeof (text) === 'function') ? text() : text;
    },

    parameters: {
        type: '*',
        get (value) {
            var result = (typeof(value) === 'function') ? value() : value;

            return (typeof(result) === 'string') ? eval('(' + result + ')') : result;
        }
    },

    loadingText: {
        type: 'string',
        default: 'autocomplete-loading',
        get (value) {
            return i18n.value(value);
        }
    },

    emptyText: {
        type: 'string',
        default: 'autocomplete-empty',
        get (value) {
            return i18n.value(value);
        }
    },

    map: {
        Type: DefineMap,
        set (value) {
            if (!!value) {
                this.text = this.getText(value);

                return value;
            } else {
                this.text = '';
            }
        }
    },

    mapper: {
        type: 'compute',
        default: undefined
    },

    method: {
        type: 'string',
        default: 'post',
        set (value) {
            guard.againstUndefined(value, 'value');

            return value.toLowerCase() === 'post' ? 'post' : 'get';
        }
    },

    searchAttribute: {
        type: 'string',
        default: 'search'
    },

    textAttribute: {
        type: 'string',
        default: 'text'
    },

    endpoint: {
        type: 'string',
        set (value) {
            guard.againstUndefined(value, 'value');

            this._api = new Api({endpoint: value});

            return value;
        }
    },

    searchValue: {
        type: 'string',
        default: ''
    },

    get searchPromise () {
        const self = this;
        var promise;
        var data;
        var parameters;

        if (!this.searchValue) {
            return Promise.resolve([]);
        }

        parameters = this.parameters || {};
        parameters[this.searchAttribute] = encodeURIComponent(this.searchValue);

        return this._api.list(parameters, {post: this.method.toLowerCase() === 'post'})
            .then(function (response) {
                if (!self.mapper) {
                    return response;
                }

                var result = new DefineList();

                Reflect.each(response, function (item) {
                    guard.againstUndefined(item, 'item');

                    var mapped = self.mapper.call(self, item);

                    if (!mapped) {
                        throw new Error('The mapper returned an undefined object.');
                    }

                    result.push(mapped);
                });

                return result;
            });
    },

    search: function (el) {
        if (this.searchValue != el.value) {
            this.searchValue = el.value;
            this.map = undefined;
        }

        if (this.dropdownState !== 'show' &&
            this.dropdownState !== 'shown') {
            $(el).dropdown('toggle');
        }
    },

    select: function (map) {
        this.map = map;
        this.searchValue = this.getText(map);
    },

    dropdownState: {
        type: 'string',
        default: 'hidden'
    },

    connectedCallback (el) {
        const self = this;
        const input = $(el);

        input.on('show.bs.dropdown', function () {
            self.dropdownState = 'show';
        });

        input.on('shown.bs.dropdown', function () {
            self.dropdownState = 'shown';
        });

        input.on('hide.bs.dropdown', function () {
            self.dropdownState = 'hide';
        });

        input.on('hidden.bs.dropdown', function () {
            self.dropdownState = 'hidden';
        });
    }
});

export default Component.extend({
    tag: 'cs-autocomplete',
    ViewModel,
    view
});