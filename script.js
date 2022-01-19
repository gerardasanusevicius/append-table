"use strict";

var fname = document.getElementsByTagName("input")[0];
var lname = document.getElementsByTagName("input")[1];
var age = document.getElementsByTagName("input")[2];
var table = document.getElementsByTagName("table")[0];
var add = document.getElementsByTagName("button")[0];
var first = document.getElementsByTagName("button")[1];
var last = document.getElementsByTagName("button")[2];



add.addEventListener("click",function(){
    event.preventDefault();
    if ( fname.value.length != 0 && lname.value.length != 0 && age.value.length != 0 && age.value > 0){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td> ${fname.value} </td> <td> ${lname.value} </td> <td> ${age.value} </td>`;
    table.append(tr);
    fname.value="";
    lname.value="";
    age.value="";
    } else {
        alert("Iveskite visus duomenis");
    }   
});

first.addEventListener("click", function(){
    event.preventDefault();
    var tr = document.getElementsByTagName("tr");
    if (tr.length > 1) {
        tr[1].remove();
    } else {
        alert("Nebera ka trinti");
    }    
});

last.addEventListener("click", function(){
    event.preventDefault();
    var tr = document.getElementsByTagName("tr");
    if (tr.length > 1) {
        tr[tr.length - 1].remove();
    } else {
        alert("Nebera ka trinti");
    }   
});