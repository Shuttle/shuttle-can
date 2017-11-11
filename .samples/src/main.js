import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css!';

import DefineMap from "can-define/map/";
import template from "./main.stache!";
import route from 'can-route/';

import "~/components/navigation";
import "shuttle-canstrap";

var ApplicationViewModel = DefineMap.extend({
  sample: 'string'
});

var routeViewModel = new DefineMap({});

var applicationViewModel = new ApplicationViewModel({
  route: routeViewModel
});

route.data = routeViewModel;
route('{sample}', {sample: 'text'});
route.ready();

$('#application-container').html(template(applicationViewModel));
