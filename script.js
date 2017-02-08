document.body.style.backgroundColor = "#6699ff";
var assignment = document.getElementsByClassName("upcoming-event course-event");
//sleep(7000); 
for (var i = 0; i < assignment.length; i++) {
    var button = document.createElement("BUTTON");
    var t = document.createTextNode("CLICKME");
    button.appendChild(t);
    //assignment[i].appendChild(button);
    assignment[i].style.backgroundColor = "lightgreen";
}
var button = document.createElement("BUTTON");
var t = document.createTextNode("CLICKME");
button.appendChild(t);
document.body.appendChild(button);

function sleep(milliseconds) {
    var start = new Date().getTime();
    while (true) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}