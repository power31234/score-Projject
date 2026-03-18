let score = 0
let secondTeam = document.getElementById("team-2")
let firstTeam = document.getElementById("team-1")
function addOne(){
    score += 1
    firstTeam.textContent = score
    
}
function addTwo(){
    score += 2
    firstTeam.textContent = score
}
function addThree(){
    score += 3
    firstTeam.textContent = score
}
function addone(){
    score += 1 
    secondTeam.textContent = score
}
function addtwo(){
    score += 2
    secondTeam.textContent = score 
}
function addthree(){
    score += 3
    secondTeam.textContent = score
}
 