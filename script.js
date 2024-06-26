const output = document.querySelector("#output");
const inputField = document.getElementById("number");

inputField.addEventListener("keypress" , function (event){
  if(event.key === "Enter"){
    convertNumber()
  }
})

function convertNumber(){
 
  let inputValue = inputField.value;
  if(inputValue === ""){
    output.innerText = "Please enter a valid number"
  }else if(inputValue === "-1"){
    output.innerText = "Please enter a number greater than or equal to 1"
  }else{
    let num = parseInt(inputValue);
    if(num >= 4000){
      output.innerText = "Please enter a number less than 4000"
    }else{

     output.innerText = toRoman(num);
     inputField.value = "";
    }
  }
}
function toRoman(numberToConvert) {
            const romanNumerals = [
                { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
            ];

            let result = '';

            for (let i = 0; i < romanNumerals.length; i++) {
              // console.log(romanNumerals[i])
                while (numberToConvert >= romanNumerals[i].value) {
                  // console.log(num);
                  // console.log(romanNumerals[i]);
                    result += romanNumerals[i].numeral;
                    numberToConvert -= romanNumerals[i].value;
                }
            }

            return result;
        }
