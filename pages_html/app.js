(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} sur ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
     
        {
            question: "Qu'est-ce que HTML signifie?",
            answers: {
                a: "Hypertext Markup Language",
                b: "Hypertext Media Language",
                c: "Hypermedia Markup Language"
            },
            correctAnswer: "a"
        },
        
      
    




  {
    question: "Que signifie css",
    answers: {
        a: "create simple samples",
        b: "Casgading style sheet",
        c: "c'est un super simple",
      },
    correctAnswer: "b"
},


{
  question: " Dans quel balise HTML pla??ons-nous le code JavaScript?",
  answers: {
      a: "La balise script",
      b: "La balise javascript",
      c: " La balise js"
  },
  correctAnswer: "a"
},


{
  question: "Comment ins??rer une image dans une page HTML?",
  answers: {
      a: "<image>",
      b: "<img>",
      c: "<picture>"
  },
  correctAnswer: "b"
},


{
  question: " Comment ??crire une condition IF en JavaScript?",
  answers: {
      a: "if a = 2",
      b: "if (a == 2)",
      c: "if a == 2 else"
  },
  correctAnswer: "b"

},

{
  question: "  Lequel des ??l??ments suivants n???est pas un exemple de navigateur?",
  answers: {
      a: " Netscape",
      b: "Microsoft Bing",
      c: " Op??ra"
  },
  correctAnswer: "b"

},

{
  question: " La balise HTML qui sp??cifie un style CSS int??gr?? dans un ??l??ment est appel??e ____? ",
  
  answers: {
      a: " Netscape",
      b: " Define",

      
      c: "  Style"
  },
  correctAnswer: "c"

},

{
  question: " En css, qu???est-ce que h1 peut ??tre appel?? comme ______ ",
  
  answers: {
      a: "S??lecteur ",
      
      b: " Valeur",

      
      c: "  Label"
  },
  correctAnswer: "a"

},
{
  question: "  Quel est le bon endroit pour ins??rer un code JavaScript? ",
  
  answers: {
      a: " Les deux sections <head> et <body> sont correctes ",
      
      b: " La section <body>",

      
      c: " La section <head>"
  },
  correctAnswer: "a"

},

 


];

    
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();