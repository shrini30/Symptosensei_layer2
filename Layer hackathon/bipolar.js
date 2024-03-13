document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const solutionBtn = document.getElementById("solutionBtn");
    const result = document.getElementById("result");
    const totalMarks = document.getElementById("totalMarks");

    submitBtn.addEventListener("click", function () {
        // Calculate total score
        const q1 = parseInt(document.getElementById("q1").value);
        const q2 = parseInt(document.getElementById("q2").value);
        const q3 = parseInt(document.getElementById("q3").value);
        const q4 = parseInt(document.getElementById("q4").value);
        const q5 = parseInt(document.getElementById("q5").value);
        const totalScore = q1 + q2 + q3 + q4 + q5;

        // Calculate percentage
        const totalQuestions = 5;
        const maxScore = totalQuestions * 10;
        const percentage = (totalScore / maxScore) * 100;

        // Display the percentage
        totalMarks.textContent = `Your bipolar disorder score: ${percentage.toFixed(2)}%`;

        // Display appropriate message based on the percentage
        if (percentage > 70) {
            result.textContent = "We would recommend you to go through the solutions and visit a therapist soon.";
        } else if (percentage > 40) {
            result.textContent = "We recommend you follow the solutions regularly and keep us updated.";
        } else {
            result.textContent = "Congratulations!! We are glad to inform you that you are mentally healthy. But we would recommend you to go through the solutions for more progress.";
        }
    });

    solutionBtn.addEventListener("click", function () {
        // Add your solution functionality here
    });
});
