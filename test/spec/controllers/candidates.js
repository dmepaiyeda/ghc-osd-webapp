'use strict';

describe('Controller: CandidatesCtrl', function () {

  // load the controller's module
  beforeEach(module('womensp2pToolkitWebappApp'));

  var CandidatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatesCtrl = $controller('CandidatesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CandidatesCtrl.awesomeThings.length).toBe(3);
  });
});
