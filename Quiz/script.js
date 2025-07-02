const quizData = [
  {
    question: "Who is the Hero in Devara?",
    choices: ["Allu Arjun", "NTR", "Sharuk", "Ram charan"],
    correct: "NTR"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars"
  },
  {
    question: "What is the largest contenent in world'?",
    choices: ["Africa", "Asia", "North America", "South America"],
    correct: "Asia"
  },
  {
    question: "Which is the largest mammal?",
    choices: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
    correct: "Whale"
  },
  {
    question: "What is the html extension?",
    choices: [".htm", "HtML", ".html", "Ht"],
    correct: "Both A and C"
  }
];

const quizForm = document.getElementById('quiz-form');

function loadQuiz() {
  quizData.forEach((q, index) => {
    const block = document.createElement('div');
    block.classList.add('question-block');

    const title = document.createElement('div');
    title.classList.add('question-title');
    title.textContent = `${index + 1}. ${q.question}`;
    block.appendChild(title);

    q.choices.forEach(choice => {
      const optionId = `q${index}-${choice}`;
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question${index}`;
      radio.id = optionId;
      radio.value = choice;

      const label = document.createElement('label');
      label.setAttribute('for', optionId);
      label.innerHTML = `<input type="radio" name="question${index}" value="${choice}"> ${choice}`;

      block.appendChild(label);
    });

    quizForm.appendChild(block);
  });
}

function getResults() {
  let score = 0;

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You scored ${score} out of ${quizData.length} questions correctly.`;
}

document.getElementById('submit-btn').addEventListener('click', () => {
  getResults();
});

window.onload = loadQuiz;
