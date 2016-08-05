(function() {
'use strict';

  angular
    .module('Favorite')
    .controller('FavoriteController', FavoriteController);

  function FavoriteController() {
    var $ctrl = this;
    $ctrl.active = false;
    
    $ctrl.onMousedown = function($event) {
      $ctrl.active = true;
    };

    $ctrl.onMouseup = function($event) {
      $ctrl.active = false;
    };
    
    $ctrl.onClick = function($event) {
      ($ctrl.favorited) ? $ctrl.onRemoveFavorite() : $ctrl.onFavorite();
      $event.stopPropagation();
    };
  }

})();