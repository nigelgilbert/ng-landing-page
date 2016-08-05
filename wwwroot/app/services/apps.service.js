(function() {
'use strict';

  angular
    .module('AppsService', [])
    .service('AppsService', function() {
      this.getAllApps = function() {
        var apps = [
          {
            name: 'Analytics',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          },
          {
            name: 'E-Contracting',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          },
          {
            name: 'Account Services',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          },
          {
            name: 'F&I Management',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          },
          {
            name: 'Cyclops',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          },
          {
            name: 'E-Signature',
            image: '/app/images/analytics.png',
            url: 'https://www.google.com',
            favorited: 'false'
          }
        ];
        return apps;
      };
  });

})();