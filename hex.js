const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 an eaxple on hwo we need top get the random color tolook like and also canhnging the background of the color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//generate aloop that will add all the variables in the array and make the cloor number we need
btn.addEventListener('click', function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; /*we set hex color to the random number it 
        would generate through the hex array because of the fucntion we created below.*/ 
    }
//To get the text content of a node and its descendants, you use the textContent property:
//In this case we want all the content from color in the html document.
//We want to assign it to hexColor
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
/*here we are using the JS to search the html for the specific element we want the,
 hex color to display*/
//hence why we go document.body.style.backgroundColor
//it's like going through a filing cabinet
console.log(hexColor);  
})

/*This function is so we can get the random color we get from the hex array.
It also has to get plugged in hex Color loop so it matches the text to the back ground of the 
site.*/
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}