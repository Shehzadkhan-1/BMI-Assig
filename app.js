function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
        return;
    }

    var bmi = weight / (height * height);
    var category = getCategory(bmi);

    document.getElementById('result').innerText = "Your BMI: " + bmi.toFixed(2) + "\nCategory: " + category;
}

function getCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
