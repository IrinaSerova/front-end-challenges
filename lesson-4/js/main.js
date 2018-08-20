
/*
* JAVASCRIPT FUNCTION
* @parameter: This does ____
*
* Notes: Lorem ipsum justo vel
* */

console.log("This outputs into the console.");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

  });
  
  // Task: 5
  function redColor(){
  const mySection = document.querySelector("section");
        mySection.classList.add("clicked");
}
// Task: 4
function myText() {
    const myDiv = document.getElementById("myDIV");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}
// Extra
function myAlert() {
    alert("Thank you for viewing my resume!");
}
function myFunction() {
    // TASK #1  add a `title` attribute
    const newTitle = document.querySelector("a");
    newTitle.setAttribute("title", " ");
    // TASK #2  Add a class to the _second_ list
    const myUl = document.querySelector("ul");
    const myLi = myUl.getElementsByTagName('li')[1];
    myLi.classList.add("myStyle");
    // TASK #3  Add a new `<div>` element tag
    const newDiv = document.createElement("div");
    document.getElementsByClassName("main")[0].appendChild(newDiv);
    newDiv.setAttribute("id", "text-modify");
    const myId = document.getElementById("text-modify");
    var text = document.createTextNode("some content");
    myId.appendChild(text);
    // TASK #4  Add a new `<div>` element tag
  console.log("TEST");
  
 }

myFunction();



// let newDiv = document.createElement("div");
// document.getElementsByClassName("main")[0].appendChild(newDiv);
