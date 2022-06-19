// alert('To start quiz click on the submit button');

const quiz_data = ['Fullform of HTML','Fullform of CSS','Fullform of JSON'];

const answers = ['Hyper Text Markup Language','Cascading Style Sheet','JavaScript Object Notation'];

const q_label = document.getElementById('label1');

const input = document.getElementById('input1');

const button = document.getElementById('submit');

var a = 0;
q_label.innerText = quiz_data[a];

button.addEventListener('click',function(){
    
  q_label.innerText = quiz_data[a];
  a++;

});
