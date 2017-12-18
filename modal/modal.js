import $ from 'jquery';
import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './modal.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = ComponentViewModel.extend({
    primaryClick: {
        type: 'observable'
    },
    modalType: {
        type: 'string',
        value: 'fade'
    },
    title: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    hasPrimary: {
        type: 'boolean',
        get: function () {
            return !!this.primaryText;
        }
    },
    primaryText: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    dismissText: {
        type: 'string',
        value: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    textType: {
        type: 'string',
        value: 'primary'
    },
    message: {
        type: 'string',
        value: ''
    },
    hasMessage: {
        type: 'boolean',
        get: function () {
            return !!this.message;
        }
    },
    _primaryClick: function () {
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