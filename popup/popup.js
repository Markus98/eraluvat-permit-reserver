var dateinput = document.getElementById("startTimeInput");
var testinput = document.getElementById("texttest");

function onDateChange() {
    alert("change!");
}

dateinput.addEventListener("change", onDateChange);