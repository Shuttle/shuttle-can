import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';
import {DropdownItemList, DropdownItem} from 'shuttle-canstrap/nav-dropdown/';

var ViewModel = DefineMap.extend({
    someValue: { value: 'test' },
    items: {
        get: function() {
            var result = new DropdownItemList();

            result.push(new DropdownItem({
              text: 'yay!',
              items: [{ href: '#', text: 'sub' }]
            }));

            return result;
        }
    }
});

export default Component.extend({
    tag: 'sample-navigation',
    view,
    ViewModel
});