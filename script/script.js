const groupHeaders = [
    "Учень/учениця взаємодіє з іншими особами усно, сприймає і використовує інформацію для досягнення життєвих цілей у різних комунікативних ситуаціях", 
    "Учень/учениця Сприймає, аналізує, інтерпретує, критично оцінює інформацію в текстах різних видів (зокрема художніх текстах, медіатекстах) та використовує її для збагачення власного досвіду", 
    "Учень/учениця Висловлює думки, почуття і ставлення, письмово взаємодіє з іншими особами, взаємодіє з іншими особами у цифровому середовищі, дотримується норм літературної мови", 
    "Учень/учениця Досліджує індивідуальне мовлення, використання мови для Власної мовної творчості, спостерігає за мовними та літературними явищами, проводить їх аналіз"
];

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const group = cell.closest('.group');
        const groupCells = group.querySelectorAll('.cell');

        groupCells.forEach(c => c.classList.remove('active'));

        cell.classList.add('active');

        updateTextDisplay();
    });
});

function updateTextDisplay() {
    const textDisplay = document.getElementById('text-display');
    let combinedText = '';

    document.querySelectorAll('.group').forEach((group, index) => {
        const activeCell = group.querySelector('.cell.active');
        if (activeCell) {
            combinedText += `<strong>${groupHeaders[index]}</strong><br>${activeCell.dataset.text}<br><br>`;
        }
    });

    textDisplay.innerHTML = combinedText.trim();
}

document.getElementById('generate-characteristic').addEventListener('click', () => {
    const resultDisplay = document.getElementById('result-display');
    let resultText = '';

    document.querySelectorAll('.group').forEach((group, index) => {
        const activeCell = group.querySelector('.cell.active');
        if (activeCell) {
            resultText += `<strong>${groupHeaders[index]}</strong>: ${activeCell.dataset.text}<br>`;
        }
    });

    resultDisplay.innerHTML = resultText.trim();
});

document.getElementById('recommendations').addEventListener('click', () => {
    window.open('https://maidan.org.ua/wp-content/uploads/2023/01/image14.jpg', '_blank');
});
