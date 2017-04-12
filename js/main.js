function myFunction() {
    var x = document.getElementById("nav_bar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}