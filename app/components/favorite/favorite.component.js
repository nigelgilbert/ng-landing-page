(function() {
'use strict';

  angular
    .module('Favorite', ['BaseUrl'])
    .component('favorite', {
      templateUrl: function(BaseUrl) {
        return BaseUrl() + 'app/components/favorite/favorite.html'; 
      },
      controller: 'FavoriteController',
       bindings: {
        onFavorite: '&',
        onRemoveFavorite: '&',
        favorited: "="    
      }
    });

})();