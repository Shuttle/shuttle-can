import {DefineMap,Component} from 'can';
import view from './page-title.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = DefineMap.extend({
    localize: {
        type: 'boolean',
        default: true
    },
    title: {
        type: 'string',
        default: '',
        get: function(value) {
            return this.localize ? i18n.value(value) : value;
        }
    }
});

export default Component.extend({
    tag: 'cs-page-title',
    view,
    ViewModel
});


