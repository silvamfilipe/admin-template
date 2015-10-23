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
    .controller('materialadminCtrl', ['$scope', '$state', '$log', function($scope, $state, $log) {
        var mobileRegEx = new RegExp('/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i');
    
        // Detact Mobile Browser
        if( mobileRegEx.test(navigator.userAgent) ) {
           angular.element('html').addClass('ismobile');
        }
        
        // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
        $scope.sidebarToggle = {
            left: false,
            right: false
        }
        
        // By default template has a boxed layout
        $scope.layoutType = localStorage.getItem('ma-layout-status');
        
        //Close sidebar on click
        $scope.sidebarStat = function(event) {
            $log.info('sidebar event: ');
            $log.log(event);
            
            if (!angular.element(event.target).parent().hasClass('active')) {
                $scope.sidebarToggle.left = false;
            }
        }
        
        //Listview Search (Check listview pages)
        $scope.listviewSearchStat = false;
        
        $scope.lvSearch = function() {
            $scope.listviewSearchStat = true; 
        }
    
    }])

    // Controller
    .controller('headerCtrl', ['$scope', function($scope) {
        
        // Top Search
        $scope.openSearch = function(){
            angular.element('#header').addClass('search-toggled');
            //growlService.growl('Welcome back Mallinda Hollaway', 'inverse');
        }

        $scope.closeSearch = function(){
            angular.element('#header').removeClass('search-toggled');
        }
    }])
;