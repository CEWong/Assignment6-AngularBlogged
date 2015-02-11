(function(){
    var app = angular.module('tutorialsGallery', []);

    app.controller('GController', ['$http', function($http) {
        var gallery = this;
        gallery.items = [];
        console.log("Gallery Controller was called!");
        $http.get('tutorials.json').success(function(data) {
            gallery.items = data;
            console.log("We attempted to success log the info!");
        });
    }]); 
})();
