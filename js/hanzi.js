//most commonly found 100 characters
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
        "english": "'s",
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
        "english": "then, just, at once",
        "radicals": ["京", "尤"]
    },
    "什": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "what",
        "radicals": ["亻", "十"]
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "tone": 2,
        "english": "have not",
        "radicals": ["氵", "又"]
    },
    "到": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "to arrive",
        "radicals": ["至", "刂"]
    },
    "說": {
        "zhuyin": "ㄕㄨㄛ",
        "pinyin": "shuō",
        "tone": 1,
        "english": "to speak",
        "radicals": ["言", "兌"]
    },
    "嗎": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "tone": 5,
        "english": "?",
        "radicals": ["口", "馬"]
    },
    "為": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "because of",
        "radicals": ["丶", "灬"]
    },
    "想": {
        "zhuyin": "ㄒ一ㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "to think, to want",
        "radicals": ["相", "心"]
    },
    "能": {
        "zhuyin": "ㄋㄥˊ",
        "pinyin": "néng",
        "tone": 2,
        "english": "to be able to",
        "radicals": ["厶", "匕"]
    },
    "上": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "shàng",
        "tone": 4,
        "english": "above",
        "radicals": ["丨", "一"]
    },

    "去": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "qù",
        "tone": 4,
        "english": "to go",
        "radicals": ["土", "厶"]
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "way, method",
        "radicals": ["辶", "首"]
    },
    "她": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "she",
        "radicals": ["女", "也"]
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "tone": 3,
        "english": "very, is (Adj)",
        "radicals": ["彳", "艮"]
    },
    "看": {
        "zhuyin": "ㄎㄢˋ",
        "pinyin": "kàn",
        "tone": 2,
        "english": "to see, look at",
        "radicals": ["龵", "目"]
    },
    "可": {
        "zhuyin": "ㄎㄜˇ",
        "pinyin": "kě",
        "tone": 3,
        "english": "can able to",
        "radicals": ["一", "口"]
    },
    "知": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to know",
        "radicals": ["矢", "口"]
    },
    "得": {
        "zhuyin": "ㄉㄜ",
        "pinyin": "de",
        "tone": 5,
        "english": "(V + 得 + Adverb) p. indicates effect, degree, possibility etc",
        "radicals": ["彳", "寸"]
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "guo",
        "tone": 5,
        "english": "(experienced action p.)",
        "radicals": ["辶", "口"]
    },
    "吧": {
        "zhuyin": "ㄅㄚ˙",
        "pinyin": "ba",
        "tone": 5,
        "english": "...right?",
        "radicals": ["口", "匚"]
    },

    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "tone": 2,
        "english": "still, yet, to return",
        "radicals": ["辶", "口"]
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "duì",
        "tone": 4,
        "english": "correct, opposite",
        "radicals": ["羊", "寸"]
    },
    "里": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "inside",
        "radicals": ["田", "土"]
    },
    "以": {
        "zhuyin": "一ˇ",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "so as to, according to",
        "radicals": ["丶", "人"]
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "dōu",
        "tone": 1,
        "english": "all, both",
        "radicals": ["日", "阝"]
    },
    "事": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "thing, item, matter",
        "radicals": ["中", "匚"]
    },
    "子": {
        "zhuyin": "ㄗ˙",
        "pinyin": "zi",
        "tone": 5,
        "english": "child, son",
        "radicals": ["了", "一"]
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, raw",
        "radicals": ["龶", "㇒"]
    },
    "時": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "time",
        "radicals": ["日", "寸"]
    },
    "樣": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yàng",
        "tone": 4,
        "english": "manner, appearance",
        "radicals": ["木", "羊"]
    },
    "也": {
        "zhuyin": "一ㄝˇ",
        "pinyin": "yě",
        "tone": 3,
        "english": "also, too",
        "radicals": ["丨"]
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "and",
        "radicals": ["禾", "口"]
    },
    "下": {
        "zhuyin": "ㄒ一ㄚˋ",
        "pinyin": "xià",
        "tone": 4,
        "english": "below, down",
        "radicals": ["一", "卜"]
    },
    "真": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "zhēn",
        "tone": 1,
        "english": "really, truly",
        "radicals": ["十", "目"]
    },
    "現": {
        "zhuyin": "ㄒ一ㄢˋ",
        "pinyin": "xiàn",
        "tone": 4,
        "english": "appear, present",
        "radicals": ["王", "目"]
    },
    "做": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "make, to do",
        "radicals": ["亻", "古"]
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "radicals": ["人", "一"]
    },
    "啊": {
        "zhuyin": "ㄚ˙",
        "pinyin": "a",
        "tone": 5,
        "english": "ah!",
        "radicals": ["口", "阝", "可"]
    },
    "怎": {
        "zhuyin": "ㄗㄣˇ",
        "pinyin": "zěn",
        "tone": 3,
        "english": "how",
        "radicals": ["丨", "心"]
    },
    "出": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "chū",
        "tone": 1,
        "english": "exit, to go out",
        "radicals": ["山"]
    },
    "點": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "radicals": ["黑", "口"]
    },
    "起": {
        "zhuyin": "ㄑ一ˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "rise",
        "radicals": ["土", "止", "匚"]
    },
    "天": {
        "zhuyin": "ㄊ一ㄢ",
        "pinyin": "tiān",
        "tone": 1,
        "english": "sky, heavens",
        "radicals": ["一", "大"]
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "bǎ",
        "tone": 3,
        "english": "(direct obj p.), to hold",
        "radicals": ["扌", "巴"]
    },
    "開": {
        "zhuyin": "ㄎㄞ",
        "pinyin": "kāi",
        "tone": 1,
        "english": "to open, to start",
        "radicals": ["門", "一"]
    },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "ràng",
        "tone": 4,
        "english": "yield, to allow, permit, by (passive p.)",
        "radicals": ["言", "口"]
    },
    "給": {
        "zhuyin": "ㄍㄟˇ",
        "pinyin": "gěi",
        "tone": 3,
        "english": "give, to, for",
        "radicals": ["糹", "口"]
    },
    "但": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "but",
        "radicals": ["亻", "日"]
    },
    "謝": {
        "zhuyin": "ㄒ一ㄝˋ",
        "pinyin": "xiè",
        "tone": 4,
        "english": "thanks",
        "radicals": ["言", "身", "寸"]
    },
    "着": {
        "zhuyin": "ㄓㄜ˙",
        "pinyin": "zhe",
        "tone": 5,
        "english": "(action in progress p.)",
        "radicals": ["羊", "目"]
    },
    "只": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "only",
        "radicals": ["口", "八"]
    },
    "些": {
        "zhuyin": "ㄒ一ㄝ",
        "pinyin": "xiē",
        "tone": 1,
        "english": "some, few",
        "radicals": ["止", "匕", "二"]
    },
    "如": {
        "zhuyin": "ㄖㄨˊ",
        "pinyin": "rú",
        "tone": 2,
        "english": "as, as if, such as",
        "radicals": ["女", "口"]
    },
    "家": {
        "zhuyin": "ㄐ一ㄚ",
        "pinyin": "jiā",
        "tone": 1,
        "english": "home, family",
        "radicals": ["宀", "一", "𧰨"]
    },
    "后": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "behind, after",
        "radicals": ["一", "口"]
    },
    "兒": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "son",
        "radicals": ["彐", "儿"]
    },
    "多": {
        "zhuyin": "ㄉㄨㄛ",
        "pinyin": "duō",
        "tone": 1,
        "english": "many, much",
        "radicals": ["夕"]
    },
    "意": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "idea, meaning",
        "radicals": ["音", "心"]
    },
    "别": {
        "zhuyin": "ㄅ一ㄝˊ",
        "pinyin": "bié",
        "tone": 2,
        "english": "must not, other, don't",
        "radicals": ["力", "刂"]
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "place, actually",
        "radicals": ["戶", "斤"]
    },
    "話": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "language, talk",
        "radicals": ["言", "舌"]
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "radicals": ["㇚", "八"]
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "self",
        "radicals": ["目", "丶"]
    },
    "回": {
        "zhuyin": "ㄏㄨㄟˊ",
        "pinyin": "huí",
        "tone": 2,
        "english": "to answer, to return",
        "radicals": ["囗", "口"]
    },
    "然": {
        "zhuyin": "ㄖㄢˊ",
        "pinyin": "rán",
        "tone": 2,
        "english": "correct",
        "radicals": ["⺼", "犬", "灬"]
    },
    "果": {
        "zhuyin": "ㄍㄨㄛˇ",
        "pinyin": "guǒ",
        "tone": 3,
        "english": "fruit",
        "radicals": ["田", "木"]
    },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "fā",
        "tone": 1,
        "english": "to send, to develop",
        "radicals": ["癶", "弓", "殳"]
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "to see, to meet",
        "radicals": ["目", "儿"]
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "radicals": ["丶"]
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "to walk, away",
        "radicals": ["", ""]
    },
    "定": {
        "zhuyin": "ㄉ一ㄥˋ",
        "pinyin": "dìng",
        "tone": 4,
        "english": "to set, decide",
        "radicals": ["宀", "一", "止"]
    },
    "聽": {
        "zhuyin": "ㄊ一ㄥ",
        "pinyin": "tīng",
        "tone": 1,
        "english": "to listen",
        "radicals": ["耳", "王", "十", "罒", "一", "心"]
    },
    "覺": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to feel",
        "radicals": ["臼", "爻", "冖", "見"]
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "too (much)",
        "radicals": ["大", "丶"]
    },
    "該": {
        "zhuyin": "ㄍㄞ",
        "pinyin": "gāi",
        "tone": 1,
        "english": "should",
        "radicals": ["言", "亠"]
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "pinyin": "dāng",
        "tone": 1,
        "english": "to be, just at",
        "radicals": ["冖", "口", "田"]
    },
    "經": {
        "zhuyin": "ㄐ一ㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "pass through",
        "radicals": ["糹", "巛", "工"]
    },
    "媽": {
        "zhuyin": "ㄇㄚ",
        "pinyin": "mā",
        "tone": 1,
        "english": "mom",
        "radicals": ["女", "灬"]
    },
    "用": {
        "zhuyin": "ㄩㄥˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "to use",
        "radicals": ["丨", "二"]
    },
    "打": {
        "zhuyin": "ㄉㄚˇ",
        "pinyin": "dǎ",
        "tone": 3,
        "english": "to hit",
        "radicals": ["扌", "一"]
    },

    // 100/100 done!

    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "radicals": ["", ""]
    // },

}

