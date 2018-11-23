//H1 WHERE TEXT IS DISPLAYED
const kanji = document.querySelector('.kanji');
//INPUT WHERE USER ENTERS ROMAJI
const input = document.getElementById('input');
//BUTTON USER CLICKS AFTER ENTERING GUESS
const check = document.getElementById('check');

//KANGI OBJECT : KEYS = ROMAJI
const kanjiObj = {
  jin: '人',
  shin: '新',
  eki: '駅',
  den: '電'
}

//ARRAY OF KANJI CHARACTERS

const kanjiValue = Object.values(kanjiObj);
//ARRAY OF ROMAJI
const kanjiKey = Object.keys(kanjiObj);




//COUNT CHANGES
let counter = 0;

let nowKanji = kanjiValue[counter];
let nowRomaji = kanjiKey[counter];


// ALWAYS LISTENING FOR A CLICK ON THE BUTTON WITH CHECK ID 
check.addEventListener('click', function(){
if(input.value === nowRomaji) {
display();
correct();
}else {
incorrect();
}
}); 
 
function display() {
    counter = counter + 1;
    nowKanji = kanjiValue[counter];
    nowRomaji = kanjiKey[counter];
    kanji.innerHTML = nowKanji;
    input.value = '';
}


function incorrect() {
 kanji.innerHTML = 'Incorrect, Try again';
 input.value = '';
 setTimeout(function(){
   kanji.innerHTML = nowKanji;
 }, 2000);
}

function correct() {
  if(counter === kanjiValue.length){
    kanji.innerHTML = "Good Job and good luck with N1"
  } else {
    kanji.style.color = 'green';
    kanji.innerHTML = 'Correct';
    input.value = '';
    setTimeout(function(){
      kanji.style = 'black';
      kanji.innerHTML = nowKanji;
    }, 1000);
 } 
}


