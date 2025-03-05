const button = document.getElementById('btn');
const inputElement = document.getElementById('input');
const result = document.getElementById('result');
const number = document.getElementById('number');
const errorEL = document.querySelector('.error');

button.addEventListener('click', () => {
  const input = Number(inputElement.value);

  if (input <= 0 || isNaN(input)) {
    // alert('Please enter a valid number!');
    inputElement.value = '';
    errorEL.innerText = 'Please enter a valid number!';
    errorEL.style.color = 'red';
    result.textContent = '';
  } else {
    const total = (input / 2.2).toFixed(2);
    number.textContent = total;
    result.textContent = 'Your weight in kg is:  ';
    number.style.color = 'purple';
  }
});
