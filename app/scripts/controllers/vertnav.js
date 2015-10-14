'use strict';

/**
 * @ngdoc function
 * @name ghcOsdWebappApp.controller:VertnavCtrl
 * @description
 * # VertnavCtrl
 * Controller of the ghcOsdWebappApp
 */
angular.module('womensp2pToolkitWebappApp')
  .controller('VertnavCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  var tabClasses;
  
  function initTabs() {
    tabClasses = ["","","",""];
  }
  
  $scope.getTabClass = function (tabNum) {
    return tabClasses[tabNum];
  };
  
  $scope.getTabPaneClass = function (tabNum) {
    return "tab-pane " + tabClasses[tabNum];
  };
  
  $scope.setActiveTab = function (tabNum) {
    initTabs();
    tabClasses[tabNum] = "active";
  };
  
  $scope.tab1 = "This is first section";
  $scope.tab2 = "This is SECOND section";
  $scope.tab3 = "This is THIRD section";
  $scope.tab4 = "This is FOUTRH section";
  
  //Initialize 
  initTabs();
  $scope.setActiveTab(1);


  });
