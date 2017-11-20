import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './button-remove.stache!';
import modals from '~/modals';
import localisation from '~/i18n';
import click from '~/components/click';

export const ViewModel = DefineMap.extend({
    context: 'observable',
    elementClass: {
        get: function(value) {
            return value || '';
        }
    },

    _click: function(ev) {
        var self = this;
        const itemName = this.itemName;
        const message = !itemName
            ? localisation.value('removeItemConfirmation')
            : localisation.value('removeItemNameConfirmation', { itemName: itemName });

        ev.stopPropagation();

        modals.confirm(message,
            function() {
                click.on(self);
            });
    }
});

export default Component.extend({
    tag: 'cs-button-remove',
    view,
    ViewModel
});