let cont = document.querySelector('.container')


let allUsers = JSON.parse(localStorage.getItem('allUsers'))
// console.log(allUsers)
let namePut = document.querySelector('#name')
let scorePut = document.querySelector('.showsc')
let date = document.querySelector('.date')

let thisArr = allUsers
let sorted = thisArr.sort((a,b)=> Number(b.mainscore) - Number(a.mainscore))
console.log(sorted)

for(let i = 0;i<allUsers.length;i++){
    let newName = document.createElement('h1')
    let newScore = document.createElement('h1')
    let newDate = document.createElement('h1')
    newDate.innerText = sorted[i].time
    newScore.innerText = sorted[i].mainscore
    newScore.innerText = sorted[i].mainscore
    newName.className = 'infos'
    newScore.className = 'infos'   
    newDate.className = 'infos'
    newName.innerText = sorted[i].name
    date.appendChild(newDate);
    namePut.appendChild(newName)
    scorePut.appendChild(newScore)
}


function add(){
    let name = 'Hacer'
    let mainscore = 999
    let time = 1987
    
    let allUsers = JSON.parse(localStorage.getItem('allUsers')) 
    // allUsers.push({name,mainscore,time});
    allUsers[1].time = 'Hacker'
    localStorage.setItem('allUsers',JSON.stringify(allUsers))
    console.log(allUsers)
}


// console.log(thisArr)
// // console.log(sorted)

//   // Convert 'mainscore' from string to number for each user
//   let convertedUsers = thisArr.map(user => ({
//     ...user,
//     mainscore: Number(user.mainscore)
//   }));
  
//   // Now sort the converted array by 'mainscore' in descending order
//   convertedUsers.sort((a, b) => b.mainscore - a.mainscore);
  
//   console.log(convertedUsers);
  


// setInterval(function(){
//     console.log(sorted)
// },1000)


