const questions = [
    "Do you experience headaches frequently?",
    "Do you have difficulty in balancing?",
    "Do you experience numbness or tingling sensations?",
    "Do you have muscle weakness?",
    "Do you experience seizures?",
    "Do you have memory problems?",
    "Do you have difficulty concentrating?",
    "Do you experience changes in mood or behavior?",
    "Do you have trouble speaking or swallowing?",
    "Do you have vision problems?"
];

const solutions = [
    "Get adequate rest and manage stress levels.",
    "Practice balance exercises and consult a physiotherapist if needed.",
    "Seek medical advice to determine the cause of numbness or tingling.",
    "Consult a healthcare professional for a proper assessment and treatment plan.",
    "Seek immediate medical attention if experiencing seizures.",
    "Keep a daily planner and use memory aids.",
    "Try mindfulness or relaxation techniques to improve concentration.",
    "Seek support from friends and family, and consider therapy if needed.",
    "Consult a speech therapist for evaluation and therapy.",
    "Consult an ophthalmologist for an eye examination."
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
        result = 'You may have a severe neurological disorder. Please consult a doctor.';
    } else if (yesCount >= 4) {
        result = 'You may have a moderate neurological disorder. It is advisable to consult a doctor.';
    } else {
        result = 'You may have a mild neurological disorder. Consider consulting a doctor for further evaluation.';
    }

    resultDiv.textContent = result;
});

solutionBtn.addEventListener('click', function() {
    solutionsDiv.innerHTML = '<h2>Solutions</h2>';
    solutions.forEach(solution => {
        const p = document.createElement('p');
        p.textContent = solution;
        solutionsDiv.appendChild(p);
    });
    solutionsDiv.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    createQuestions();
});
