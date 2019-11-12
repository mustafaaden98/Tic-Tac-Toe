const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// const grid = () => Array.from(document.getElementsByClassName('q'));
// // console.log(grid());

// const qNumId = (qEl) => Number.parseInt(qEl.id.replace('q', ''));
// const emptyQs = () => grid().filter(el => el.innerText === '');
// const allSame = (arr) => arr.every(el => el.innerText === arr[0].innerText && el.innerText !== '');
// const takeTurn =(index, letter) => grid()[index].innerText = letter;

// const opponentTurn = () => qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);

// const endGame = (winningSequence) =>{
//     winningSequence.forEach(el => el.classList.add('winning'))
// }

// const checkForVictory = () =>{
//     let victory = false;
//     winningCombos.forEach(c =>{
//         const _grid = grid();
//         const sequence = [_grid[c[0]], _grid[c[1]], _grid[c[2]]];
//         if(allSame(sequence)){
//             victory = true;
//             endGame(sequence)
//         }
//         // victory = allSame(sequence);
//     })
//     return victory;
// }

// const opponentChoice = () =>{
//     disableListeners();
//     setTimeout(()=>{
//         takeTurn(opponentTurn(), 'o')
//     }, 1000);
//     if(!checkForVictory()){
//         enableListeners();
//     }

    
// }

// // console.log(emptyQs())

// // console.log(qNumId(grid()[8]));

// const clickFn =(event) =>{
//     // console.log(event.target)
//     takeTurn(qNumId(event.target), 'X');
//     if(!checkForVictory()){
//         opponentChoice();
//     }
    
// }

// const enableListeners =()=> grid().forEach(el => el.addEventListener('click', clickFn));;
// const disableListeners =()=> grid().forEach(el => el.removeEventListener('click', clickFn));

// enableListeners();
// // disableListeners();



const getList = () => Array.from(document.getElementsByClassName('q'));

console.log(getList()[2])

// const test = (element) => console.log(element.innerText) ;

// test(getList()[2])





const convertIdToNum = (qElement) => Number.parseInt(qElement.id.replace('q', ''));

const emptyQs = () => getList().filter(el => el.innerText === '');

const allSame = (arr) => arr.every(el => el.innerText === arr[0].innerText && el.innerText !=='');

const takeTurn = (index, letter) => getList()[index].innerText = letter;
const opponentTurn = () => convertIdToNum(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);

const win = (winningSequence) => {
    let getPlayer = document.getElementById('player');
    getPlayer.innerText = "Winner";
    winningSequence.forEach(el => el.classList.add('winning'));
     
}


                                        
                                                            

const checkForVictory = () =>{
    let victory = false;
        winningCombos.forEach(el =>{
            const getElList = getList();
            const sequence = [getElList[el[0]], getElList[el[1]], getElList[el[2]]];
            if(allSame(sequence)){
                victory = true;
                win(sequence);
            }
        })
    return victory;
}
// console.log(takeTurn(opponentTurn(), 'o'));


// const opponentChoice = () =>{
//     disableListeners();
//     setTimeout(()=> { takeTurn(opponentTurn(),'o')}, 1000)
//     if (!checkForVictory()){
//         enableListeners();
//     }
    
// }
const opponentChoice = () =>{
    takeTurn(convertIdToNum(event.target), '0');
    if(!checkForVictory){
        takeTurn(convertIdToNum(event.target), 'x');
    }
}

const clickFn = (event) =>{
    
    takeTurn(convertIdToNum(event.target), 'x');
    if (!checkForVictory()){
        opponentChoice();
    }
}

const gameStart = () =>{
    const player = ['x', 'o'];
    let score = 1;
    if(score%2 !== 0){
        // X turn
        // check for victory
        score++;
    }
    else{
        // O turn
        //check for victory; 
        score++
        
    }
}

gameStart()

// console.log(Number.parseInt(getList()[1].id.replace('q', '')))

const enableListeners = ()=> getList().forEach(el => el.addEventListener('click', clickFn));
const disableListeners =()=> getList().forEach(el => el.removeEventListener('click', clickFn));

enableListeners()