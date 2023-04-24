const dateInput = document.querySelector("#date-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const submitButton = document.querySelector("#submit-button");
const outputDiv = document.querySelector("#output-div");

submitButton.addEventListener("click", () => {
  const birthDate = dateInput.value;
  const birthMonth = monthInput.value;
  const birthYear = yearInput.value;

  if(birthDate<1 || birthDate > 31 || birthMonth < 1 || birthMonth>12 || birthYear < 1000 || birthYear > 9999){
    outputDiv.textContent = `Please Input Valid Data`;
    return
  }

  

  const today = new Date();
  const thisMonth = today.getMonth() + 1;

  const birthdate = new Date(birthYear, birthMonth - 1, birthDate);

  let age = today.getFullYear() - birthdate.getFullYear();
  let month = today.getMonth() - birthdate.getMonth();
  let day = today.getDate() - birthdate.getDate();

  if (day < 0) {
    if (
      thisMonth == 1 ||
      thisMonth == 3 ||
      thisMonth == 5 ||
      thisMonth == 7 ||
      thisMonth == 8 ||
      thisMonth == 10 ||
      thisMonth == 12
    ){
        day += 31;
    }else if(thisMonth == 2){
        day += 28;
    }else{
        day += 30
    }
      
    month -= 1;
  }

  if (month < 0) {
    month += 12;
    age--;
  }

  outputDiv.textContent = `Your Age is ${age} Years ${month} Months ${day} Days`;
});
