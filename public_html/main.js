"use strict";
window.onload = function()
{
    var n1 = document.getElementById("sideLength");
    var perimeter = document.getElementById("Perimeter");
    var area = document.getElementById("area");
    var button = document.getElementById("button");
    var v1, p, a;
    
    
    button.onclick = function()
    {
    //get the value for firstNum
    v1 = parseInt(n1.value);
    
    p = v1 * 4;
   
    //compute the sum and show it in result
    
    perimeter.value = p;
    
    a = v1 * v1;
    
    area.value = a;
    };
   
};