var myApp = angular.module('app', []);

myApp.config(function () {
    console.log("Hi i m config");
});
myApp.run(function () {
    console.log("Hi i m running");
});

myApp.directive('customdir', function () {
    return {
        restrict: 'E',
        compile: function(){
            console.log("compile called");
        },
        link: {
            post: function ($scope, element, attribute) {
                element.css('background-color', 'yellow');
                console.log("post function");
                //  ele.css('font-size',100 + 'px');
                //   console.log(ele);
            }
        }

    };
});


function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();
g.next();