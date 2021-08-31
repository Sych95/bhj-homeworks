function findHole (index) {
    let thisHole = document.getElementById(`hole${index}`);
    return thisHole;
}

function winLoseCheck () {
    if(document.getElementById('lost').textContent === '5') {
        alert('lose')
        document.getElementById('dead').textContent = '0'
        document.getElementById('lost').textContent = '0'
    } else if (document.getElementById('dead').textContent === '10') {
        alert('win')
        document.getElementById('dead').textContent = '0'
        document.getElementById('lost').textContent = '0'
    }
    console.log('Win: ' + deadMole + ', lose: ' + lostMole)
}

let deadMole = document.getElementById('dead').textContent;
let lostMole = document.getElementById('lost').textContent;


for(let i = 1; i <= 9; i +=1) {
    let currentHole = findHole(i);
    currentHole.onclick = function () {
        if(currentHole.className.includes( 'hole_has-mole' )) {
            deadMole = Number(deadMole);
            deadMole += 1;
            document.getElementById('dead').textContent = String(deadMole)
        } else {
            lostMole = Number(lostMole);
            lostMole += 1;
            document.getElementById('lost').textContent = String(lostMole)
        }
        winLoseCheck();
    }
}