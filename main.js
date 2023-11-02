import './style.scss'


var button = document.getElementById("more-btn");
var dropdownContent = document.getElementById("more-link");

button.addEventListener("click", function() {
    // Toggle the display of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// // Close the dropdown when the user clicks anywhere outside of it
// document.addEventListener("click", function(event) {
//     if (event.target !== button && event.target !== dropdownContent) {
//         dropdownContent.style.display = "none";
//     }
// });

// // Prevent the dropdown from closing when the button is clicked
// button.addEventListener("click", function(event) {
//     event.stopPropagation();
// });






