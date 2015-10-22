var materialAdmin = angular.module('materialAdmin', [
    // 'ngAnimate',
    // 'ngResource',
    'ui.router',
    'ui.bootstrap'
    // 'angular-loading-bar',
    // 'oc.lazyLoad',
    // 'nouislider',
    // 'ngTable'
]);

/**
 * Main application controller
 */
materialAdmin

    // Home page
    .controller('materialadminCtrl', ['$scope', '$state', function($scope, $state) {
        var mobileRegEx = new RegExp('/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i');
    
        // Detact Mobile Browser
        if( mobileRegEx.test(navigator.userAgent) ) {
           angular.element('html').addClass('ismobile');
        }
    
    }])

    // Controller
    .controller('headerCtrl', ['$scope', function($scope) {
        
    }])
;