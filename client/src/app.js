import 'jquery';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-filter';
import route from './route/route';
import service from './service/service';
import controller from './controller/controller';
import component from './tool/component'

import filter from './filter/filter';
angular.module('hyperion',['ui.router','ngResource','angular.filter']);
service('hyperion');
component('hyperion');
controller('hyperion');
route('hyperion');
filter('hyperion');
angular.module('shakuras',['ui.router','ngResource','angular.filter']);
