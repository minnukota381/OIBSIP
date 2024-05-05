const inputTemp = document.getElementById('input-temp');
const inputScale = document.getElementById('input-scale');
const convertBtn = document.getElementById('convert-btn');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const kelvinOutput = document.getElementById('kelvin-output');
const heroSection = document.querySelector('.hero-section');

const imageUrls = [
  'https://source.unsplash.com/1600x900/?nature',
  'https://source.unsplash.com/1600x900/?landscape',
  'https://source.unsplash.com/1600x900/?mountain',
  'https://source.unsplash.com/1600x900/?beach',
  'https://source.unsplash.com/1600x900/?forest',
  'https://source.unsplash.com/1600x900/?sunset',
  'https://source.unsplash.com/1600x900/?ocean',
  'https://source.unsplash.com/1600x900/?river',
  'https://source.unsplash.com/1600x900/?lake',
  'https://source.unsplash.com/1600x900/?waterfall'
];

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  heroSection.style.backgroundImage = `url(${imageUrls[randomIndex]})`;
}

setInterval(changeBackgroundImage, 5000);

function convertTemperature() {
  const temp = parseFloat(inputTemp.value);
  const scale = inputScale.value;

  let celsius, fahrenheit, kelvin;

  switch (scale) {
    case 'celsius':
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
      break;
    case 'fahrenheit':
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = (temp + 459.67) * 5/9;
      break;
    case 'kelvin':
      celsius = temp - 273.15;
      fahrenheit = (temp * 9/5) - 459.67;
      kelvin = temp;
      break;
  }

  celsiusOutput.textContent = `${celsius.toFixed(2)} °C`;
  fahrenheitOutput.textContent = `${fahrenheit.toFixed(2)} °F`;
  kelvinOutput.textContent = `${kelvin.toFixed(2)} K`;
}

convertBtn.addEventListener('click', convertTemperature);