"use strict";

app.controller("BookCtrl", function($scope, $q, $http){

    $scope.getBooks = function(){
        return $q((resolve,reject)=>{
            $http.get("./data/guides.json")
            .then((response)=>{
                let bookCollection = response.data;
                console.log("book collection", bookCollection, "response", response);
                resolve(bookCollection.guides);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    $scope.getBooks()
    .then((response)=>{
        $scope.guides = response;
        console.log($scope.guides);
    });

});
