"use strict";

app.controller("CountryCtrl", function($scope, $q, $http, GuideFactory){

    GuideFactory.getBooks()
    .then((response)=>{
      $scope.listOfBooks = [];
        response.forEach(function(element){
            if(element.type === "country"){
               $scope.listOfBooks.push(element);
            }
        });
        console.log($scope.listOfBooks);
    });


});
