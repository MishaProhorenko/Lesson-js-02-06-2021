'use strict';


// let countOfClicks = 0;
// count.innerText = countOfClicks;
// btnPlus.addEventListener('click', () => {
// 	count.innerText = ++countOfClicks;
// })
// btnMinus.addEventListener('click', () => {
// 	count.innerText = --countOfClicks;
// })
// btnRed.addEventListener('click', () => {
// 	divCount.className = 'red'
// })
// btnGreen.addEventListener('click', () => {
// 	divCount.className = 'green'
// })
// btnBlue.addEventListener('click', () => {
// 	divCount.className = 'blue'
// })


let btns = document.body.querySelectorAll('button');
// console.log(btns)
// for (let button of btns){
// 	if (button.className === 'red') {
// 		button.addEventListener('click', () => {
// 			divCount.style.color = 'red'
// 		})
// 	}
// 	if (button.className === 'green') {
// 		button.addEventListener('click', () => {
// 			divCount.style.color = 'green'
// 		})
// 	}
// 	if (button.className === 'blue') {
// 		button.addEventListener('click', () => {
// 			divCount.style.color = 'blue'
// 		})
// 	}
// }
// for (let i = 0; i < btns.length; i++) {
// 	if (btns[i].className === 'red') {
// 		btns[i].addEventListener('click', () => {
// 			divCount.style.color = 'red'
// 		})
// 	}
// 	if (btns[i].className === 'green') {
// 		btns[i].addEventListener('click', () => {
// 			divCount.style.color = 'green'
// 		})
// 	}
// 	if (btns[i].className === 'blue') {
// 		btns[i].addEventListener('click', () => {
// 			divCount.style.color = 'blue'
// 		})
// 	}
// }


// for (let button of btns) {	
// 	if (button.className) {
// 		button.addEventListener('click', () => {
// 			divCount.className = button.className;
// 		})
// 	}
// }


// один клик обновляет только себя
// двойной и себя и второй




// let divContainer = document.body.querySelector('.click-container');
// // console.log(divContainer)


// let countOne = document.createElement('div');
// countOne.innerHTML('<span>Count of clicks one: <span id="countOne"></span> </span>')
// document.body.append(countOne)
// let countTwo = document.createElement('div');
// countTwo.innerHTML('<span>Count of clicks two: <span id="countTwo"></span> </span>')
// document.body.append(countTwo)



// let countOfClicksOne = 0;
// countOne.innerText = countOfClicksOne;
// divContainer.addEventListener('click', () => {
// 	countOne.innerText = ++countOfClicksOne;
// })

// let countOfClicksTwo = 0;
// countTwo.innerText = countOfClicksTwo;
// divContainer.addEventListener('dblclick', () => {
// 	countOne.innerText = countOfClicksOne--;
// 	countTwo.innerText = ++countOfClicksTwo;
// })


// const clickCont = document.querySelector('.click-container');

// const singleClickeCounter = document.createElement('div');
// singleClickeCounter.innerHTML = '<span>Count of single clicks</span><span id=forOne></span>';
// document.body.append(singleClickeCounter);

// const doubleClickeCounter = document.createElement('div');
// doubleClickeCounter.innerHTML = '<span>Count of dounle clicks</span><span id=forDouble></span>';
// document.body.append(doubleClickeCounter);

// let single = 0;
// let double = 0;

// const handleDblClick = (event) => {
//     console.dir(event.target)
//     clickCont.classList.toggle('red')
// };

// clickCont.addEventListener('click', () => {
//     forOne.innerText = ++single;
// });

// clickCont.addEventListener('dblclick', () => {
//     forDouble.innerText = ++double;
// });


// clickCont.addEventListener('click',handleDblClick);


// setTimeout(() => {
//     clickCont.removeEventListener('click', handleDblClick)
// }, 4000);


const container = document.querySelector('.container');

console.log(container.children)

container.addEventListener('click', (e) => {
    [...container.children].forEach(elem => {
        elem.classList.remove('green')
    })
    if (e.target.classList.contains('block')) {
        e.target.classList.add('green')
    }
})




