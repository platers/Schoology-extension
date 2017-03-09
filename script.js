document.body.style.backgroundColor = "#6699ff";

var sidebar = document.querySelectorAll(".upcoming-events");
var list = document.querySelector(".upcoming-list");
var children = list.childNodes;
var assignment = document.querySelectorAll(".course-event");
console.log("sidebar: " + sidebar.length);
console.log("list: " + list.classList)
console.log("children: " + list.childElementCount);
console.log("assignment: " + assignment.length);

sidebar[0].style.border = "10px solid #ffaa66";

for (var i = 0; i < assignment.length; i++) {
    var button = document.createElement("INPUT");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Button");
    
    assignment[i].style.backgroundColor = "#00FA9A";
    assignment[i].append(button);
}

