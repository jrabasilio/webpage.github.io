console.log("Script load sucess");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("scroll Function call");
    console.log("--> "+document.body.scrollTop);
    console.log("--> "+document.documentElement.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("buttonTop").style.display = "block";
        console.log("block");
    } else {
        document.getElementById("buttonTop").style.display = "none";
        console.log("none");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}