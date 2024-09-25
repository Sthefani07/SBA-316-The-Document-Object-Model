document.addEventListener("DOMContentLoaded", () => {
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .operator-btn");


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