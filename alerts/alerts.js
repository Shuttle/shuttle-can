import Component from 'can-component';
import view from './alerts.stache!';
import alerts from '~/alerts';

export default Component.extend({
    tag: 'cs-alerts',
    view,
    viewModel: function() {
        return alerts;
    }
});