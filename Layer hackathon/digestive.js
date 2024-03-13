const questions = [
    "Do you experience frequent heartburn?",
    "Do you have abdominal pain or discomfort?",
    "Do you experience bloating or gas?",
    "Do you have difficulty swallowing?",
    "Do you have frequent diarrhea or constipation?",
    "Do you experience nausea or vomiting?",
    "Do you have a history of gastrointestinal diseases?",
    "Do you consume excessive alcohol or caffeine?",
    "Do you smoke cigarettes?",
    "Do you have a family history of digestive disorders?"
];

const form = document.getElementById('quizForm');
const questionsDiv = document.getElementById('questions');
const resultDiv = document.getElementById('result');
const solutionBtn = document.getElementById('solutionBtn');
const solutionsDiv = document.getElementById('solutions');

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
        result = 'You may have a severe digestive disorder. Please consult a doctor.';
    } else if (yesCount >= 4) {
        result = 'You may have a moderate digestive disorder. It is advisable to consult a doctor.';
    } else {
        result = 'You may have a mild digestive disorder. Consider consulting a doctor for further evaluation.';
    }

    resultDiv.textContent = result;
});

solutionBtn.addEventListener('click', function() {
    solutionsDiv.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    createQuestions();
});
