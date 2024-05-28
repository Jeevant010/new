function calculateBMI() {
    var weightInPounds = parseFloat(document.getElementById("weight").value);
    var heightInInches = parseFloat(document.getElementById("height").value);
    var bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    if (bmi >= 30) {
        document.getElementById("statement").innerHTML = "You're in the obese range";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("statement").innerHTML = "You're in the healthy weight range";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("statement").innerHTML = "You're in the overweight range";
    } else if (bmi < 18.5) {
        11
        document.getElementById("statement").innerHTML = "You're in the underweight range";
    }
}