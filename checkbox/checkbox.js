import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './checkbox.stache!';

export const ViewModel = ComponentViewModel.extend({
    checkedClass: {
      type: 'string',
        default: 'fa-check-square-o'
    },
    uncheckedClass: {
      type: 'string',
        default: 'fa-square-o'
    },
    checked: {
        default: false
    },
    checkboxClass: {
        get(){
            return this.iconClass + ' ' + (!!this.checked ? this.checkedClass : this.uncheckedClass);
        }
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


