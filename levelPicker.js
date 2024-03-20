const alphabetValues = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
};

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
    {word:'Evaportaion', definition:'What is the process of a liquid turning into a gas called?'},
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
/////////////////////////////
let difSet = ''
let difSetBaseIndex = 0;
let easyL1w, easyL2w, easyL3w;
let mediumL1w, mediumL2w, mediumL3w;
let hardL1w,hardL2w,hardL3w

easyL1w = localStorage.getItem('eLevel1w')
easyL2w = localStorage.getItem('eLevel2w')
easyL3w = localStorage.getItem('eLevel3w')
mediumL1w = localStorage.getItem('mLevel1w')
mediumL2w = localStorage.getItem('mLevel2w')
mediumL3w = localStorage.getItem('mLevel3w')
hardL1w = localStorage.getItem('hLevel1w')
hardL2w = localStorage.getItem('hLevel2w')
hardL3w = localStorage.getItem('hLevel3w')
score = localStorage.getItem('score')
/////////////////////////////////////





 const hlevels = [hardLevel1, hardLevel2, hardLevel3]
 let hard = document.querySelector('#hard')
 let medium = document.querySelector('#medium')
 let easy = document.querySelector('#easy')
 //add temp choose level
 let diffShow = document.querySelector('.diffShow');
 let placeholder = document.createElement('h1')
 placeholder.className = 'tell'
 placeholder.innerText = 'CHOOSE LEVEL'
 placeholder.style.background = 'none'
 diffShow.appendChild(placeholder);
let count = 0
console.log(count)

if(easyL1w === 'true' && easyL2w === "true" && easyL3w === 'true'){
    easy.style.display = 'none'
}
if(mediumL1w === 'true' && mediumL2w === "true" && mediumL3w === 'true'){
    medium.style.display = 'none'
}
if(hardL1w === 'true' && hardL3w === "true" && hardL3w === 'true'){
    hard.style.display = 'none'
}
 

function pass(val){
    diffShow.querySelector('.tell').remove()
    if(val === 'easy'){
       easy.style.display = 'none' 
       medium.style.display = 'none'
       hard.style.display = 'none'
    }else if(val === 'medium'){
        easy.style.display = 'none' 
        medium.style.display = 'none'
        hard.style.display = 'none'
    }else if(val === 'hard'){
        easy.style.display = 'none' 
       medium.style.display = 'none'
       hard.style.display = 'none'
    }
    creatLevel(val)
}



////MAKE CHOICE HEREEEE
function creatLevel(val){//FOR BUTTONS CHOOSE
let diffShow = document.querySelector('.diffShow')
let heartsCheck = localStorage.getItem('hearts');
let heartVal = parseInt(heartsCheck)
if(!heartsCheck){
    let hearts = 3
    localStorage.setItem('hearts',hearts)
    localStorage.setItem('score',0)
}else if(heartsCheck && heartVal === 0){
    let hearts = 3
    localStorage.setItem('hearts', hearts)
    localStorage.setItem('score',0)
}

switch(val){
        case 'easy':
            let easyBut = document.querySelector('.easy')
            easyBut.onclick = null
            for(let i = 0;i<elevels.length;i++){
                let lev = document.createElement('button')
                lev.innerText = `LEVEL${i+1}`
                lev.className = 'butLevE'
                lev.setAttribute('index',`${i}`)
                if(i === 0 && easyL1w === 'true'){
                    lev.disabled = true
                    lev.setAttribute('goods',true)
                }else if (i === 1 && easyL2w === 'true'){
                    lev.disabled = true;
                    lev.setAttribute('goods',true)
                    

                }else if (i === 2 && easyL3w === 'true'){
                    lev.disabled = true;
                    lev.setAttribute('goods',true)
                    
                }
                diffShow.appendChild(lev);
                lev.addEventListener('click',function(e){
                    let baseIndex = e.target.getAttribute('index');
                    // localStorage.setItem(`eLevel${parseInt(baseIndex+1)}w`,true)
                    // easyGame(baseIndex)
                    // startGame('easy',baseIndex) 
                    difSet = 'easy'
                    difSetBaseIndex = baseIndex
                    document.location.href = 'index.html'
                    // allDifs.innerHTML = ''
                    document.location.href = `game.html?difficulty=${val}&level=${parseInt(difSetBaseIndex)}`;

                    // console.log(baseIndex)
                });
            }
            break;
        case 'medium':
            let mediumBut = document.querySelector('.medium')
            mediumBut.onclick = null
            for(let i = 0;i<mlevels.length;i++){
                let lev = document.createElement('button')
                lev.innerText = `LEVEL${i+1}`
                lev.className = 'butLevM'
                lev.setAttribute('index',`${i}`)
                if(i === 0 && mediumL1w === 'true'){
                    lev.disabled = true
                }else if (i === 1 && mediumL2w === 'true'){
                    lev.disabled = true;
                }else if (i === 2 && mediumL3w=== 'true'){
                    lev.disabled = true;
                }
                diffShow.appendChild(lev);
                lev.addEventListener('click',function(e){
                    let baseIndex = e.target.getAttribute('index');
                    // easyGame(baseIndex)
                    // startGame('medium',baseIndex) 
                    // allDifs.innerHTML = ''
                    difSet = 'medium'
                    difSetBaseIndex = baseIndex
                    document.location.href = 'index.html'
                    console.log(baseIndex)
                    document.location.href = `game.html?difficulty=${val}&level=${parseInt(difSetBaseIndex)}`;

                });
            }
            break;
        case 'hard':
            let hardBut = document.querySelector('.hard')
            hardBut.onclick = null
            for(let i = 0;i<hlevels.length;i++){
                let lev = document.createElement('button')
                lev.innerText = `LEVEL${i+1}`
                lev.className = 'butLevH'
                lev.setAttribute('index',`${i}`)
                if(i === 0 && hardL1w === 'true'){
                    lev.disabled = true
                }else if (i === 1 && hardL2w === 'true'){
                    lev.disabled = true;
                }else if (i === 2 && hardL3w === 'true'){
                    lev.disabled = true;
                }
                diffShow.appendChild(lev);
                lev.addEventListener('click',function(e){
                    let baseIndex = e.target.getAttribute('index');
                    // easyGame(baseIndex)
                    // startGame('hard',baseIndex) 
                    // allDifs.innerHTML = ''
                    difSet = 'hard'
                    difSetBaseIndex = baseIndex
                    document.location.href = 'index.html'
                    console.log(baseIndex)
                    document.location.href = `game.html?difficulty=${val}&level=${parseInt(difSetBaseIndex)}`;

                });
            }
            break;
    }
}
let easyLevelButtons = document.querySelectorAll('.butLev')

function back(){
    window.location.href = 'levelPicker.html'
}

function reset(){

    localStorage.removeItem('score')
    localStorage.removeItem('eLevel1w')
    localStorage.removeItem('eLevel2w')
    localStorage.removeItem('eLevel3w')
    localStorage.removeItem('mLevel1w')
    localStorage.removeItem('mLevel2w')
    localStorage.removeItem('mLevel3w')
    localStorage.removeItem('hLevel1w')
    localStorage.removeItem('hLevel2w')
    localStorage.removeItem('hLevel3w')
    localStorage.removeItem('score')
    localStorage.removeItem('hearts')
    alert('VALUES ERASED')
}
