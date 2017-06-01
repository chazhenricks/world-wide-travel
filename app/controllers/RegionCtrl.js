"use strict";

app.controller("RegionCtrl", function($scope, $q, $http, GuideFactory){

    GuideFactory.getBooks()
    .then((response)=>{
        $scope.listOfBooks = [];
        response.forEach(function(element){
            if(element.type === "region"){
               $scope.listOfBooks.push(element);
            }
        });
        console.log($scope.listOfBooks);
    });


});
