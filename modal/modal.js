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
        get: function(value) {
            return value || 'fade';
        }
    },
    dismissText: {
        get: function(value) {
            return i18n.value(value);
        }
    },
    textType: {
        get: function(value) {
            return value || 'primary';
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
            alerts.show({ message: i18n.value('modals.no-primary-click'), type: 'danger' });
        }
    }
});

export default Component.extend({
    tag: 'cs-modal',
    view,
    ViewModel
});