const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .operator-btn");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        console.log(value)
    })
});