// Lägger till en eventlyssnare för klick på elementet med ID "menuButton"
document.getElementById("menuButton").addEventListener("click", function() {
    // Hämtar dropdown-innehållet
    var dropdownContent = document.getElementById("dropdownContent");

    // Kontrollerar om dropdown-menyn redan är synlig
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"; // Gömmer menyn om den är synlig
    } else {
        dropdownContent.style.display = "block"; // Visar menyn om den är dold
    }
});
