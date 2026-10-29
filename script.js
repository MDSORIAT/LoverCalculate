 function calculate() {
        let w = document.getElementById("weight").value;
        let h = document.getElementById("height").value;

        if (w > 0 && h > 0) {
          let heightInMeters = h / 100;
          let bmi = (w / (heightInMeters * heightInMeters)).toFixed(1);

          let text = "Your BMI is " + bmi;
          if (bmi < 18.5) text += " (Underweight)";
          else if (bmi <= 24.9) text += " (Normal)";
          else if (bmi <= 29.9) text += " (Overweight)";
          else text += " (Obese)";

          document.getElementById("result").innerText = text;
        } else {
          alert("Please enter valid numbers!");
        }
      }



var n = Math.rendom();
n = n * 6;
n= Math.floor(n);
console.log(n);