const questions = [
    "Do you experience joint pain?",
    "Do you have swelling around joints?",
    "Do you have difficulty moving a joint?",
    "Do you experience muscle stiffness?",
    "Do you have muscle weakness?",
    "Do you have numbness or tingling in extremities?",
    "Do you experience reduced range of motion?",
    "Do you have a history of injury to bones or muscles?",
    "Do you have a family history of musculoskeletal disorders?",
    "Do you participate in high-impact sports or activities?"
];

const form = document.getElementById('quizForm');
const questionsDiv = document.getElementById('questions');
const resultDiv = document.getElementById('result');
const solutionsBtn = document.getElementById('solutionsBtn');
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

function analyzeResults(yesCount) {
    let result = '';
    if (yesCount >= 7) {
        result = 'You may have a severe musculoskeletal disorder. Please consult a doctor.';
    } else if (yesCount >= 4) {
        result = 'You may have a moderate musculoskeletal disorder. It is advisable to consult a doctor.';
    } else {
        result = 'You may have a mild musculoskeletal disorder. Consider consulting a doctor for further evaluation.';
    }
    resultDiv.textContent = result;
}

function displaySolutions() {
    const solutions = [
        "Rest the affected area.",
        "Apply ice to reduce swelling.",
        "Elevate the affected area.",
        "Use over-the-counter pain relievers as needed.",
        "Avoid activities that exacerbate symptoms.",
        "Stretch and strengthen muscles as recommended by a physical therapist.",
        "Consider using assistive devices or orthotics.",
        "Seek professional medical advice for further treatment options."
    ];
    const ul = document.createElement('ul');
    solutions.forEach(solution => {
        const li = document.createElement('li');
        li.textContent = solution;
        ul.appendChild(li);
    });
    solutionsDiv.innerHTML = '';
    solutionsDiv.appendChild(ul);
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

    analyzeResults(yesCount);
});

solutionsBtn.addEventListener('click', function() {
    displaySolutions();
});

document.addEventListener('DOMContentLoaded', function() {
    createQuestions();
});
