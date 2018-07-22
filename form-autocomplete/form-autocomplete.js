import Component from 'can-component/';
import { ViewModel as AutocompleteViewModel } from '../autocomplete/'
import view from './form-autocomplete.stache!';

export default Component.extend({
	tag: 'cs-form-autocomplete',
	ViewModel: AutocompleteViewModel,
	view
});