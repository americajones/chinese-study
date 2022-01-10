const quizStudyBox = document.querySelector('#quiz-practice');
const mainCharText = document.querySelector('#main-char');
const mainBox = document.querySelector('#main-box');
const secondaryCharText = document.querySelector('#optional-char');
const answersBox = document.querySelector('.answers');
const skipButt = document.querySelector('.skip');
const swapButt = document.querySelector('.swap');
const flashBox = document.querySelector('.flashBox');
const flashBox2 = document.querySelector('.flashBox2');
const flashBox3 = document.querySelector('.flashBox3');
const sentenceBox = document.querySelector('.sentenceBox');
const pageHeader = document.querySelector('.title');
const hanziWriteBox = document.querySelector('#hanziWriteBox');
const charInput = document.querySelector('#char');
const writeBox = document.querySelector('#character-target-div');
const buttBox = document.querySelector('.bottom-buttons');

let hanziArray = [];
let zhuyinArray = [];
let pinyinArray = [];
let meaningsArray = [];
let thisHanzi;
let trueAnswer;
let selectedAnswer;
let secretMessage = "";
let answersArray = [];
let randoNumber = 69;
let numberArray = [];
let initNumber = 0;
let lightercolor = "#fdecb8";
let lightcolor = "#ffbf6f";
let medlightcolor = "#f7b6a2";
let redcolor = "#ca3b70";
let medpurpcolor = "#58537b";
let darkblucolor = "#1f2b53";
let darkestblucolor = "#111b34";

pageHeader.addEventListener('click', function () {
    location.reload();
});
let sentencesArray = [];
let toneArray = [];
let sMeaningsArray = [];
let sZhuyinArray = [];
let grammarArray = [];
let gMeaningsArray = [];
let gZhuyinArray = [];
let gExplanationArray = [];
let gPatternsArray = [];


function getMeasureWords() {
    grammarArray = [];
    gMeaningsArray = [];
    gZhuyinArray = [];
    gExplanationArray = [];
    gPatternsArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "量詞";
    quizStudyBox.classList.add('hidden');
    sentenceBox.classList.remove('hidden');
    hanziWriteBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(sentenceBox);
    for (var [word, value] of Object.entries(measureWords)) {
        grammarArray.push(word);
        gZhuyinArray.push(value.zhuyin);
        gMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h1');
        let nuDivTit2 = document.createElement('h3');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        let nuTxt3 = document.createElement('p');
        nuDivTit.textContent = word;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        // nuDivTit.classList.add('light');
        nuDivTit2.classList.add('small');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('large');
        nuTxt3.textContent = value.simplified;
        nuTxt3.classList.add('semifaded');
        nuTxt3.classList.add('simplified');
        // nuDivTit2.classList.add('cursive');
        // nuTxt.classList.add('center');
        nuTxt.classList.add('faded');
        nuTxt.classList.remove('cursive');
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuDivTit2);
        nuDiv.append(nuTxt2);
        nuDiv.append(nuTxt3);
        flashBox2.append(nuDiv);
        nuDiv.classList.add('radicalFlashcards');
    }
};

