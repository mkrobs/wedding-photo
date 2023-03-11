window.onload=function() {
    window.onscroll = function() {stickyFunction()};
        var header = document.getElementById("stickyheader");
        var sticky = header.offsetTop;

        function stickyFunction() {
         if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
            } else {
          header.classList.remove("sticky");
             }
        }
  }

function showMenu() {
    var x = document.getElementById("navMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}