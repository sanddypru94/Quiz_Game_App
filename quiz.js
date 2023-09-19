const quesJSON = [
    {
      correctAnswer: 'Rome',
      options: ['Venice', 'Rome', 'Naples', 'Milan'],
      question:
        "In which Italian city can you find the Colosseum?",
    },
    {
      correctAnswer: '1960',
      options: [
        '1950',
        '1960',
        '1970',
        '1980',
      ],
      question:
        "When was the book “To Kill a Mockingbird” by Harper Lee published?",
    },
    {
      correctAnswer: '2002',
      options: [
        '2002',
        '2023',
        '2020',
        '2015',
      ],
      question:
        'When did Salt Lake City host the Winter Olympics?',
    },
    {
      correctAnswer: 'Asia',
      options: [
        'Africa',
        'Australia',
        'Asia',
        'Europe',
      ],
      question: 'What is the largest continent in size?',
    },
    {
      correctAnswer: 'Six',
      options: [
        'Five',
        'Six',
        'Two',
        'Seven',
      ],
      question:
        "How many sides has a Hexagon?",
    },

    {
        correctAnswer: '1997',
        options: [
          '2000',
          '1996',
          '1998',
          '1997',
        ],
        question:
          "When was the first Harry Potter book published?",
      },

      {
        correctAnswer: 'Argentina',
        options: [
          'United States',
          'Uruguay',
          'Argentina',
          'Yugoslavia',
        ],
        question:
          "Which country Runners-up the first Football World Cup in 1930?",
      },

      {
        correctAnswer: 'Yellow',
        options: [
          'Red',
          'Black',
          'Green',
          'Yellow',
        ],
        question:
          `What colour is the “M” from the McDonald’s logo?`,
      },

      {
        correctAnswer: 'Six',
        options: [
          'Five',
          'Six',
          'Seven',
          'Eleven',
        ],
        question:
          "How many players are in a volleyball team?",
      },


      {
        correctAnswer: 'Wellington',
        options: [
          'Auckland',
          'Napier',
          'Hamilton',
          'Wellington',
        ],
        question:
          "What is the capital of New Zealand?",
      },

  ];
    
    let score=0;
    let currentQuestion = 0;
    let totalScore = quesJSON.length;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl = document.getElementById("next");

    showQuestion();
nextEl.addEventListener('click',()=> {
    scoreEl.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion()
});

    function showQuestion(){
        const{correctAnswer, options, question} = quesJSON[currentQuestion];
       questionEl.textContent = question; 
       
       const shuffledOptions = shuffleOptions(options);
   

       shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
        if(opt === correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }   
    scoreEl.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
        });
    });
}

function nextQuestion(){
    currentQuestion++;
    optionEl.textContent = '';
    if(currentQuestion>=quesJSON.length){
      questionEl.textContent = 'Quiz Completed!!';
      nextEl.remove();
    } 
    else{
      showQuestion();
    }

  }


    function shuffleOptions(options){
      for (let i = options.length-1; i>=0; i--){
        const j = Math.floor(Math.random()*i+1);
           [options[i], options[j]] = [options[j], options[i]];
    }
return options;
    }

    // function shuffleOptions(options) {
    //     for (let i = options.length - 1; i >= 0; i--) {
    //       const j = Math.floor(Math.random() * i + 1);
    //       [options[i], options[j]] = [options[j],
    //         options[i],
    //       ];
    //     }
    //     return options;
    //   }
    
// suffleOptions([1,2,3,4]);


