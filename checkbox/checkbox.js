import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './checkbox.stache!';

export const ViewModel = DefineMap.extend({
    checkedClass: {
      type: 'string',
      value: 'fa-check-square-o'
    },

    uncheckedClass: {
      type: 'string',
      value: 'fa-square-o'
    },

    checked: {
        value: false
    },

    click: function() {
        this.checked = !this.checked;
    }
});

export default Component.extend({
    tag: 'cs-checkbox',
    ViewModel,
    view
});