const A1grammar = {
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "english": "have not",
        "radicals": ["氵", "又"],
        "pattern": "沒 + 有",
        "explanation": "Nearly all verbs can be negated with 不(ㄅㄨˋ). The verb 有(一ㄡˇ) is an important exception to this rule, and must be negated with 沒 (ㄇㄟˊ).",
        "section": "adverbs"
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "english": "no, not",
        "radicals": ["丆", "卜"],
        "pattern": "不 + Verb / Adj.",
        "explanation": "不 (ㄅㄨˋ) is generally used to negate a verb in the present or future, or to talk about what you do not do, as a habit. Almost all verbs can be negated with 不 (unless you're talking about the past). The only verb that can never be negated with 不 is 有(一ㄡˇ).",
        "section": "adverbs"
    },
    "沒有": {
        "zhuyin": "ㄇㄟˊ一ㄡˇ",
        "pinyin": "méiyǒu",
        "english": "did not",
        "pattern": "Subj. + 沒有 / 沒 + Verb",
        "explanation": "Usually verbs can be negated with 不(ㄅㄨˋ), but that construction is used for habitual or present actions. If the verb is about an action in the past, though, 沒有 should be used. Remember when using 没有, that 了(ㄌㄜ˙) is not normally used with 没有. 了 marks completed actions, while 没有 is used for actions that didn't happen (so they're not completed).",
        "section": "adverbs",
        "example": "我没有时間。"
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "dōu",
        "english": "all, (both, neither)",
        "pattern": "Subj. + 都 + Verb",
        "explanation": `都 (dōu) appears after the subject and before the verb. Chinese doesn't normally use a special word for "both" like English does. It just uses 都 (dōu) as if it were any other number greater than one. Chinese also doesn't have a special pattern like "neither / nor" for the negative case. Just use 都 (dōu) and make the sentence negative.`,
        "section": "adverbs",
        "example": "我們都要冰水。"
    },
    "也": {
        "zhuyin": "一ㄝˇ",
        "pinyin": "yě",
        "english": "also, too",
        "pattern": "也 + Verb / Adj.",
        "explanation": "也 (一ㄝˇ) is inserted after the subject, before the verb or verb phrase or before the 很(ㄏㄣˇ) before the adjective. ",
        "example": "我也喜欢。你也很高。"
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "english": "is (very)",
        "pattern": "Noun + 很 + Adj.",
        "explanation": "Links adjectives. Nouns are linked to other nouns with 是(ㄕˋ). Nouns are linked to adjectives with 很(ㄏㄣˇ). ",
        "example": "我很高。"
    },
    "還是": {
        "zhuyin": "ㄏㄞˊㄕˋ",
        "pinyin": "háishì",
        "english": "or (in a question)",
        "pattern": "A + 还是 + B ?",
        "explanation": "Used to offer chioces in a question",
        "example": "冰的還是熱的？ 你要喝茶還是咖啡？"
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ ",
        "pinyin": "huòzhě",
        "english": "or (statement)",
        "pattern": "A + 还是 + B",
        "explanation": `used as an "or" statement ("it doesn't matter if we eat chicken or beef")`,
        "example": "我喝咖啡或者茶，都行。"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "pattern": "",
    //     "explanation": "",
    //     "example": ""
    // },
}
const A1sentences = {
    "你 去 或者 她 去，都 可以。": {
        "english": "You go or she goes, either way is fine.",
        "zhuyin": "ㄋ一ˇ ㄑㄩˋ ㄏㄨㄛˋ ㄓㄜˇ ㄊㄚ ㄑㄩˋ， ㄉㄨ ㄎㄜˇ 一ˇ。",
        "pinyin": "Nǐ qù huòzhě tā qù, dōu kěyǐ.",
        "category": "或者"
    },
    "下 個 月 我 打算 去 杭州 或者 蘇州 旅行。": {
        "english": "Next month I plan to go to Hangzhou or Suzhou to travel.",
        "zhuyin": "ㄒ一ㄚˋ ㄍㄜˋ ㄩㄝˋ ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄑㄩˋ ㄏㄤˊㄓㄡ ㄏㄨㄛˋㄓㄜˇ ㄙㄨㄓㄡ ㄌㄩ ˇ ㄒ一ㄥˊ",
        "pinyin": "Xià gè yuè wǒ dǎsuàn qù Hángzhōu huòzhě Sūzhōu lǚxíng.",
        "category": "或者"
    },
    "晚飯 以後 我 和 家人 聊天或者看電視。": {
        "english": "After dinner I chat with or watch TV with my family.",
        "zhuyin": "ㄨㄢˇ ㄈㄢˋ 一ˇㄏㄡˋ ㄨㄛˇ ㄏㄜˊ ㄐ一ㄚㄖㄣˊ ㄌ一ㄠˊㄊ一ㄢ ㄏㄨㄛˋㄓㄜˇ ㄎㄢˋ ㄉ一ㄢˋㄕˋ",
        "pinyin": "Wǎnfàn yǐhòu wǒ hé jiārén liáotiān huòzhě kàn diànshì.",
        "category": "或者"
    },
    "下班 以後 我 去 你 家 或者 你 來 我 家，都 可以。": {
        "english": "After work I will go to your house, or you can come to my house, either way is fine.",
        "zhuyin": "ㄒ一ㄚˋㄅㄢ 一ˇㄏㄡˋ ㄨㄛˇ ㄑㄩˋ ㄋ一ˇ ㄐ一ㄚ ㄏㄨㄛˋㄓㄜˇ ㄋ一ˇ ㄌㄞˊ ㄨㄛˇ ㄐ一ㄚ， ㄉㄨ ㄎㄜˇ一ˇ 。",
        "pinyin": "Xiàbān yǐhòu wǒ qù nǐ jiā huòzhě nǐ lái wǒ jiā, dōu kěyǐ.",
        "category": "或者"
    },
    "我 沒有 問題。": {
        "english": "I don't have any questions.",
        "zhuyin": "ㄨㄛˇ ㄇㄟˊ一ㄡˇ ㄨㄣˋ ㄊ一ˊ 。",
        "pinyin": "Wǒ méiyǒu wèntí.",
        "category": "沒有"
    },
    "我們 現在 沒有 錢。": {
        "english": "We don't have money now.",
        "zhuyin": "ㄨㄛˇㄇㄣˊ ㄒ一ㄢˋㄗㄞˋ ㄇㄟˊ一ㄡˇ ㄑ一ㄢˊ 。",
        "pinyin": "Wǒmen xiànzài méiyǒu qián.",
        "category": "沒有"
    },
    "你們 沒 車 嗎？": {
        "english": "Yall don't have a car?",
        "zhuyin": "ㄋ一ˇㄇㄣˊ ㄇㄟˊ ㄔㄜ ㄇㄚˊ ？",
        "pinyin": "Nǐmen méi chē ma?",
        "category": "沒有"
    },
    "明天 我們 都 可以 去 。": {
        "english": "Tomorrow we all can go.",
        "zhuyin": "ㄇ一ㄥˊㄊ一ㄢ ㄨㄛˇㄇㄣˊ ㄉㄨ ㄎㄜˇ一ˇ ㄑㄩˋ。",
        "pinyin": "Míngtiān wǒmen dōu kěyǐ qù.",
        "category": "都"
    },
    "你 爸爸 和 你 媽媽 都 是 美國人 嗎？": {
        "english": "Are your father and your mother both American?",
        "zhuyin": "ㄋ一ˇ ㄅㄚˋㄅㄚˋ ㄏㄜˊ ㄋ一ˇ ㄇㄚㄇㄚ ㄉㄨ ㄕˋ ㄇㄟˇㄍㄨㄛˊ ㄖㄣˊ ㄇㄚˊ ？",
        "pinyin": "Nǐ bàba hé nǐ māma dōu shì Měiguó rén ma?",
        "category": "都"
    },
    "我 和 我 太太 都 不 吃 肉。": {
        "english": "Neither my wife nor I eat meat.",
        "zhuyin": "ㄨㄛˇ ㄏㄜˊ ㄨㄛˇ ㄊㄞˋㄊㄞˋ ㄉㄨ ㄅㄨˋ ㄔ ㄖㄡˋ。",
        "pinyin": "Wǒ hé wǒ tàitai dōu bù chī ròu.",
        "category": "都"
    },
    "他們 不 是 壞 孩子。": {
        "english": "They are not bad kids.",
        "zhuyin": "ㄊㄚㄇㄣˊ ㄅㄨˋ ㄕˋ ㄏㄨㄞˋ ㄏㄞˊㄗˇ",
        "pinyin": "Tāmen bù shì huài háizi.",
        "category": "不"
    },
    "我們 不 喝 酒。": {
        "english": "We don't drink alcohol.",
        "zhuyin": "ㄨㄛˇㄇㄣˊ ㄅㄨˋ ㄏㄜ ㄐ一ㄡˇ",
        "pinyin": "Wǒmen bù hējiǔ.",
        "category": "不"
    },
    "我 不 餓。": {
        "english": "I'm not hungry.",
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄜˋ。",
        "pinyin": "Wǒ bù è.",
        "category": "不"
    },
    "我 哥哥 不 高，但是 很 帥。": {
        "english": "My older brother is not tall, but he is very handsome.",
        "zhuyin": "ㄨㄛˇ ㄍㄜㄍㄜ ㄅㄨˋ ㄍㄠ， ㄉㄢˋㄕˋ ㄏㄣˇ ㄕㄨㄞˋ。",
        "pinyin": "Wǒ gēge bù gāo , dànshì hěn shuài.",
        "category": "不"
    },
    "我 也 喜歡。": {
        "english": "I also like it.",
        "zhuyin": "ㄨㄛˇ 一ㄝˇ ㄒ一ˇㄏㄨㄢ。",
        "pinyin": "Wǒ yě xǐhuan.",
        "category": "也"
    },
    "我 也 想 學 中文。": {
        "english": "I also want to study Chinese.",
        "zhuyin": "ㄨㄛˇ 一ㄝˇ ㄒ一ㄤˇ ㄒㄩㄝˊ ㄓㄨㄥㄨㄣˊ 。",
        "pinyin": "Wǒ yě xiǎng xué Zhōngwén.",
        "category": "也"
    },
    "你 也 想 來 我 家 嗎？": {
        "english": "Do you want to come to my house too?",
        "zhuyin": "ㄋ一ˇ 一ㄝˇ ㄒ一ㄤˇ ㄌㄞˊ ㄨㄛˇ ㄐ一ㄚ ㄇㄚˊ？",
        "pinyin": "Nǐ yě xiǎng lái wǒ jiā ma?",
        "category": "也"
    },
    // "": {
    //     "english": "",
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "category": ""
    // },
}