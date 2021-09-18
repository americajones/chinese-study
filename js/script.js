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
        nuDivTit.classList.add('large');
        nuDivTit.classList.add('cursive');
        // nuDivTit2.classList.add('cursive');
        nuDivTit2.classList.add('padding');
        nuTxt.classList.add('center');
        nuTxt.classList.add('faded');
        nuTxt2.classList.add('left');
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuDivTit2);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        nuDiv.classList.add('grammBox');
    }
};
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
        nuDivTit.classList.add('large');
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
};
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
        let nuNuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = sentence;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuNuDiv.classList.add('group');
        nuDiv.classList.add('sentenceSingle');
        nuDivTit.classList.add('sentence');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('center');
        nuTxt.classList.add('opacity');
        nuTxt.classList.add('zhuyin');
        nuTxt2.classList.add('opacity');
        // nuTxt.classList.add('center');
        nuTxt2.classList.add('center');
        nuNuDiv.append(nuDivTit);
        nuNuDiv.append(nuTxt);
        nuDiv.append(nuNuDiv, nuTxt2);
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
    for (var [hanzi, value] of Object.entries(hanziAll)) {
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
};
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
    for (var [word, value] of Object.entries(HSK1words)) {
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
    };
};
function loadBookWordFlashcards() {
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
    let label = "";
    for (var [word, value] of Object.entries(plecoLookupWords)) {
        label = document.createElement('div');
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
        nuDivTit.classList.add('large');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox.append(nuDiv);
        label.textContent = "Pleco";
        label.classList.add('label');
        label.classList.add('radicalFlashcards');
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
    flashBox.prepend(label);
    label = "";
    number = 0;
    for (var [word, value] of Object.entries(bookWordsXWZ)) {
        label = document.createElement('div');
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
        nuDivTit.classList.add('large');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        label.textContent = value.book;
        label.classList.add('label');
        label.classList.add('radicalFlashcards');
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
    flashBox2.prepend(label);
    label = "";
    number = 0;
    for (var [word, value] of Object.entries(bookWordsGradedReaders)) {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        label = document.createElement('div');
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
        nuDivTit.classList.add('large');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox3.append(nuDiv);
        label.classList.add('label');
        label.classList.add('radicalFlashcards');
        label.textContent = "Graded Readers";
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
    flashBox3.prepend(label);
    label = "";
    number = 0;
    for (var [word, value] of Object.entries(bookWordsCACG)) {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        label = document.createElement('div');
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
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuDivTit.classList.add('large');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox3.append(nuDiv);
        label.classList.add('label');
        label.classList.add('radicalFlashcards');
        label.textContent = value.book;
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
    flashBox3.append(label);
};
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
function loadZhuyinQuiz1() {
    loadZhuyin();
    removeAllChildren(answersBox);
    makeButtons(loadZhuyinQuiz2, loadZhuyinQuiz1);
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadZhuyinQuiz1, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadZhuyinQuiz2() {
    loadZhuyin();
    removeAllChildren(answersBox);
    makeButtons(loadZhuyinQuiz1, loadZhuyinQuiz2);
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
        newDiv.addEventListener('click', function (e) {
            handleAnswerClick(loadZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
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
    for (var [hanzi, value] of Object.entries(hanziAll)) {
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
        }, 1000);
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
    for (var [word, value] of Object.entries(HSK1words)) {
        // console.log(value.zhuyin);
        hanziArray.push(word);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    };
};
function loadWordsFamiliQuiz() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsFamiliQuiz2, loadWordsFamiliQuiz);
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
            handleAnswerClick(loadWordsFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsFamiliQuiz2() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsFamiliQuiz, loadWordsFamiliQuiz2);
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
            handleAnswerClick(loadWordsFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsMeaningsQuiz2, loadWordsMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz2() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsMeaningsQuiz, loadWordsMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWordsZhuyinQuiz() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsZhuyinQuiz2, loadWordsZhuyinQuiz);
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
            handleAnswerClickEng(loadWordsZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadWordsZhuyinQuiz2() {
    getWords();
    removeAllChildren(answersBox);
    makeButtons(loadWordsZhuyinQuiz, loadWordsZhuyinQuiz2);
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWordsZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function getBookWords() {
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
    pageHeader.textContent = "書話";
    quizStudyBox.classList.remove('hidden');
    for (var [word, value] of Object.entries(bookWordsGradedReaders)) {
        // console.log(value.zhuyin);
        hanziArray.push(word);
        zhuyinArray.push(value.zhuyin);
        meaningsArray.push(value.english);
    };
};
function loadBookWordsFamiliQuiz() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsFamiliQuiz2, loadBookWordsFamiliQuiz);
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
            handleAnswerClick(loadBookWordsFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadBookWordsFamiliQuiz2() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsFamiliQuiz, loadBookWordsFamiliQuiz2);
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
            handleAnswerClick(loadBookWordsFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadBookWordsMeaningsQuiz() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsMeaningsQuiz2, loadBookWordsMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadBookWordsMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadBookWordsMeaningsQuiz2() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsMeaningsQuiz, loadBookWordsMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadBookWordsMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadBookWordsZhuyinQuiz() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsZhuyinQuiz2, loadBookWordsZhuyinQuiz);
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
            handleAnswerClickEng(loadBookWordsZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadBookWordsZhuyinQuiz2() {
    getBookWords();
    removeAllChildren(answersBox);
    makeButtons(loadBookWordsZhuyinQuiz, loadBookWordsZhuyinQuiz2);
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadBookWordsZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
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
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
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
    subButt.removeEventListener('click', handleAnswerClick2);
    subButt.addEventListener('click', handleAnswerClick3);
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
};
function handleAnswerClick3() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWordsWritingQuiz();
            secretMessage.textContent = '';
        }, 4000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
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
    nuDiv.classList.add('searchBundle');
    input.classList.add('searchBox');
    searchResults.classList.add('searchRes');
    searchResults2.classList.add('searchRes2');
    button.classList.add('searchButt');
    button.classList.add('butt');
    button.textContent = "search";
    button.addEventListener('click', leSearch);
    nuDiv.append(input, button, searchResults, searchResults2);
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
    removeAllChildren(searchResBox);
    removeAllChildren(searchResBox2);
    let searchTerm = searchBox.value;
    console.log(searchTerm);
    for (let [key, value] of Object.entries(hanziAll)) {
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
    for (let [key, value] of Object.entries(HSK1words)) {
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
    for (let [key, value] of Object.entries(plecoLookupWords)) {
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
    for (let [key, value] of Object.entries(bookWordsXWZ)) {
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
    for (let [key, value] of Object.entries(bookWordsGradedReaders)) {
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
    for (let [key, value] of Object.entries(bookWordsCACG)) {
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
    for (let [key, value] of Object.entries(A1sentences)) {
        if (key.search(searchTerm) !== -1) {
            searchResS.push(" " + key)
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