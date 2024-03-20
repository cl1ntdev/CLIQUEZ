let alphabetValues = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0
};

// console.log(alphabetValues1);
let hManyVal = Object.keys(alphabetValues)
let randomNoRep = []
for(let i = 0;i<hManyVal.length;i++){
    let randomNum;
    do{
        randomNum = Math.floor(Math.random()*(26-1+1))+1
    }while(randomNoRep.includes(randomNum))
    randomNoRep.push(randomNum);
}
let i = 0
for(let key in alphabetValues){
    alphabetValues[key] = randomNoRep[i]
    i++;
}
console.log(randomNoRep)
// let alphabetValues = alphabetValues1.alphabetValues2.slice().sort(() => Math.random() - 0.5);
// console.log(alphabetValues)


 const easyLevel1 = [
    //accross
    {word:'No', definition:'Opposite of Yes'},
    {word:'Red', definition:'What is the primary color between red and blue?'},    
    {word:'Yen', definition:'What is the currency of Japan'},
    
];

 const easyLevel2 = [
    //accross
    {word:'Air', definition:'What is the main component of the airs atmosphere'},
    {word:'Cold', definition:'What is the opposite of hot'},    
    {word:'Moon', definition:'Which celestial body orbits the earth'},
];

 const easyLevel3 = [
    //accross
    {word:'Sun', definition:'What is the main component of sunlight'},
    {word:'Sea', definition:'What is the large body of water that covers the Eath\'s surface'},    
    {word:'Low', definition:'What is the opposite of Top'},
    
   
];
const elevels = [easyLevel1, easyLevel2, easyLevel3]

 const mediumLevel1 = [
    //accross
    {word:'Clasp', definition:'What is the piece of metal that fastens clothes together called?'},
    {word:'Iris', definition:'What is the colored part of the eye called?'},
    {word:'Cease', definition:'What is the opposite of begin?'}
    
];

 const mediumLevel2 = [
    //accross
    {word:'Fossil', definition:'What is the term for the remains of ancient plants and animals?'},
    {word:'Digestion', definition:'What is the process of converting food into energy called?'},    
    {word:'Abyss', definition:'What do you call a large, deep hole typically filled with water?'}

]
 const mediumLevel3 = [
    //accross
    {word:'Evaporation', definition:'What is the process of a liquid turning into a gas called?'},
    {word:'Scythe', definition:'What is the tool used for cutting grass or crops?'},    
    {word:'Cartography', definition:'What do you call the practice of drawing maps?'},
   
];
 const mlevels = [mediumLevel1, mediumLevel2, mediumLevel3]

 const hardLevel1 = [
    //accross
    {word:'Neurology', definition:'The study of the structure and function of the nervous system called?'},
    {word:'Geometry', definition:'The branch of mathematics concerned with the properties and relationships of shapes and space?'},
    {word:'Gondola', definition:'The term for a long, flat-bottomed boat propelled by oars or sails?'},
  
];

 const hardLevel2 = [
    //accross
    {word:'Demography', definition:'What is the scientific study of the behavior and characteristics of human populations?'},
    {word:'Reflexes', definition:'The term for the involuntary contraction of muscles in response to stimuli?'},    
    {word:'Cosmology', definition:'The study of the origin and development of the universe called?'},    
    
];

 const hardLevel3 = [
    //accross
    {word:'Nuclearism', definition:'What is the branch of physics dealing with atomic nuclei called?'},
    {word:'Morphology', definition:'What is the branch of biology concerned with the structure of organisms?'},    
    {word:'Hypoxemia', definition:'What is the condition characterized by abnormally low levels of oxygen in the blood?'},
    
   
];
 const hlevels = [hardLevel1, hardLevel2, hardLevel3]


/////////////////passsing
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty');//easy
const level = urlParams.get('level');//level 1
console.log(`dif is ${difficulty} and level is ${level}`)



let wordDef;
let start = false;
let difBase = document.querySelector('.difficulty')
let allDifs = document.querySelector('.theDifs')
startGame(difficulty, level);

// let allUsers = JSON.parse(localStorage.getItem('allUsers'));
// allUsers[0].mainscore = '27'
// localStorage.setItem('allUsers',JSON.stringify(allUsers))

// let allUsers = JSON.parse(localStorage.getItem('allUsers'))
// allUsers[0].mainscore = '999'
// allUsers[0].name = 'CLINT KING'
// localStorage.setItem('allUsers',JSON.stringify(allUsers))

