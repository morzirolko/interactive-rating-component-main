
const mainContainer = document.querySelector(".wrapper");
const thanksContainer = document.querySelector(".wrapper2");
const submitButton = document.getElementById("submit");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

let value;


submitButton.addEventListener("click", () => {
    if(value === undefined){
        return
    }
    else
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
    actualRating.textContent = value
    })

ratings.forEach((button) => {
    button.addEventListener("click", (e) => {
        ratings.forEach( (b) => {
            b.classList.remove("selected")
        })

        e.target.classList.add("selected")
        value = e.target.textContent
    })
    
})

console.log(value);