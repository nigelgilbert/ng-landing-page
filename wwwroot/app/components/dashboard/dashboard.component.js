(function() {
  'use strict';

  angular
    .module('Dashboard', ['BaseUrl'])
    .component('dashboard', {
      templateUrl: function(BaseUrl) {
        return BaseUrl() + 'app/components/dashboard/dashboard.html'; 
      },
      controller: 'DashboardController'
    });

})();