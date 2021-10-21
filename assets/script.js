// First, tell us your name
let yourName = "Shannon Stephenson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let min = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Code to update html button count
let displayGb = document.querySelector('#qty-gb')
let displayCc = document.querySelector('#qty-cc')
let displaySugar = document.querySelector('#qty-sugar')
let displayTotal = document.querySelector('#qty-total')

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb+1
    displayGb.innerHTML = gb
    displayTotal.innerHTML = sugar+cc+gb
})

document.getElementById('minus-gb').addEventListener('click', function() {

    gb = gb-1
    displayGb.innerHTML = gb
    displayTotal.innerHTML = sugar+cc+gb
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc+1
    displayCc.innerHTML = cc
    displayTotal.innerHTML = sugar+cc+gb
})
document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc-1
    displayCc.innerHTML = cc
    displayTotal.innerHTML = sugar+cc+gb

})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar+1
    displaySugar.innerHTML = sugar
    displayTotal.innerHTML = sugar+cc+gb
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar-1
    displaySugar.innerHTML = sugar
    displayTotal.innerHTML = sugar+cc+gb
})