function loadZhuyinRadicalFlashcards() {
    pageHeader.textContent = "";
    pageHeader.textContent = "方字";
    quizStudyBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    let zhuyinCharArray = [];
    let zhuyinMeaningsArray = [];
    let radicalCharArray = [];
    let numberArray = [];
    let radicalZhuArray = [];
    let radicalMeaningsArray = [];
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    for (var [zhuyin, value] of Object.entries(zhuyinCharacters)) {
        zhuyinCharArray.push(zhuyin);
        zhuyinMeaningsArray.push(value.pinyin);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        nuDivTit.textContent = zhuyin;
        nuTxt.textContent = value.pinyin;
        nuDivTit.classList.add('cursive');
        nuTxt.classList.add('small');
        nuTxt.classList.add('semifaded');
        nuDiv.classList.add('zhuyinFlashcards')
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        flashBox.append(nuDiv);
    };
    let numberr = 0;
    for (var [hanzi, value] of Object.entries(chineseRadicals)) {
        radicalCharArray.push(hanzi);
        radicalZhuArray.push(value.zhuyin);
        radicalMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        numberr++;
        let nuNumDiv = document.createElement('div');
        nuNumDiv.classList.add('numLabel');
        nuNumDiv.textContent = numberr;
        nuDivTit.textContent = hanzi;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('xlarge');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuTxt2.classList.add('small');
        nuTxt2.classList.add('pink');
        nuTxt2.classList.add('opacity');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
};
function returnNumberArray(num) {
    let numberArr = new Array(num);
    return numberArr;
};
function loadHanziFlashcards(numb) {
    let numberrr = 0;
    pageHeader.textContent = "";
    pageHeader.textContent = "方字";
    quizStudyBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    let hanziCharArray = [];
    let hanziZhuyinArray = [];
    let hanziMeaningsArray = [];
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    switch (numb) {
        case 1:
            for (var [hanzi, value] of Object.entries(hanzi1)) {
                hanziCharArray.push(hanzi);
                hanziZhuyinArray.push(value.zhuyin);
                hanziMeaningsArray.push(value.english);
                let nuDiv = document.createElement('div');
                let nuDivTit = document.createElement('h2');
                let nuTxt = document.createElement('p');
                let nuTxt2 = document.createElement('p');
                let nuTxt3 = document.createElement('p');
                numberrr++;
                let nuNumDiv = document.createElement('div');
                nuNumDiv.classList.add('numLabel');
                nuNumDiv.textContent = numberrr;
                nuDivTit.textContent = hanzi;
                nuTxt.textContent = value.zhuyin;
                nuTxt2.textContent = value.english;
                nuTxt3.textContent = value.simplified;
                nuTxt3.classList.add('semifaded');
                nuTxt3.classList.add('simplified');
                nuTxt2.classList.add('small');
                nuTxt2.classList.add('opacity');
                nuTxt2.classList.add('pink');
                nuDivTit.classList.add('cursive');
                nuDivTit.classList.add('xlarge');
                // nuTxt.classList.add('cursive');
                nuTxt.classList.add('faded');
                nuDiv.classList.add('radicalFlashcards');
                nuDiv.addEventListener('click', toggleEnglish);
                nuDiv.append(nuNumDiv);
                nuDiv.append(nuDivTit);
                nuDiv.append(nuTxt);
                nuDiv.append(nuTxt2);
                nuDiv.append(nuTxt3);
                flashBox2.append(nuDiv);
                function toggleEnglish() {
                    nuTxt2.classList.toggle('opacity');
                }
            };
            break;
        case 2:
            for (var [hanzi, value] of Object.entries(hanzi2)) {
                hanziCharArray.push(hanzi);
                hanziZhuyinArray.push(value.zhuyin);
                hanziMeaningsArray.push(value.english);
                let nuDiv = document.createElement('div');
                let nuDivTit = document.createElement('h2');
                let nuTxt = document.createElement('p');
                let nuTxt2 = document.createElement('p');
                let nuTxt3 = document.createElement('p');
                numberrr++;
                let nuNumDiv = document.createElement('div');
                nuNumDiv.classList.add('numLabel');
                nuNumDiv.textContent = numberrr;
                nuDivTit.textContent = hanzi;
                nuTxt.textContent = value.zhuyin;
                nuTxt2.textContent = value.english;
                nuTxt3.textContent = value.simplified;
                nuTxt3.classList.add('semifaded');
                nuTxt3.classList.add('simplified');
                nuTxt2.classList.add('small');
                nuTxt2.classList.add('opacity');
                nuTxt2.classList.add('pink');
                nuDivTit.classList.add('cursive');
                nuDivTit.classList.add('xlarge');
                // nuTxt.classList.add('cursive');
                nuTxt.classList.add('faded');
                nuDiv.classList.add('radicalFlashcards');
                nuDiv.addEventListener('click', toggleEnglish);
                nuDiv.append(nuNumDiv);
                nuDiv.append(nuDivTit);
                nuDiv.append(nuTxt);
                nuDiv.append(nuTxt2);
                nuDiv.append(nuTxt3);
                flashBox2.append(nuDiv);
                function toggleEnglish() {
                    nuTxt2.classList.toggle('opacity');
                }
            };
            break;
        case 3:
            for (var [hanzi, value] of Object.entries(hanzi3)) {
                hanziCharArray.push(hanzi);
                hanziZhuyinArray.push(value.zhuyin);
                hanziMeaningsArray.push(value.english);
                let nuDiv = document.createElement('div');
                let nuDivTit = document.createElement('h2');
                let nuTxt = document.createElement('p');
                let nuTxt2 = document.createElement('p');
                let nuTxt3 = document.createElement('p');
                numberrr++;
                let nuNumDiv = document.createElement('div');
                nuNumDiv.classList.add('numLabel');
                nuNumDiv.textContent = numberrr;
                nuDivTit.textContent = hanzi;
                nuTxt.textContent = value.zhuyin;
                nuTxt2.textContent = value.english;
                nuTxt3.textContent = value.simplified;
                nuTxt3.classList.add('semifaded');
                nuTxt3.classList.add('simplified');
                nuTxt2.classList.add('small');
                nuTxt2.classList.add('opacity');
                nuTxt2.classList.add('pink');
                nuDivTit.classList.add('cursive');
                nuDivTit.classList.add('xlarge');
                // nuTxt.classList.add('cursive');
                nuTxt.classList.add('faded');
                nuDiv.classList.add('radicalFlashcards');
                nuDiv.addEventListener('click', toggleEnglish);
                nuDiv.append(nuNumDiv);
                nuDiv.append(nuDivTit);
                nuDiv.append(nuTxt);
                nuDiv.append(nuTxt2);
                nuDiv.append(nuTxt3);
                flashBox2.append(nuDiv);
                function toggleEnglish() {
                    nuTxt2.classList.toggle('opacity');
                }
            };
            break;
        case 4:
            for (var [hanzi, value] of Object.entries(hanzi4)) {
                hanziCharArray.push(hanzi);
                hanziZhuyinArray.push(value.zhuyin);
                hanziMeaningsArray.push(value.english);
                let nuDiv = document.createElement('div');
                let nuDivTit = document.createElement('h2');
                let nuTxt = document.createElement('p');
                let nuTxt2 = document.createElement('p');
                let nuTxt3 = document.createElement('p');
                numberrr++;
                let nuNumDiv = document.createElement('div');
                nuNumDiv.classList.add('numLabel');
                nuNumDiv.textContent = numberrr;
                nuDivTit.textContent = hanzi;
                nuTxt.textContent = value.zhuyin;
                nuTxt2.textContent = value.english;
                nuTxt3.textContent = value.simplified;
                nuTxt3.classList.add('semifaded');
                nuTxt3.classList.add('simplified');
                nuTxt2.classList.add('small');
                nuTxt2.classList.add('opacity');
                nuTxt2.classList.add('pink');
                nuDivTit.classList.add('cursive');
                nuDivTit.classList.add('xlarge');
                // nuTxt.classList.add('cursive');
                nuTxt.classList.add('faded');
                nuDiv.classList.add('radicalFlashcards');
                nuDiv.addEventListener('click', toggleEnglish);
                nuDiv.append(nuNumDiv);
                nuDiv.append(nuDivTit);
                nuDiv.append(nuTxt);
                nuDiv.append(nuTxt2);
                nuDiv.append(nuTxt3);
                flashBox2.append(nuDiv);
                function toggleEnglish() {
                    nuTxt2.classList.toggle('opacity');
                }
            };
            break;
    }
};
function loadCards() {
    hanziCharArray.push(word);
    hanziZhuyinArray.push(value.zhuyin);
    hanziMeaningsArray.push(value.english);
    let nuDiv = document.createElement('div');
    let nuDivTit = document.createElement('h2');
    let nuTxt = document.createElement('p');
    let nuTxt2 = document.createElement('p');
    number++;
    let nuNumDiv = document.createElement('div');
    nuNumDiv.classList.add('numLabel');
    nuNumDiv.textContent = number;
    nuDivTit.textContent = word;
    nuTxt.textContent = value.zhuyin;
    nuTxt2.textContent = value.english;
    nuTxt2.classList.add('small');
    nuTxt2.classList.add('opacity');
    nuTxt2.classList.add('pink');
    nuDivTit.classList.add('cursive');
    nuDivTit.classList.add('xlarge');
    // nuTxt.classList.add('cursive');
    nuTxt.classList.add('faded');
    nuDiv.classList.add('radicalFlashcards');
    nuDiv.addEventListener('click', toggleEnglish);
    nuDiv.append(nuNumDiv);
    nuDiv.append(nuDivTit);
    nuDiv.append(nuTxt);
    nuDiv.append(nuTxt2);
    flashBox2.append(nuDiv);
    function toggleEnglish() {
        nuTxt2.classList.toggle('opacity');
    }
}
function makeButtons(swapEvent, skipEvent) {
    removeAllChildren(buttBox);
    let secret = document.createElement('p');
    secret.classList.add('secret-message')
    secret.textContent = "";
    let skipButt = document.createElement('button');
    skipButt.textContent = "skip";
    skipButt.classList.add("skip");
    skipButt.classList.add("butt");
    let swapButt = document.createElement('button');
    swapButt.textContent = "swap quiz style";
    swapButt.classList.add("swap");
    swapButt.classList.add("butt");
    skipButt.addEventListener('click', skipEvent);
    swapButt.addEventListener('click', swapEvent);
    buttBox.append(swapButt);
    buttBox.append(secret);
    buttBox.append(skipButt);
    secretMessage = document.querySelector('.secret-message');
};
function loadZhuyin() {
    pinyinArray = [];
    zhuyinArray = [];
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    pageHeader.textContent = "";
    pageHeader.textContent = "ㄅㄆㄇㄈ";
    quizStudyBox.classList.remove('hidden');
    for (var [zhuyin, value] of Object.entries(zhuyinCharacters)) {
        // console.log(zhuyin, value.pinyin);
        zhuyinArray.push(zhuyin);
        pinyinArray.push(value.pinyin);
    };
};
function handleAnswerClick(timeoutFunction, event, time) {
    console.log(event.target);
    selectedAnswer = event.target.textContent;
    // console.log("you chose:", selectedAnswer, " correct answer is: ", trueAnswer)
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            timeoutFunction();
            secretMessage.textContent = '';
        }, time);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function handleAnswerClickEng(timeoutFunction, event, time) {
    console.log(event.target);
    selectedAnswer = event.target.textContent;
    // console.log("you chose:", selectedAnswer, " correct answer is: ", trueAnswer)
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", meaningsArray[randoNumber]);
        console.log('. * nice! * .');
        setTimeout(() => {
            timeoutFunction();
            secretMessage.textContent = '';
        }, time);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function getSet1() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    toneArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "漢字";
    quizStudyBox.classList.remove('hidden');
    for (var [hanzi, value] of Object.entries(hanzi1)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
        toneArray.push(value.tone);
    };
};
function getSet2() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    toneArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "漢字";
    quizStudyBox.classList.remove('hidden');
    for (var [hanzi, value] of Object.entries(hanzi2)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
        toneArray.push(value.tone);
    };
};
function getSet3() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    toneArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "漢字";
    quizStudyBox.classList.remove('hidden');
    for (var [hanzi, value] of Object.entries(hanzi3)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
        toneArray.push(value.tone);
    };
};
function getSet4() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    toneArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "漢字";
    quizStudyBox.classList.remove('hidden');
    for (var [hanzi, value] of Object.entries(hanzi4)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
        toneArray.push(value.tone);
    };
};
function loadHanziFamiliQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziFamiliQuiz2, loadHanziFamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadHanziFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadHanziFamiliQuiz2() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziFamiliQuiz, loadHanziFamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadHanziFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadHanziMeaningsQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziMeaningsQuiz2, loadHanziMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadHanziMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadHanziMeaningsQuiz2() {
    getSet1();
    removeAllChildren(answersBox);
    mainCharText.classList.remove('cursive');
    makeButtons(loadHanziMeaningsQuiz, loadHanziMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadHanziMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadHanziZhuyinQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziZhuyinQuiz2, loadHanziZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadHanziZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadHanziZhuyinQuiz2() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziZhuyinQuiz, loadHanziZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadHanziZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadHanziToneQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    makeButtons(loadHanziToneQuiz, loadHanziToneQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = toneArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = toneArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        if (answer === 1) {
            newDiv.textContent = "_";
        } else if (answer === 2) {
            newDiv.textContent = "ˊ";
        } else if (answer === 3) {
            newDiv.textContent = "ˇ";
        } else if (answer === 4) {
            newDiv.textContent = `ˋ`;
        } else if (answer === 5) {
            newDiv.textContent = `.`;
        }
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        newDiv.id = answer;
        answersBox.append(newDiv);
    });
};
function load2HanziFamiliQuiz() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziFamiliQuiz2, load2HanziFamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load2HanziFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load2HanziFamiliQuiz2() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziFamiliQuiz, load2HanziFamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load2HanziFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load2HanziMeaningsQuiz() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziMeaningsQuiz2, load2HanziMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load2HanziMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load2HanziMeaningsQuiz2() {
    getSet2();
    removeAllChildren(answersBox);
    mainCharText.classList.remove('cursive');
    makeButtons(load2HanziMeaningsQuiz, load2HanziMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load2HanziMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load2HanziZhuyinQuiz() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziZhuyinQuiz2, load2HanziZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load2HanziZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function load2HanziZhuyinQuiz2() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziZhuyinQuiz, load2HanziZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load2HanziZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load2HanziToneQuiz() {
    getSet2();
    removeAllChildren(answersBox);
    makeButtons(load2HanziToneQuiz, load2HanziToneQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = toneArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = toneArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        if (answer === 1) {
            newDiv.textContent = "_";
        } else if (answer === 2) {
            newDiv.textContent = "ˊ";
        } else if (answer === 3) {
            newDiv.textContent = "ˇ";
        } else if (answer === 4) {
            newDiv.textContent = `ˋ`;
        } else if (answer === 5) {
            newDiv.textContent = `.`;
        }
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        newDiv.id = answer;
        answersBox.append(newDiv);
    });
};
function load3HanziFamiliQuiz() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziFamiliQuiz2, load3HanziFamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadHanziFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load3HanziFamiliQuiz2() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziFamiliQuiz, load3HanziFamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load3HanziFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load3HanziMeaningsQuiz() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziMeaningsQuiz2, load3HanziMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load3HanziMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load3HanziMeaningsQuiz2() {
    getSet3();
    removeAllChildren(answersBox);
    mainCharText.classList.remove('cursive');
    makeButtons(load3HanziMeaningsQuiz, load3HanziMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load3HanziMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load3HanziZhuyinQuiz() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziZhuyinQuiz2, load3HanziZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load3HanziZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function load3HanziZhuyinQuiz2() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziZhuyinQuiz, load3HanziZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load3HanziZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load3HanziToneQuiz() {
    getSet3();
    removeAllChildren(answersBox);
    makeButtons(load3HanziToneQuiz, load3HanziToneQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = toneArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = toneArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        if (answer === 1) {
            newDiv.textContent = "_";
        } else if (answer === 2) {
            newDiv.textContent = "ˊ";
        } else if (answer === 3) {
            newDiv.textContent = "ˇ";
        } else if (answer === 4) {
            newDiv.textContent = `ˋ`;
        } else if (answer === 5) {
            newDiv.textContent = `.`;
        }
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        newDiv.id = answer;
        answersBox.append(newDiv);
    });
};
function load4HanziFamiliQuiz() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziFamiliQuiz2, load4HanziFamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load4HanziFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load4HanziFamiliQuiz2() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziFamiliQuiz, load4HanziFamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load4HanziFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load4HanziMeaningsQuiz() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziMeaningsQuiz2, load4HanziMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load4HanziMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function load4HanziMeaningsQuiz2() {
    getSet4();
    removeAllChildren(answersBox);
    mainCharText.classList.remove('cursive');
    makeButtons(load4HanziMeaningsQuiz, load4HanziMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(load4HanziMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load4HanziZhuyinQuiz() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziZhuyinQuiz2, load4HanziZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load4HanziZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function load4HanziZhuyinQuiz2() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziZhuyinQuiz, load4HanziZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(load4HanziZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function load4HanziToneQuiz() {
    getSet4();
    removeAllChildren(answersBox);
    makeButtons(load4HanziToneQuiz, load4HanziToneQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = toneArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = toneArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        if (answer === 1) {
            newDiv.textContent = "_";
        } else if (answer === 2) {
            newDiv.textContent = "ˊ";
        } else if (answer === 3) {
            newDiv.textContent = "ˇ";
        } else if (answer === 4) {
            newDiv.textContent = `ˋ`;
        } else if (answer === 5) {
            newDiv.textContent = `.`;
        }
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        newDiv.id = answer;
        answersBox.append(newDiv);
    });
};
function handleAnswerClick24() {
    selectedAnswer = this.id;
    console.log(selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            load2HanziToneQuiz();
            secretMessage.textContent = '';
        }, 1700);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function handleAnswerClick34() {
    selectedAnswer = this.id;
    console.log(selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            load3HanziToneQuiz();
            secretMessage.textContent = '';
        }, 1700);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function handleAnswerClick44() {
    selectedAnswer = this.id;
    console.log(selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            load4HanziToneQuiz();
            secretMessage.textContent = '';
        }, 1700);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function handleAnswerClick4() {
    selectedAnswer = this.id;
    console.log(selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziToneQuiz();
            secretMessage.textContent = '';
        }, 1700);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
let writingAnswers = "";
const charTarget = document.querySelector('#character-target-div');
const wbuttBox = document.querySelector('.writingButtBox');
const subButt = document.querySelector('#subButt')
const wskipButt = document.querySelector('#skipButt')
function loadHanziWritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    getSet1();
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    hanziWriteBox.classList.remove('hidden');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    makeCharacter(thisHanzi);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClick3);
    subButt.addEventListener('click', handleAnswerClick2);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.addEventListener('click', loadHanziWritingQuiz);
    wskipButt.removeEventListener('click', loadWordsWritingQuiz);
};

function handleAnswerClick2() {
    selectedAnswer = charInput.value;
    console.log("ANSWER IS: ", selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        console.log('. * nice! * .');
        charInput.value = "";
        setTimeout(() => {
            loadHanziWritingQuiz();
            secretMessage.textContent = '';
        }, 2500);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
};

function makeCharacter(char) {
    var writer = HanziWriter.create('character-target-div', char, {
        width: 200,
        height: 200,
        padding: 10,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 500,
        drawingColor: "#ffffff",
        strokeColor: '#000',
        outlineColor: '#6670a0',
        // radicalColor: '#168F16'
    });
    document.getElementById('animate-button').addEventListener('click', function () {
        writer.animateCharacter();
    });
};
function getRadicals() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "部首";
    quizStudyBox.classList.remove('hidden');
    for (var [radical, value] of Object.entries(chineseRadicals)) {
        console.log(value.zhuyin);
        hanziArray.push(radical);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    }
};
function loadRadicalMeaningsQuiz() {
    getRadicals();
    removeAllChildren(answersBox);
    makeButtons(loadRadicalMeaningsQuiz2, loadRadicalMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadRadicalMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadRadicalMeaningsQuiz2() {
    getRadicals();
    removeAllChildren(answersBox);
    makeButtons(loadRadicalMeaningsQuiz, loadRadicalMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    // secondaryCharText.classList.add('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadRadicalMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadRadicalZhuyinQuiz() {
    getRadicals();
    removeAllChildren(answersBox);
    makeButtons(loadRadicalZhuyinQuiz2, loadRadicalZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadRadicalZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadRadicalZhuyinQuiz2() {
    getRadicals();
    removeAllChildren(answersBox);
    makeButtons(loadRadicalZhuyinQuiz, loadRadicalZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadRadicalZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};

let lesearchButt;

function loadSearchPage() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    let nuDiv = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let searchResults = document.createElement('div');
    let searchResults2 = document.createElement('div');
    let searchResults3 = document.createElement('div');
    nuDiv.classList.add('searchBundle');
    input.classList.add('searchBox');
    searchResults.classList.add('searchRes');
    searchResults2.classList.add('searchRes2');
    searchResults3.classList.add('searchRes3');
    button.classList.add('searchButt');
    button.classList.add('butt');
    button.textContent = "search";
    button.addEventListener('click', leSearch);
    nuDiv.append(input, button, searchResults, searchResults2, searchResults3);
    flashBox.append(nuDiv);
};

let searchResS = [];
let searchRes = [];
let searchResMeanings = [];
let searchResZhuyin = [];
function leSearch() {
    searchRes = [];
    searchResS = [];
    searchResMeanings = [];
    searchResZhuyin = [];
    let searchBox = document.querySelector('.searchBox');
    let searchResBox = document.querySelector('.searchRes');
    let searchResBox2 = document.querySelector('.searchRes2');
    let searchResBox3 = document.querySelector('.searchRes3');
    removeAllChildren(searchResBox);
    removeAllChildren(searchResBox2);
    removeAllChildren(searchResBox3);
    let searchTerm = searchBox.value;
    console.log(searchTerm);
    for (let [key, value] of Object.entries(hanzi1)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(hanzi2)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(hanzi3)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(hanzi4)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(measureWords)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    searchRes.forEach((hanzi, index) => {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = hanzi;
        nuTxt.textContent = searchResZhuyin[index];
        nuTxt2.textContent = searchResMeanings[index];
        nuTxt2.classList.add('small');
        nuTxt.classList.add('opacity');
        nuTxt2.classList.add('opacity');
        nuTxt2.classList.add('pink');
        nuDivTit.classList.add('cursive');
        // nuTxt.classList.add('faded');
        nuDiv.classList.add('searchResBox');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
            nuTxt.classList.toggle('opacity');
        }
        searchResBox.append(nuDiv);
    })
    searchResBox2.append("Sentences including '" + searchTerm + "' : " + searchResS);
};

function loadRadicalWritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    sentenceBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    answersBox.append("Currently Under Construction");
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

//menu shit

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const finals = document.querySelectorAll(".final");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "學 ▼";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "✖";
    }
};

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
};

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
};
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
};
for (let item of finals) {
    item.addEventListener('click', toggleMenu, false)
};
document.addEventListener("click", closeSubmenu, false);