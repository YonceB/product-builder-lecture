const lottoNumbersDiv = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

function generateNumbers() {
  // Clear previous numbers
  lottoNumbersDiv.innerHTML = '';

  // Generate 5 sets of numbers
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('lotto-row');

    const numbers = new Set();
    while (numbers.size < 5) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }

    // Sort and display the numbers in the row
    for (const number of [...numbers].sort((a, b) => a - b)) {
      const numberDiv = document.createElement('div');
      numberDiv.classList.add('lotto-number');
      numberDiv.textContent = number;
      row.appendChild(numberDiv);
    }

    lottoNumbersDiv.appendChild(row);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
}

generateBtn.addEventListener('click', generateNumbers);
themeToggleBtn.addEventListener('click', toggleTheme);

// Set initial theme and generate numbers on load
document.body.classList.add('light-mode');
generateNumbers(); // Generate numbers on initial load
