import {DefineMap,DefineList,Component} from 'can';
import view from './button-group.stache!';
import ComponentViewModel from '../infrastructure/component-view-model';

export const ButtonMap = ComponentViewModel.extend({
    type: {
        get: function (type) {
            return type || 'button';
        }
    }
});

export const ButtonList = DefineList.extend({
    '#': ButtonMap
});

export const ViewModel = DefineMap.extend({
    buttons: {
        Type: ButtonList
    }
});

export default Component.extend({
    tag: 'cs-button-group',
    view,
    ViewModel
});


