"use strict";

app.factory("GuideFactory", function($q, $http){
    var getBooks = function(){
        return $q((resolve,reject)=>{
            $http.get('data/guides.json')
            .then((response)=>{
                var guidesCollection = response.data;
                resolve(guidesCollection.guides);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    return{getBooks};
});
