(function() {
  'use strict';

  angular
    .module('Dashboard')
    .controller('DashboardController', DashboardController);
  
  DashboardController.$inject = ['AppsService', '$filter'];

  function DashboardController(userAppsService, $filter) {
    var $ctrl = this;

    $ctrl.apps = userAppsService.getAllApps();
    $ctrl.favorites = [];

    $ctrl.onAddFavorite = function(nameobj) {
      var name = nameobj.name;
      var app = $ctrl.apps.find((obj)=> obj.name === name);
      $ctrl.apps = removeAppFromArray(app.name, $ctrl.apps);
      app.favorited = true;
      $ctrl.favorites.push(app);
    };

    $ctrl.onRemoveFavorite = function(nameobj) {
      var name = nameobj.name;
      var app = $ctrl.favorites.find((obj)=> obj.name === name);
      $ctrl.favorites = removeAppFromArray(name, $ctrl.favorites);
      app.favorited = false;
      $ctrl.apps.push(app);
    };

    $ctrl.hasFavoritedApps = function() {
      return $ctrl.favorites.length > 0 ? true : false;
    };

    $ctrl.allAppsIsNotEmpty = function() {
      var filtered = $filter('filter')($ctrl.apps, $ctrl.userSeachInput);
      return filtered.length > 0 ? true : false;
    };
  }

  function removeAppFromArray(namestr, array) {
    var index = array.findIndex((obj)=> obj.name === namestr);
    if (index > -1) {
      array.splice(index, 1);
      return array;
    }
    else throw new Error("removeAppFromArray: couldn't find index name === namestr");
  }
})();