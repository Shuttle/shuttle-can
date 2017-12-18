import Component from 'can-component';
import view from './button-remove.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';
import i18n from '../infrastructure/i18n';
import options from '../infrastructure/options';
import click from '../infrastructure/click';

export const ViewModel = ComponentViewModel.extend({
    iconNameClass: {
        type: 'string',
        value: '',
        get: function (value) {
            return value || options.button.remove.iconNameClass;
        }
    },
    _click: function (ev) {
        var self = this;
        var useDefault = true;
        const itemName = this.itemName;
        const message = !itemName
            ? i18n.value(options.button.remove.i18n.removeItemConfirmation)
            : i18n.value(options.button.remove.i18n.removeItemConfirmationNamed, {itemName: i18n.value(itemName)});

        ev.stopPropagation();

        if (!!options.button.remove.confirmation) {
            options.button.remove.confirmation.call(self, function removeCallback() {
                click.on(self);
            });
            useDefault = false;
        }

        if (useDefault && confirm(message)) {
            click.on(this);
        }
    }
});

export default Component.extend({
    tag: 'cs-button-remove',
    ViewModel,
    view
});