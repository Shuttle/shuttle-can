import $ from 'jquery';
import {Component} from 'can';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './modal.stache!';
import i18n from '../infrastructure/i18n';
import options from "../infrastructure/options";

export const ViewModel = ComponentViewModel.extend({
    primaryClick: {
        type: 'observable'
    },
    modalType: {
        type: 'string',
        default: 'fade'
    },
    modalClass: {
        get() {
            return 'modal ' + this.modalType;
        }
    },
    title: {
        type: 'string',
        default: '',
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
        default: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    dismissText: {
        type: 'string',
        default: '',
        get: function (value) {
            return i18n.value(value);
        }
    },
    dismissButtonIconClass: {
        type: 'string',
        default: '',
        get: function(value){
            return value || this.iconClass;
        }
    },
    dismissButtonIconNameClass: {
        type: 'string',
        default: '',
        get: function(value){
            return value || options.button.close.iconNameClass;
        }
    },
    dismissButtonClass: {
        get(){
            return this.dismissButtonIconClass + ' ' + this.dismissButtonIconNameClass + (!!this.text ? ' ' + this.iconSpacingClass : '');
        }
    },
    textType: {
        type: 'string',
        default: 'primary'
    },
    message: {
        type: 'string',
        default: ''
    },
    hasMessage: {
        type: 'boolean',
        get: function () {
            return !!this.message;
        }
    },
    modalTitleId: {
        get() {
            return this.modalId + '-title'
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