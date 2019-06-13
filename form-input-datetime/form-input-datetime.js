import {Component} from 'can';
import {ViewModel} from '../input-datetime/input-datetime';
import view from './form-input-datetime.stache!';

export default Component.extend({
    tag: 'cs-form-input-datetime',
    ViewModel,
    view
});


