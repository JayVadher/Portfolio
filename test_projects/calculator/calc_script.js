const display =  document.querySelector(".display");
const buttons =  document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if(btnValue === "=" && output !== ""){
    output = eval(output.replace("%", "/100"));
  } else if(btnValue === "AC"){
    output = "";
  } else if(btnValue === "DEL"){
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return
    output += btnValue;
  }
  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


const darkMode = document.getElementById('mode_checkbox');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark_mode');

  
if (document.body.classList.contains('dark_mode')) {
  console.log("jay dark mode");
  document.getElementById('mode_label').innerHTML = 'dark mode';
} else {
  console.log("jay light mode");
  document.getElementById('mode_label').innerHTML = 'light mode';
}
  
})

