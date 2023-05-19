const quiz = [
  {
    question: 'A clear day sky is',
    answers: ['Blue', 'Red', 'Green', 'Yellow'],
    correct: 'Blue',
  },
  {
    question: 'The capital of France is',
    answers: ['London', 'Rome', 'Berlin', 'Paris'],
    correct: 'Paris',
  },
  {
    question: 'The population of the Earth is about',
    answers: ['10 billion', '7 billion', '12 billion', '14 billion'],
    correct: '7 billion',
  },
  {
    question: 'The distance from Earth to the Moon is about',
    answers: [
      '238,900 miles',
      '248,900 miles',
      '258,900 miles',
      '268,900 miles"',
    ],
    correct: '268,900 miles',
  },
];


const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}