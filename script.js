document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
      results.innerHTML = "Please enter a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = "Please enter a valid weight.";
    } else {
      const bmi = (weight / (height / 100) ** 2).toFixed(2);
      results.innerHTML = `Your BMI is ${bmi}`;
    }
  });
});
