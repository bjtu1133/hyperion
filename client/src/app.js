import 'jquery';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-filter';
import route from './route/route';
import service from './service/service';
import controller from './controller/controller';

import filter from './filter/filter.js';
angular.module('hyperion',['ui.router','ngResource','angular.filter']);
service('hyperion');
controller('hyperion');
route('hyperion');
filter('hyperion');
angular.module('shakuras',['ui.router','ngResource','angular.filter']);
