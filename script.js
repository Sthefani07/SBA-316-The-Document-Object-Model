document.addEventListener("DOMContentLoaded", function() {
//alert("Welcome to the Calculator page!")
const newEl = document.createElement("h1");
newEl.innerHTML = "Calculate Anything"
document.body.prepend(newEl);




 //Nav bar _____
const element = document.getElementById("loveBtn1");
const firstChild = element.nextElementSibling;
firstChild.style.backgroundColor = "rgba(109, 10, 92, 0.75)";





// Clear button for the regular calculator
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .operator-btn, .clearBtn1");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        }else if (value === "="){
                try{
                    display.value = eval(display.value);
                }catch(error){
                    display.value = "Error";
                }
            }else{
                display.value += value;
            }
        console.log(value)
    })
});
})

//Button click









const loveBtn = document.getElementById("loveBtn2");
 if (loveBtn){
    loveBtn.addEventListener("click", function(){
    const yourName= document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;

    if(yourName === "" || partnerName === ""){
        document.getElementById("result").textContent = `Please enter both names.`;
        return;
    }
    
 

    // Creating a random porcentage
    const lovePercentage = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result").textContent = `${yourName} and ${partnerName} are ${lovePercentage}% compatible!`
});
}



// CLear button for the love calculator

const loveBtn1 = document.getElementById("loveBtn1");
if (loveBtn1){
    loveBtn1.addEventListener("click", function(){
        document.getElementById("yourName").value = '';
        document.getElementById("partnerName").value = '';
        document.getElementById("result").textContent = '';


    
 });
}
