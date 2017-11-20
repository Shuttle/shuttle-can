import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './fetching.stache!';
import i18n from '../i18n/';

export const ViewModel = DefineMap.extend({
  title: {
      type: 'string',
      value: '',
      get: function(value) {
          return i18n.value('fetching', { name: i18n.value(value)});
      }
  }
});

export default Component.extend({
    tag: 'cs-fetching',
    view,
    ViewModel
});