function startThis(){
    startGame(difSet,difSetBaseIndex);
}


function startGame(whatDifficulty,Bindex){
//stat
let whatGame = '';
let dif = whatDifficulty;
if(dif === 'easy'){
    whatGame = 'easy'
    console.log('easy function called')
    easyGame(Bindex)
}else if(dif ==='medium'){
    console.log('medium function called')
    whatGame = 'medium'

    mediumGame(Bindex)
}else if (dif === 'hard'){
    whatGame = 'hard'

    console.log('hard function called')
    hardGame(Bindex)
}
let gameBase = document.querySelector('.game')
let header = document.querySelector('.header')
let stat = document.createElement('div')
stat.className = 'stat'
gameBase.appendChild(stat)



//back option



let backB = document.createElement('button')
// let nextB = document.createElement('button')
backB.innerText = 'Back'
// nextB.innerText = 'Next'
backB.className = 'backButton'
// nextB.className = 'nextButton'
backB.onclick = function(){
    window.location.href = 'levelPicker.html'
}
// nextB.onclick = function(){
    
// }
header.appendChild(backB)
// header.appendChild(nextB)
//score
let statBase = document.querySelector('.stat')
let score = document.createElement('div')
score.className = 'score'
statBase.appendChild(score);
//scoreBox
let scoreBase = document.querySelector('.score')
let scoreBox = document.createElement('h1')
scoreBox.className ='scoreBox'
scoreBox.innerText = 'SCORE:'
scoreBase.appendChild(scoreBox)
//sc (scoreBox Value)
let scoreBoxBase = document.querySelector('.scoreBox')
let scoreVal = document.createElement('h1')
scoreVal.className = 'sc'
let mainScore = localStorage.getItem('score')

if(!mainScore){
    localStorage.setItem('score',0)
}
if(mainScore){
    
        scoreVal.innerText = parseInt(mainScore)
        console.log('main score')
    
}

scoreBase.appendChild(scoreVal)

//////health section
let health = document.createElement('div')
health.className = 'health'
statBase.appendChild(health);
//health
let healthBase = document.querySelector('.health')
let healthBar = document.createElement('h1')
healthBar.className ='healthBar'
healthBar.innerText = 'HEALTH'
healthBase.appendChild(healthBar)
//sc (health Value)
let healthBarBase = document.querySelector('.healthBar')
let hp = document.createElement('h1')
hp.className = 'hp'
healthBase.appendChild(hp)

/////////////////////////////////////////////////////////////start making other ootions
function easyGame(baseIndex){
    wordDef = elevels[baseIndex].slice().sort(() => Math.random() - 0.5);
    console.log(`easy level ${baseIndex}`)
}

function mediumGame(baseIndex){
    // whatGame = 'medium'

    wordDef = mlevels[baseIndex].slice().sort(() => Math.random() - 0.5);
    console.log(`medium level ${baseIndex}`)
}

function hardGame(baseIndex){
    // whatGame = 'hard'
    wordDef = hlevels[baseIndex].slice().sort(() => Math.random() - 0.5);
    console.log(`hard level ${baseIndex}`)
}


///base
// wordDef = easyLevel1.slice().sort(()=> Math.random() - 0.5)  
let game = document.querySelector('.game')


//body puzzle
for(let i = 0;i<wordDef.length;i++){
    let puzzle = document.createElement('div')
    puzzle.className = 'puzzle'
    game.appendChild(puzzle)
}



//definition section
for(let i = 0;i<wordDef.length;i++){
    let puzzle = document.querySelectorAll('.puzzle')
    let def = document.createElement('div')
    def.className = 'def'
    def.innerText = wordDef[i].definition
    puzzle[i].appendChild(def);
}



//for answer section
for(let i = 0;i<wordDef.length;i++){
    let puzzle = document.querySelectorAll('.puzzle')
    let answerSec = document.createElement('div')
    answerSec.className = 'answerSec'
    puzzle[i].appendChild(answerSec);
}

//for container where Input and CLue will be put
for(let i = 0;i<wordDef.length;i++){
    let answerSec = document.querySelectorAll('.answerSec')
   
    for(let j = 0;j<wordDef[i].word.length;j++){
        //Container maker
        let iniAnsSec = answerSec[i]
        let inputCont = document.createElement('div');
        inputCont.className = 'container';
        iniAnsSec.appendChild(inputCont)
    }

    
}


//inputs and clues
let globalIndex = 0;
for(let i = 0;i<wordDef.length;i++){
    let ansSec = document.querySelectorAll('.answerSec')[i]
    let container = ansSec  .querySelectorAll('.container')//issue here
    
    for(let j = 0;j<wordDef[i].word.length;j++){
        //inputs
        let input = document.createElement('input');
        input.className = 'input'
        input.setAttribute('index',`${j}`)
        input.setAttribute('globalIndex',`${globalIndex}`)
        input.setAttribute('disabled', true)
        input.maxLength = 1
        input.placeholder = '?'
        container[j].appendChild(input)//issue here

        //clue
        let clue = document.createElement('div');
        clue.className = 'clue'
        clue.setAttribute('globalIndex',`${globalIndex}`)
        globalIndex++;
        clue.setAttribute('index',`${j}`)
        clue.innerText = scan(wordDef[i].word[j]);
        container[j].appendChild(clue);

        // input.addEventListener('input',function(e){
        //     let indexInp = e.target.getAttribute('globalIndex');
        //     // let indexClue = e.target.getAttribute('globalIndex');
        //     let theInp = e.target.value;
        //     // console.log(`the global index of the target is ${indexInp}`)
        //     // console.log(`target value is ${e.target.value}`)
        //     // console.log(`wordDef here is ${wordDef[i].word[`${indexInp}`]}`)
        //     if(theInp.toUpperCase() === wordDef[i].word[`${indexInp}`].toUpperCase()){/////issueee here, itterate in each box each puzzle, not global index
        //         e.target.style.background = '#40E140'
        //         let tar = e.target.value
        //         e.target.setAttribute('readOnly',true)
        //         copyValues(indexInp,theInp);
        //         runGame(Bindex)
        //         // disabler()
               
        //     }else{
        //         if(e.target.value.toUpperCase() !==''){
        //             disabler()
        //             e.target.style.background = 'red'
        //             updateLives()
        //             let change = setInterval(() => {
        //                 e.target.style.background=''
        //                 e.target.value ='';
        //                 clearInterval(change)
        //             }, 1000);
        //         }  
        //     }
        // });
    }
}


document.querySelectorAll('.input').forEach(inp =>{
    inp.addEventListener('input',function(e){
        let indexInp = e.target.getAttribute('globalIndex');
        let normalIndex = e.target.getAttribute('index')
        // let indexClue = e.target.getAttribute('globalIndex');
        let theInp = e.target.value;
        // console.log(`the global index of the target is ${indexInp}`)
        // console.log(`target value is ${e.target.value}`)
        // console.log(`wordDef here is ${wordDef[i].word[`${indexInp}`]}`)
        let letter = wordDef[disablerScoreBase].word[`${parseInt(normalIndex)}`];
        console.log(`wordDef letter ${letter}`)
        if(theInp.toUpperCase() === wordDef[disablerScoreBase].word[`${parseInt(normalIndex)}`].toUpperCase()){/////issueee here, itterate in each box each puzzle, not global index
            e.target.style.background = '#40E140'
            // console.log()
            let tar = e.target.value
            e.target.setAttribute('readOnly',true)
            copyValues(indexInp,theInp);
            runGame()
            disabler()
           
        }else{
            if(e.target.value.toUpperCase() !==''){
                disabler()
                e.target.style.background = 'red'
                updateLives()
                let change = setInterval(() => {
                    e.target.style.background=''
                    e.target.value ='';
                    clearInterval(change)
                }, 1000);
            }  
        }
    });

    
})


let allclue = document.querySelectorAll('.clue')
for(let i = 0;i<allclue.length;i++){
    //    console.log(`the clue value here is ${allclue[i].innerText}`)
    //    console.log(`the clue value here is ${allclue[i].innerText}`)
    //    clue.innerText = scan(wordDef[i].word[j]);
    //    for(let j = 0;j<allclue.length;j++){
        // console.log(`the clue value here is ${allclue[i].innerText} and its letter value is ${scan('1')}`)
        // console.log(`the clue value here is ${allclue[i].innerText}`)
    //    }    
}


//let to tnum
function scan(value){
    for(let key in alphabetValues){
        if(value.toUpperCase() === key){
            // console.log(alphabetValue1.alphabetValues2[key])
            return alphabetValues[key];
        }
    }
}
// console.log(alphabetValue1.alphabetValues2)

//num to let 
function scan1(value){
    for(let key in alphabetValues){
        if(value.toUpperCase() === key){
            return alphabetValues;
        }
    }
}


//debug this, previous value copy even when wrong===========================
function copyValues(index,inpVal){
    let allClue = document.querySelectorAll('.clue')
    let allInp = document.querySelectorAll('.input')
    let val = inpVal
    console.log(`inp value is ${val}`)
    console.log(index)
    for(let i = 0;i<allClue.length;i++){

     for(let j = 0;j<allClue.length;j++){
        if(allClue[index].innerText === allClue[j].innerHTML){
            // console.log(`the ${allClue[i].innerText} is the same as ${allclue[j].innerText}`)
            allInp[j].value = allInp[index].value
            allInp[j].style.background = '#40E140'
            allClue[j].style.background = '#40E140'
            allInp[j].setAttribute('readOnly', true)

        }
     }
    }








    // console.log(`the index base is ${index}`)
    // let input = document.querySelectorAll('.input')
    // let clue = document.querySelectorAll('.clue');
    // // for(let i = 0;i<clue.length;i++){
    //     console.log(`clue length ${clue.length}`)
    //     for(let j =0;j<clue.length;j++){
    //         if(clue[index].innerText === clue[j].innerText){///dili pwede index since only 3 is is set every puzzle
    //             // console.log(`the value passed on to ${}`)
    //             input[j].value = input[index].value
    //             input[j].style.background = '#40E140'
    //         }
    //     }
    // // } 
}


// let scoreGlobal = score
//Check  + SCORE
let disablerScoreBase = 0
let valueSc = 0;
// debugggggggggggggggggggggggggggggggggggggggggg scorrer
function runGame() {
    let scoreMain = localStorage.getItem('score')
    let add = 0
    let scoreGlobal = 0
    // let scoreGlobal = 0
    let altScoreGlobal = 0;
    
    let puzzles = document.querySelectorAll('.puzzle');
    puzzles.forEach((puzzle, i) => {
        let currentWord = wordDef[i].word;
        let answerInputs = puzzle.querySelectorAll('.input');
        let currentAnswer = '';

        answerInputs.forEach(ansBox => {
            currentAnswer += ansBox.value || '';
            console.log(`current answer is ${currentAnswer}`)

        });

        if (currentAnswer.toUpperCase() === currentWord.toUpperCase() && currentAnswer !=='') {
            scoreGlobal++;
            altScoreGlobal++;
            console.log(`alt scoreGlobal is ${altScoreGlobal}`)

            // updateScore()
           
            disablerScoreBase = altScoreGlobal
            // console.log(`the disscorebase is ${disablerScoreBase}`)
            // console.log(scoreGlobal)
        }   
    });
    // document.querySelector('.sc').innerText = scoreGlobal;
    // addGlobalScore(1)
    // console.log(scoreGlobal)
    // localStorage.setItem('score',scoreGlobal)
    // let mainScore = Number(localStorage.getItem('score'))
    // console.log(`mainScore is ${mainScore}`)
    // document.querySelector('.sc').innerText = mainScore+
}

// function updateScore(){
//     let scoreMain = localStorage.getItem('score')
//     add+=1; 
// }



// button disabler
// let base = scoreGlobal;
let disable = setInterval(disabler,1000)

let scoreCheck = document.querySelector('.sc').innerText
let scoreInt = parseInt(scoreCheck);
function disabler(){
    let newScore = scoreInt + disablerScoreBase
    console.log(newScore)
    document.querySelector('.sc').innerText = newScore
    
    
    
    console.log(`the disabled score base is ${disablerScoreBase}`)
    let scoreValue = 0
    let allPuz = document.querySelectorAll('.puzzle')
    let scoreValueToInt = parseInt(scoreValue)
    let puzBut;
    // let puzBut 
    if(disablerScoreBase === allPuz.length){
        clearInterval(disable)
        let score = localStorage.getItem('score')//addscore
        if(score){
            let intScore = JSON.parse(score)
            disablerScoreBase+=intScore
            localStorage.setItem('score',disablerScoreBase)
        }else {
        localStorage.setItem('score',disablerScoreBase)

        }
        let bindexToInt = parseInt(Bindex)
            switch(whatGame){
                case 'easy':
                    localStorage.setItem(`eLevel${parseInt(bindexToInt+1)}w`,true)
                    break;
                case 'medium':
                    localStorage.setItem(`mLevel${parseInt(bindexToInt+1)}w`,true)
                    break;
                case 'hard':
                    localStorage.setItem(`hLevel${parseInt(bindexToInt+1)}w`,true)
                    break;
        }
        window.location.href='levelPicker.html'
        return;
    }
    let prev = null;   
    for(let i = 0;i<=disablerScoreBase;i++){
        if(prev !== null){
            prev.classList.remove('hover')
        }
        if(!(allPuz[i].classList.toggle('hover'))){
             allPuz[i].classList.toggle('hover')
        }
       
        prev = allPuz[i]
        puzBut = allPuz[i].querySelectorAll('.input')
        for(let j = 0;j<puzBut.length;j++){
            puzBut[j].removeAttribute('disabled')
        }
    }

    // if(disablerScoreBase>=0 && disablerScoreBase < allPuz.length){
    //     puzBut = allPuz[disablerScoreBase].querySelectorAll('.input')
    //     switch(disablerScoreBase){
    //     case 0:
    //     case 1:
    //     case 2:
    //         // console.log(`this is ${puzBut}`)
    //         for(let i = 0;i<puzBut.length;i++){
    //             // console.log(puzBut[i])
    //             puzBut[i].removeAttribute('disabled')
    //         }
            
    //         // console.log(`the scoreValue is ${scoreValue}`)
    //         break;
    //     case 3:
    //         // console.log(`the scoreValue is ${scoreValue}`)
    //         console.log('disabled')
    //         clearInterval(disable)
    //     }
    // }else {
    //     null
    // }
    
}
//update101 score
// for(let i = 0;i<disablerScoreBase;i++){
//     localStorage.setItem('score',disablerScoreBase)
// }


   




// let gameInterval = setInterval(runGame, 1);

//HEALTH PACK UPDATE
let lifeMinus = 1;
let heart;
let heartsCheck = localStorage.getItem('hearts');
    if(heartsCheck){
        heart = parseInt(heartsCheck)
    }
function updateLives() {
    
    // lifeMinus ++;
    heart = heart - lifeMinus;
    
    console.log(`my LIFE IS or heart ${heart} minus ${lifeMinus}`)

    updateHearts();

    let life = document.querySelector('.hp');
    // life.innerText = myLife;
    
    if(heart === 0){
            // alert('gameover')
            // let game = document.querySelector('.game')
            // let gameOverShow = document.createElement('div')
            // gameOverShow.className = 'gameOverShow'
            // game.appendChild(gameOverShow);
            // let gameOver = document.createElement('h1')
            // game.innerHTML = ''
            // gameOver.innerText = 'GAME OVER PAR'
            // gameOverShow.appendChild(gameOver);

            // localStorage.setItem('score', disablerScoreBase)
            // game.appendChild(gameOver);
            window.location.href = 'gameover.html'
            let disReset = setInterval(()=>{
            console.log(`${disablerScoreBase}`)
            window.location.href = `saveData.html?score=${disablerScoreBase}`
            clearInterval(disReset)
            },1000)
    }
}
//lives pic
let healthPack = document.querySelector('.health')
let hpCheck = localStorage.getItem('hearts')
let heartsBase;
if(hpCheck){
    heartsBase = parseInt(hpCheck)
}
for(let i =0;i<heartsBase;i++){
    let heartI = document.createElement('img')
    heartI.src = 'goldHearts.png'
    heartI.className = 'heart'
    healthPack.appendChild(heartI);
}

function updateHearts(){
    let hearts = document.querySelectorAll('.heart')
    let heartUpdate = localStorage.getItem('hearts')
    if(heartUpdate){
        let newHeart = parseInt(heartUpdate)-1;
        localStorage.setItem('hearts',newHeart)
    }
    if(hearts.length>=0){
        hearts[0].remove()

    }
}


//1. add disable all puzzle if puzzle 1 is not correct /
//2. add back option/
//3. store data on browser/
//4. proper scoring data /
//5. proper scanning of users /
//6. clean code
//7. two scores, 1 for display, and 1 for checking if it loses (base on puzzle length)/
}











//issues
