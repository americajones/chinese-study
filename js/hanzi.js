const hanziLevel1 = {
    "我": {
        "zhuyin": "ㄨㄛˇ",
        "pinyin": "wǒ ",
        "tone": 3,
        "english": "I, me",
        "radicals": ["手", "戈"]
    },
    "的": {
        "zhuyin": "ㄉㄜ.",
        "pinyin": "de",
        "tone": 5,
        "english": "of, (possessive p.)",
        "radicals": ["白", "勺"]
    },
    "你": {
        "zhuyin": "ㄋ一ˇ",
        "pinyin": "nǐ",
        "tone": 3,
        "english": "you",
        "radicals": ["亻", "尔"]
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "is, to be",
        "radicals": ["日", "一", "止"]
    },
    "了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "le",
        "tone": 5,
        "english": "-ed, (completed action p.)",
        "radicals": [""]
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "no, not",
        "radicals": ["丆", "卜"]
    },
    "們": {
        "zhuyin": "ㄇㄣ˙",
        "pinyin": "men",
        "tone": 3,
        "english": "(plural p.)",
        "radicals": ["亻", "門"]
    },
    "這 ": {
        "zhuyin": "ㄓㄜˋ",
        "pinyin": "zhè",
        "tone": 4,
        "english": "this",
        "radicals": ["辶", "言"]
    },

    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one, a",
        "radicals": ["一"]
    },
    "他": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "he",
        "radicals": ["亻", "也"]
    },
    "麼": {
        "zhuyin": "ㄇㄜ˙",
        "pinyin": "me",
        "tone": 5,
        "english": "(interrogative p.)",
        "radicals": ["麻", "幺"]
    },
    "在": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "zài",
        "tone": 4,
        "english": "at",
        "radicals": ["𠂇", "土"]
    },
    "有": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "to have, there is",
        "radicals": ["𠂇", "月"]
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "gè",
        "tone": 4,
        "english": "individual, (general measure word)",
        "radicals": ["亻", "固"]
    },
    "好": {
        "zhuyin": "ㄏㄠˇ",
        "pinyin": "hǎo",
        "tone": 3,
        "english": "good, well",
        "radicals": ["女", "子"]
    },
    "來": {
        "zhuyin": "ㄌㄞˊ",
        "pinyin": "lái",
        "tone": 2,
        "english": "to come",
        "radicals": ["木", "从"]
    },

    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "radicals": [""]
    },
    "那": {
        "zhuyin": "ㄋㄚ ˋ",
        "pinyin": "nà",
        "tone": 4,
        "english": "that",
        "radicals": ["二", "阝"]
    },
    "要": {
        "zhuyin": "一ㄠˋ",
        "pinyin": "yào",
        "tone": 4,
        "english": "to want, important",
        "radicals": ["覀", "女"]
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "huì",
        "tone": 4,
        "english": "meet, can, will, to know",
        "radicals": ["京", "尤"]
    },
    "就": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "then, just(emp.), at once",
        "radicals": ["京", "尤"]
    },

    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "radicals": ["", ""]
    // },

}

const chineseRadicals = {
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one",
    },
    "丨": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn ",
        "tone": 3,
        "english": "line",
    },
    "丄": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "shàng ",
        "tone": 4,
        "english": "above",
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun",
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "opening",
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "stop",
    },
    "勺": {
        "zhuyin": "ㄕㄠˊ",
        "pinyin": "sháo",
        "tone": 2,
        "english": "ladle",
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "tone": 2,
        "english": "white",
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
    },
    "戈": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "dagger",
    },
}