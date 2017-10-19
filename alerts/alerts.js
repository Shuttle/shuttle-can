import Component from 'can-component';
import view from './alerts.stache!';
import alerts from '~/alerts';

export default Component.extend({
    tag: 'shuttle-alerts',
    view,
    viewModel: function() {
        return alerts;
    }
});