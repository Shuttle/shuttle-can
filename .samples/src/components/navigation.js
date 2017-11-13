import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';
import {DropdownItemList, DropdownItem} from 'shuttle-canstrap/nav-dropdown/';

var ViewModel = DefineMap.extend({
    items: {
        get: function() {
            var result = new DropdownItemList();

            result.push(new DropdownItem({
              text: 'cs-nav-dropdown',
              items: [
                { 
                  href: '#', 
                  text: 'item-1' 
                },                { 
                  href: '#', 
                  text: 'item-2' 
                },                { 
                  href: '#', 
                  text: 'item-3' 
                }
              ]
            }));

            result.push(new DropdownItem({
              text: 'cs-nav-dropdown-second',
              items: [
                { 
                  href: '#', 
                  text: 'item-1' 
                },                { 
                  href: '#', 
                  text: 'item-2' 
                },                { 
                  href: '#', 
                  text: 'item-3' 
                }
              ]
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