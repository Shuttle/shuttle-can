import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'can-stache/helpers/route';

import 'bootstrap/dist/css/bootstrap.css!';
import './main.css!';

import DefineMap from "can-define/map/";
import template from "./main.stache!";
import route from 'can-route/';
import stache  from 'can-stache/';

import "shuttle-canstrap";
import "~/components/navigation";
import "~/components/cs-fetching-sample";
import "~/components/cs-input-sample";

var ApplicationViewModel = DefineMap.extend({
});

var RouteViewModel = DefineMap.extend({
  sample: 'string'
});

var routeViewModel = new DefineMap({});

var applicationViewModel = new ApplicationViewModel({
  route: routeViewModel,
  
  init: function(){
    this.route.on('sample', function(ev, newVal, oldVal) {
      if (!newVal) {
        return;
      }
      
      $('#application-content').html(stache('<' + newVal + '-sample />')());
    });
  }
});

$('#application-container').html(template(applicationViewModel));

route.data = routeViewModel;
route('{sample}');
route.ready();
