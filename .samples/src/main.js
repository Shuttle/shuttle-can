import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css!';

import DefineMap from 'can-define/map/';
import Component from 'can-component/';
import stache from 'can-stache/';
import route from 'can-route/';
import 'shuttle-canstrap';

import '~/components/navigation';

var ApplicationViewModel = DefineMap.extend({
  sample: 'string'
});

var applicationViewModel = new ApplicationViewModel();

Component.extend({
  tag: 'sample-display',
  view: stache.from('sample-template'),
  ViewModel: applicationViewModel
});

route.data = applicationViewModel;
route('{sample}', {sample: 'text'});
route.ready();

$('#application-container').html(stache.from('navigation-template')(applicationViewModel));
