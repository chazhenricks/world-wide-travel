"use strict";

app.controller("CityCtrl", function($scope, $q, $http, GuideFactory){

    GuideFactory.getBooks()
    .then((response)=>{
        $scope.listOfBooks = [];
        response.forEach(function(element){
            if(element.type === "city"){
               $scope.listOfBooks.push(element);
            }
        });
        console.log($scope.listOfBooks);
    });


});
