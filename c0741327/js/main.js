// Your code here!
function myfunction(a, b) {
    
    return a + b;     // the function return the product

}

function arrays() {
    var pens;
    pens =["red", "orange", "blue", "green", "pink", "purple"];
    marker = pens;
    console.log(marker);
    console.log(marker[0]);

    for (i = 0; i < marker.length; i++) {
        alert (marker[i]);
    }
    alert("length of array is :" + marker.length);
}