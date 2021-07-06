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
const secretMessage = document.querySelector('.secret-message');
const hanziWriteBox = document.querySelector('#hanziWriteBox');
const charInput = document.querySelector('#char');
const writeBox = document.querySelector('#character-target-div')
let hanziArray = [];
let zhuyinArray = [];
let pinyinArray = [];
let meaningsArray = [];
let thisHanzi;
let trueAnswer;
let selectedAnswer;
let answersArray = [];
let randoNumber = 69;
let numberArray = [];
let lightercolor = "#fdecb8";
let lightcolor = "#ffbf6f";
let medlightcolor = "#f7b6a2";
let redcolor = "#ca3b70";
let medpurpcolor = "#58537b";
let darkblucolor = "#1f2b53";
let darkestblucolor = "#111b34";

pageHeader.addEventListener('click', function () {
    location.reload()
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

function getGrammar() {
    grammarArray = [];
    gMeaningsArray = [];
    gZhuyinArray = [];
    gExplanationArray = [];
    gPatternsArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "語法";
    quizStudyBox.classList.add('hidden');
    sentenceBox.classList.remove('hidden');
    hanziWriteBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(sentenceBox);
    for (var [gramm, value] of Object.entries(A1grammar)) {
        grammarArray.push(gramm);
        gZhuyinArray.push(value.zhuyin);
        gMeaningsArray.push(value.english);
        gExplanationArray.push(value.explanation);
        gPatternsArray.push(value.pattern);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuDivTit2 = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = gramm;
        nuDivTit2.textContent = value.pattern;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.explanation;
        nuDivTit.classList.add('light');
        nuDivTit2.classList.add('light');
        nuDivTit.classList.add('cursive');
        // nuDivTit2.classList.add('cursive');
        nuDivTit2.classList.add('padding');
        nuTxt.classList.add('center');
        // nuTxt.classList.add('cursive');
        nuTxt2.classList.add('left');
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuDivTit2);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        nuDiv.classList.add('grammBox');
    }
}
function getIdioms() {
    grammarArray = [];
    gMeaningsArray = [];
    gZhuyinArray = [];
    gExplanationArray = [];
    gPatternsArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "成語";
    quizStudyBox.classList.add('hidden');
    sentenceBox.classList.remove('hidden');
    hanziWriteBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(sentenceBox);
    for (var [idiom, value] of Object.entries(idioms)) {
        grammarArray.push(idiom);
        gZhuyinArray.push(value.zhuyin);
        gMeaningsArray.push(value.english);
        gExplanationArray.push(value.explanation);
        gPatternsArray.push(value.pattern);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h1');
        let nuDivTit2 = document.createElement('h3');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = idiom;
        nuDivTit2.textContent = value.literal;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.meaning;
        // nuDivTit.classList.add('light');
        nuDivTit2.classList.add('small');
        nuDivTit.classList.add('cursive');
        // nuDivTit2.classList.add('cursive');
        nuDivTit2.classList.add('padding');
        // nuTxt.classList.add('center');
        nuTxt.classList.add('faded');
        nuTxt.classList.remove('cursive');
        nuTxt2.classList.add('left');
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuDivTit2);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        nuDiv.classList.add('grammBox');
    }
}
function getSentences() {
    sentencesArray = [];
    sMeaningsArray = [];
    sZhuyinArray = [];
    pageHeader.textContent = "";
    pageHeader.textContent = "句子";
    quizStudyBox.classList.add('hidden');
    sentenceBox.classList.remove('hidden');
    hanziWriteBox.classList.add('hidden');
    removeAllChildren(sentenceBox);
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    for (var [sentence, value] of Object.entries(A1sentences)) {
        sentencesArray.push(sentence);
        sZhuyinArray.push(value.zhuyin);
        sMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = sentence;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuDivTit.classList.add('sentence');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('center');
        nuTxt.classList.add('opacity');
        nuTxt2.classList.add('opacity');
        nuTxt.classList.add('center');
        nuTxt2.classList.add('center');
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        sentenceBox.append(nuDiv);
        nuDivTit.addEventListener('click', function () {
            nuTxt.classList.toggle('opacity');
            nuTxt2.classList.toggle('opacity');
        })

    };
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
        nuTxt.classList.add('cursive');
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
}
function returnNumberArray(num) {
    let numberArr = new Array(num);
    return numberArr;
}
function loadHanziFlashcards() {
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
    for (var [hanzi, value] of Object.entries(hanziLevel1)) {
        hanziCharArray.push(hanzi);
        hanziZhuyinArray.push(value.zhuyin);
        hanziMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        numberrr++;
        let nuNumDiv = document.createElement('div');
        nuNumDiv.classList.add('numLabel');
        nuNumDiv.textContent = numberrr;
        nuDivTit.textContent = hanzi;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuTxt2.classList.add('small');
        nuTxt2.classList.add('opacity');
        nuTxt2.classList.add('pink');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('xlarge');
        nuTxt.classList.add('cursive');
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
    };
}
function loadWordFlashcards() {
    let number = 0;
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
    for (var [word, value] of Object.entries(A1words)) {
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
        // nuTxt2.classList.add('opacity');
        nuTxt2.classList.add('pink');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('xlarge');
        nuTxt.classList.add('cursive');
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
    };
}

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
        console.log(zhuyin, value.pinyin);
        zhuyinArray.push(zhuyin);
        pinyinArray.push(value.pinyin);
    };
};
function loadZhuyinQuiz1() {
    loadZhuyin();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadZhuyinQuiz1);
    swapButt.addEventListener('click', loadZhuyinQuiz2);
    skipButt.removeEventListener('click', loadZhuyinQuiz2);
    skipButt.addEventListener('click', loadZhuyinQuiz1);
    randoNumber = Math.floor(Math.random() * zhuyinArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive')
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadZhuyinQuiz2() {
    loadZhuyin();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadZhuyinQuiz2);
    swapButt.addEventListener('click', loadZhuyinQuiz1);
    skipButt.addEventListener('click', loadZhuyinQuiz2);
    skipButt.removeEventListener('click', loadZhuyinQuiz1);
    randoNumber = Math.floor(Math.random() * pinyinArray.length);
    thisHanzi = pinyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick2)
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadZhuyinQuiz1();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function handleAnswerClick2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadZhuyinQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
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
    for (var [hanzi, value] of Object.entries(hanziLevel1)) {
        // console.log(value.zhuyin);
        hanziArray.push(hanzi);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
        toneArray.push(value.tone);
    };
};
function loadHanziMeaningsQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadHanziMeaningsQuiz);
    swapButt.addEventListener('click', loadHanziMeaningsQuiz2);
    skipButt.removeEventListener('click', loadHanziMeaningsQuiz2);
    skipButt.addEventListener('click', loadHanziMeaningsQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick0)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function loadHanziMeaningsQuiz2() {
    getSet1();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    mainCharText.classList.remove('cursive');
    swapButt.removeEventListener('click', loadHanziMeaningsQuiz2);
    swapButt.addEventListener('click', loadHanziMeaningsQuiz);
    skipButt.removeEventListener('click', loadHanziMeaningsQuiz);
    skipButt.addEventListener('click', loadHanziMeaningsQuiz2);
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
        newDiv.addEventListener('click', handleAnswerClick1)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick0() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziMeaningsQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function handleAnswerClick1() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziMeaningsQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadHanziZhuyinQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadHanziMeaningsQuiz);
    swapButt.removeEventListener('click', loadHanziZhuyinQuiz);
    swapButt.addEventListener('click', loadHanziZhuyinQuiz2);
    skipButt.removeEventListener('click', loadHanziZhuyinQuiz2);
    skipButt.addEventListener('click', loadHanziZhuyinQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick3)
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
}

