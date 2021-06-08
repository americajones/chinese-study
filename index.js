const quizStudyBox = document.querySelector('#quiz-practice');
const mainCharText = document.querySelector('.main-char');
const secondaryCharText = document.querySelector('.optional-char');
const answersBox = document.querySelector('.answers');
const skipButt = document.querySelector('.skip');
const swapButt = document.querySelector('.swap');
const pageHeader = document.querySelector('.title');
let hanziArray = [];
let zhuyinArray = [];
let pinyinArray = [];
let meaningsArray = [];
let thisHanzi;
let trueAnswer;
let selectedAnswer;
let answersArray = [];
let randoNumber = 69;

function loadZhuyin() {
    pinyinArray = [];
    zhuyinArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "ㄅㄆㄇㄈ";
    quizStudyBox.classList.remove('hidden');
    for (var [zhuyin, value] of Object.entries(zhuyinCharacters)) {
        console.log(zhuyin, value.pinyin);
        zhuyinArray.push(zhuyin);
        pinyinArray.push(value.pinyin);
    };
    loadZhuyinQuiz2();
};
function loadZhuyinQuiz1() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * zhuyinArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = pinyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * zhuyinArray.length);
        let randoAnswer = pinyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadZhuyinQuiz2() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadZhuyinQuiz1);
    randoNumber = Math.floor(Math.random() * pinyinArray.length);
    thisHanzi = pinyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * pinyinArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick2)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadZhuyinQuiz1();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function handleAnswerClick2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadZhuyinQuiz2();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function getSet1() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "Level 1 Hanzi";
    quizStudyBox.classList.remove('hidden');
    for (var [hanzi, value] of Object.entries(hanziLevel1)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    };
    loadHanziQuiz0();
};
function loadHanziQuiz0() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadHanziQuiz1);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick0)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick0() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziQuiz0();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function loadHanziQuiz1() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadHanziQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick3)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick3() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziQuiz1();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function loadHanziQuiz2() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadHanziQuiz0);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick4() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziQuiz2();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function getRadicals() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "Radicals";
    quizStudyBox.classList.remove('hidden');
    for (var [radical, value] of Object.entries(chineseRadicals)) {
        console.log(value.zhuyin);
        hanziArray.push(radical);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    }
    loadRadicalQuiz1();
};
function loadRadicalQuiz1() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadRadicalQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = meaningsArray[randoNumber];
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick5)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick5() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalQuiz1();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function loadRadicalQuiz2() {
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    swapButt.addEventListener('click', loadRadicalQuiz1);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = meaningsArray[randoNumber];
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick6)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick6() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalQuiz2();
        }, 200);
    } else {
        console.log('try again.');
    }
}
function getFlashcards() {
    pageHeader.textContent = "";
    pageHeader.textContent = "Flashcards(under construction)";
    quizStudyBox.classList.add('hidden');
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
function dropdownFunction() {
    document.getElementById("level-drop").classList.toggle("show");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drop-butt')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
