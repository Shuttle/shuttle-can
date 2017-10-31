import DefineMap from 'can-define/map/';
import Component from 'can-component/';
import stache from 'can-stache/';

var ApplicationViewModel = DefineMap.extend({
  sample: 'string'
});

Component.extend({
  tag: 'home-page',
  view: can.stache.from('home-template'),
  ViewModel: ApplicationViewModel
});

can.route.data = appViewModel;
can.route('{sample}', {sample: 'text'});
can.route.ready();

$('#application-container').html(stache.from('application-template')(new can.DefineMap({})));
