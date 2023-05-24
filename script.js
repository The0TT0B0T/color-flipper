const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];
const btn = document.getElementById("btn"); /*grabbing the html by the id of "btn"
and having JS grabbing it by the DOM.*/
const color = document.querySelector(".color");/* Doing the same but using the 
query selector*/

btn.addEventListener("click", function () { 
    /*this is so we can listen for the button clicks
    and below is where we will write the logic for it using the function*/
    //get random number 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
 
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
 }
