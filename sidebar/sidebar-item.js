import {Component} from 'can';
import {ItemMap} from './sidebar';
import view from './sidebar-item.stache';

export default Component.extend({
    tag: 'cs-sidebar-item',
    view,
    ViewModel: ItemMap
});