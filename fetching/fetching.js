import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './fetching.stache!';
import localisation from '../localisation/';

export const ViewModel = DefineMap.extend({
  title: {
      type: 'string',
      value: '',
      get: function(value) {
          return localisation.value('fetching', { name: localisation.value(value)});
      }
  }
});

export default Component.extend({
    tag: 'cs-fetching',
    view,
    ViewModel
});