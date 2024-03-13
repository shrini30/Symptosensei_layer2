const questions = [
    "Do you experience shortness of breath?",
    "Do you have a persistent cough?",
    "Do you cough up blood?",
    "Do you have chest pain or tightness?",
    "Do you have wheezing or whistling sound when breathing?",
    "Do you experience frequent respiratory infections?",
    "Do you have difficulty breathing when lying flat?",
    "Do you have a history of smoking?",
    "Do you have a family history of respiratory diseases?",
    "Do you live or work in environments with poor air quality?"
];

const form = document.getElementById('quizForm');
const questionsDiv = document.getElementById('questions');
const resultDiv = document.getElementById('result');

function createQuestions() {
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label for="question${index + 1}">${question}</label>
            <select id="question${index + 1}" name="question${index + 1}">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select><br><br>
        `;
        questionsDiv.appendChild(div);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let yesCount = 0;
    const totalQuestions = questions.length;

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.getElementById(`question${i}`).value; // Fixed backticks
        if (answer === 'yes') {
            yesCount++;
        }
    }

    let result = '';
    if (yesCount >= 7) {
        result = 'You may have a severe respiratory disease. Please consult a doctor.';
    } else if (yesCount >= 4) {
        result = 'You may have a moderate respiratory disease. It is advisable to consult a doctor.';
    } else {
        result = 'You may have a mild respiratory disease. Consider consulting a doctor for further evaluation.';
    }

    resultDiv.textContent = result;
});

document.addEventListener('DOMContentLoaded', function() {
    createQuestions();
});
