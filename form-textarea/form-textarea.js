﻿import {Component} from 'can';
import {ViewModel} from '../textarea/';
import view from './form-textarea.stache!';

export default Component.extend({
    tag: 'cs-form-textarea',
    ViewModel,
    view
});


