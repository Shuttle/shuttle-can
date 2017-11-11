import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './my-component.stache';

var ViewModel = DefineMap.extend({
    text: 'string'
});

export default Component.extend({
    tag: 'my-component',
    view,
    ViewModel
});