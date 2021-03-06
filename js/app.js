var app = angular.module('tigerfacility', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", {
            templateUrl : "pages/main.html"
        })
        .when("/qualitaet", {
            templateUrl : "pages/qualitaet.html"
        })
        .when("/uber-uns", {
            templateUrl : "pages/uber-uns.html"
        })
        .when("/vorteile", {
            templateUrl : "pages/vorteile.html"
        })
        .when("/preise", {
            templateUrl : "pages/preise.html"
        })
        .when("/so-funktionierts", {
            templateUrl : "pages/so-funktionierts.html"
        })
        .when("/startup", {
            templateUrl : "pages/startup.html"
        })
        .when("/grossraumbuero", {
            templateUrl : "pages/grossraumbuero.html"
        })
        .when("/kanzlei", {
            templateUrl : "pages/kanzlei.html"
        })
        .when("/praxis", {
            templateUrl : "pages/praxis.html"
        })
        .when("/zahnarztpraxis", {
            templateUrl : "pages/zahnarztpraxis.html"
        })
        .when("/behandlungsraeume", {
            templateUrl : "pages/behandlungsraeume.html"
        })
        .when("/cafe", {
            templateUrl : "pages/cafe.html"
        })
        .when("/verkaufsflaechen", {
            templateUrl : "pages/verkaufsflaechen.html"
        })
        .when("/oeffentliche-einrichtungen", {
            templateUrl : "pages/oeffentliche-einrichtungen.html"
        })
        .when("/anfrage", {
            templateUrl : "pages/anfrage.html"
        })
        .when("/e-book", {
            templateUrl : "pages/e-book.html"
        })
        .when("/co-working", {
            templateUrl : "pages/co-working.html"
        })
        .when("/contact-sales", {
            templateUrl : "pages/contact-sales.html"
        })
        .when("/co-living", {
            templateUrl : "pages/co-living.html"
        })
        .when("/office-management-as-a-service", {
            templateUrl : "pages/office-management-as-a-service.html"
        })
        .when("/bueroservice", {
            templateUrl : "pages/bueroservice.html"
        })
        .when("/multi-step-funnel", {
            templateUrl : "pages/multi-step-funnel.html"
        })
        .when("/hilfe", {
            templateUrl : "pages/hilfe.html"
        })
        .when("/login", {
            templateUrl : "pages/login.html"
        })
        .when("/hausmeisterservice", {
            templateUrl : "pages/hausmeisterservice.html"
        })
        .when("/praxisreinigung", {
            templateUrl : "pages/praxisreinigung.html"
        })
        .when("/gebaeudereinigung", {
            templateUrl : "pages/gebaeudereinigung.html"
        })
        .when("/bueroreinigung", {
            templateUrl : "pages/bueroreinigung.html"
        })
        .when("/berlin", {
            templateUrl : "pages/berlin.html"
        })
        .when("/muenchen", {
            templateUrl : "pages/muenchen.html"
        })
        .when("/duesseldorf", {
            templateUrl : "pages/duesseldorf.html"
        })
        .when("/frankfurt", {
            templateUrl : "pages/frankfurt.html"
        })
        .when("/stuttgart", {
            templateUrl : "pages/stuttgart.html"
        })
        .when("/koeln", {
            templateUrl : "pages/koeln.html"
        })
        .when("/start", {
            templateUrl : "pages/start.html"
        })
        .when("/hamburg", {
            templateUrl : "pages/hamburg.html"
        })
        .when("/registrieren", {
            templateUrl : "pages/registrieren.html"
        })
        .when("/partner", {
            templateUrl : "pages/partner.html"
        })
    .otherwise({ redirectTo: '/' });
});

app.controller('customDialogCtrl', function ($scope, $uibModalInstance, $rootScope) {
    //-- Variables --//
    $rootScope.$on("CallParentMethod", function () {
      $uibModalInstance.dismiss('Canceled');
  
    });
  
    $scope.user = {
      name: ''
    };
  
    //-- Methods --//
  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('Canceled');
    }; // end cancel
  
    $scope.save = function () {
      $uibModalInstance.close($scope.user.name);
    }; // end save
  
    $scope.hitEnter = function (evt) {
      if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.user.name, null) || angular.equals($scope.user.name, '')))
        $scope.save();
    };
  })