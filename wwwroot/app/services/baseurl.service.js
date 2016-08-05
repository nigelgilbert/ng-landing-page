(function() {
'use strict';

  angular
    .module('BaseUrl', [])
    .factory('BaseUrl', function() {
      var base = document.getElementsByTagName("base")[0].href || "/";
      return function() {
        return base;
      };
  });

})();