const quizData = [
          {
            question: "What is the capital of France?",
            options: ["Paris", "Madrid", "Berlin", "Rome"],
            correct: "Paris"
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Mars"
          },
          {
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correct: "William Shakespeare"
          },
          {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correct: "2"
          },
          {
            question: "Which gas is essential for us to breathe?",
            options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            correct: "Oxygen"
          }
        ];
        
        let currentQuestion = 0;
        let score = 0;
        
        function loadQuestion() {
          const q = quizData[currentQuestion];
          document.getElementById("question").textContent = q.question;
        
          const answersDiv = document.getElementById("answers");
          answersDiv.innerHTML = "";
        
          q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.onclick = () => checkAnswer(btn, option);
            answersDiv.appendChild(btn);
          });
        }
        
        function checkAnswer(button, selected) {
          const correct = quizData[currentQuestion].correct;
          const buttons = document.querySelectorAll('#answers button');
        
          buttons.forEach(btn => btn.disabled = true);
        
          if (selected === correct) {
            score++;
            button.style.backgroundColor = '#28a745';
          } else {
            button.style.backgroundColor = '#dc3545';
            buttons.forEach(btn => {
              if (btn.textContent === correct) {
                btn.style.backgroundColor = '#28a745';
              }
            });
          }
        
          document.getElementById("score").textContent = `Score: ${score}`;
        }
        
        function nextQuestion() {
          currentQuestion++;
          if (currentQuestion < quizData.length) {
            loadQuestion();
          } else {
            document.getElementById("question").textContent = "Quiz Completed!";
            document.getElementById("answers").innerHTML = "<h3>Final Score: " + score + "/" + quizData.length + "</h3>";
            document.getElementById("next-btn").style.display = "none";
          }
        }
        
        loadQuestion();
        