import angular from 'angular';
import './root/root.component.js';
import './gifs/gifs.component.js';
import './phoneList/phonelist.component.js';
angular
.module('angularJS-app')
.config(($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
  $stateProvider
  .state('root', {
    url: '/angularJS',
    template: '<root />',
  })
  .state('root.phonelist', {
    url: '/phonelist',
    template: '<phonelist />',
  })
  .state('root.gifs', {
    url: '/gifs',
    template: '<gifs />',
  })
});