import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';

var ViewModel = DefineMap.extend({
    items: {
        get: function() {
            var result = new DefineList();


            return result;
        }
    }
});

export default Component.extend({
    tag: 'sample-navigation',
    view,
    ViewModel
});