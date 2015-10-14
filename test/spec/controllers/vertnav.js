'use strict';

describe('Controller: VertnavCtrl', function () {

  // load the controller's module
  beforeEach(module('womensp2pToolkitWebappApp'));

  var VertnavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VertnavCtrl = $controller('VertnavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VertnavCtrl.awesomeThings.length).toBe(3);
  });
});
