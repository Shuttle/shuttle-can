import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './checkbox.stache!';

export const ViewModel = ComponentViewModel.extend({
    checkedIconClass: {
      type: 'string',
        default: 'fa-check-square-o'
    },
    uncheckedIconClass: {
      type: 'string',
        default: 'fa-square-o'
    },
    checked: {
        type: 'boolean',
        default: false
    },
    checkboxIconClass: {
        get(){
            return this.iconClass + ' ' + (!!this.checked ? this.checkedIconClass : this.uncheckedIconClass);
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


