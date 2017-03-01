document.body.style.backgroundColor = "#6699ff";
var assignment = document.getElementsByClassName("course-event");
console.log(assignment.length);
//sleep(7000); 
for (var i = 0; i < assignment.length; i++) {
    var button = document.createElement("INPUT");
    //button.setAttribute("type", "button");
    //button.setAttribute("value", "Color");
    
    assignment[i].style.backgroundColor = "#00FA9A";
    assignment[i].append(button);
}

var button = document.createElement("BUTTON");
var t = document.createTextNode("CLICKME");
button.appendChild(t);
document.body.appendChild(button);

