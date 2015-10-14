'use strict';

/**
 * @ngdoc overview
 * @name womensp2pToolkitWebappApp
 * @description
 * # womensp2pToolkitWebappApp
 *
 * Main module of the application.
 */
angular
  .module('womensp2pToolkitWebappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/testimonials', {
        templateUrl: 'views/testimonials.html',
        controller: 'TestimonialsCtrl',
        controllerAs: 'testimonials'
      })
      .when('/candidates', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl',
        controllerAs: 'candidates'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl',
        controllerAs: 'reports'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/fundraising', {
        templateUrl: 'views/fundraising.html',
        controller: 'FundraisingCtrl',
        controllerAs: 'fundraising'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/vertnav', {
        templateUrl: 'views/vertnav.html',
        controller: 'VertnavCtrl',
        controllerAs: 'vertnav'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
