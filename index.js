const startbtn = document.querySelector('.start');
const pop = document.querySelector('.pop-info');
const exit = document.querySelector('.exit');
const main = document.querySelector('.main');
const continuebtn = document.querySelector('.more');
const quiz = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quiz-box');

startbtn.onclick = () => {
  pop.classList.add('active');
  main.classList.add('active');
}
exit.onclick = () => {
  pop.classList.remove('active');
  main.classList.remove('active');
}
continuebtn.onclick = () => {
  quiz.classList.add('active');
  quizbox.classList.add('active');
  pop.classList.remove('active');
  main.classList.remove('active');
  showQuestion(0);
  questioncounter(1);
  headerscore();
}
let questionCount = 0;
let questionnumb = 1;
let userscore=0;
const nextbtn = document.querySelector('.next');
nextbtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestion(questionCount)
    questionnumb++;
    questioncounter(questionnumb);

  }
  else {
    alert('Quiz Completed');
    location.reload();
  }
  
}
const optionlist = document.querySelector('.option-list');

function showQuestion(index) {
  const questiontext = document.querySelector('.question');
  questiontext.textContent = `${questions[index].numb}.${questions[index].question}`
  let optiontag = `<div class="option"><span>${questions[index].option[0]}</span></div>
  <div class="option"><span>${questions[index].option[1]}</span></div>
    <div class="option"><span>${questions[index].option[2]}</span></div>
    <div class="option"><span>${questions[index].option[3]}</span></div>`;
  optionlist.innerHTML = optiontag;
  // Using querySelectorAll to select all elements with the class "option"
  const options = document.querySelectorAll('.option');
  
  // Adding a single click event handler to a common parent element (e.g., a container)


  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      optionSelected(this);
    });

  }

  // Function to handle the selected option
  function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctanswer=questions[questionCount].answer;
    let alloption=optionlist.children.length;
    console.log(userAnswer);
    if(userAnswer==correctanswer){
      
     answer.classList.add('correct');
     userscore+=1;
     headerscore();
     

    }
    else{
      answer.classList.add('incorrect');
      //if answer are incorrect auto select correct answer
      for(let i=0;i<alloption;i++){
        if(optionlist.children[i].textContent==correctanswer){
          optionlist.children[i].setAttribute('class','option correct');
        }
      }
      
    }
    //if user select one answer disabled all option
    for(let i=0; i<alloption;i++){
      optionlist.children[i].classList.add('disabled');
    }


  }
}
  function questioncounter(index) {
    const questiontotal = document.querySelector('.marks');
    questiontotal.textContent = `${index} of ${questions.length}questions`;

  }
  function headerscore(){
    const headerscore=document.querySelector('.score');
    headerscore.textContent=`score:${userscore}/${questions.length}`;

  }