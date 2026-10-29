
function calculate(event){
  const person1 = document.getElementById("person1").value.trim();
  const person2 = document.getElementById("person2").value.trim();
  const resultDisplay = document.getElementById("result");
  event.preventDefault();

  if (person1 === "" || person2 === "") {
    resultDisplay.textContent = "Please enter both names! ⚠️";
    return;
  }
  const loveScore = Math.floor(Math.random() * 100) + 1;
  resultDisplay.textContent = `${person1} & ${person2}'s Love Score is ${loveScore}%! ❤️`;

}