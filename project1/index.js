
 
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 console.log(countEl)
// // intialize the count as 0
// // grab the count-el element, store it in a countEl variable
 let count = 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked
// // change the count-el in the HTML to reflect the new count
function increment(){
     count += 1
     countEl.textContent = count
 }
// // 1. Create a function, save(), which logs out the count when it's called
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let entry = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += entry
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0
    countEl.textContent = count
}


// The DOM - Document Object Model