function handleAnswerClick3() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziZhuyinQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadHanziZhuyinQuiz2() {
    getSet1();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadHanziZhuyinQuiz2);
    swapButt.addEventListener('click', loadHanziZhuyinQuiz);
    skipButt.removeEventListener('click', loadHanziZhuyinQuiz);
    skipButt.addEventListener('click', loadHanziZhuyinQuiz2);
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
        newDiv.addEventListener('click', handleAnswerClick4)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick4() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziZhuyinQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadHanziToneQuiz() {
    getSet1();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadHanziMeaningsQuiz);
    swapButt.removeEventListener('click', loadHanziZhuyinQuiz2);
    swapButt.addEventListener('click', loadHanziToneQuiz);
    skipButt.removeEventListener('click', loadHanziZhuyinQuiz);
    skipButt.addEventListener('click', loadHanziToneQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick9)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        newDiv.id = answer;
        answersBox.append(newDiv);
    });
}
function handleAnswerClick9() {
    selectedAnswer = this.id;
    console.log(selectedAnswer);
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadHanziToneQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
let writingAnswers = "";
const charTarget = document.querySelector('#character-target-div');
const buttBox = document.querySelector('.writingButtBox');
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
    skipButt.classList.add('hidden');
    swapButt.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
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
    subButt.removeEventListener('click', handleAnswerClick15);
    subButt.addEventListener('click', handleAnswerClick10);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.addEventListener('click', loadHanziWritingQuiz);
    wskipButt.removeEventListener('click', loadWordsWritingQuiz);

}
function handleAnswerClick10() {
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
}
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
}
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
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    skipButt.addEventListener('click', loadRadicalMeaningsQuiz);
    skipButt.removeEventListener('click', loadRadicalMeaningsQuiz2);
    swapButt.addEventListener('click', loadRadicalMeaningsQuiz2);
    swapButt.removeEventListener('click', loadRadicalMeaningsQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick5)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function loadRadicalMeaningsQuiz2() {
    getRadicals();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    skipButt.addEventListener('click', loadRadicalMeaningsQuiz2);
    skipButt.removeEventListener('click', loadRadicalMeaningsQuiz);
    swapButt.addEventListener('click', loadRadicalMeaningsQuiz);
    swapButt.removeEventListener('click', loadRadicalMeaningsQuiz2);
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
        newDiv.addEventListener('click', handleAnswerClick7)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick5() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalMeaningsQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function handleAnswerClick7() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalMeaningsQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadRadicalZhuyinQuiz() {
    getRadicals();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    skipButt.removeEventListener('click', loadRadicalZhuyinQuiz2);
    skipButt.addEventListener('click', loadRadicalZhuyinQuiz);
    swapButt.removeEventListener('click', loadRadicalZhuyinQuiz);
    swapButt.addEventListener('click', loadRadicalZhuyinQuiz2);
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
        newDiv.addEventListener('click', handleAnswerClick6)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick6() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalZhuyinQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadRadicalZhuyinQuiz2() {
    getRadicals();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    skipButt.removeEventListener('click', loadRadicalZhuyinQuiz);
    skipButt.addEventListener('click', loadRadicalZhuyinQuiz2);
    swapButt.removeEventListener('click', loadRadicalZhuyinQuiz2);
    swapButt.addEventListener('click', loadRadicalZhuyinQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick8)
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick8() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadRadicalZhuyinQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}

function getWords() {
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
    pageHeader.textContent = "話";
    quizStudyBox.classList.remove('hidden');
    for (var [word, value] of Object.entries(A1words)) {
        // console.log(value.zhuyin);
        hanziArray.push(word);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    };
};
function loadWordsMeaningsQuiz() {
    getWords();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadWordsMeaningsQuiz);
    swapButt.addEventListener('click', loadWordsMeaningsQuiz2);
    skipButt.removeEventListener('click', loadWordsMeaningsQuiz2);
    skipButt.addEventListener('click', loadWordsMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('cursive');
    secondaryCharText.classList.add('small')
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
        newDiv.addEventListener('click', handleAnswerClick11)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
}
function loadWordsMeaningsQuiz2() {
    getWords();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    mainCharText.classList.remove('cursive');
    swapButt.removeEventListener('click', loadWordsMeaningsQuiz2);
    swapButt.addEventListener('click', loadWordsMeaningsQuiz);
    skipButt.removeEventListener('click', loadWordsMeaningsQuiz);
    skipButt.addEventListener('click', loadWordsMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('small')
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
        newDiv.addEventListener('click', handleAnswerClick12)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick11() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsMeaningsQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function handleAnswerClick12() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsMeaningsQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadWordsZhuyinQuiz() {
    getWords();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadWordsZhuyinQuiz);
    swapButt.addEventListener('click', loadWordsZhuyinQuiz2);
    skipButt.removeEventListener('click', loadWordsZhuyinQuiz2);
    skipButt.addEventListener('click', loadWordsZhuyinQuiz);
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
        newDiv.addEventListener('click', handleAnswerClick13)
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
}

function handleAnswerClick13() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsZhuyinQuiz();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadWordsZhuyinQuiz2() {
    getWords();
    removeAllChildren(answersBox);
    swapButt.classList.remove('hidden');
    skipButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadWordsZhuyinQuiz2);
    swapButt.addEventListener('click', loadWordsZhuyinQuiz);
    skipButt.removeEventListener('click', loadWordsZhuyinQuiz);
    skipButt.addEventListener('click', loadWordsZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    mainCharText.classList.remove('cursive');
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
        newDiv.addEventListener('click', handleAnswerClick14)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
}
function handleAnswerClick14() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsZhuyinQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
}
function loadWordsWritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    getWords();
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    skipButt.classList.add('hidden');
    swapButt.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    hanziWriteBox.classList.remove('hidden');
    writeBox.classList.add('words');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    var char1 = thisHanzi.charAt(0);
    var char2 = thisHanzi.charAt(1);
    makeWord(char1);
    makeWord(char2);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClick10);
    subButt.addEventListener('click', handleAnswerClick15);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.removeEventListener('click', loadHanziWritingQuiz);
    wskipButt.addEventListener('click', loadWordsWritingQuiz);
};
function makeWord(char) {
    var writer = HanziWriter.create('character-target-div', char, {
        width: 100,
        height: 100,
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
}
function handleAnswerClick15() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWordsWritingQuiz();
            secretMessage.textContent = '';
        }, 5000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
}
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
}
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
}

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
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
}
for (let item of finals) {
    item.addEventListener('click', toggleMenu, false)
}
document.addEventListener("click", closeSubmenu, false);