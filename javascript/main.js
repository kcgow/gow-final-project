
// Show Menu
const menuButton = document.getElementById("menu")
const menuCard = document.getElementById("menu-card")

menuButton.addEventListener("mouseover", showMenuCard);
menuCard.addEventListener("mouseleave", hideMenuCard);

function showMenuCard() {
    console.log("hi");
    menuCard.classList.add("show");

}
function hideMenuCard() {
    menuCard.classList.remove("show");
}
