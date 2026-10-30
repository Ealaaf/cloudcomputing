const form = document.getElementById("quizForm");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");

const answers = {
  q1: "saas",
  q2: "capex-opex",
  q3: "scale"
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  let score = 0;

  for (const [question, correctAnswer] of Object.entries(answers)) {
    if (data.get(question) === correctAnswer) {
      score++;
    }
  }

  scoreBox.textContent = `Score: ${score} / 3`;

  if (score === 3) {
    result.textContent = "Perfect — you got all 3 correct.";
  } else if (score === 2) {
    result.textContent = "Good job — 2 out of 3 correct.";
  } else {
    result.textContent = `You got ${score} out of 3. Review the service models and CapEx/OpEx above.`;
  }
});

resetBtn.addEventListener("click", () => {
  form.reset();
  scoreBox.textContent = "Score: 0 / 3";
  result.textContent = "";
});
