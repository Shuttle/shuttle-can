import $ from 'jquery';
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './modal.stache!';
import alerts from '../alerts/';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    primaryClick: {
        type: 'observable'
    },
    modalType: {
        type: 'string',
        value: 'fade',
        get: function(value) {
            return value;
        }
    },
    title: {
        type: 'string',
        value: '',
        get: function(value) {
            return i18n.value(value);
        }
    },
    primaryText: {
        type: 'string',
        value: '',
        get: function(value) {
            return i18n.value(value);
        }
    },
    dismissText: {
        type: 'string',
        value: '',
        get: function(value) {
            return i18n.value(value);
        }
    },
    textType: {
        type: 'string',
        value: 'primary',
        get: function(value) {
            return value;
        }
    },
    message: { type: 'string', value: '' },
    hasMessage: {
        get: function() {
            return !!this.message;
        }
    },
    _primaryClick: function() {
        const modalElement = $('#' + this.modalId);

        if (modalElement) {
            modalElement.modal('hide');
        }

        if (!!this.primaryClick) {
            this.primaryClick(arguments);
        } else {
            throw new Error('No primary click function has been assigned.');
        }
    }
});

export default Component.extend({
    tag: 'cs-modal',
    view,
    ViewModel
});