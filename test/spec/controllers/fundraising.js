'use strict';

describe('Controller: FundraisingCtrl', function () {

  // load the controller's module
  beforeEach(module('womensp2pToolkitWebappApp'));

  var FundraisingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FundraisingCtrl = $controller('FundraisingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FundraisingCtrl.awesomeThings.length).toBe(3);
  });
});
