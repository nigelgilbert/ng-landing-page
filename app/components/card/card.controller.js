(function() {
  'use strict';

  angular
    .module('Card')
    .controller('CardController', CardController);

  CardController.$inject = ['$window', 'BaseUrl'];

  function CardController($window, BaseUrl) {
    var $ctrl = this;
    
    $ctrl.imageUrl = BaseUrl() + 'app/images/analytics.png';
    $ctrl.redirectUrl = '/';

    $ctrl.redirect = function() {
      $window.location.href = $ctrl.redirectUrl;
    };
  }

})();