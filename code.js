window.onload = function () {
    alert("Window Onload is fired. This function is executed after DOM is loaded, Images and StyleSheets are loaded");
};

function abc() {
    alert(`IIFE pattern is often used when trying to avoid polluting the global namespace.
     Because` + " all the variables used inside the IIFE\
 (like in any other normal function) are not visible outside its scope.");
}

$(document).ready(function () {
    alert(`$(document).ready(function(){} is fired. The onload event is a standard event in the DOM, while the ready event is specific to jQuery.
The purpose of the ready event is that it should occur as early as possible after the document has loaded,
so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.`);
});

(function () {
    abc();
    function elementVisit() {
        var objElement = document.getElementById("elementVisit").innerHTML;
        console.log(objElement);
        if ()
     }
    elementVisit();
})();






function search(input, num, lb, up) {
    while (lb < up) {
        var mid = Math.floor((lb + up) / 2);
        if (input[mid] == num) {
            return mid;
        }
        else if (num > input[mid]) {
            lb = mid + 1;
            search(input, num, lb, up)
        }
        else {
            up = mid - 1;
            search(input, num, lb, up)
        }
    }
}