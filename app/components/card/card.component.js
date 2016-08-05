(function() {
  'use strict';

  angular
    .module('Card', ['BaseUrl'])
    .component('card', {
      templateUrl: function(BaseUrl) {
        return BaseUrl() + 'app/components/card/card.html'; 
      },
      controller: 'CardController',
      bindings: {
        name: '<',
        favorited: '=',
        onFavorite: '&',
        onRemoveFavorite: '&'        
      }
    });

})();