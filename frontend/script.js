const button = document.getElementById("askButton");
const question = document.getElementById("question");
const response = document.getElementById("response");

button.addEventListener("click", () => {
    const text = question.value.trim();

    if (!text) {
        response.textContent = "Ask me something first 🦇";
        return;
    }

    response.textContent = "StudyBuddy received your question! 🧠";
});