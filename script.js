document.addEventListener("DOMContentLoaded", () => {
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .operator-btn");
const memory = document.getElementById("memory");

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

// function storememory(value){
//     const memoryitem = document.createElement("p");
//     memoryitem.textContent = `Memory: ${value}`;
//     memory.prepend(memoryitem);
// }
// if (value === "M+"){
//     storememory(display.value);
// }


// Love Calculator

document.getElementById("loveBtn2").addEventListener("click", function(){
    const yourName= document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;

    if(yourName === '' || partnerName === ""){
        document.getElementById("result").textContent = `Please enter both names.`;
        return;
    }


    // Creating a random porcentage
    const lovePercentage = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result").textContent = `${yourName} and ${partnerName} are ${lovePercentage}% compatible!`
});

    document.getElementById("clearBtn1").addEventListener("click", function(){
        document.getElementById("yourName").value = '';
        document.getElementById("partnerName").value = '';
        document.getElementById("result").textContent = '';

});
