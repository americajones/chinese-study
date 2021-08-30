//most commonly found 2633 characters apparently means 98% daily life comprehension
const hanziAll = {
    "我": {
        "zhuyin": "ㄨㄛˇ",
        "pinyin": "wǒ ",
        "tone": 3,
        "english": "I, me",
        "simplified": "",
        "radicals": ["手", "戈"]
    },
    "的": {
        "zhuyin": "ㄉㄜ.",
        "pinyin": "de",
        "tone": 5,
        "english": "'s",
        "simplified": "",
        "radicals": ["白", "勺"]
    },
    "你": {
        "zhuyin": "ㄋ一ˇ",
        "pinyin": "nǐ",
        "tone": 3,
        "english": "you",
        "simplified": "",
        "radicals": ["亻", "尔"]
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "is, to be",
        "simplified": "",
        "radicals": ["日", "一", "止"]
    },
    "了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "le",
        "tone": 5,
        "english": "-ed, (completed action p.)",
        "simplified": "",
        "radicals": [""]
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "no, not",
        "simplified": "",
        "radicals": ["丆", "卜"]
    },
    "們": {
        "zhuyin": "ㄇㄣ˙",
        "pinyin": "men",
        "tone": 3,
        "english": "(plural p.)",
        "simplified": "们",
        "radicals": ["亻", "門"]
    },
    "這": {
        "zhuyin": "ㄓㄜˋ",
        "pinyin": "zhè",
        "tone": 4,
        "english": "this",
        "simplified": "这",
        "radicals": ["辶", "言"]
    },
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one, a",
        "simplified": "",
        "radicals": ["一"]
    },
    "他": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "he",
        "simplified": "",
        "radicals": ["亻", "也"]
    },
    "麼": {
        "zhuyin": "ㄇㄜ˙",
        "pinyin": "me",
        "tone": 5,
        "english": "(interrogative p.)",
        "simplified": "么",
        "radicals": ["麻", "幺"]
    },
    "在": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "zài",
        "tone": 4,
        "english": "at",
        "simplified": "",
        "radicals": ["𠂇", "土"]
    },
    "有": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "to have, there is",
        "simplified": "",
        "radicals": ["𠂇", "月"]
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "gè",
        "tone": 4,
        "english": "individual, (general measure word)",
        "simplified": "个",
        "radicals": ["亻", "固"]
    },
    "好": {
        "zhuyin": "ㄏㄠˇ",
        "pinyin": "hǎo",
        "tone": 3,
        "english": "good, well",
        "simplified": "",
        "radicals": ["女", "子"]
    },
    "來": {
        "zhuyin": "ㄌㄞˊ",
        "pinyin": "lái",
        "tone": 2,
        "english": "to come",
        "simplified": "来 ",
        "radicals": ["木", "从"]
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "simplified": "",
        "radicals": [""]
    },
    "那": {
        "zhuyin": "ㄋㄚ ˋ",
        "pinyin": "nà",
        "tone": 4,
        "english": "that, those",
        "simplified": "",
        "radicals": ["二", "阝"]
    },
    "要": {
        "zhuyin": "一ㄠˋ",
        "pinyin": "yào",
        "tone": 4,
        "english": "to want, important",
        "simplified": "",
        "radicals": ["覀", "女"]
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "huì",
        "tone": 4,
        "english": "meet, can, will, to know",
        "simplified": "会",
        "radicals": ["京", "尤"]
    },
    "就": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "then, just, at once",
        "simplified": "",
        "radicals": ["京", "尤"]
    },
    "甚": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "what",
        "simplified": "什",
        "radicals": ["亻", "十"]
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "tone": 2,
        "english": "have not",
        "simplified": "没",
        "radicals": ["氵", "又"]
    },
    "到": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "to arrive",
        "simplified": "",
        "radicals": ["至", "刂"]
    },
    "說": {
        "zhuyin": "ㄕㄨㄛ",
        "pinyin": "shuō",
        "tone": 1,
        "english": "to speak",
        "simplified": "说",
        "radicals": ["言", "兌"]
    },
    "嗎": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "tone": 5,
        "english": "yes or no ?",
        "simplified": "吗",
        "radicals": ["口", "馬"]
    },
    "為": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "because of",
        "simplified": "为",
        "radicals": ["丶", "灬"]
    },
    "想": {
        "zhuyin": "ㄒ一ㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "to think, to want",
        "simplified": "",
        "radicals": ["相", "心"]
    },
    "能": {
        "zhuyin": "ㄋㄥˊ",
        "pinyin": "néng",
        "tone": 2,
        "english": "to be able to",
        "simplified": "",
        "radicals": ["厶", "匕"]
    },
    "上": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "shàng",
        "tone": 4,
        "english": "above",
        "simplified": "",
        "radicals": ["丨", "一"]
    },

    "去": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "qù",
        "tone": 4,
        "english": "to go",
        "simplified": "",
        "radicals": ["土", "厶"]
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "way, method",
        "simplified": "",
        "radicals": ["辶", "首"]
    },
    "她": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "she",
        "simplified": "",
        "radicals": ["女", "也"]
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "tone": 3,
        "english": "very, is (Adj)",
        "simplified": "",
        "radicals": ["彳", "艮"]
    },
    "看": {
        "zhuyin": "ㄎㄢˋ",
        "pinyin": "kàn",
        "tone": 2,
        "english": "to see, look at",
        "simplified": "",
        "radicals": ["龵", "目"]
    },
    "可": {
        "zhuyin": "ㄎㄜˇ",
        "pinyin": "kě",
        "tone": 3,
        "english": "can able to",
        "simplified": "",
        "radicals": ["一", "口"]
    },
    "知": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to know",
        "simplified": "",
        "radicals": ["矢", "口"]
    },
    "得": {
        "zhuyin": "ㄉㄜ",
        "pinyin": "de",
        "tone": 5,
        "english": "(V + 得 + Adverb) p. indicates effect, degree, possibility etc",
        "simplified": "",
        "radicals": ["彳", "寸"]
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "guo",
        "tone": 5,
        "english": "(experienced action p.)",
        "simplified": "过",
        "radicals": ["辶", "口"]
    },
    "吧": {
        "zhuyin": "ㄅㄚ˙",
        "pinyin": "ba",
        "tone": 5,
        "english": "...right?",
        "simplified": "",
        "radicals": ["口", "匚"]
    },

    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "tone": 2,
        "english": "still, yet, to return",
        "simplified": "还",
        "radicals": ["辶", "口"]
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "duì",
        "tone": 4,
        "english": "correct, opposite",
        "simplified": "对",
        "radicals": ["羊", "寸"]
    },
    "裡": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "inside",
        "simplified": "里",
        "radicals": ["田", "土"]
    },
    "以": {
        "zhuyin": "一ˇ",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "so as to, according to",
        "simplified": "",
        "radicals": ["丶", "人"]
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "dōu",
        "tone": 1,
        "english": "all, both",
        "simplified": "",
        "radicals": ["日", "阝"]
    },
    "事": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "thing, item, matter",
        "simplified": "",
        "radicals": ["中", "匚"]
    },
    "子": {
        "zhuyin": "ㄗ˙",
        "pinyin": "zi",
        "tone": 5,
        "english": "child, son",
        "simplified": "",
        "radicals": ["了", "一"]
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, raw",
        "simplified": "",
        "radicals": ["龶", "㇒"]
    },
    "時": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "time",
        "simplified": "时",
        "radicals": ["日", "寸"]
    },
    "樣": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yàng",
        "tone": 4,
        "english": "manner, appearance",
        "simplified": "样",
        "radicals": ["木", "羊"]
    },
    "也": {
        "zhuyin": "一ㄝˇ",
        "pinyin": "yě",
        "tone": 3,
        "english": "also, too",
        "simplified": "",
        "radicals": ["丨"]
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "and",
        "simplified": "",
        "radicals": ["禾", "口"]
    },
    "下": {
        "zhuyin": "ㄒ一ㄚˋ",
        "pinyin": "xià",
        "tone": 4,
        "english": "below, down",
        "simplified": "",
        "radicals": ["一", "卜"]
    },
    "真": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "zhēn",
        "tone": 1,
        "english": "really, truly",
        "simplified": "",
        "radicals": ["十", "目"]
    },
    "現": {
        "zhuyin": "ㄒ一ㄢˋ",
        "pinyin": "xiàn",
        "tone": 4,
        "english": "appear, present",
        "simplified": "现",
        "radicals": ["王", "目"]
    },
    "做": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "make, to do",
        "simplified": "",
        "radicals": ["亻", "古"]
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "simplified": "",
        "radicals": ["人", "一"]
    },
    "啊": {
        "zhuyin": "ㄚ˙",
        "pinyin": "a",
        "tone": 5,
        "english": "ah!",
        "simplified": "",
        "radicals": ["口", "阝", "可"]
    },
    "怎": {
        "zhuyin": "ㄗㄣˇ",
        "pinyin": "zěn",
        "tone": 3,
        "english": "how",
        "simplified": "",
        "radicals": ["丨", "心"]
    },
    "出": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "chū",
        "tone": 1,
        "english": "exit, to go out",
        "simplified": "",
        "radicals": ["山"]
    },
    "點": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "simplified": "点",
        "radicals": ["黑", "口"]
    },
    "起": {
        "zhuyin": "ㄑ一ˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "rise",
        "simplified": "",
        "radicals": ["土", "止", "匚"]
    },
    "天": {
        "zhuyin": "ㄊ一ㄢ",
        "pinyin": "tiān",
        "tone": 1,
        "english": "sky, heavens",
        "simplified": "",
        "radicals": ["一", "大"]
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "bǎ",
        "tone": 3,
        "english": "(direct obj p.), to hold",
        "simplified": "",
        "radicals": ["扌", "巴"]
    },
    "開": {
        "zhuyin": "ㄎㄞ",
        "pinyin": "kāi",
        "tone": 1,
        "english": "to open, to start",
        "simplified": "开",
        "radicals": ["門", "一"]
    },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "ràng",
        "tone": 4,
        "english": "yield, to allow, permit, by (passive p.)",
        "simplified": "让",
        "radicals": ["言", "口"]
    },
    "給": {
        "zhuyin": "ㄍㄟˇ",
        "pinyin": "gěi",
        "tone": 3,
        "english": "give, to, for",
        "simplified": "给",
        "radicals": ["糹", "口"]
    },
    "但": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "but",
        "simplified": "",
        "radicals": ["亻", "日"]
    },
    "謝": {
        "zhuyin": "ㄒ一ㄝˋ",
        "pinyin": "xiè",
        "tone": 4,
        "english": "thanks",
        "simplified": "谢",
        "radicals": ["言", "身", "寸"]
    },
    "着": {
        "zhuyin": "ㄓㄜ˙",
        "pinyin": "zhe",
        "tone": 5,
        "english": "(action in progress p.)",
        "simplified": "",
        "radicals": ["羊", "目"]
    },
    "只": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "only",
        "simplified": "",
        "radicals": ["口", "八"]
    },
    "些": {
        "zhuyin": "ㄒ一ㄝ",
        "pinyin": "xiē",
        "tone": 1,
        "english": "some, few",
        "simplified": "",
        "radicals": ["止", "匕", "二"]
    },
    "如": {
        "zhuyin": "ㄖㄨˊ",
        "pinyin": "rú",
        "tone": 2,
        "english": "as, as if, such as",
        "simplified": "",
        "radicals": ["女", "口"]
    },
    "家": {
        "zhuyin": "ㄐ一ㄚ",
        "pinyin": "jiā",
        "tone": 1,
        "english": "home, family",
        "simplified": "",
        "radicals": ["宀", "一", "𧰨"]
    },
    "后": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "behind, after",
        "simplified": "",
        "radicals": ["一", "口"]
    },
    "兒": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "son",
        "simplified": "儿",
        "radicals": ["彐", "儿"]
    },
    "多": {
        "zhuyin": "ㄉㄨㄛ",
        "pinyin": "duō",
        "tone": 1,
        "english": "many, much",
        "simplified": "",
        "radicals": ["夕"]
    },
    "意": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "idea, meaning",
        "simplified": "",
        "radicals": ["音", "心"]
    },
    "别": {
        "zhuyin": "ㄅ一ㄝˊ",
        "pinyin": "bié",
        "tone": 2,
        "english": "must not, other, don't",
        "simplified": "",
        "radicals": ["力", "刂"]
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "place, actually",
        "simplified": "",
        "radicals": ["戶", "斤"]
    },
    "話": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "language, talk",
        "simplified": "话",
        "radicals": ["言", "舌"]
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "simplified": "",
        "radicals": ["㇚", "八"]
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "self",
        "simplified": "",
        "radicals": ["目", "丶"]
    },
    "回": {
        "zhuyin": "ㄏㄨㄟˊ",
        "pinyin": "huí",
        "tone": 2,
        "english": "to answer, to return",
        "simplified": "",
        "radicals": ["囗", "口"]
    },
    "然": {
        "zhuyin": "ㄖㄢˊ",
        "pinyin": "rán",
        "tone": 2,
        "english": "correct",
        "simplified": "",
        "radicals": ["⺼", "犬", "灬"]
    },
    "果": {
        "zhuyin": "ㄍㄨㄛˇ",
        "pinyin": "guǒ",
        "tone": 3,
        "english": "fruit",
        "simplified": "",
        "radicals": ["田", "木"]
    },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "fā",
        "tone": 1,
        "english": "to send, to develop",
        "simplified": "发",
        "radicals": ["癶", "弓", "殳"]
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "to see, to meet",
        "simplified": "见",
        "radicals": ["目", "儿"]
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "simplified": "",
        "radicals": ["丶"]
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "to walk, away",
        "simplified": "",
        "radicals": ["", ""]
    },
    "定": {
        "zhuyin": "ㄉ一ㄥˋ",
        "pinyin": "dìng",
        "tone": 4,
        "english": "to set, decide",
        "simplified": "",
        "radicals": ["宀", "一", "止"]
    },
    "聽": {
        "zhuyin": "ㄊ一ㄥ",
        "pinyin": "tīng",
        "tone": 1,
        "english": "to listen",
        "simplified": "听",
        "radicals": ["耳", "王", "十", "罒", "一", "心"]
    },
    "覺": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to feel",
        "simplified": "觉",
        "radicals": ["臼", "爻", "冖", "見"]
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "too (much)",
        "simplified": "",
        "radicals": ["大", "丶"]
    },
    "該": {
        "zhuyin": "ㄍㄞ",
        "pinyin": "gāi",
        "tone": 1,
        "english": "should",
        "simplified": "该",
        "radicals": ["言", "亠"]
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "pinyin": "dāng",
        "tone": 1,
        "english": "to be, just at",
        "simplified": "当",
        "radicals": ["冖", "口", "田"]
    },
    "經": {
        "zhuyin": "ㄐ一ㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "pass through",
        "simplified": "经",
        "radicals": ["糹", "巛", "工"]
    },
    "媽": {
        "zhuyin": "ㄇㄚ",
        "pinyin": "mā",
        "tone": 1,
        "english": "mom",
        "simplified": "妈",
        "radicals": ["女", "灬"]
    },
    "用": {
        "zhuyin": "ㄩㄥˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "to use",
        "simplified": "",
        "radicals": ["丨", "二"]
    },
    "打": {
        "zhuyin": "ㄉㄚˇ",
        "pinyin": "dǎ",
        "tone": 3,
        "english": "to hit",
        "simplified": "",
        "radicals": ["扌", "一"]
    },


    "地": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "de",
        "tone": 5,
        "english": "-ly, structural p.",
        "simplified": "",
        "radicals": ["土", "也"]
    },
    "再": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "zài",
        "tone": 4,
        "english": "again, then",
        "simplified": "",
        "radicals": ["一", "土"]
    },
    "因": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "reason, cause",
        "simplified": "",
        "radicals": ["囗", "大"]
    },
    "呢": {
        "zhuyin": "ㄋㄜ˙",
        "pinyin": "ne",
        "tone": 5,
        "english": "how about...? (continuing p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "tone": 3,
        "english": "woman",
        "simplified": "",
        "radicals": ["", ""]
    },
    "告": {
        "zhuyin": "ㄍㄠˋ",
        "pinyin": "gào",
        "tone": 4,
        "english": "to tell",
        "simplified": "",
        "radicals": ["⺧", "口"]
    },
    "最": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "zuì",
        "tone": 4,
        "english": "most, -est",
        "simplified": "",
        "radicals": ["日", ""]
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "前": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "front",
        "simplified": "",
        "radicals": ["", ""]
    },
    "找": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "zhǎo",
        "tone": 3,
        "english": "find, to look for",
        "simplified": "",
        "radicals": ["扌", "戈"]
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "go, travel, walk, OK!",
        "simplified": "",
        "radicals": ["彳", "亍"]
    },
    "快": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "tone": 4,
        "english": "quick, rapid, almost",
        "simplified": "",
        "radicals": ["忄", "人"]
    },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, as well as",
        "simplified": "",
        "radicals": ["", ""]
    },
    "死": {
        "zhuyin": "ㄙˇ",
        "pinyin": "sǐ",
        "tone": 3,
        "english": "die",
        "simplified": "",
        "radicals": ["歹", "匕"]
    },
    "先": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "xiān",
        "tone": 1,
        "english": "first, former",
        "simplified": "",
        "radicals": ["⺧", "儿"]
    },
    "像": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "resemble, to be like, image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "děng",
        "tone": 3,
        "english": "rank, to wait for",
        "simplified": "",
        "radicals": ["", ""]
    },
    "被": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "(passive p.), quilt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "從": {
        "zhuyin": "ㄘㄨㄥˊ",
        "pinyin": "cóng",
        "tone": 2,
        "english": "from, via, to follow",
        "simplified": "从",
        "radicals": ["", ""]
    },
    "明": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "míng",
        "tone": 2,
        "english": "bright",
        "simplified": "",
        "radicals": ["日", "月"]
    },
    "中": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "middle, center",
        "simplified": "",
        "radicals": ["口", "丨"]
    },
    "哦": {
        "zhuyin": "ㄛˊ",
        "pinyin": "ó",
        "tone": 2,
        "english": "oh",
        "simplified": "",
        "radicals": ["口", "我"]
    },
    "情": {
        "zhuyin": "ㄑㄧㄥˊ",
        "pinyin": "qíng",
        "tone": 2,
        "english": "feeling, emotion",
        "simplified": "",
        "radicals": ["忄", "青"]
    },
    "作": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "to do, grow, write",
        "simplified": "",
        "radicals": ["亻", "乍"]
    },
    "跟": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "tone": 1,
        "english": "with, to follow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "miàn",
        "tone": 4,
        "english": "face, surface, noodles, side, aspect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訴": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "sù",
        "tone": 4,
        "english": "complain, tell, accuse",
        "simplified": "诉",
        "radicals": ["", ""]
    },
    "愛": {
        "zhuyin": "ㄞˋ",
        "pinyin": "ài",
        "tone": 4,
        "english": "love",
        "simplified": "爱",
        "radicals": ["", ""]
    },
    "已": {
        "zhuyin": "ㄧˇ",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "already",
        "simplified": "",
        "radicals": ["", ""]
    },
    "之": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "of, (possessive p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "問": {
        "zhuyin": "ㄨㄣˋ",
        "pinyin": "wèn",
        "tone": 4,
        "english": "ask",
        "simplified": "问",
        "radicals": ["門", "口"]
    },
    "錯": {
        "zhuyin": "ㄘㄨㄛˋ",
        "pinyin": "cuò",
        "tone": 4,
        "english": "mistake",
        "simplified": "错",
        "radicals": ["", ""]
    },
    "孩": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "tone": 2,
        "english": "child",
        "simplified": "",
        "radicals": ["", ""]
    },
    "斯": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "this, (phonetic s)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "成": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "to succeed, become",
        "simplified": "",
        "radicals": ["", ""]
    },
    "它": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "it",
        "simplified": "",
        "radicals": ["宀", "匕"]
    },
    "感": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "feel, emotiuon",
        "simplified": "",
        "radicals": ["咸", "心"]
    },
    "幹": {
        "zhuyin": "ㄍㄢˋ",
        "pinyin": "gàn",
        "tone": 4,
        "english": "do/work",
        "simplified": "干",
        "radicals": ["干", ""]
    },
    "法": {
        "zhuyin": "ㄈㄚˇ",
        "pinyin": "fǎ",
        "tone": 3,
        "english": "law, method, way",
        "simplified": "",
        "radicals": ["", ""]
    },
    "電": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "diàn",
        "tone": 4,
        "english": "electric",
        "simplified": "电",
        "radicals": ["雨", "电"]
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "between, among, room, space",
        "simplified": "间",
        "radicals": ["門", "日"]
    },
    "哪": {
        "zhuyin": "ㄋㄚˇ",
        "pinyin": "nǎ",
        "tone": 3,
        "english": "which",
        "simplified": "",
        "radicals": ["口", "那"]
    },
    "西": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "west",
        "simplified": "",
        "radicals": ["兀", "囗"]
    },
    "己": {
        "zhuyin": "ㄐㄧˇ",
        "pinyin": "jǐ",
        "tone": 3,
        "english": "self",
        "simplified": "",
        "radicals": ["", ""]
    },
    "候": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "to wait, season",
        "simplified": "",
        "radicals": ["", ""]
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "pinyin": "cì",
        "tone": 4,
        "english": "once, time sequence, order",
        "simplified": "次",
        "radicals": ["", ""]
    },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "xìn",
        "tone": 4,
        "english": "letter, to trust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歡": {
        "zhuyin": "ㄏㄨㄢ",
        "pinyin": "huān",
        "tone": 1,
        "english": "joyous, pleased",
        "simplified": "欢",
        "radicals": ["雚", "欠"]
    },
    "正": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "correct, just (right)",
        "simplified": "",
        "radicals": ["一", "止"]
    },
    "實": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "real, honest",
        "simplified": "实",
        "radicals": ["", ""]
    },
    "關": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "close, shut",
        "simplified": "关",
        "radicals": ["門", "幺"],
    },
    "進": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "go forward, advance, enter",
        "simplified": "进",
        "radicals": ["", ""]
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "car, vehicle",
        "simplified": "车",
        "radicals": ["二", "日"]
    },
    "年": {
        "zhuyin": "ㄋㄧㄢˊ",
        "pinyin": "nián",
        "tone": 2,
        "english": "year",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喜": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "fond of, to like",
        "simplified": "",
        "radicals": ["", ""]
    },
    "認": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "rèn",
        "tone": 2,
        "english": "recognize",
        "simplified": "认",
        "radicals": ["", ""]
    },
    "克": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "gram",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誰": {
        "zhuyin": "ㄕㄟˊ",
        "pinyin": "shéi",
        "tone": 2,
        "english": "who",
        "simplified": "谁",
        "radicals": ["", ""]
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "tone": 3,
        "english": "cold",
        "simplified": "",
        "radicals": ["冫", "厶"]
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "rè",
        "tone": 4,
        "english": "hot",
        "simplified": "热",
        "radicals": ["土", "灬", "埶"]
    },
    "方": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "place, square",
        "simplified": "",
        "radicals": ["亠", "㇓", "㇆"]
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "	lǎo",
        "tone": 3,
        "english": "old (prefix)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "應": {
        "zhuyin": "ㄧㄥ",
        "pinyin": "yīng",
        "tone": 1,
        "english": "should, ought to",
        "simplified": "应",
        "radicals": ["广", "亻", "隹"]
    },
    "比": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "(comparison p.)",
        "simplified": "",
        "radicals": ["匕"]
    },
    "幫": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "bāng",
        "tone": 1,
        "english": "help",
        "simplified": "帮",
        "radicals": ["", ""]
    },
    "無": {
        "zhuyin": "ㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "not to have, -less",
        "simplified": "无",
        "radicals": ["𠂉", "灬"]
    },
    "晚": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "evening, late, night",
        "simplified": "",
        "radicals": ["日", "⺈"]
    },
    "動": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to move",
        "simplified": "动",
        "radicals": ["千", "力"]
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "head",
        "simplified": "头",
        "radicals": ["", ""]
    },
    "機": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "machine",
        "simplified": "机",
        "radicals": ["木", "戈", "幺"]
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to divide, fraction",
        "simplified": "",
        "radicals": ["八", "刀"]
    },
    "特": {
        "zhuyin": "ㄊㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "special, unique",
        "simplified": "",
        "radicals": ["牛", "寸"]
    },
    "相": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "mutual, each other",
        "simplified": "",
        "radicals": ["", ""]
    },
    "全": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "all, whole",
        "simplified": "",
        "radicals": ["", ""]
    },
    "殺": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to kill",
        "simplified": "杀",
        "radicals": ["", ""]
    },
    "需": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "to need, want",
        "simplified": "",
        "radicals": ["", ""]
    },
    "放": {
        "zhuyin": "ㄈㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to put",
        "simplified": "",
        "radicals": ["", ""]
    },
    "常": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "always, general",
        "simplified": "",
        "radicals": ["", ""]
    },
    "直": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "straight",
        "simplified": "",
        "radicals": ["", ""]
    },
    "才": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "cái",
        "tone": 2,
        "english": "just now, ability",
        "simplified": "",
        "radicals": ["", ""]
    },
    "美": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "měi",
        "tone": 3,
        "english": "beautiful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "於": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "in, at, on",
        "simplified": "于",
        "radicals": ["", ""]
    },
    "帶": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to bring, belt",
        "simplified": "带",
        "radicals": ["", ""]
    },
    "今": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "now",
        "simplified": "",
        "radicals": ["", ""]
    },
    "力": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "	lì",
        "tone": 4,
        "english": "power",
        "simplified": "",
        "radicals": ["", ""]
    },
    "工": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "work",
        "simplified": "",
        "radicals": ["", ""]
    },
    "許": {
        "zhuyin": "ㄒㄩˇ",
        "pinyin": "xǔ",
        "tone": 3,
        "english": "to permit",
        "simplified": "许",
        "radicals": ["", ""]
    },
    "東": {
        "zhuyin": "ㄉㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "east",
        "simplified": "东",
        "radicals": ["", ""]
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "name",
        "simplified": "",
        "radicals": ["", ""]
    },
    "同": {
        "zhuyin": "ㄊㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "same, similar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "long, length",
        "simplified": "长",
        "radicals": ["", ""]
    },
    "親": {
        "zhuyin": "ㄑㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "parent, relative",
        "simplified": "亲",
        "radicals": ["", ""]
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "kind",
        "simplified": "种",
        "radicals": ["", ""]
    },
    "者": {
        "zhuyin": "ㄓㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "one who (is)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘿": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "hey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "white, pure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "學": {
        "zhuyin": "ㄒㄩㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "learn",
        "simplified": "学",
        "radicals": ["", ""]
    },
    "安": {
        "zhuyin": "ㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "safe, calm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爾": {
        "zhuyin": "ㄦˇ",
        "pinyin": "",
        "tone": 3,
        "english": "thus, thou",
        "simplified": "尔",
        "radicals": ["", ""]
    },
    "叫": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "call",
        "simplified": "",
        "radicals": ["", ""]
    },
    "理": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "essence, truth",
        "simplified": "",
        "radicals": ["", ""]
    },

    "本": {
        "zhuyin": "ㄅㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "measure w. for books",
        "simplified": "",
        "radicals": ["", ""]
    },
    "國": {
        "zhuyin": "ㄍㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "country",
        "simplified": "国",
        "radicals": ["", ""]
    },
    "第": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "ordinal #",
        "simplified": "",
        "radicals": ["", ""]
    },
    "友": {
        "zhuyin": "ㄧㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "friend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "高": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "high, tall",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兩": {
        "zhuyin": "ㄌㄧㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "two (used with measure w.)",
        "simplified": "两",
        "radicals": ["", ""]
    },
    "保": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "defend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "請": {
        "zhuyin": "ㄑㄧㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "invite",
        "simplified": "请",
        "radicals": ["", ""]
    },
    "非": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "重": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "heavy, serious",
        "simplified": "",
        "radicals": ["", ""]
    },
    "公": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "public",
        "simplified": "",
        "radicals": ["", ""]
    },
    "記": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to record",
        "simplified": "记",
        "radicals": ["", ""]
    },
    "身": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "body",
        "simplified": "",
        "radicals": ["", ""]
    },
    "受": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to receive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "住": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to live, reside",
        "simplified": "",
        "radicals": ["", ""]
    },
    "活": {
        "zhuyin": "ㄏㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to live",
        "simplified": "",
        "radicals": ["", ""]
    },
    "加": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to add, plus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "何": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "question word",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伙": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "",
        "tone": 3,
        "english": "companion, buddy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "題": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "topic, subject",
        "simplified": "题",
        "radicals": ["", ""]
    },
    "完": {
        "zhuyin": "ㄨㄢˊ ",
        "pinyin": "wán",
        "tone": 2,
        "english": "to finish, complete",
        "simplified": "",
        "radicals": ["", ""]
    },
    "接": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "	jiē",
        "tone": 1,
        "english": "to receive, join",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拿": {
        "zhuyin": "ㄋㄚˊ",
        "pinyin": "	ná",
        "tone": 2,
        "english": "to take",
        "simplified": "",
        "radicals": ["", ""]
    },
    "望": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "wàng",
        "tone": 4,
        "english": "to gaze, hope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "解": {
        "zhuyin": "ㄐㄧㄝˇ",
        "pinyin": "	jiě",
        "tone": 3,
        "english": "to divide, explain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "其": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "his, hers, its",
        "simplified": "",
        "radicals": ["", ""]
    },
    "離": {
        "zhuyin": "ㄌㄧˊ",
        "pinyin": "lí",
        "tone": 2,
        "english": "to leave, (distance) from",
        "simplified": "离",
        "radicals": ["", ""]
    },
    "談": {
        "zhuyin": "ㄊㄢˊ",
        "pinyin": "tán",
        "tone": 2,
        "english": "to chat",
        "simplified": "谈",
        "radicals": ["", ""]
    },
    "又": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again, also",
        "simplified": "",
        "radicals": ["", ""]
    },
    "新": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "new",
        "simplified": "",
        "radicals": ["", ""]
    },
    "更": {
        "zhuyin": "ㄍㄥ",
        "pinyin": "gèng",
        "tone": 4,
        "english": "more",
        "simplified": "",
        "radicals": ["", ""]
    },
    "錢": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "money",
        "simplified": "钱",
        "radicals": ["", ""]
    },
    "馬": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "horse",
        "simplified": "马",
        "radicals": ["", ""]
    },
    "思": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "to think, consider",
        "simplified": "",
        "radicals": ["", ""]
    },
    "部": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "section, part",
        "simplified": "",
        "radicals": ["", ""]
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "open area",
        "simplified": "场",
        "radicals": ["", ""]
    },
    "嗯": {
        "zhuyin": "ㄣ˙",
        "pinyin": "en",
        "tone": 5,
        "english": "(approval interjection)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "計": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "to plan",
        "simplified": "计",
        "radicals": ["", ""]
    },
    "任": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "rèn",
        "tone": 4,
        "english": "to appoint, office",
        "simplified": "",
        "radicals": ["", ""]
    },
    "確": {
        "zhuyin": "ㄑㄩㄝˋ",
        "pinyin": "què",
        "tone": 4,
        "english": "solid, real",
        "simplified": "确",
        "radicals": ["", ""]
    },
    "吃": {
        "zhuyin": "ㄔ",
        "pinyin": "chī",
        "tone": 1,
        "english": "to eat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "始": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "to begin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "結": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "jiē",
        "tone": 1,
        "english": "to produce",
        "simplified": "结",
        "radicals": ["", ""]
    },
    "利": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "sharp, benefit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "朋": {
        "zhuyin": "ㄆㄥˊ",
        "pinyin": "péng",
        "tone": 2,
        "english": "friend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "警": {
        "zhuyin": "ㄐㄧㄥˇ",
        "pinyin": "jǐng",
        "tone": 1,
        "english": "police, to warn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "士": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "scholar, soldier",
        "simplified": "",
        "radicals": ["", ""]
    },
    "外": {
        "zhuyin": "ㄨㄞˋ",
        "pinyin": "wài",
        "tone": 4,
        "english": "outside, foreign",
        "simplified": "",
        "radicals": ["", ""]
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "(measure w. for items)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "難": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "difficult",
        "simplified": "难",
        "radicals": ["", ""]
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "(measure w. for people)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "表": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "biǎo",
        "tone": 3,
        "english": "exterior surface",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剛": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "gāng",
        "tone": 1,
        "english": "just(now), hard",
        "simplified": "刚",
        "radicals": ["", ""]
    },
    "希": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "hope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "查": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "chá",
        "tone": 2,
        "english": "to research",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拉": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "lā",
        "tone": 1,
        "english": "to pull",
        "simplified": "",
        "radicals": ["", ""]
    },
    "邊": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "biān",
        "tone": 1,
        "english": "side, edge",
        "simplified": "边",
        "radicals": ["", ""]
    },
    "或": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "maybe, perhaps",
        "simplified": "",
        "radicals": ["", ""]
    },
    "將": {
        "zhuyin": "ㄐㄧㄤ",
        "pinyin": "jiāng",
        "tone": 1,
        "english": "will, shall",
        "simplified": "将",
        "radicals": ["", ""]
    },
    "男": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "male",
        "simplified": "",
        "radicals": ["", ""]
    },
    "准": {
        "zhuyin": "ㄓㄨㄣˇ",
        "pinyin": "zhǔn",
        "tone": 3,
        "english": "to allow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "變": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 2,
        "english": "to change",
        "simplified": "变",
        "radicals": ["", ""]
    },
    "證": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "proof",
        "simplified": "证",
        "radicals": ["", ""]
    },
    "物": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "thing, object",
        "simplified": "",
        "radicals": ["", ""]
    },
    "員": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "employee, member",
        "simplified": "员",
        "radicals": ["", ""]
    },
    "總": {
        "zhuyin": "ㄗㄨㄥˇ",
        "pinyin": "zǒng",
        "tone": 3,
        "english": "always",
        "simplified": "总",
        "radicals": ["", ""]
    },
    "噢": {
        "zhuyin": "ㄛ",
        "pinyin": "ō",
        "tone": 1,
        "english": "moan sound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "系": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "system, to connect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幾": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jǐ",
        "tone": 1,
        "english": "how many",
        "simplified": "几",
        "radicals": ["", ""]
    },
    "管": {
        "zhuyin": "ㄍㄨㄢˇ",
        "pinyin": "guǎn",
        "tone": 3,
        "english": "to control",
        "simplified": "",
        "radicals": ["", ""]
    },
    "玩": {
        "zhuyin": "ㄨㄢˊ",
        "pinyin": "wán",
        "tone": 2,
        "english": "play",
        "simplified": "",
        "radicals": ["", ""]
    },
    "處": {
        "zhuyin": "ㄔㄨˇ",
        "pinyin": "chù",
        "tone": 3,
        "english": "place, location",
        "simplified": "处",
        "radicals": ["", ""]
    },
    "辦": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "to do, manage",
        "simplified": "办",
        "radicals": ["", ""]
    },
    "主": {
        "zhuyin": "ㄓㄨˇ",
        "pinyin": "zhǔ",
        "tone": 3,
        "english": "master, main",
        "simplified": "",
        "radicals": ["", ""]
    },
    "氣": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "air",
        "simplified": "气",
        "radicals": ["", ""]
    },
    "每": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "měi",
        "tone": 3,
        "english": "each, every",
        "simplified": "",
        "radicals": ["", ""]
    },
    "少": {
        "zhuyin": "ㄕㄠˇ",
        "pinyin": "shǎo",
        "tone": 3,
        "english": "few, little",
        "simplified": "",
        "radicals": ["", ""]
    },
    "切": {
        "zhuyin": "ㄑㄧㄝ",
        "pinyin": "qiē",
        "tone": 1,
        "english": "to cut, slice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "失": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "to lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "算": {
        "zhuyin": "ㄙㄨㄢˋ",
        "pinyin": "suàn",
        "tone": 4,
        "english": "to calculate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "性": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "xìng",
        "tone": 4,
        "english": "nature, gender",
        "simplified": "",
        "radicals": ["", ""]
    },
    "此": {
        "zhuyin": "ㄘˇ",
        "pinyin": "cǐ",
        "tone": 3,
        "english": "this, these",
        "simplified": "",
        "radicals": ["", ""]
    },
    "必": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "must, will",
        "simplified": "",
        "radicals": ["", ""]
    },
    "備": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "get ready",
        "simplified": "备",
        "radicals": ["", ""]
    },
    "合": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "to close, together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "德": {
        "zhuyin": "ㄉㄜˊ",
        "pinyin": "dé",
        "tone": 2,
        "english": "virtue, ethics",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隊": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "duì",
        "tone": 4,
        "english": "team, group",
        "simplified": "队",
        "radicals": ["", ""]
    },
    "試": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to test, try",
        "simplified": "试",
        "radicals": ["", ""]
    },
    "抱": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to carry in arms",
        "simplified": "",
        "radicals": ["", ""]
    },
    "醫": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "medical",
        "simplified": "医",
        "radicals": ["", ""]
    },
    "通": {
        "zhuyin": "ㄊㄨㄥ",
        "pinyin": "tōng",
        "tone": 1,
        "english": "to connect, open",
        "simplified": "",
        "radicals": ["", ""]
    },
    "體": {
        "zhuyin": "ㄊㄧˇ",
        "pinyin": "tǐ",
        "tone": 3,
        "english": "body, form",
        "simplified": "体",
        "radicals": ["", ""]
    },
    "樂": {
        "zhuyin": "ㄌㄜˋ",
        "pinyin": "lè",
        "tone": 4,
        "english": "happy",
        "simplified": "乐",
        "radicals": ["", ""]
    },
    "並": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "(not) at all",
        "simplified": "并",
        "radicals": ["", ""]
    },
    "三": {
        "zhuyin": "ㄙㄢ",
        "pinyin": "sān",
        "tone": 1,
        "english": "three",
        "simplified": "",
        "radicals": ["", ""]
    },
    "早": {
        "zhuyin": "ㄗㄠˇ",
        "pinyin": "zǎo",
        "tone": 3,
        "english": "early, morning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "tone": 2,
        "english": "door, gate",
        "simplified": "门",
        "radicals": ["", ""]
    },
    "害": {
        "zhuyin": "ㄏㄞˋ",
        "pinyin": "hài",
        "tone": 4,
        "english": "harm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歉": {
        "zhuyin": "ㄑㄧㄢˋ",
        "pinyin": "qiàn",
        "tone": 4,
        "english": "to aplologize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "選": {
        "zhuyin": "ㄒㄩㄢˇ",
        "pinyin": "xuǎn",
        "tone": 3,
        "english": "to choose",
        "simplified": "选",
        "radicals": ["", ""]
    },
    "嗨": {
        "zhuyin": "ㄏㄞ",
        "pinyin": "hāi",
        "tone": 1,
        "english": "oh, alas-(exclamation), hi, high-(loanwords)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "房": {
        "zhuyin": "ㄈㄤˊ",
        "pinyin": "fáng",
        "tone": 2,
        "english": "house, room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "命": {
        "zhuyin": "ㄇㄧㄥˋ",
        "pinyin": "mìng",
        "tone": 4,
        "english": "life, fate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "且": {
        "zhuyin": "ㄑㄧㄝˇ",
        "pinyin": "qiě",
        "tone": 3,
        "english": "moreover, both",
        "simplified": "",
        "radicals": ["", ""]
    },
    "向": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "towards, direction",
        "simplified": "",
        "radicals": ["", ""]
    },
    "興": {
        "zhuyin": "ㄒㄧㄥ",
        "pinyin": "xīng",
        "tone": 1,
        "english": "to rise, flourish",
        "simplified": "兴",
        "radicals": ["", ""]
    },
    "球": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "qiú",
        "tone": 2,
        "english": "ball, sphere",
        "simplified": "",
        "radicals": ["", ""]
    },
    "服": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "clothes, to serve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "入": {
        "zhuyin": "ㄖㄨˋ",
        "pinyin": "rù",
        "tone": 4,
        "english": "to enter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "照": {
        "zhuyin": "ㄓㄠˋ",
        "pinyin": "zhào",
        "tone": 4,
        "english": "according to, to shine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "提": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "tí",
        "tone": 2,
        "english": "to lift",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "diào",
        "tone": 4,
        "english": "to fall, lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夫": {
        "zhuyin": "ㄈㄨ",
        "pinyin": "fū",
        "tone": 1,
        "english": "husband",
        "simplified": "",
        "radicals": ["", ""]
    },
    "路": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "road",
        "simplified": "",
        "radicals": ["", ""]
    },
    "演": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "yǎn",
        "tone": 3,
        "english": "to act, develop",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夠": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "gòu",
        "tone": 4,
        "english": "to be enough",
        "simplified": "够",
        "radicals": ["", ""]
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun, day",
        "simplified": "",
        "radicals": ["", ""]
    },
    "案": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "leagal case, record",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舞": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "to dance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "決": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to decide",
        "simplified": "决",
        "radicals": ["", ""]
    },
    "求": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "qiú",
        "tone": 2,
        "english": "to look for, request",
        "simplified": "",
        "radicals": ["", ""]
    },
    "約": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "yuē",
        "tone": 1,
        "english": "appointment, to invite",
        "simplified": "约",
        "radicals": ["", ""]
    },
    "字": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "word, character",
        "simplified": "",
        "radicals": ["", ""]
    },
    "呃": {
        "zhuyin": "ㄜˋ",
        "pinyin": "è",
        "tone": 4,
        "english": "belch, hiccup",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肯": {
        "zhuyin": "ㄎㄣˇ",
        "pinyin": "kěn",
        "tone": 3,
        "english": "to agree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "目": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "eye",
        "simplified": "",
        "radicals": ["", ""]
    },
    "笑": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "xiào",
        "tone": 4,
        "english": "to laugh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傷": {
        "zhuyin": "ㄕㄤ",
        "pinyin": "shāng",
        "tone": 1,
        "english": "wound",
        "simplified": "伤",
        "radicals": ["", ""]
    },
    "神": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "deity, spirit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "父": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "father",
        "simplified": "",
        "radicals": ["", ""]
    },
    "指": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "finger, refer to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "報": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to announce",
        "simplified": "报",
        "radicals": ["", ""]
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "liú",
        "tone": 2,
        "english": "to stay, remain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "shuǐ",
        "tone": 3,
        "english": "water, liquid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "教": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "jiào",
        "tone": 4,
        "english": "to teach",
        "simplified": "",
        "radicals": ["", ""]
    },
    "槍": {
        "zhuyin": "ㄑㄧㄤ",
        "pinyin": "qiāng",
        "tone": 1,
        "english": "gun",
        "simplified": "枪",
        "radicals": ["", ""]
    },
    "清": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "色": {
        "zhuyin": "ㄙㄜˋ",
        "pinyin": "sè",
        "tone": 4,
        "english": "color",
        "simplified": "",
        "radicals": ["", ""]
    },
    "號": {
        "zhuyin": "ㄏㄠˋ",
        "pinyin": "hào",
        "tone": 4,
        "english": "number",
        "simplified": "号",
        "radicals": ["", ""]
    },
    "世": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "life, age, world",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遠": {
        "zhuyin": "ㄩㄢˇ",
        "pinyin": "yuǎn",
        "tone": 3,
        "english": "far, distant",
        "simplified": "远",
        "radicals": ["", ""]
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "slice, thin piece",
        "simplified": "",
        "radicals": ["", ""]
    },
    "官": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "official",
        "simplified": "",
        "radicals": ["", ""]
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "mouth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "師": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "teacher, master",
        "simplified": "师",
        "radicals": ["", ""]
    },
    "原": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "original",
        "simplified": "",
        "radicals": ["", ""]
    },
    "酒": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "wine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "周": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "circle, week",
        "simplified": "",
        "radicals": ["", ""]
    },
    "星": {
        "zhuyin": "ㄒㄧㄥ",
        "pinyin": "xīng",
        "tone": 1,
        "english": "star",
        "simplified": "",
        "radicals": ["", ""]
    },
    "識": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "to know",
        "simplified": "识",
        "radicals": ["", ""]
    },
    "賽": {
        "zhuyin": "ㄙㄞˋ",
        "pinyin": "sài",
        "tone": 4,
        "english": "competition",
        "simplified": "赛",
        "radicals": ["", ""]
    },
    "救": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "to save",
        "simplified": "",
        "radicals": ["", ""]
    },
    "底": {
        "zhuyin": "ㄉㄧˇ",
        "pinyin": "dǐ",
        "tone": 3,
        "english": "bottom, end",
        "simplified": "",
        "radicals": ["", ""]
    },
    "棒": {
        "zhuyin": "ㄅㄤˋ",
        "pinyin": "bàng",
        "tone": 4,
        "english": "wonderful, stick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "須": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "xū",
        "tone": 1,
        "english": "must, beard",
        "simplified": "须",
        "radicals": ["", ""]
    },
    "收": {
        "zhuyin": "ㄕㄡ",
        "pinyin": "shōu",
        "tone": 1,
        "english": "to recieve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "交": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "jiāo",
        "tone": 1,
        "english": "to deliver, to pay",
        "simplified": "",
        "radicals": ["", ""]
    },
    "坐": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "to sit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "停": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "tíng",
        "tone": 2,
        "english": "to stop",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卡": {
        "zhuyin": "ㄎㄚˇ",
        "pinyin": "kǎ",
        "tone": 3,
        "english": "card, to block",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尼": {
        "zhuyin": "ㄋㄧˊ",
        "pinyin": "ní",
        "tone": 2,
        "english": "'ni' (phonetic for loanwords)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婚": {
        "zhuyin": "ㄏㄨㄣ",
        "pinyin": "hūn",
        "tone": 1,
        "english": "to marry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "格": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "gé",
        "tone": 2,
        "english": "grid, pattern",
        "simplified": "",
        "radicals": ["", ""]
    },
    "眼": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "yǎn",
        "tone": 3,
        "english": "eye",
        "simplified": "",
        "radicals": ["", ""]
    },
    "金": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "gold",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蛋": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 2,
        "english": "egg",
        "simplified": "",
        "radicals": ["", ""]
    },
    "息": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "breath, to rest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "室": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "內": {
        "zhuyin": "ㄋㄟˋ",
        "pinyin": "nèi",
        "tone": 4,
        "english": "inside, inner",
        "simplified": "",
        "radicals": ["", ""]
    },
    "運": {
        "zhuyin": "ㄩㄣˋ",
        "pinyin": "yùn",
        "tone": 4,
        "english": "to move fortune",
        "simplified": "运",
        "radicals": ["", ""]
    },
    "根": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "tone": 1,
        "english": "root, basis",
        "simplified": "",
        "radicals": ["", ""]
    },
    "單": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "single, list",
        "simplified": "单",
        "radicals": ["", ""]
    },
    "寶": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "bǎo",
        "tone": 3,
        "english": "jewel, treasure",
        "simplified": "宝",
        "radicals": ["", ""]
    },
    "哥": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "elder brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "pinyin": "zhāng",
        "tone": 1,
        "english": "(mw. for flat objects)",
        "simplified": "张",
        "radicals": ["", ""]
    },
    "搞": {
        "zhuyin": "ㄍㄠˇ",
        "pinyin": "gǎo",
        "tone": 3,
        "english": "to make, set up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戰": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "zhàn",
        "tone": 4,
        "english": "to fight, war",
        "simplified": "战",
        "radicals": ["", ""]
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "huǒ",
        "tone": 3,
        "english": "fire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羅": {
        "zhuyin": "ㄌㄨㄛˊ",
        "pinyin": "luó",
        "tone": 2,
        "english": "gauze, to gather",
        "simplified": "罗",
        "radicals": ["", ""]
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to arrive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "萬": {
        "zhuyin": "ㄨㄢˋ",
        "pinyin": "wàn",
        "tone": 4,
        "english": "ten thousand",
        "simplified": "万",
        "radicals": ["", ""]
    },
    "聲": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "sound, voice",
        "simplified": "声",
        "radicals": ["", ""]
    },
    "布": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "cloth, to spread",
        "simplified": "",
        "radicals": ["", ""]
    },
    "音": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "sound, noise",
        "simplified": "",
        "radicals": ["", ""]
    },
    "期": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "period of time",
        "simplified": "",
        "radicals": ["", ""]
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "tiáo",
        "tone": 2,
        "english": "(mw. for long things)",
        "simplified": "条",
        "radicals": ["", ""]
    },
    "消": {
        "zhuyin": "ㄒㄧㄠ",
        "pinyin": "xiāo",
        "tone": 1,
        "english": "to vanish, disappear, need",
        "simplified": "",
        "radicals": ["", ""]
    },
    "買": {
        "zhuyin": "ㄇㄞˇ",
        "pinyin": "mǎi",
        "tone": 3,
        "english": "to buy",
        "simplified": "买",
        "radicals": ["", ""]
    },
    "病": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "illness, disease",
        "simplified": "",
        "radicals": ["", ""]
    },
    "整": {
        "zhuyin": "ㄓㄥˇ",
        "pinyin": "zhěng",
        "tone": 3,
        "english": "exactly, entire, whole, in order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奇": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "strange",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弟": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "little brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "犯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "fàn",
        "tone": 4,
        "english": "to violate, offend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "裝": {
        "zhuyin": "ㄓㄨㄤ",
        "pinyin": "zhuāng",
        "tone": 1,
        "english": "clothing, to pretend",
        "simplified": "装",
        "radicals": ["", ""]
    },
    "貝": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "shell",
        "simplified": "贝",
        "radicals": ["", ""]
    },
    "您": {
        "zhuyin": "ㄋㄧㄣˊ",
        "pinyin": "nín",
        "tone": 2,
        "english": "you (polite, formal)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "送": {
        "zhuyin": "ㄙㄨㄥˋ",
        "pinyin": "sòng",
        "tone": 4,
        "english": "to give, deliver",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "pà",
        "tone": 4,
        "english": "to fear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "護": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "to protect",
        "simplified": "护",
        "radicals": ["", ""]
    },
    "度": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "dù",
        "tone": 4,
        "english": "degree, measure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "huā",
        "tone": 1,
        "english": "flower, to spend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "jié",
        "tone": 2,
        "english": "festival",
        "simplified": "节",
        "radicals": ["", ""]
    },
    "近": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "near",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怪": {
        "zhuyin": "ㄍㄨㄞˋ",
        "pinyin": "guài",
        "tone": 4,
        "english": "odd, monster",
        "simplified": "",
        "radicals": ["", ""]
    },
    "持": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "to maintain, manage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "光": {
        "zhuyin": "ㄍㄨㄤ",
        "pinyin": "guāng",
        "tone": 1,
        "english": "bright, only",
        "simplified": "",
        "radicals": ["", ""]
    },
    "與": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "and, with",
        "simplified": "与",
        "radicals": ["", ""]
    },
    "穿": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "chuān",
        "tone": 1,
        "english": "to wear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "願": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "yuàn",
        "tone": 4,
        "english": "to hope, willing",
        "simplified": "愿",
        "radicals": ["", ""]
    },
    "象": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "elephant, form",
        "simplified": "",
        "radicals": ["", ""]
    },
    "影": {
        "zhuyin": "ㄧㄥˇ",
        "pinyin": "yǐng",
        "tone": 3,
        "english": "image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擊": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "to hit",
        "simplified": "击",
        "radicals": ["", ""]
    },
    "使": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "to cause",
        "simplified": "",
        "radicals": ["", ""]
    },
    "二": {
        "zhuyin": "ㄦˋ",
        "pinyin": "èr",
        "tone": 2,
        "english": "two",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喝": {
        "zhuyin": "ㄏㄜ",
        "pinyin": "hē",
        "tone": 1,
        "english": "to drink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "moon, month",
        "simplified": "",
        "radicals": ["", ""]
    },
    "器": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "device, tool",
        "simplified": "",
        "radicals": ["", ""]
    },
    "察": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "chá",
        "tone": 2,
        "english": "to examine, observe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "制": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to manufacture",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘛": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "tone": 5,
        "english": "(obvious p.), (pause p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哈": {
        "zhuyin": "ㄏㄚ",
        "pinyin": "hā",
        "tone": 1,
        "english": "HA- laughter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "助": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "to help",
        "simplified": "",
        "radicals": ["", ""]
    },
    "達": {
        "zhuyin": "ㄉㄚˊ",
        "pinyin": "dá",
        "tone": 2,
        "english": "to reach",
        "simplified": "达",
        "radicals": ["", ""]
    },
    "海": {
        "zhuyin": "ㄏㄞˇ",
        "pinyin": "hǎi",
        "tone": 3,
        "english": "ocean, sea",
        "simplified": "",
        "radicals": ["", ""]
    },
    "待": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to wait, about to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "托": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "tuō",
        "tone": 1,
        "english": "support, to entrust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "除": {
        "zhuyin": "ㄔㄨˊ",
        "pinyin": "chú",
        "tone": 2,
        "english": "to remove",
        "simplified": "",
        "radicals": ["", ""]
    },
    "寫": {
        "zhuyin": "ㄒㄧㄝˇ",
        "pinyin": "xiě",
        "tone": 3,
        "english": "to write",
        "simplified": "写",
        "radicals": ["", ""]
    },
    "絕": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "sever, absolutely",
        "simplified": "绝",
        "radicals": ["", ""]
    },
    "界": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "boundary, scope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帝": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "emperor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姐": {
        "zhuyin": "ㄐㄧㄝˇ",
        "pinyin": "jiě",
        "tone": 3,
        "english": "older sister",
        "simplified": "",
        "radicals": ["", ""]
    },
    "反": {
        "zhuyin": "ㄈㄢˇ",
        "pinyin": "fǎn",
        "tone": 3,
        "english": "contrary, opposite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擔": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "to undertake",
        "simplified": "担",
        "radicals": ["", ""]
    },
    "司": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "to manage, department",
        "simplified": "",
        "radicals": ["", ""]
    },
    "強": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "qiáng",
        "tone": 2,
        "english": "strong, powerful",
        "simplified": "强",
        "radicals": ["", ""]
    },
    "由": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "from, by",
        "simplified": "",
        "radicals": ["", ""]
    },
    "論": {
        "zhuyin": "ㄌㄨㄣˋ",
        "pinyin": "lùn",
        "tone": 4,
        "english": "opinion, theory",
        "simplified": "论",
        "radicals": ["", ""]
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "to fly",
        "simplified": "飞",
        "radicals": ["", ""]
    },
    "亞": {
        "zhuyin": "ㄧㄚˋ",
        "pinyin": "yà",
        "tone": 4,
        "english": "Asia",
        "simplified": "亚",
        "radicals": ["", ""]
    },
    "續": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "xù",
        "tone": 4,
        "english": "to continue",
        "simplified": "续",
        "radicals": ["", ""]
    },
    "視": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to look at",
        "simplified": "视",
        "radicals": ["", ""]
    },
    "母": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "mother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "空": {
        "zhuyin": "ㄎㄨㄥ",
        "pinyin": "kōng",
        "tone": 1,
        "english": "empty, air",
        "simplified": "",
        "radicals": ["", ""]
    },
    "軍": {
        "zhuyin": "ㄐㄩㄣ",
        "pinyin": "jūn",
        "tone": 1,
        "english": "army",
        "simplified": "军",
        "radicals": ["", ""]
    },
    "跑": {
        "zhuyin": "ㄆㄠˇ",
        "pinyin": "pǎo",
        "tone": 3,
        "english": "to run",
        "simplified": "",
        "radicals": ["", ""]
    },
    "阿": {
        "zhuyin": "ㄚ",
        "pinyin": "ā",
        "tone": 1,
        "english": "(prefix for names)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盡": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "to greatest extent",
        "simplified": "尽",
        "radicals": ["", ""]
    },
    "注": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "pay attention, to register",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弄": {
        "zhuyin": "ㄋㄨㄥˋ",
        "pinyin": "nòng",
        "tone": 4,
        "english": "to do",
        "simplified": "",
        "radicals": ["", ""]
    },
    "密": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "secret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "線": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "xiàn",
        "tone": 4,
        "english": "thread",
        "simplified": "线",
        "radicals": ["", ""]
    },
    "代": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to substitute, era",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忙": {
        "zhuyin": "ㄇㄤˊ",
        "pinyin": "máng",
        "tone": 2,
        "english": "busy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "壞": {
        "zhuyin": "ㄏㄨㄞˋ",
        "pinyin": "huài",
        "tone": 4,
        "english": "bad, broken",
        "simplified": "坏",
        "radicals": ["", ""]
    },
    "久": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "long (time)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "議": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "to discuss",
        "simplified": "议",
        "radicals": ["", ""]
    },
    "衣": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "xiě",
        "tone": 3,
        "english": "blood",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鍾": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "clock, o'clock",
        "simplified": "钟",
        "radicals": ["", ""]
    },
    "繼": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 2,
        "english": "to carry on",
        "simplified": "继",
        "radicals": ["", ""]
    },
    "禮": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "lǐ",
        "tone": 1,
        "english": "gift, ceremony",
        "simplified": "礼",
        "radicals": ["", ""]
    },
    "數": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "number, figure",
        "simplified": "数",
        "radicals": ["", ""]
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "fèn",
        "tone": 4,
        "english": "(mw. for papers, sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瘋": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "insane",
        "simplified": "疯",
        "radicals": ["", ""]
    },
    "平": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "píng",
        "tone": 2,
        "english": "flat, equal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "to prohibit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "ten",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拜": {
        "zhuyin": "ㄅㄞˋ",
        "pinyin": "bài",
        "tone": 4,
        "english": "to pay respect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鬼": {
        "zhuyin": "ㄍㄨㄟˇ",
        "pinyin": "guǐ",
        "tone": 3,
        "english": "ghost",
        "simplified": "",
        "radicals": ["", ""]
    },
    "睡": {
        "zhuyin": "ㄕㄨㄟˋ",
        "pinyin": "shuì",
        "tone": 4,
        "english": "sleep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啦": {
        "zhuyin": "ㄌㄚ˙",
        "pinyin": "la",
        "tone": 5,
        "english": "(exclamation p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "調": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "diào",
        "tone": 4,
        "english": "to transfer, tone",
        "simplified": "调",
        "radicals": ["", ""]
    },
    "巴": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "to stick to, close to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兄": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "xiōng",
        "tone": 1,
        "english": "elder brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "緊": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "jǐn",
        "tone": 3,
        "english": "strict, tight",
        "simplified": "紧",
        "radicals": ["", ""]
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "zhàn",
        "tone": 4,
        "english": "to stop, station",
        "simplified": "",
        "radicals": ["", ""]
    },
    "品": {
        "zhuyin": "ㄆㄧㄣˇ",
        "pinyin": "pǐn",
        "tone": 3,
        "english": "goods, product",
        "simplified": "",
        "radicals": ["", ""]
    },
    "英": {
        "zhuyin": "ㄧㄥ",
        "pinyin": "yīng",
        "tone": 1,
        "english": "brave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "罪": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "zuì",
        "tone": 4,
        "english": "guilt, crime",
        "simplified": "",
        "radicals": ["", ""]
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "language, culture",
        "simplified": "",
        "radicals": ["", ""]
    },
    "亮": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "liàng",
        "tone": 4,
        "english": "bright, clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抓": {
        "zhuyin": "ㄓㄨㄚ",
        "pinyin": "zhuā",
        "tone": 1,
        "english": "to grab",
        "simplified": "",
        "radicals": ["", ""]
    },
    "跳": {
        "zhuyin": "ㄊㄧㄠˋ",
        "pinyin": "tiào",
        "tone": 4,
        "english": "to jump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聯": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to unite, to join",
        "simplified": "联",
        "radicals": ["", ""]
    },
    "混": {
        "zhuyin": "ㄏㄨㄣˋ",
        "pinyin": "hùn",
        "tone": 4,
        "english": "to mix",
        "simplified": "",
        "radicals": ["", ""]
    },
    "便": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "ordinary, convenient",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狗": {
        "zhuyin": "ㄍㄡˇ",
        "pinyin": "gǒu",
        "tone": 3,
        "english": "dog",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腦": {
        "zhuyin": "ㄋㄠˇ",
        "pinyin": "nǎo",
        "tone": 3,
        "english": "brain, mind",
        "simplified": "脑",
        "radicals": ["", ""]
    },
    "業": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "occupation",
        "simplified": "业",
        "radicals": ["", ""]
    },
    "歌": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "song",
        "simplified": "",
        "radicals": ["", ""]
    },
    "精": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "essence, vitality",
        "simplified": "",
        "radicals": ["", ""]
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "bāo",
        "tone": 1,
        "english": "to wrap, bag",
        "simplified": "",
        "radicals": ["", ""]
    },
    "轉": {
        "zhuyin": "ㄓㄨㄢˇ",
        "pinyin": "zhuǎn",
        "tone": 3,
        "english": "to revolve, turn",
        "simplified": "转",
        "radicals": ["", ""]
    },
    "卻": {
        "zhuyin": "ㄑㄩㄝˋ",
        "pinyin": "què",
        "tone": 4,
        "english": "but, however",
        "simplified": "",
        "radicals": ["", ""]
    },
    "參": {
        "zhuyin": "ㄘㄢ",
        "pinyin": "cān",
        "tone": 1,
        "english": "to participate",
        "simplified": "参",
        "radicals": ["", ""]
    },
    "院": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "yuàn",
        "tone": 4,
        "english": "courtyard, institution",
        "simplified": "",
        "radicals": ["", ""]
    },
    "務": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "affair, buisness",
        "simplified": "务",
        "radicals": ["", ""]
    },
    "基": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "base, foundation",
        "simplified": "",
        "radicals": ["", ""]
    },
    "臺": {
        "zhuyin": "ㄊㄞˊ",
        "pinyin": "tái",
        "tone": 2,
        "english": "platform",
        "simplified": "台",
        "radicals": ["", ""]
    },
    //first 500 done
    "另": {
        "zhuyin": "ㄌㄧㄥˋ",
        "pinyin": "lìng",
        "tone": 4,
        "english": "other, another",
        "simplified": "",
        "radicals": ["", ""]
    },
    "恩": {
        "zhuyin": "ㄣ",
        "pinyin": "ēn",
        "tone": 1,
        "english": "grace",
        "simplified": "",
        "radicals": ["", ""]
    },
    "書": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "book",
        "simplified": "书",
        "radicals": ["", ""]
    },
    "統": {
        "zhuyin": "ㄊㄨㄥˇ",
        "pinyin": "tǒng",
        "tone": 3,
        "english": "to unite",
        "simplified": "统",
        "radicals": ["", ""]
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "wind",
        "simplified": "风",
        "radicals": ["", ""]
    },
    "況": {
        "zhuyin": "ㄎㄨㄤˋ",
        "pinyin": "kuàng",
        "tone": 4,
        "english": "situation, moreover",
        "simplified": "况",
        "radicals": ["", ""]
    },
    "四": {
        "zhuyin": "ㄙˋ",
        "pinyin": "sì",
        "tone": 4,
        "english": "four",
        "simplified": "",
        "radicals": ["", ""]
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "hēi",
        "tone": 1,
        "english": "black",
        "simplified": "",
        "radicals": ["", ""]
    },
    "否": {
        "zhuyin": "ㄈㄡˇ",
        "pinyin": "fǒu",
        "tone": 3,
        "english": "to deny",
        "simplified": "",
        "radicals": ["", ""]
    },
    "險": {
        "zhuyin": "ㄒㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "danger",
        "simplified": "险",
        "radicals": ["", ""]
    },
    "言": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "words, speech",
        "simplified": "",
        "radicals": ["", ""]
    },
    "米": {
        "zhuyin": "ㄇㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傑": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "distinguished",
        "simplified": "杰",
        "radicals": ["", ""]
    },
    "校": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "school",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幸": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fortunate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傳": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to transfer, send",
        "simplified": "传",
        "radicals": ["", ""]
    },
    "復": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to return, repeat",
        "simplified": "复",
        "radicals": ["", ""]
    },
    "量": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "quantity, amount",
        "simplified": "",
        "radicals": ["", ""]
    },
    "首": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "head, chief",
        "simplified": "",
        "radicals": ["", ""]
    },
    "改": {
        "zhuyin": "ㄍㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to change",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忘": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "forget",
        "simplified": "",
        "radicals": ["", ""]
    },
    "術": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "method, technique",
        "simplified": "术",
        "radicals": ["", ""]
    },
    "局": {
        "zhuyin": "ㄐㄩˊ",
        "pinyin": "jú",
        "tone": 2,
        "english": "office, narrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "客": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "customer, guest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "假": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "jiǎ",
        "tone": 3,
        "english": "fake, to borrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "永": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "yǒng",
        "tone": 3,
        "english": "forever",
        "simplified": "",
        "radicals": ["", ""]
    },
    "維": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to maintain",
        "simplified": "维",
        "radicals": ["", ""]
    },
    "歲": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "years(of age)",
        "simplified": "岁",
        "radicals": ["", ""]
    },
    "據": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "according to, to seize",
        "simplified": "据",
        "radicals": ["", ""]
    },
    "派": {
        "zhuyin": "ㄆㄞˋ",
        "pinyin": "pài",
        "tone": 4,
        "english": "group, school of thought",
        "simplified": "",
        "radicals": ["", ""]
    },
    "票": {
        "zhuyin": "ㄆㄧㄠˋ",
        "pinyin": "piào",
        "tone": 4,
        "english": "ticket",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蘭": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "lán",
        "tone": 2,
        "english": "orchid",
        "simplified": "兰",
        "radicals": ["", ""]
    },
    "惡": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "evil, ugly",
        "simplified": "恶",
        "radicals": ["", ""]
    },
    "煩": {
        "zhuyin": "ㄈㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to trouble",
        "simplified": "烦",
        "radicals": ["", ""]
    },
    "取": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to take",
        "simplified": "",
        "radicals": ["", ""]
    },
    "游": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to swim, travel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糟": {
        "zhuyin": "ㄗㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "ruined, bad, messy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "令": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "command, to order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隨": {
        "zhuyin": "ㄙㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to follow, comply",
        "simplified": "随",
        "radicals": ["", ""]
    },
    "五": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "five",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聖": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "holy",
        "simplified": "圣",
        "radicals": ["", ""]
    },
    "式": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "tone": 4,
        "english": "type, style",
        "simplified": "",
        "radicals": ["", ""]
    },
    "探": {
        "zhuyin": "ㄊㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to explore",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘴": {
        "zhuyin": "ㄗㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "mouth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毒": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "poison",
        "simplified": "",
        "radicals": ["", ""]
    },
    "越": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to exceed, climb over",
        "simplified": "",
        "radicals": ["", ""]
    },
    "律": {
        "zhuyin": "ㄌㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "law",
        "simplified": "",
        "radicals": ["", ""]
    },
    "費": {
        "zhuyin": "ㄈㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "expense",
        "simplified": "费",
        "radicals": ["", ""]
    },
    "科": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "",
        "tone": 1,
        "english": "division",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麻": {
        "zhuyin": "ㄇㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "hemp, rough",
        "simplified": "",
        "radicals": ["", ""]
    },
    "簡": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "simple",
        "simplified": "简",
        "radicals": ["", ""]
    },
    "易": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "easy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "流": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to flow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "治": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to govern, solve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "唱": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to sing",
        "simplified": "",
        "radicals": ["", ""]
    },
    "答": {
        "zhuyin": "ㄉㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to reply, answer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "倒": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "to invert, actually",
        "simplified": "",
        "radicals": ["", ""]
    },
    "划": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to plan, row",
        "simplified": "",
        "radicals": ["", ""]
    },
    "控": {
        "zhuyin": "ㄎㄨㄥˋ",
        "pinyin": "kòng",
        "tone": 4,
        "english": "to accuse, manage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "味": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "taste, smell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "區": {
        "zhuyin": "ㄑㄩ",
        "pinyin": "qū",
        "tone": 1,
        "english": "area",
        "simplified": "区",
        "radicals": ["", ""]
    },
    "漂": {
        "zhuyin": "ㄆㄧㄠ",
        "pinyin": "piāo",
        "tone": 1,
        "english": "to float",
        "simplified": "",
        "radicals": ["", ""]
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to support",
        "simplified": "",
        "radicals": ["", ""]
    },
    "乎": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "hū",
        "tone": 1,
        "english": "in, at, from",
        "simplified": "",
        "radicals": ["", ""]
    },
    "錄": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "diary, record",
        "simplified": "录",
        "radicals": ["", ""]
    },
    "考": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "kǎo",
        "tone": 3,
        "english": "to test",
        "simplified": "",
        "radicals": ["", ""]
    },
    "超": {
        "zhuyin": "ㄔㄠ",
        "pinyin": "chāo",
        "tone": 1,
        "english": "to exceed, super-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拍": {
        "zhuyin": "ㄆㄞ",
        "pinyin": "pāi",
        "tone": 1,
        "english": "to clap, take(a photo)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輕": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "light, gentle",
        "simplified": "轻",
        "radicals": ["", ""]
    },
    "連": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to link, connect, continuous",
        "simplified": "连",
        "radicals": ["", ""]
    },
    "往": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "towards",
        "simplified": "",
        "radicals": ["", ""]
    },
    "組": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "to organize, group",
        "simplified": "组",
        "radicals": ["", ""]
    },
    "滿": {
        "zhuyin": "ㄇㄢˇ",
        "pinyin": "mǎn",
        "tone": 3,
        "english": "to fill, satisfied",
        "simplified": "满",
        "radicals": ["", ""]
    },
    "造": {
        "zhuyin": "ㄗㄠˋ",
        "pinyin": "zào",
        "tone": 4,
        "english": "to build, make",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彈": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "bullet",
        "simplified": "弹",
        "radicals": ["", ""]
    },
    "靜": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "still, calm",
        "simplified": "静",
        "radicals": ["", ""]
    },
    "故": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "old, happening",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吸": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "breathe, inhale",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "call attention",
        "simplified": "",
        "radicals": ["", ""]
    },
    "集": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "to gather, collect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "極": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "extremely",
        "simplified": "极",
        "radicals": ["", ""]
    },
    "講": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "jiǎng",
        "tone": 3,
        "english": "to speak, lecture",
        "simplified": "讲",
        "radicals": ["", ""]
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "tone": 4,
        "english": "money, lump",
        "simplified": "块",
        "radicals": ["", ""]
    },
    "趣": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "qù",
        "tone": 4,
        "english": "interesting",
        "simplified": "",
        "radicals": ["", ""]
    },
    "類": {
        "zhuyin": "ㄌㄟˋ",
        "pinyin": "lèi",
        "tone": 4,
        "english": "kind, category",
        "simplified": "类",
        "radicals": ["", ""]
    },
    "呀": {
        "zhuyin": "ㄧㄚ",
        "pinyin": "yā",
        "tone": 1,
        "english": "(surprise p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戲": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "drama, trick",
        "simplified": "戏",
        "radicals": ["", ""]
    },
    "曾": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "céng",
        "tone": 2,
        "english": "once, already, former, previously",
        "simplified": "",
        "radicals": ["", ""]
    },
    "容": {
        "zhuyin": "ㄖㄨㄥˊ",
        "pinyin": "róng",
        "tone": 2,
        "english": "to contain, appearance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "步": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "a step",
        "simplified": "",
        "radicals": ["", ""]
    },
    "投": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "tóu",
        "tone": 2,
        "english": "to cast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "化": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to change into",
        "simplified": "",
        "radicals": ["", ""]
    },
    "未": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "not, have not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "束": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "to bind, bundle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "醒": {
        "zhuyin": "ㄒㄧㄥˇ",
        "pinyin": "xǐng",
        "tone": 1,
        "english": "to wake up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "威": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "power",
        "simplified": "",
        "radicals": ["", ""]
    },
    "班": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "team, class",
        "simplified": "",
        "radicals": ["", ""]
    },
    "終": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "end, finish",
        "simplified": "终",
        "radicals": ["", ""]
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "pinyin": "chà",
        "tone": 4,
        "english": "inferior, bad",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夢": {
        "zhuyin": "ㄇㄥˋ",
        "pinyin": "mèng",
        "tone": 4,
        "english": "dream",
        "simplified": "梦",
        "radicals": ["", ""]
    },
    "贏": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "yíng",
        "tone": 2,
        "english": "to win",
        "simplified": "",
        "radicals": ["", ""]
    },
    "葯": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "yào",
        "tone": 4,
        "english": "medicine",
        "simplified": "药",
        "radicals": ["", ""]
    },
    "迪": {
        "zhuyin": "ㄉㄧˊ",
        "pinyin": "dí",
        "tone": 2,
        "english": "to enlighten",
        "simplified": "",
        "radicals": ["", ""]
    },
    "店": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "diàn",
        "tone": 4,
        "english": "shop, inn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麗": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "beautiful",
        "simplified": "丽",
        "radicals": ["", ""]
    },
    "賣": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "to sell",
        "simplified": "卖",
        "radicals": ["", ""]
    },
    "顯": {
        "zhuyin": "ㄒㄧㄢˇ",
        "pinyin": "xiǎn",
        "tone": 3,
        "english": "prominent, to show",
        "simplified": "显",
        "radicals": ["", ""]
    },
    "監": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "to supervise",
        "simplified": "监",
        "radicals": ["", ""]
    },
    "圖": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "tú",
        "tone": 2,
        "english": "diagram, map",
        "simplified": "图",
        "radicals": ["", ""]
    },
    "半": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "half",
        "simplified": "",
        "radicals": ["", ""]
    },
    "語": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "language, speech",
        "simplified": "语",
        "radicals": ["", ""]
    },
    "付": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "to pay, hand over",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "rè",
        "tone": 4,
        "english": "hot",
        "simplified": "热",
        "radicals": ["", ""]
    },
    "排": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "pái",
        "tone": 2,
        "english": "a row, to arrange",
        "simplified": "",
        "radicals": ["", ""]
    },
    "楚": {
        "zhuyin": "ㄔㄨˇ",
        "pinyin": "chǔ",
        "tone": 3,
        "english": "distinct, clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偷": {
        "zhuyin": "ㄊㄡ",
        "pinyin": "tōu",
        "tone": 1,
        "english": "to steal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敢": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "to dare",
        "simplified": "",
        "radicals": ["", ""]
    },
    "油": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "oil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餐": {
        "zhuyin": "ㄘㄢ",
        "pinyin": "cān",
        "tone": 1,
        "english": "meal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "破": {
        "zhuyin": "ㄆㄛˋ",
        "pinyin": "pò",
        "tone": 4,
        "english": "broken, to destroy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杯": {
        "zhuyin": "ㄅㄟ",
        "pinyin": "bēi",
        "tone": 1,
        "english": "cup",
        "simplified": "",
        "radicals": ["", ""]
    },
    "市": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "market, city",
        "simplified": "",
        "radicals": ["", ""]
    },
    "城": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "city, town",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哇": {
        "zhuyin": "ㄨㄚ",
        "pinyin": "wā",
        "tone": 1,
        "english": "child cry sound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "權": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "quán",
        "tone": 2,
        "english": "authority, power",
        "simplified": "权",
        "radicals": ["", ""]
    },
    "某": {
        "zhuyin": "ㄇㄡˇ",
        "pinyin": "mǒu",
        "tone": 3,
        "english": "some, a certain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "激": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "to excite, fierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "立": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "to stand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "程": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "rule, order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伊": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "(i or yi, phoenetic)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "討": {
        "zhuyin": "ㄊㄠˇ",
        "pinyin": "tǎo",
        "tone": 3,
        "english": "to invite, discuss",
        "simplified": "讨",
        "radicals": ["", ""]
    },
    "責": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "duty",
        "simplified": "责",
        "radicals": ["", ""]
    },
    "昨": {
        "zhuyin": "ㄗㄨㄛˊ",
        "pinyin": "zuó",
        "tone": 2,
        "english": "yesterday",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閉": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "to close, shut",
        "simplified": "闭",
        "radicals": ["", ""]
    },
    "庭": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "tíng",
        "tone": 2,
        "english": "main hall, courtyard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "落": {
        "zhuyin": "ㄌㄨㄛˋ",
        "pinyin": "luò",
        "tone": 4,
        "english": "to set, decline",
        "simplified": "",
        "radicals": ["", ""]
    },
    "飯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "fàn",
        "tone": 4,
        "english": "food, meal",
        "simplified": "饭",
        "radicals": ["", ""]
    },
    "林": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "lín",
        "tone": 2,
        "english": "forest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "換": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "huàn",
        "tone": 4,
        "english": "to change",
        "simplified": "换",
        "radicals": ["", ""]
    },
    "及": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to reach, up to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "船": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "boat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爭": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "to strive for",
        "simplified": "争",
        "radicals": ["", ""]
    },
    "猜": {
        "zhuyin": "ㄘㄞ",
        "pinyin": "",
        "tone": 1,
        "english": "to guess",
        "simplified": "",
        "radicals": ["", ""]
    },
    "級": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "level, rank",
        "simplified": "级",
        "radicals": ["", ""]
    },
    "姆": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "matron",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雷": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "thunder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "quarter(hour), to cut",
        "simplified": "",
        "radicals": ["", ""]
    },
    "建": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to establish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "團": {
        "zhuyin": "ㄊㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "round",
        "simplified": "团",
        "radicals": ["", ""]
    },
    "王": {
        "zhuyin": "ㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "king",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驚": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "frightened",
        "simplified": "惊",
        "radicals": ["", ""]
    },
    "迎": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to welcome",
        "simplified": "",
        "radicals": ["", ""]
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "section",
        "simplified": "",
        "radicals": ["", ""]
    },
    "標": {
        "zhuyin": "ㄅㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "sign, prize",
        "simplified": "标",
        "radicals": ["", ""]
    },
    "檢": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to check",
        "simplified": "检",
        "radicals": ["", ""]
    },
    "各": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "each, every",
        "simplified": "",
        "radicals": ["", ""]
    },
    "義": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "justice",
        "simplified": "义",
        "radicals": ["", ""]
    },
    "百": {
        "zhuyin": "ㄅㄞˇ",
        "pinyin": "bǎi",
        "tone": 3,
        "english": "hundred",
        "simplified": "",
        "radicals": ["", ""]
    },
    "民": {
        "zhuyin": "ㄇㄧㄣˊ",
        "pinyin": "mín",
        "tone": 2,
        "english": "the people",
        "simplified": "",
        "radicals": ["", ""]
    },
    "功": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "result, achievement",
        "simplified": "",
        "radicals": ["", ""]
    },
    "唯": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "yes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夜": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "night",
        "simplified": "",
        "radicals": ["", ""]
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to show",
        "simplified": "",
        "radicals": ["", ""]
    },
    "靠": {
        "zhuyin": "ㄎㄠˋ",
        "pinyin": "kào",
        "tone": 4,
        "english": "to lean on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "釋": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to explain",
        "simplified": "释",
        "radicals": ["", ""]
    },
    "臉": {
        "zhuyin": "ㄌㄧㄢˇ",
        "pinyin": "liǎn",
        "tone": 3,
        "english": "face",
        "simplified": "脸",
        "radicals": ["", ""]
    },
    "引": {
        "zhuyin": "ㄧㄣˇ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "to pull, guide",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擇": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "to select",
        "simplified": "择",
        "radicals": ["", ""]
    },
    "疑": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to doubt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "趕": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "to hurry",
        "simplified": "赶",
        "radicals": ["", ""]
    },
    // "倆": {
    //     "zhuyin": "ㄌㄧㄤˇ",
    //     "pinyin": "liǎ",
    //     "tone": 3,
    //     "english": "two",
    //     "simplified": "俩",
    //     "radicals": ["", ""]
    // },
    "獨": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "dú",
        "tone": 2,
        "english": "alone",
        "simplified": "独",
        "radicals": ["", ""]
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "tone": 3,
        "english": "cold",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妹": {
        "zhuyin": "ㄇㄟˋ",
        "pinyin": "mèi",
        "tone": 4,
        "english": "younger sister",
        "simplified": "",
        "radicals": ["", ""]
    },
    "樓": {
        "zhuyin": "ㄌㄡˊ",
        "pinyin": "lóu",
        "tone": 2,
        "english": "building, floor",
        "simplified": "楼",
        "radicals": ["", ""]
    },
    //675/2633 done
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },

};
const A1grammar = {
    ".": {
        "zhuyin": "",
        "pinyin": "",
        "english": "",
        "pattern": "Subj. Verb Obj.",
        "explanation": "You can form very simple sentences with just two words, the subject + a verb. ",
        "section": "basics",
        "example": "誰想玩？"
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "english": "to be",
        "pattern": "Noun 是 Noun",
        "explanation": "是 is only used to link two nouns. It cannot be used to link a noun and an adjective.",
        "section": "basics",
        "example": ""
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "english": "so, very, excessive",
        "pattern": "太 Adj. 了",
        "explanation": "Can express that something really is excessive (as a complaint), or can also colloquially express the meaning of 'so' or 'very'",
        "section": "basics",
        "example": "小貓太可愛了！"
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "english": "is (very)",
        "pattern": "Noun 很 Adj.",
        "explanation": "Links adjectives. Nouns are linked to other nouns with 是. Nouns are linked to adjectives with 很. ",
        "section": "basics",
        "example": "我很高。"
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "english": "have not",
        "radicals": ["氵", "又"],
        "pattern": "沒 (有)",
        "explanation": "Nearly all verbs can be negated with 不. The verb 有 is an important exception to this rule, and must be negated with 沒.",
        "section": "adverbs"
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "english": "no, not",
        "radicals": ["丆", "卜"],
        "pattern": "不 Verb/Adj.",
        "explanation": "不 is generally used to negate a verb in the present or future, or to talk about what you do not do, as a habit. Almost all verbs can be negated with 不 (unless you're talking about the past). The only verb that can never be negated with 不 is 有.",
        "section": "adverbs"
    },
    "沒有": {
        "zhuyin": "ㄇㄟˊ一ㄡˇ",
        "pinyin": "méiyǒu",
        "english": "did not",
        "pattern": "Subj. 沒有/沒 Verb",
        "explanation": "Usually verbs can be negated with 不, but that construction is used for habitual or present actions. If the verb is about an action in the past, though, 沒有 should be used. Remember when using 没有, that 了 is not normally used with 没有. 了 marks completed actions, while 没有 is used for actions that didn't happen (so they're not completed).",
        "section": "adverbs",
        "example": "我没有时間。"
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "dōu",
        "english": "all, (both, neither)",
        "pattern": "Subj. 都 Verb",
        "explanation": `都 appears after the subject and before the verb. Chinese doesn't normally use a special word for "both" like English does. It just uses 都 as if it were any other number greater than one. Chinese also doesn't have a special pattern like "neither / nor" for the negative case. Just use 都 and make the sentence negative.`,
        "section": "adverbs",
        "example": "我們都要冰水。"
    },
    "也": {
        "zhuyin": "一ㄝˇ",
        "pinyin": "yě",
        "english": "also, too",
        "pattern": "也 + Verb / Adj.",
        "explanation": "Always needs to come before the verb (or adjective). 也 is inserted after the subject, before the verb or verb phrase or before the 很 before the adjective. ",
        "section": "adverbs",
        "example": "我也喜欢。你也很高。"
    },
    "還是": {
        "zhuyin": "ㄏㄞˊㄕˋ",
        "pinyin": "háishì",
        "english": "or (in a question)",
        "pattern": "A 還是 B ?",
        "explanation": "Used to offer chioces in a question",
        "section": "conjunctions",
        "example": "冰的還是熱的？ 你要喝茶還是咖啡？"
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ ",
        "pinyin": "huòzhě",
        "english": "or (statement)",
        "pattern": "A 或者 B",
        "explanation": `used as an "or" statement ("it doesn't matter if we eat chicken or beef")`,
        "section": "conjunctions",
        "example": "我喝咖啡或者茶，都行。"
    },
    "?不?": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "english": "affirmative-negative question",
        "pattern": "Verb 不 Verb",
        "explanation": "A common way to form questions in Chinese is to first use a verb in the positive, then repeat the same verb in its negative form, similar to how in English we can say, 'Do you have money or not?' The answer is either 'Verb' or '不 Verb.' It can also be done with adjectives (adjectives often behave like verbs in Chinese)",
        "section": "question forms",
        "example": "他們來不來？"
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "english": "and",
        "pattern": "Noun 和 Noun",
        "explanation": "mainly used to link nouns",
        "section": "conjunctions",
        "example": "我和他都不去。"
    },
    "歲": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "english": "years old, age",
        "pattern": "Subj. Num 歲",
        "explanation": "no verb, no measure words needed, if you want to add 'and a half' do it at the end with 半.",
        "section": "numbers",
        "example": "我30歲。"
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "english": "counter for people",
        "pattern": "Number 個 Noun",
        "explanation": "the most commonly used measure word, used for people, weeks, and months. It can be used in a pinch for any noun if you can't think of a more precise measure word. (Although you might sound like little baby, you still get your point across). Also, for many nouns, 個 is the only correct measure word. Omit the number 1 to use 個 as 'a'.",
        "section": "numbers",
        "example": "一個人。"
    },
    "只": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "english": "counter for animals",
        "pattern": "",
        "explanation": "a universal measure word for animals.  It can also refers to items the normally come in a pair (hands, fingers, eyes, foot, shoe, bugs)",
        "section": "numbers",
        "example": ""
    },
    "年 月 日(or 號)": {
        "zhuyin": "ㄋㄧㄢˊ  ㄩㄝˋ  ㄖˋ",
        "pinyin": "",
        "english": "writing dates- year month day",
        "pattern": "# 年 # 月 # 日",
        "explanation": "Dates in Chinese follow the order 'year, month, day.' This is in keeping with the 'from big to small' trend which pervades many facets of Chinese culture. Note that 號 is commonly used in spoken Mandarin instead of 日.",
        "section": "numbers",
        "example": "1868年1月18号"
    },
    "星期?": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ",
        "pinyin": "",
        "english": "days of the week",
        "pattern": "星期 #",
        "explanation": "Note that 星期天 is the only exception. Rather than a number, 天 is used. More formally, Sunday is also referred to as 星期日. One other implication of this system that you may not have noticed: 'day one' is on Monday. In Chinese culture, the first day of the week is Monday, and not Sunday.",
        "section": "numbers",
        "example": "你星期天要做什麼？"
    },
    // "?點(鍾)?": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "pattern": "# + 點(鍾) + # + 分",
    //     "explanation": "",
    //     "section": "",
    //     "example": ""
    // },
    "...了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "",
        "english": "",
        "pattern": "Subj. + Verb + 了 + Obj.",
        "explanation": "Express the completion of an action.",
        "section": "",
        "example": "我吃了兩個蘋果"
    },
    "...不...了": {
        "zhuyin": "",
        "pinyin": "",
        "english": "",
        "pattern": "",
        "explanation": "In a negative sentence, the sentence-final 了 can take on the meaning of '(not) anymore' or 'no longer.'",
        "section": "",
        "example": "我不想吃了。"
    },
    "...了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "",
        "english": "",
        "pattern": "(new situation)...了",
        "explanation": "現在 isn't the only way to express 'now.' In many common expressions, 了 is used in place of the word for 'now'.",
        "section": "",
        "example": "我去睡觉了。"
    },
    "-沒有": {
        "zhuyin": "",
        "pinyin": "",
        "english": "",
        "pattern": "",
        "explanation": "Use 没有 to negate past actions (to say that someone didn't do something, or something didn't happen). Usually verbs can be negated with 不, but that construction is used for habitual or present actions. If the verb is about an action in the past, use 沒有. Remember that 了 is not normally used with 没有. 了 marks completed actions, while 没有 is used for actions that didn't happen (so they're not completed).",
        "section": "",
        "example": "我沒有吃早飯"
    },
    "...了嗎?": {
        "zhuyin": "",
        "pinyin": "",
        "english": "",
        "pattern": "Subj. + Verb + Obj. + 了嗎?",
        "explanation": "Asking questions about completed actions will involve using both 了 and 嗎. These are simply added to the end of a sentence or statement. Just make sure that 了 comes first, followed by 嗎.",
        "section": "",
        "example": "你吃飯了嗎？"
    },
    "還": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "",
        "english": "return, back to",
        "pattern": "",
        "explanation": "huán can mean 'to return' or pay back",
        "section": "",
        "example": "我書還給他了"
    },
    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "",
        "english": "still",
        "pattern": "",
        "explanation": "hái can mean still, or yet, or still in progress- like in 'I still haven’t eaten breakfast yet.'",
        "section": "",
        "example": "我還沒吃早飯"
    },
    "不要": {
        "zhuyin": "ㄅㄨˋ ㄧㄠˋ",
        "pinyin": "bùyào",
        "english": "don't",
        "pattern": "不要 + Verb",
        "explanation": "You can use 不要 (bùyào) to command someone: 'don't' (do something).",
        "section": "",
        "example": "不要打我！"
    },
    "怎麼": {
        "zhuyin": "",
        "pinyin": "",
        "english": "how",
        "pattern": "",
        "explanation": "Subj. + 怎么 + Verb + Obj. like in 你們怎麼學中文？ OR Topic + 怎么 + Verb like in 中国菜怎么做？",
        "section": "",
        "example": "你們怎麼學中文？"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "pattern": "",
    //     "explanation": "",
    //     "section": "",
    //     "example": ""
    // },
};
const A1sentences = {
    "你好嗎？": {
        "english": "How are you?",
        "zhuyin": "ㄋ一ˇ ㄏㄠˇ ㄇㄚˊ",
        "pinyin": "",
        "category": "simple"
    },
    "我很好。": {
        "english": "I am fine.",
        "zhuyin": "ㄨㄛˇ ㄏㄣˇ ㄏㄠˇ",
        "pinyin": "",
        "category": "simple"
    },
    "最近還好嗎？": {
        "english": "Are you okay recently?",
        "zhuyin": "ㄗㄨㄟˋ ㄐ一ㄣˋ ㄏㄨㄢˊ ㄏㄠˇ ㄇㄚˊ",
        "pinyin": "",
        "category": "simple"
    },
    "好久不見。": {
        "english": "Long time no see.",
        "zhuyin": "ㄏㄠˇ ㄐ一ㄡˇ ㄅㄨˋ ㄐ一ㄢˋ",
        "pinyin": "",
        "category": "simple"
    },
    "還不錯。": {
        "english": "I am quite good.",
        "zhuyin": "ㄏㄨㄢˊ ㄅㄨˋ ㄘㄨㄛˋ",
        "pinyin": "",
        "category": "simple"
    },
    "你叫什麼名字？": {
        "english": "What is your name?",
        "zhuyin": "ㄋ一ˇ ㄐ一ㄠˋ ㄕˊ ㄇㄜ˙ ㄇ一ㄥˊ ㄗˋ",
        "pinyin": "",
        "category": "simple"
    },
    "很高興認識你！": {
        "english": "It’s nice to meet you!",
        "zhuyin": "ㄏㄣˇ ㄍㄠ ㄒ一ㄥ ㄖㄣˋ ㄕˊ ㄋ一ˇ",
        "pinyin": "",
        "category": "simple"
    },
    "我二十九歲。": {
        "english": "I am twenty nine years old",
        "zhuyin": "ㄨㄛˇ ㄦˋ ㄕˊ ㄐ一ㄡˇ ㄙㄨㄟˋ",
        "pinyin": "",
        "category": "simple"
    },
    "你住哪裡?": {
        "english": "Where do you live?",
        "zhuyin": "ㄋ一ˇ ㄓㄨˋ ㄋㄚˇ ㄌ一ˇ",
        "pinyin": "",
        "category": "simple"
    },
    "我很喜歡臺灣。": {
        "english": "I love Taiwan.",
        "zhuyin": "ㄨㄛˇ ㄏㄣˇ ㄒ一ˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ",
        "pinyin": "",
        "category": "simple"
    },
    "早安。": {
        "english": "Good morning.",
        "zhuyin": "ㄗㄠˇ ㄢ。",
        "pinyin": "",
        "category": "simple"
    },
    "午安。": {
        "english": "Good afternoon.",
        "zhuyin": "ㄨˇ ㄢ。",
        "pinyin": "",
        "category": "simple"
    },
    "晚安。": {
        "english": "Good evening.",
        "zhuyin": "ㄨㄢˇ ㄢ。",
        "pinyin": "",
        "category": "simple"
    },
    "好不好？": {
        "english": "good or not good? is it good?",
        "zhuyin": "ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ ？ ",
        "pinyin": "",
        "category": "question"
    },
    "熱不熱？": {
        "english": "good or not good? is it good?",
        "zhuyin": "ㄖㄜˋ ㄅㄨˋ ㄖㄜˋ ？ ",
        "pinyin": "",
        "category": "question"
    },
    "他們來不來？": {
        "english": "Are they going to come or not?",
        "zhuyin": "ㄊㄚ ㄇㄣˊ ㄌㄞˊ ㄅㄨˋ ㄌㄞˊ ？",
        "pinyin": "Tāmen lái bu lái?",
        "category": "question"
    },
    "我去買咖啡你要不要？": {
        "english": "I'm going to buy coffee. Do you want some?",
        "zhuyin": "ㄨㄛˇ ㄑㄩˋ ㄇㄞˇ ㄎㄚ ㄈㄟ ， ㄋㄧˇ ㄧㄠˋ ㄅㄨˋ ㄧㄠˋ ？",
        "pinyin": "Wǒ qù mǎi kāfēi, nǐ yào bu yào?",
        "category": "question"
    },
    "你回不回家？": {
        "english": "Are you coming back home or not?",
        "zhuyin": "ㄋㄧˇ ㄏㄨㄟˊ ㄅㄨˋ ㄏㄨㄟˊ ㄐㄧㄚ ？",
        "pinyin": "nǐ huí bu huíjiā?",
        "category": "question"
    },
    "你們要不要米飯？": {
        "english": "Yall want rice or nah?",
        "zhuyin": "ㄋㄧˇ ㄇㄣˊ ㄧㄠˋ ㄅㄨˋ ㄧㄠˋ ㄇㄧˇ ㄈㄢˋ ？",
        "pinyin": "",
        "category": "question"
    },
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
    "不客氣。": {
        "english": "you're welcome, don't mention it",
        "zhuyin": "ㄅㄨˋ ㄎㄜˋ ㄑㄧˋ",
        "pinyin": "bù kè qi",
        "category": "basics"
    },
    "對不起。": {
        "english": "I'm sorry, unworthy, to let down, excuse me",
        "zhuyin": "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
        "pinyin": "duì bu qǐ",
        "category": "basics"
    },
    "沒關係。": {
        "english": "it doesn't matter(no problem)",
        "zhuyin": "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
        "pinyin": "méi guān xi",
        "category": "basics"
    },
    "怎麼樣?": {
        "english": "how was it? how are things? how about?",
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "zěn me yàng",
        "category": "basics"
    },
    "我不是半途而廢的人。": {
        "english": "I’m not someone who gives up halfway",
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄕˋ ㄅㄢˋ ㄊㄨˊ ㄦˊ ㄈㄟˋ ㄉㄧˊ ㄖㄣˊ",
        "pinyin": "wǒ búshì bàntúérfèi de rén",
        "category": "basics"
    },
    "他給我書。": {
        "zhuyin": "ㄍㄟˇ ㄨㄛˇ ㄕㄨ",
        "pinyin": "",
        "category": "basics",
        "english": "He gives me books"
    },
    "給我看。": {
        "zhuyin": "ㄍㄟˇ ㄨㄛˇ ㄎㄢˋ",
        "pinyin": "",
        "category": "basics",
        "english": "let me look"
    },
    "請給我買。": {
        "zhuyin": "ㄑㄧㄥˇ ㄍㄟˇ ㄨㄛˇ ㄇㄞˇ",
        "pinyin": "",
        "category": "basics",
        "english": "Please buy for me"
    },
    "我不知道。": {
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ",
        "pinyin": "Wǒ bù zhīdào",
        "category": "basics",
        "english": "I don't know."
    },
    "因為…所以…": {
        "zhuyin": "ㄧㄣ ㄨㄟˊ… ㄙㄨㄛˇ ㄧˇ…",
        "pinyin": "yīn wèi… suǒ yǐ…",
        "category": "HSK2",
        "english": "because… thus…, on account of… then…"
    },
    "雖然…但是…": {
        "zhuyin": "ㄙㄨㄟ ㄖㄢˊ… ㄉㄢˋ ㄕˋ…",
        "pinyin": "suī rán… dàn shì…",
        "category": "HSK2",
        "english": "although…still…, even if…nevertheless... "
    },
    "好久不見了！ 你最近怎麼樣？": {
        "zhuyin": "ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ ㄌㄧㄠˇ ！ ㄋㄧˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ ？",
        "pinyin": "",
        "category": "",
        "english": "long time no see! how have you been recently?"
    },
    "還不錯，最近不太忙，我都在家休息，你呢？": {
        "zhuyin": "ㄏㄨㄢˊ ㄅㄨˋ ㄘㄨㄛˋ ， ㄗㄨㄟˋ ㄐㄧㄣˋ ㄅㄨˋ ㄊㄞˋ ㄇㄤˊ ， ㄨㄛˇ ㄉㄨ ㄗㄞˋ ㄐㄧㄚ ㄒㄧㄡ ㄒㄧ ， ㄋㄧˇ ㄋㄜ˙ ？",
        "pinyin": "",
        "category": "",
        "english": "not bad, not too busy there days, so i just relax at home, how about you?"
    },
    "這個蘋果是紅色的。": {
        "zhuyin": "ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙。",
        "pinyin": "Zhège píngguǒ shì hóngsè de.",
        "category": "12 sentences for grammar",
        "english": "The apple is red."
    },
    "這是JJ的蘋果。": {
        "zhuyin": "ㄓㄜˋ ㄕˋ JJ ㄉㄜ˙ ㄆㄧㄥˊ ㄍㄨㄛˇ。",
        "pinyin": "Zhè shì JJ de píngguǒ.",
        "category": "12 sentences for grammar",
        "english": "It is JJ’s apple."
    },
    "我把這個蘋果給JJ。": {
        "zhuyin": "ㄨㄛˇ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ ㄍㄟˇ JJ。",
        "pinyin": "Wǒ bǎ zhège píngguǒ gěi JJ.",
        "category": "12 sentences for grammar",
        "english": "I give JJ the apple."
    },
    "我們把這個蘋果給他。": {
        "zhuyin": "ㄨㄛˇ ㄇㄣˊ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ ㄍㄟˇ ㄊㄚ 。",
        "pinyin": "Wǒmen bǎ zhège píngguǒ gěi tā.",
        "category": "12 sentences for grammar",
        "english": "We give him the apple."
    },
    "他把這個給JJ。": {
        "zhuyin": "ㄊㄚ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄍㄟˇ JJ。",
        "pinyin": "Tā bǎ zhège gěile JJ.",
        "category": "12 sentences for grammar",
        "english": "He gives it to JJ."
    },
    "她把這個給他。": {
        "zhuyin": "ㄊㄚ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄍㄟˇ ㄊㄚ 。 ",
        "pinyin": "Tā bǎ zhège gěi tā.",
        "category": "12 sentences for grammar",
        "english": " She gives it to him. "
    },
    "這個蘋果是紅色的嗎？": {
        "zhuyin": "ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ ㄇㄚˊ ？ ",
        "pinyin": "Zhège píngguǒ shì hóngsè de ma?",
        "category": "12 sentences for grammar",
        "english": "Is the apple red?"
    },
    "這些蘋果是紅色的。": {
        "zhuyin": "ㄓㄜˋ ㄒㄧㄝ ㄆㄧㄥˊ ㄍㄨㄛˇ ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ 。",
        "pinyin": "Zhèxiē píngguǒ shì hóngsè de.",
        "category": "12 sentences for grammar",
        "english": "The apples are red."
    },
    "我必須把這個給他。": {
        "zhuyin": "ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄍㄟˇ ㄊㄚ 。",
        "pinyin": "Wǒ bìxū bǎ zhège gěi tā.",
        "category": "12 sentences for grammar",
        "english": "I must give it to him."
    },
    "我想把這個給她。": {
        "zhuyin": "ㄨㄛˇ ㄒㄧㄤˇ ㄅㄚˇ ㄓㄜˋ ㄍㄜˋ ㄍㄟˇ ㄊㄚ 。",
        "pinyin": "Wǒ xiǎng bǎ zhège gěi tā.",
        "category": "12 sentences for grammar",
        "english": "I want to give it to her."
    },
    "我明天就知道了。": {
        "zhuyin": "ㄨㄛˇ ㄇㄧㄥˊ ㄊㄧㄢ ㄐㄧㄡˋ ㄓ ㄉㄠˋ ㄌㄧㄠˇ 。",
        "pinyin": "Wǒ míngtiān jiù zhīdàole.",
        "category": "12 sentences for grammar",
        "english": "I'm going to know tomorrow."
    },
    "我不能吃這個蘋果。": {
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔ ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ 。 ",
        "pinyin": "Wǒ bùnéng chī zhège píngguǒ.",
        "category": "12 sentences for grammar",
        "english": "I can't eat the apple."
    },
    "我吃了這個蘋果。": {
        "zhuyin": "ㄨㄛˇ ㄔ ㄌㄧㄠˇ ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄍㄨㄛˇ 。",
        "pinyin": "Wǒ chīle zhège píngguǒ.",
        "category": "12 sentences for grammar",
        "english": "I have eaten the apple."
    },
    "我不知道怎麼跟女孩子說話。": {
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄗㄣˇ ㄇㄜ˙ ㄍㄣ ㄋㄩˇ ㄏㄞˊ ㄗˇ ㄕㄨㄛ ㄏㄨㄚˋ 。",
        "pinyin": "",
        "category": "",
        "english": "I don't know how to talk to girls."
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "category": "",
    //     "english": ""
    // },
};
const idioms = {
    "井底之蛙": {
        "zhuyin": "ㄐㄧㄥˇ ㄉㄧˇ ㄓ ㄨㄚ",
        "pinyin": "jǐng dǐ zhī wā",
        "literal": "frog at bottom of the well",
        "meaning": "used to describe a person who has a limited experience of the world, a limited outlook",
    },
    "畫蛇添足": {
        "zhuyin": "ㄏㄨㄚˋ ㄕㄜˊ ㄊㄧㄢ ㄗㄨˊ",
        "pinyin": "huà shé tiān zú",
        "literal": "paint a snake with feet",
        "meaning": "refers to spoiling things by doing something unnecessary",
    },
    "亡羊補牢": {
        "zhuyin": "ㄨㄤˊ ㄧㄤˊ ㄅㄨˇ ㄌㄠˊ",
        "pinyin": "wáng yáng bǔ láo",
        "literal": "escaped sheep repair fence",
        "meaning": "It is not too late to mend the sheep pen after the sheep have been lost. This idiom tells us that we can avoid more mistakes if we are able to correct the ones we have already committed. As long as we seek to remedy what we have done wrong, we’ll be able to avoid similar mistakes in the future.",
    },
    "腳踏實地": {
        "zhuyin": "ㄐㄧㄠˇ ㄊㄚˋ ㄕˊ ㄉㄧˋ",
        "pinyin": "jiǎo tà shí dì",
        "literal": "foot tread truly",
        "meaning": "To step on silid ground. An extremely positive chengyu meaning you work hard, focus on the fundamentals, and proceed in a steady and stable fashion. Stay grounded and push ahead.",
    },
    "九牛一毛": {
        "zhuyin": "ㄐㄧㄡˇ ㄋㄧㄡˊ ㄧ ㄇㄠˊ",
        "pinyin": "jiǔ niú yì máo",
        "literal": "9 cows and 1 strand of cow hair",
        "meaning": "It indicates something that’s so small that it’s like one strand of cow hair among 9 cows. Just a drop in the bucket.",
    },
    "一無所有": {
        "zhuyin": "ㄧ ㄨˊ ㄙㄨㄛˇ ㄧㄡˇ",
        "pinyin": "yì wú suǒ yǒu",
        "literal": "have nothing at all",
        "meaning": "Homeless, penniless, not a thing to your name.",
    },
    "一見鍾情": {
        "zhuyin": "ㄧ ㄐㄧㄢˋ ㄓㄨㄥ ㄑㄧㄥˊ",
        "pinyin": "yí jiàn zhōng qíng",
        "literal": "love at first sight",
        "meaning": "It's generally used for people, but you can also use it for other physical objects.",
    },
    "自由自在": {
        "zhuyin": "ㄗˋ ㄧㄡˊ ㄗˋ ㄗㄞˋ",
        "pinyin": "zì yóu zì zài",
        "literal": "free and easy",
        "meaning": "This can be used to describe someone’s personality, how someone behaves, or how a place makes people feel.",
    },
    "半途而廢 ": {
        "zhuyin": "ㄅㄢˋ ㄊㄨˊ ㄦˊ ㄈㄟˋ",
        "pinyin": "bàn tú ér fèi",
        "literal": "walk half the road and give up",
        "meaning": "means to start doing something, only to give up halfway.",
    },
    "拋磚引玉": {
        "zhuyin": "ㄆㄠ ㄓㄨㄢ ㄧㄣˇ ㄩˋ",
        "pinyin": "pāo zhuān yǐn yù",
        "literal": "to cast a brick to attract jade",
        "meaning": "You’re basically saying- “this idea I’m tossing out there is garbage, but perhaps it will lead one of you to make a better contribution.” A humble way to contribute to a conversation.",
    },
    "豁然開朗": {
        "zhuyin": "ㄏㄨㄛ ㄖㄢˊ ㄎㄞ ㄌㄤˇ",
        "pinyin": "huò rán kāi lǎng",
        "literal": "opening light opening bright",
        "meaning": "The first meaning is the refreshing and liberating feeling you get when you see a beautiful, open area. Typically, immediately before this moment, the beautiful area is not visible and you might be feeling a little stuffy. Second, it’s also used for the feeling you get when you achieve an “aha” or “eureka!” moment.",
    },
    "不可思議": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˇ ㄙ ㄧˋ",
        "pinyin": "bù kě sī yì",
        "literal": "no can think to comment on",
        "meaning": "means that something is noteworthy or amazing in an unexpected way. Inconceivable, but in a good way. Incredible.",
    },
    "不可得兼": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˇ ㄉㄜˊ ㄐㄧㄢ",
        "pinyin": "bù kě dé jiān",
        "literal": "can't have both",
        "meaning": "you can’t have both at the same time",
    },
    "心神不寧": {
        "zhuyin": "ㄒㄧㄣ ㄕㄣˊ ㄅㄨˋ ㄋㄧㄥˊ",
        "pinyin": "xīn shén bù níng",
        "literal": "heart inside not peaceful",
        "meaning": "to feel ill at ease",
    },
    "獨一無二": {
        "zhuyin": "ㄉㄨˊ ㄧ ㄨˊ ㄦˋ",
        "pinyin": "dú yī wú èr",
        "literal": "only one not two",
        "meaning": "unique and unmatched, there is nothing the same or nothing comparable",
    },
    "絕無僅有": {
        "zhuyin": "ㄐㄩㄝˊ ㄨˊ ㄐㄧㄣˇ ㄧㄡˇ",
        "pinyin": "jué wú jǐn yǒu",
        "literal": "absolutely lack barly has",
        "meaning": "one and only; rarely seen; unique of its kind; next to none",
    },
    "愛不釋手": {
        "zhuyin": "ㄞˋ ㄅㄨˋ ㄕˋ ㄕㄡˇ",
        "pinyin": "ài bù shì shǒu",
        "literal": "love can't release from hand",
        "meaning": "To love something so much that you can't part from it",
    },
    "離經叛道": {
        "zhuyin": "ㄌㄧˊ ㄐㄧㄥ ㄆㄢˋ ㄉㄠˋ",
        "pinyin": "lí jīng pàn dào",
        "literal": "to depart from established practices",
        "meaning": "to rebel against orthodoxy",
    },
    "照貓畫虎": {
        "zhuyin": "ㄓㄠˋ ㄇㄠ ㄏㄨㄚˋ ㄏㄨˇ",
        "pinyin": "",
        "literal": "drawing a tiger using a cat as a model",
        "meaning": "uninspired imitation; to follow a model and get things more or less right but without capturing the spirit of the subject",
    },
    "有目共睹": {
        "zhuyin": "ㄧㄡˇ ㄇㄨˋ ㄍㄨㄥˋ ㄉㄨˇ",
        "pinyin": "yǒu mù gòng dǔ",
        "literal": "anyone with eyes can see it",
        "meaning": "be obvious to all, something that speaks for itself",
    },
    "興高采烈": {
        "zhuyin": "ㄒㄧㄥ ㄍㄠ ㄘㄞˇ ㄌㄧㄝˋ ",
        "pinyin": "xīng gāo cǎi liè",
        "literal": "happy and excited",
        "meaning": "to be in great form; in high spirits",
    },
    "推陳出新": {
        "zhuyin": "",
        "pinyin": "",
        "literal": "get rid of the stale and bring forth the fresh",
        "meaning": "to pushout the old and bring in the new; to innovate",
    },
    "滔滔不絕": {
        "zhuyin": "ㄊㄠ ㄊㄠ ㄅㄨˋ ㄐㄩㄝˊ",
        "pinyin": "tāo tāo bù jué",
        "literal": "non stop torrent",
        "meaning": "gushing; non stop talking usually",
    },
    "隨遇而安": {
        "zhuyin": "ㄙㄨㄟˊ ㄩˋ ㄦˊ ㄢ",
        "pinyin": "suí yù ér ān",
        "literal": "at home wherever one is",
        "meaning": "make the best of things; take things as they come; flexible; ready to adapt; accept circumstances with good will",
    },
    "熟能生巧": {
        "zhuyin": "ㄕㄨˊ ㄋㄥˊ ㄕㄥ ㄑㄧㄠˇ",
        "pinyin": "shóu néng shēng qiǎo",
        "literal": "with familiarity you learn the trick",
        "meaning": "practice makes perfect",
    },
    "守望相助": {
        "zhuyin": "ㄕㄡˇ ㄨㄤˋ ㄒㄧㄤ ㄓㄨˋ",
        "pinyin": "shǒu wàng xiāng zhù",
        "literal": "to keep watch and defend one another",
        "meaning": "to join forces, help each other; mutual help and protection",
    },
    "守口如瓶": {
        "zhuyin": "ㄕㄡˇ ㄎㄡˇ ㄖㄨˊ ㄆㄧㄥˊ",
        "pinyin": "shǒu kǒu rú píng",
        "literal": "guard one's mouth like a closed bottle",
        "meaning": "keep one's mouth shut; not breathing a word",
    },
    "雞犬不寧": {
        "zhuyin": "ㄐㄧ ㄑㄩㄢˇ ㄅㄨˋ ㄋㄧㄥˊ",
        "pinyin": "jī quǎn bù zhù",
        "literal": "not even the chickens and dogs are left undisturbed",
        "meaning": "great commotion; pandemonium; chaos; utter confusion",
    },
    "揮金如土": {
        "zhuyin": "ㄏㄨㄟ ㄐㄧㄣ ㄖㄨˊ ㄊㄨˇ",
        "pinyin": "huī jīn rú tǔ",
        "literal": "to squander money like dirt",
        "meaning": "spend money like water",
    },
    "孤掌難鳴": {
        "zhuyin": "ㄍㄨ ㄓㄤˇ ㄋㄢˊ ㄇㄧㄥˊ",
        "pinyin": "gū zhǎng nán míng",
        "literal": "hard to clap with only one hand",
        "meaning": "it's difficult to achieve anything without support",
    },
    "從容不迫": {
        "zhuyin": "ㄘㄨㄥˊ ㄖㄨㄥˊ ㄅㄨˋ ㄆㄛˋ",
        "pinyin": "cóng róng bù pò",
        "literal": "to easy, calm, unruffled",
        "meaning": "take one's time; go easy",
    },
    "百折不撓": {
        "zhuyin": "ㄅㄞˇ ㄓㄜ ㄅㄨˋ ㄋㄠˊ ",
        "pinyin": "bǎi zhé bù náo",
        "literal": "keep fighting in spite of all setbacks",
        "meaning": "to be undaunted by repeated setbacks",
    },
    "海市蜃樓": {
        "zhuyin": "ㄏㄞˇ ㄕˋ ㄕㄣˋ ㄌㄡˊ",
        "pinyin": "",
        "literal": "mirage clam breath house",
        "meaning": "to build castles in the air; mirage. A 蜃 is a mythological clam monster that breathes out a vapor that looks like buildings",
    },
    "笑裡藏刀": {
        "zhuyin": "ㄒㄧㄠˋ ㄌㄧˇ ㄘㄤˊ ㄉㄠ",
        "pinyin": "xiào lǐ cáng dāo",
        "literal": "a dagger hidden behind a smile",
        "meaning": "friendly manners belying hypocritical intentions; when the fox preaches, look to the geese",
    },
    "心如止水": {
        "zhuyin": "ㄒㄧㄣ ㄖㄨˊ ㄓˇ ㄕㄨㄟˇ",
        "pinyin": "xīn rú zhǐ shuǐ",
        "literal": "heart like still waters",
        "meaning": "a peaceful heart; a heart as calm as still water; to be at peace with oneself",
    },
    "虛懷若谷": {
        "zhuyin": "ㄒㄩ ㄏㄨㄞˊ ㄖㄨㄛˋ ㄍㄨˇ",
        "pinyin": "xū huái ruò gǔ",
        "literal": "receptive as an echoing canyon",
        "meaning": "to be extremely open-minded; modest and open minded",
    },
    "開卷有益": {
        "zhuyin": "ㄎㄞ ㄐㄩㄢˋ ㄧㄡˇ ㄧˋ",
        "pinyin": "kāi juàn yǒu yì",
        "literal": "reading a book is profitable",
        "meaning": "reading always brings benefits",
    },
    "愚公移山": {
        "zhuyin": "ㄩˊ ㄍㄨㄥ ㄧˊ ㄕㄢ",
        "pinyin": "yú gōng yí shān",
        "literal": "the old fool moves mountains",
        "meaning": "with persistence and determination, any difficulties, even big ones can be solved; to want to is to be able to; where there's a will, there's a way",
    },
    "興緻勃勃": {
        "zhuyin": "ㄒㄧㄥ ㄓˋ ㄅㄛˊ ㄅㄛˊ",
        "pinyin": "",
        "literal": "spirits thriving",
        "meaning": "in high spirits; full of enthusiasm, zest",
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "literal": "",
    //     "meaning": "",
    // },
};
const bookWordsRWC = {
    "成語": {
        "zhuyin": "ㄔㄥˊ ㄩˇ",
        "pinyin": "chéng yǔ",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "4 or 5 character idioms"
    },
    "子女": {
        "zhuyin": "ㄗˇ ㄋㄩˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "sons and daughters"
    },
    "好累": {
        "zhuyin": "ㄏㄠˇ ㄌㄟˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be very tired"
    },
    "小子": {
        "zhuyin": "ㄒㄧㄠˇ ㄗˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "(colloqial)boy, bloke"
    },
    "人口": {
        "zhuyin": "ㄖㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "population"
    },
    "三口人": {
        "zhuyin": "ㄙㄢ ㄎㄡˇ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "three(count) people"
    },
    "口子": {
        "zhuyin": "ㄎㄡˇ ㄗˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "hole, opening, cut, rip"
    },
    "小手": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "pickpocket"
    },
    "門口": {
        "zhuyin": "ㄇㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "doorway, area by entrance"
    },
    "天天": {
        "zhuyin": "ㄊㄧㄢ ㄊㄧㄢ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "every day"
    },
    "好笑": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be easy to laugh at, funny, ridiculous"
    },
    "矮子": {
        "zhuyin": "ㄞˇ ㄗˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "short person, dwarf"
    },
    "忙人": {
        "zhuyin": "ㄇㄤˊ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "busy person"
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Be careful!"
    },
    "無心": {
        "zhuyin": "ㄨˊ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "not feel like, not in the mood for, unintentionally"
    },
    "不好": {
        "zhuyin": "ㄅㄨˋ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "no good, it's not good"
    },
    "不很": {
        "zhuyin": "ㄅㄨˋ ㄏㄣˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "not very"
    },
    "很不": {
        "zhuyin": "ㄏㄣˇ ㄅㄨˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "very un-"
    },
    "不忙": {
        "zhuyin": "ㄅㄨˋ ㄇㄤˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "there is no hurry, take your time"
    },
    "太太": {
        "zhuyin": "ㄊㄞˋ ㄊㄞˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "wife"
    },
    "太子": {
        "zhuyin": "ㄊㄞˋ ㄗˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "prince"
    },
    "太忙": {
        "zhuyin": "ㄊㄞˋ ㄇㄤˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be too busy"
    },
    "可笑": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be laughable"
    },
    "可口": {
        "zhuyin": "ㄎㄜˇ ㄎㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "suit one's mouth, taste good"
    },
    "可心": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be satisfying, pleasing"
    },
    "不可": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "should not"
    },
    "又不": {
        "zhuyin": "ㄧㄡˋ ㄅㄨˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "not at all"
    },
    "土人": {
        "zhuyin": "ㄊㄨˇ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "native person"
    },
    "土木": {
        "zhuyin": "ㄊㄨˇ ㄇㄨˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "building and construction"
    },
    "幸好": {
        "zhuyin": "ㄒㄧㄥˋ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "fortunately, luckily"
    },
    "不幸": {
        "zhuyin": "ㄅㄨˋ ㄒㄧㄥˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "bad luck, unlucky, unfortunately"
    },
    "筆心": {
        "zhuyin": "ㄅㄧˇ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "pencil lead, pen refill"
    },
    "山口": {
        "zhuyin": "ㄕㄢ ㄎㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "mountain pass"
    },
    "鋼筆": {
        "zhuyin": "ㄍㄤ ㄅㄧˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "pen"
    },
    "王八": {
        "zhuyin": "ㄨㄤˊ ㄅㄚ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "cuck, stupid man"
    },
    "王八蛋": {
        "zhuyin": "ㄨㄤˊ ㄅㄚ ㄉㄢˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "son of a bitch, stupid motherfucker"
    },
    "鉛筆": {
        "zhuyin": "ㄑㄧㄢ ㄅㄧˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "pencil"
    },
    "刀子": {
        "zhuyin": "ㄉㄠ ㄗˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "knife"
    },
    "分手": {
        "zhuyin": "ㄈㄣ ㄕㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to part w/ somebody"
    },
    "分心": {
        "zhuyin": "ㄈㄣ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to distract somebody's attention"
    },
    "童女": {
        "zhuyin": "ㄊㄨㄥˊ ㄋㄩˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "maiden, virgin"
    },
    "童心": {
        "zhuyin": "ㄊㄨㄥˊ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "childish disposition"
    },
    "童山": {
        "zhuyin": "ㄊㄨㄥˊ ㄕㄢ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "bare hills, bald mountain"
    },
    "十分鐘": {
        "zhuyin": "ㄕˊ ㄈㄣ ㄓㄨㄥ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "ten minutes"
    },
    "大衣": {
        "zhuyin": "ㄉㄚˋ ㄧ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "overcoat"
    },
    "手錶": {
        "zhuyin": "ㄕㄡˇ ㄅㄧㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "wristwatch"
    },
    "中心": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "center, core"
    },
    "中立": {
        "zhuyin": "ㄓㄨㄥ ㄌㄧˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "stand in the midde, neutrality"
    },
    "山羊": {
        "zhuyin": "ㄕㄢ ㄧㄤˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "goat"
    },
    "小羊": {
        "zhuyin": "ㄒㄧㄠˇ ㄧㄤˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "lamb"
    },
    "美國": {
        "zhuyin": "ㄇㄟˇ ㄍㄨㄛˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "America"
    },
    "美金": {
        "zhuyin": "ㄇㄟˇ ㄐㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "American money"
    },
    "美好": {
        "zhuyin": "ㄇㄟˇ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be fine, happy, glorious"
    },
    "外表": {
        "zhuyin": "ㄨㄞˋ ㄅㄧㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "outward appearence, surface"
    },
    "看中": {
        "zhuyin": "ㄎㄢˋ ㄓㄨㄥ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "take a liking to, pick out, choose"
    },
    "更好": {
        "zhuyin": "ㄍㄥ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be better, even more"
    },
    "小便": {
        "zhuyin": "ㄒㄧㄠˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to pee, piss"
    },
    "大便": {
        "zhuyin": "ㄉㄚˋ ㄅㄧㄢˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to poop, shit"
    },
    "便依": {
        "zhuyin": "ㄅㄧㄢˋ ㄧ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "street clothes, civvies"
    },
    "便宜": {
        "zhuyin": "ㄅㄧㄢˋ ㄧˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be inexpensive"
    },
    "要不": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "otherwise, or else, or"
    },
    "要好": {
        "zhuyin": "ㄧㄠˋ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be on good terms, good friends, eager to improve"
    },
    "人士": {
        "zhuyin": "ㄖㄣˊ ㄕˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "notable person"
    },
    "士女": {
        "zhuyin": "ㄕˋ ㄋㄩˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "young men and women, guys and gals"
    },
    "女士": {
        "zhuyin": "ㄋㄩˇ ㄕˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "(polite) professional woman"
    },
    "買賣": {
        "zhuyin": "ㄇㄞˇ ㄇㄞˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "buisness"
    },
    "老二": {
        "zhuyin": "ㄌㄠˇ ㄦˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "second child"
    },
    "老者": {
        "zhuyin": "ㄌㄠˇ ㄓㄜˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "old fellow, old man"
    },
    "甘心": {
        "zhuyin": "ㄍㄢ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "willingly, be happy with"
    },
    "入口": {
        "zhuyin": "ㄖㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "entrance"
    },
    "入門": {
        "zhuyin": "ㄖㄨˋ ㄇㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "primer, to start well"
    },
    "入手": {
        "zhuyin": "ㄖㄨˋ ㄕㄡˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "put your hand in, get started"
    },
    "麻木": {
        "zhuyin": "ㄇㄚˊ ㄇㄨˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "numb, apathetic"
    },
    "大麻": {
        "zhuyin": "ㄉㄚˋ ㄇㄚˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "hemp, marijuana"
    },
    "甚麼": {
        "zhuyin": "ㄕㄣˋ ㄇㄜ˙",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "what? (old complex vers.)"
    },
    "書桌": {
        "zhuyin": "ㄕㄨ ㄓㄨㄛ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "writing desk"
    },
    "好奇": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "curious, interested in odd things or just many things"
    },
    "好奇心": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "curiosity"
    },
    "金錢": {
        "zhuyin": "ㄐㄧㄣ ㄑㄧㄢˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "money"
    },
    "古老": {
        "zhuyin": "ㄍㄨˇ ㄌㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "ancient"
    },
    "古玩": {
        "zhuyin": "ㄍㄨˇ ㄨㄢˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "antique object, curio"
    },
    "個人": {
        "zhuyin": "ㄍㄜˋ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "each person, everyone"
    },
    "這個": {
        "zhuyin": "ㄓㄜˋ ㄍㄜˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "this one"
    },
    "這麼": {
        "zhuyin": "ㄓㄜˋ ㄇㄜ˙",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "so, thus, in this case, to this extent"
    },
    "那個": {
        "zhuyin": "ㄋㄚˋ ㄍㄜˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "that one, that"
    },
    "那麼": {
        "zhuyin": "ㄋㄚˋ ㄇㄜ˙",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "that being so, in that case"
    },
    "有錢": {
        "zhuyin": "ㄧㄡˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "be rich"
    },
    "沒買": {
        "zhuyin": "ㄇㄟˊ ㄇㄞˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "did not buy, has not bought(yet)"
    },
    "吉他": {
        "zhuyin": "ㄐㄧˊ ㄊㄚ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "guitar"
    },
    "喜人": {
        "zhuyin": "ㄒㄧˇ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to be satisfying"
    },
    "喜好": {
        "zhuyin": "ㄒㄧˇ ㄏㄠˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to like, love, be fond of"
    },
    "歡笑": {
        "zhuyin": "ㄏㄨㄢ ㄒㄧㄠˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to laugh delightedly"
    },
    "歡心": {
        "zhuyin": "ㄏㄨㄢ ㄒㄧㄣ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "favor(noun), love (noun)"
    },
    "十足": {
        "zhuyin": "ㄕˊ ㄗㄨˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "sheer, total, absolute"
    },
    "跟上": {
        "zhuyin": "ㄍㄣ ㄕㄤˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "keep up with, keep pace with"
    },
    "誰請": {
        "zhuyin": "ㄕㄨㄟˊ ㄑㄧㄥˇ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "who's paying?"
    },
    "請問": {
        "zhuyin": "ㄑㄧㄥˇ ㄨㄣˋ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "please tell me"
    },
    "聞人": {
        "zhuyin": "ㄨㄣˊ ㄖㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "famous person"
    },
    "耳聞": {
        "zhuyin": "ㄦˇ ㄨㄣˊ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to hear about from others"
    },
    "田間": {
        "zhuyin": "ㄊㄧㄢˊ ㄐㄧㄢ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "farm, field"
    },
    "人間": {
        "zhuyin": "ㄖㄣˊ ㄐㄧㄢ",
        "pinyin": "",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "the human world, world of human affairs"
    },
    "哪裡": {
        "zhuyin": "ㄋㄚˇ ㄌㄧˇ",
        "pinyin": "nǎlǐ",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "where, wherever"
    },
    "星期一": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄧ",
        "pinyin": "xīngqīyī",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Monday"
    },
    "星期二": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄦˋ",
        "pinyin": "xīngqīèr",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Tuesday"
    },
    "星期三": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄙㄢ",
        "pinyin": "xīngqīsān",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Wednesday"
    },
    "星期四": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄙˋ",
        "pinyin": "xīngqīsì",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Thursday"
    },
    "星期五": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄨˇ",
        "pinyin": "xīngqīwǔ",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Friday"
    },
    "星期六": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄌㄧㄡˋ",
        "pinyin": "xīngqīliù",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "Saturday"
    },
    "認識": {
        "zhuyin": "ㄖㄣˋ ㄕˊ",
        "pinyin": "rènshí",
        "book": "Reading and Writing Chinese: Third Edition",
        "english": "to know, recognize, understand"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "book": "Reading and Writing Chinese: Third Edition",
    //     "english": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "book": "Reading and Writing Chinese: Third Edition",
    //     "english": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "book": "Reading and Writing Chinese: Third Edition",  
    //     "english": ""
    // },
};
const bookWords = {

    "外面": {
        "zhuyin": "ㄨㄞˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "english": "outside",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一直": {
        "zhuyin": "ㄧ ㄓˊ",
        "pinyin": "",
        "english": "continuously, all along",
        "book": "侯爪(lv.1 graded reader)",
    },
    "下雨": {
        "zhuyin": "ㄒㄧㄚˋ ㄩˇ",
        "pinyin": "",
        "english": "to rain",
        "book": "侯爪(lv.1 graded reader)",
    },
    "暖和": {
        "zhuyin": "ㄋㄨㄢˇ ㄏㄜˊ",
        "pinyin": "",
        "english": "warm",
        "book": "侯爪(lv.1 graded reader)",
    },
    "看起來": {
        "zhuyin": "ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "pinyin": "",
        "english": "to appear, look a certain way",
        "book": "侯爪(lv.1 graded reader)",
    },
    "工廠": {
        "zhuyin": "ㄍㄨㄥ ㄔㄤˇ",
        "pinyin": "",
        "english": "factory",
        "book": "侯爪(lv.1 graded reader)",
    },
    "有錢": {
        "zhuyin": "ㄧㄡˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "english": "rich",
        "book": "侯爪(lv.1 graded reader)",
    },
    "好像": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄤˋ",
        "pinyin": "",
        "english": "to seem that",
        "book": "侯爪(lv.1 graded reader)",
    },
    "出門": {
        "zhuyin": "ㄔㄨ ㄇㄣˊ",
        "pinyin": "",
        "english": "to go out",
        "book": "侯爪(lv.1 graded reader)",
    },
    "叔叔": {
        "zhuyin": "ㄕㄨ ㄕㄨ",
        "pinyin": "",
        "english": "uncle",
        "book": "侯爪(lv.1 graded reader)",
    },
    "左右": {
        "zhuyin": "ㄗㄨㄛˇ ㄧㄡˋ",
        "pinyin": "",
        "english": "approximately, around",
        "book": "侯爪(lv.1 graded reader)",
    },
    "可能": {
        "zhuyin": "ㄎㄜˇ ㄋㄥˊ",
        "pinyin": "",
        "english": "maybe, possibly",
        "book": "侯爪(lv.1 graded reader)",
    },
    "還是": {
        "zhuyin": "ㄏㄞˊ ㄕˋ",
        "pinyin": "",
        "english": "still",
        "book": "侯爪(lv.1 graded reader)",
    },
    "說到": {
        "zhuyin": "ㄕㄨㄛ ㄉㄠˋ",
        "pinyin": "",
        "english": "to talk about, to mention",
        "book": "侯爪(lv.1 graded reader)",
    },
    "同事": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˋ",
        "pinyin": "",
        "english": "coworker",
        "book": "侯爪(lv.1 graded reader)",
    },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "pinyin": "",
        "english": "afterward",
        "book": "侯爪(lv.1 graded reader)",
    },
    "生意": {
        "zhuyin": "ㄕㄥ ㄧˋ",
        "pinyin": "",
        "english": "business",
        "book": "侯爪(lv.1 graded reader)",
    },
    "神奇": {
        "zhuyin": "ㄕㄣˊ ㄑㄧˊ",
        "pinyin": "",
        "english": "mystical, magical",
        "book": "侯爪(lv.1 graded reader)",
    },
    "故事": {
        "zhuyin": "ㄍㄨˋ ㄕˋ",
        "pinyin": "",
        "english": "story",
        "book": "侯爪(lv.1 graded reader)",
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "pinyin": "",
        "english": "interesting",
        "book": "侯爪(lv.1 graded reader)",
    },
    "害怕": {
        "zhuyin": "ㄏㄞˋ ㄆㄚˋ",
        "pinyin": "",
        "english": "to fear",
        "book": "侯爪(lv.1 graded reader)",
    },
    "離開": {
        "zhuyin": "ㄌㄧˊ ㄎㄞ",
        "pinyin": "",
        "english": "",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "english": "definitely, certainly",
        "book": "侯爪(lv.1 graded reader)",
    },
    "猴子": {
        "zhuyin": "ㄏㄡˊ ㄗˇ",
        "pinyin": "",
        "english": "monkey",
        "book": "侯爪(lv.1 graded reader)",
    },
    "爪子": {
        "zhuyin": "ㄓㄠˇ ㄗˇ",
        "pinyin": "",
        "english": "claw, paw",
        "book": "侯爪(lv.1 graded reader)",
    },
    "猴爪": {
        "zhuyin": "ㄏㄡˊ ㄓㄠˇ",
        "pinyin": "",
        "english": "monkey paw",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一下子": {
        "zhuyin": "ㄧ ㄒㄧㄚˋ ㄗˇ",
        "pinyin": "",
        "english": "all at once, all off a sudden",
        "book": "侯爪(lv.1 graded reader)",
    },
    "奇怪": {
        "zhuyin": "ㄑㄧˊ ㄍㄨㄞˋ",
        "pinyin": "",
        "english": "strange, weird",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一家人": {
        "zhuyin": "ㄧ ㄐㄧㄚ ㄖㄣˊ",
        "pinyin": "",
        "english": "the whole family",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小看": {
        "zhuyin": "ㄒㄧㄠˇ ㄎㄢˋ",
        "pinyin": "",
        "english": "to look down upon, think little of",
        "book": "侯爪(lv.1 graded reader)",
    },
    "魔力": {
        "zhuyin": "ㄇㄛˊ ㄌㄧˋ",
        "pinyin": "",
        "english": "magical power, magic",
        "book": "侯爪(lv.1 graded reader)",
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "pinyin": "",
        "english": "serious, earnest",
        "book": "侯爪(lv.1 graded reader)",
    },
    "實現": {
        "zhuyin": "ㄕˊ ㄒㄧㄢˋ",
        "pinyin": "",
        "english": "to realize, make real",
        "book": "侯爪(lv.1 graded reader)",
    },
    "願望": {
        "zhuyin": "ㄩㄢˋ ㄨㄤˋ",
        "pinyin": "",
        "english": "a wish",
        "book": "侯爪(lv.1 graded reader)",
    },
    "好奇": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ",
        "pinyin": "",
        "english": "curious",
        "book": "侯爪(lv.1 graded reader)",
    },
    "得到": {
        "zhuyin": "ㄉㄜˊ ㄉㄠˋ",
        "pinyin": "",
        "english": "get, gain",
        "book": "侯爪(lv.1 graded reader)",
    },
    "失去": {
        "zhuyin": "ㄕ ㄑㄩˋ",
        "pinyin": "",
        "english": "to lose (something)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小聲": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄥ",
        "pinyin": "",
        "english": "in a low voice",
        "book": "侯爪(lv.1 graded reader)",
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "pinyin": "",
        "english": "sad, upset",
        "book": "侯爪(lv.1 graded reader)",
    },
    "老婆": {
        "zhuyin": "ㄌㄠˇ ㄆㄛˊ",
        "pinyin": "",
        "english": "wife",
        "book": "侯爪(lv.1 graded reader)",
    },
    "沒用": {
        "zhuyin": "ㄇㄟˊ ㄩㄥˋ",
        "pinyin": "",
        "english": "useless",
        "book": "侯爪(lv.1 graded reader)",
    },
    "送給": {
        "zhuyin": "ㄙㄨㄥˋ ㄍㄟˇ",
        "pinyin": "",
        "english": "to give to (someone)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "發生": {
        "zhuyin": "ㄈㄚ ㄕㄥ",
        "pinyin": "",
        "english": "to happen, to occur",
        "book": "侯爪(lv.1 graded reader)",
    },
    "也許": {
        "zhuyin": "ㄧㄝˇ ㄒㄩˇ",
        "pinyin": "",
        "english": "perhaps, maybe",
        "book": "侯爪(lv.1 graded reader)",
    },
    "相信": {
        "zhuyin": "ㄒㄧㄤ ㄒㄧㄣˋ",
        "pinyin": "",
        "english": "to believe",
        "book": "侯爪(lv.1 graded reader)",
    },
    "許願": {
        "zhuyin": "ㄒㄩˇ ㄩㄢˋ",
        "pinyin": "",
        "english": "to make a wish",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "pinyin": "",
        "english": "to be careful",
        "book": "侯爪(lv.1 graded reader)",
    },
    "應該": {
        "zhuyin": "ㄧㄥ ㄍㄞ",
        "pinyin": "",
        "english": "should, ought to",
        "book": "侯爪(lv.1 graded reader)",
    },
    "想好": {
        "zhuyin": "ㄒㄧㄤˇ ㄏㄠˇ",
        "pinyin": "",
        "english": "to think over",
        "book": "侯爪(lv.1 graded reader)",
    },
    "記得": {
        "zhuyin": "ㄐㄧˋ ㄉㄜˊ",
        "pinyin": "",
        "english": "to remember",
        "book": "侯爪(lv.1 graded reader)",
    },
    "樣子": {
        "zhuyin": "ㄧㄤˋ ㄗˇ",
        "pinyin": "",
        "english": "appearance",
        "book": "侯爪(lv.1 graded reader)",
    },
    "不一定": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "english": "not necessarily",
        "book": "侯爪(lv.1 graded reader)",
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "book": "侯爪(lv.1 graded reader)",
    // },
}
//still needs zhuyin also SHIT ITS THE OLD HSK its way unfinished
const HSK2words = {
    "啊": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "ah"
    },
    "愛情": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "Love"
    },
    "愛人": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "lover"
    },
    "安靜": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "be quiet"
    },
    "安全": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "security"
    },
    "白色": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "white"
    },
    "班長": {
        "zhuyin": "ㄅㄢ ㄔㄤˊ",
        "pinyin": "bān zhǎng",
        "level": "HSK2",
        "english": "monitor, squad leader"
    },
    "辦": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "do"
    },
    "辦法": {
        "zhuyin": "ㄅㄢˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "way, method"
    },
    "辦公室": {
        "zhuyin": "ㄅㄢˋ ㄍㄨㄥ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "office"
    },
    "半夜": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "midnight"
    },
    "幫助": {
        "zhuyin": "ㄅㄤ ㄓㄨˋ",
        "pinyin": "bāng zhù",
        "level": "HSK2",
        "english": "to help, assist"
    },
    "飽": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "full"
    },
    "報名": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "sign up"
    },
    "報紙": {
        "zhuyin": "ㄅㄠˋ ㄓˇ",
        "pinyin": "bào zhǐ",
        "level": "HSK2",
        "english": "newspaper"
    },
    "北方": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "north"
    },
    "背": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "carry on the back, shoulder"
    },
    "比如": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "such as"
    },
    "比如說": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "for example"
    },
    "筆": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "pen"
    },
    "筆記": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "note, notes"
    },
    "筆記本": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "notebook"
    },
    "必須": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "must"
    },
    "邊": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "side"
    },
    "變": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "變成": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "become, change into"
    },
    "遍": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "times"
    },
    "錶": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "watch"
    },
    "表": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "exterior surface, a modal, to show one's opinion"
    },
    "表示": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "express, represent, indicate"
    },
    "不錯": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not bad, pretty good"
    },
    "不但": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not only"
    },
    "不夠": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not enough"
    },
    "不過": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "however"
    },
    "不太": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not too-, not very much"
    },
    "不要": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "don't"
    },
    "不好意思": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "sorry, feel embarrassed"
    },
    "不久": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "soon"
    },
    "不滿": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "dissatisfied"
    },
    "不如": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not as good as"
    },
    "不少": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not a few, a lot"
    },
    "不同": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "different"
    },
    "不行": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "no way, out of the question"
    },
    "不一定": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "not necessarily, uncertain"
    },
    "不一會兒": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "in a moment, in a little while, soon"
    },
    "部分": {
        "zhuyin": "ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "part"
    },
    "賓館": {
        "zhuyin": "ㄅㄧㄣ ㄍㄨㄢˇ",
        "pinyin": "bīn guǎn",
        "level": "HSK2",
        "english": "guest house"
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": ""
    },
    "唱歌": {
        "zhuyin": "ㄔㄤˋ ㄍㄜ",
        "pinyin": "chàng gē",
        "level": "HSK2",
        "english": "to sing a song"
    },
    "大家": {
        "zhuyin": "ㄉㄚˋ ㄐㄧㄚ",
        "pinyin": "dà jiā",
        "level": "HSK2",
        "english": "everyone"
    },
    "弟弟": {
        "zhuyin": "",
        "pinyin": "dì di",
        "level": "HSK2",
        "english": "younger brother"
    },
    "第一": {
        "zhuyin": "",
        "pinyin": "dì yī",
        "level": "HSK2",
        "english": "first, number one"
    },
    "房間": {
        "zhuyin": "",
        "pinyin": "fáng jiān",
        "level": "HSK2",
        "english": "room"
    },
    "非常": {
        "zhuyin": "",
        "pinyin": "fēi cháng",
        "level": "HSK2",
        "english": "extraordinary, unusual, exceptional, very"
    },
    "服務員": {
        "zhuyin": "",
        "pinyin": "fú wù yuán",
        "level": "HSK2",
        "english": "attendant, customer service person, waiter"
    },
    "告訴": {
        "zhuyin": "",
        "pinyin": "gào su",
        "level": "HSK2",
        "english": "to tell, inform, to let know"
    },
    "哥哥": {
        "zhuyin": "",
        "pinyin": "gē ge",
        "level": "HSK2",
        "english": "older brother"
    },
    "公共汽車": {
        "zhuyin": "",
        "pinyin": "gōng gòng qì chē",
        "level": "HSK2",
        "english": "bus"
    },
    "公司": {
        "zhuyin": "",
        "pinyin": "gōng sī",
        "level": "HSK2",
        "english": "buisness, company"
    },
    "孩子": {
        "zhuyin": "",
        "pinyin": "hái zi",
        "level": "HSK2",
        "english": "child"
    },
    "好吃": {
        "zhuyin": "",
        "pinyin": "hǎo chī",
        "level": "HSK2",
        "english": "delicious, yummy"
    },
    "火車站": {
        "zhuyin": "",
        "pinyin": "huǒ chē zhàn",
        "level": "HSK2",
        "english": "train station"
    },
    "機場": {
        "zhuyin": "",
        "pinyin": "jī chǎng",
        "level": "HSK2",
        "english": "airport"
    },
    "雞蛋": {
        "zhuyin": "",
        "pinyin": "jī dàn",
        "level": "HSK2",
        "english": "egg, hen's egg"
    },
    "教室": {
        "zhuyin": "",
        "pinyin": "jiào shì",
        "level": "HSK2",
        "english": "classroom"
    },
    "姐姐": {
        "zhuyin": "",
        "pinyin": "jiě jie",
        "level": "HSK2",
        "english": "older sister"
    },
    "介紹": {
        "zhuyin": "",
        "pinyin": "jiè shào",
        "level": "HSK2",
        "english": "to present, introduce, recommend, suggest"
    },
    "覺得": {
        "zhuyin": "",
        "pinyin": "jué de",
        "level": "HSK2",
        "english": "to think, feel"
    },
    "咖啡": {
        "zhuyin": "",
        "pinyin": "kā fēi",
        "level": "HSK2",
        "english": "coffee"
    },
    "開始": {
        "zhuyin": "",
        "pinyin": "kāi shǐ",
        "level": "HSK2",
        "english": "to begin, start, initial"
    },
    "考試": {
        "zhuyin": "",
        "pinyin": "kǎo shì",
        "level": "HSK2",
        "english": "exam"
    },
    "可能": {
        "zhuyin": "",
        "pinyin": "kě néng",
        "level": "HSK2",
        "english": "might, possible, probable, maybe"
    },
    "可以": {
        "zhuyin": "",
        "pinyin": "kě yǐ",
        "level": "HSK2",
        "english": "can, may, possible, able to"
    },
    "快樂": {
        "zhuyin": "",
        "pinyin": "kuài lè",
        "level": "HSK2",
        "english": "happy, merry"
    },
    "旅遊": {
        "zhuyin": "",
        "pinyin": "lǚ yóu",
        "level": "HSK2",
        "english": "trip, journey, tourism, travel"
    },
    "妹妹": {
        "zhuyin": "",
        "pinyin": "mèi mei",
        "level": "HSK2",
        "english": "younger sister"
    },
    "麵條": {
        "zhuyin": "",
        "pinyin": "miàn tiáo",
        "level": "HSK2",
        "english": "noodles"
    },
    "牛奶": {
        "zhuyin": "",
        "pinyin": "niú nǎi",
        "level": "HSK2",
        "english": "cow's milk"
    },
    "旁邊": {
        "zhuyin": "",
        "pinyin": "páng biān",
        "level": "HSK2",
        "english": "to the side, beside"
    },
    "跑步": {
        "zhuyin": "",
        "pinyin": "pǎo bù",
        "level": "HSK2",
        "english": "to walk quickly, march, run"
    },
    "便宜": {
        "zhuyin": "",
        "pinyin": "pián yi",
        "level": "HSK2",
        "english": "cheap, inexpensive"
    },
    "妻子": {
        "zhuyin": "",
        "pinyin": "qī zi",
        "level": "HSK2",
        "english": "wife"
    },
    "起床": {
        "zhuyin": "",
        "pinyin": "qǐ chuáng",
        "level": "HSK2",
        "english": "to get up"
    },
    "鉛筆": {
        "zhuyin": "",
        "pinyin": "qiān bǐ",
        "level": "HSK2",
        "english": "lead pencil"
    },
    "去年": {
        "zhuyin": "",
        "pinyin": "qù nián",
        "level": "HSK2",
        "english": "last year"
    },
    "上班": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "to go to work, be put on duty"
    },
    "身體": {
        "zhuyin": "",
        "pinyin": "shēn tǐ",
        "level": "HSK2",
        "english": "(human) body, heath"
    },
    "生病": {
        "zhuyin": "",
        "pinyin": "shēng bìng",
        "level": "HSK2",
        "english": "to fall ill, sicken"
    },
    "生日": {
        "zhuyin": "",
        "pinyin": "shēng rì",
        "level": "HSK2",
        "english": "birthday"
    },
    "時間": {
        "zhuyin": "",
        "pinyin": "shí jiān",
        "level": "HSK2",
        "english": "time, period"
    },
    "事情": {
        "zhuyin": "",
        "pinyin": "shì qing",
        "level": "HSK2",
        "english": "affair, matter, buisness, thing"
    },
    "手錶": {
        "zhuyin": "",
        "pinyin": "shǒu biǎo",
        "level": "HSK2",
        "english": "wristwatch"
    },
    "手機": {
        "zhuyin": "",
        "pinyin": "shǒu jī",
        "level": "HSK2",
        "english": "cell phone, mobile phone"
    },
    "說話": {
        "zhuyin": "",
        "pinyin": "shuō huà",
        "level": "HSK2",
        "english": "to speak, say, talk, gossip, tell stories"
    },
    "跳舞": {
        "zhuyin": "",
        "pinyin": "tiào wǔ",
        "level": "HSK2",
        "english": "to dance"
    },
    "晚上": {
        "zhuyin": "",
        "pinyin": "wǎn shang",
        "level": "HSK2",
        "english": "in the evening"
    },
    "為什麼": {
        "zhuyin": "",
        "pinyin": "wèi shén me",
        "level": "HSK2",
        "english": "for what reason? why?"
    },
    "問題": {
        "zhuyin": "",
        "pinyin": "wèn tí",
        "level": "HSK2",
        "english": "question, problem, issue, topic"
    },
    "希望": {
        "zhuyin": "",
        "pinyin": "xī wàng",
        "level": "HSK2",
        "english": "to wish for, desire, hope"
    },
    "西瓜": {
        "zhuyin": "",
        "pinyin": "xī guā",
        "level": "HSK2",
        "english": "watermelon"
    },
    "小時": {
        "zhuyin": "",
        "pinyin": "xiǎo shí",
        "level": "HSK2",
        "english": "hour"
    },
    "休息 ": {
        "zhuyin": "",
        "pinyin": "xiū xi",
        "level": "HSK2",
        "english": "to rest"
    },
    "顏色": {
        "zhuyin": "",
        "pinyin": "yán sè",
        "level": "HSK2",
        "english": "color"
    },
    "眼睛": {
        "zhuyin": "",
        "pinyin": "yǎn jing",
        "level": "HSK2",
        "english": "eye"
    },
    "一下": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "(used after a verb) give it a go, to try, once in a while"
    },
    "已經": {
        "zhuyin": "",
        "pinyin": "yǐ jīng",
        "level": "HSK2",
        "english": "already"
    },
    "一起": {
        "zhuyin": "",
        "pinyin": "yī qǐ",
        "level": "HSK2",
        "english": "together, in the same place, with"
    },
    "意思": {
        "zhuyin": "",
        "pinyin": "yì si",
        "level": "HSK2",
        "english": "idea, opinion, meaining"
    },
    "游泳": {
        "zhuyin": "",
        "pinyin": "yóu yǒng",
        "level": "HSK2",
        "english": "swim"
    },
    "右邊": {
        "zhuyin": "",
        "pinyin": "yòu bian",
        "level": "HSK2",
        "english": "right side, to the right, right"
    },
    "運動": {
        "zhuyin": "",
        "pinyin": "yùn dòng",
        "level": "HSK2",
        "english": "movement, campaign, sports"
    },
    "早上": {
        "zhuyin": "",
        "pinyin": "zǎo shang",
        "level": "HSK2",
        "english": "early morning, good morning"
    },
    "正在": {
        "zhuyin": "",
        "pinyin": "zhèng zài",
        "level": "HSK2",
        "english": "in the process of (doing something/happening), while (doing)"
    },
    "知道": {
        "zhuyin": "",
        "pinyin": "zhī dào",
        "level": "HSK2",
        "english": "to know, be aware of"
    },
    "準備": {
        "zhuyin": "",
        "pinyin": "zhǔn bèi",
        "level": "HSK2",
        "english": "preparation, prepare"
    },
    "左邊": {
        "zhuyin": "",
        "pinyin": "zuǒ bian",
        "level": "HSK2",
        "english": "the left side, to the left of, left"
    },
    //  "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK2",  
    //     "english": ""
    // },
};
//100% complete
const zhuyinCharacters = {
    "ㄅ": {
        "pinyin": "b",
        "pronounced": "",
        "isEnding": false
    },
    "ㄆ": {
        "pinyin": "p",
        "pronounced": "",
        "isEnding": false
    },
    "ㄇ": {
        "pinyin": "m",
        "pronounced": "",
        "isEnding": false
    },
    "ㄈ": {
        "pinyin": "f",
        "pronounced": "",
        "isEnding": false
    },
    "ㄉ": {
        "pinyin": "d",
        "pronounced": "",
        "isEnding": false
    },
    "ㄊ": {
        "pinyin": "t",
        "pronounced": "",
        "isEnding": false
    },
    "ㄋ": {
        "pinyin": "n",
        "pronounced": "",
        "isEnding": false
    },
    "ㄌ": {
        "pinyin": "l",
        "pronounced": "",
        "isEnding": false
    },
    "ㄍ": {
        "pinyin": "g",
        "pronounced": "",
        "isEnding": false
    },
    "ㄎ": {
        "pinyin": "k",
        "pronounced": "",
        "isEnding": false
    },
    "ㄏ": {
        "pinyin": "h",
        "pronounced": "",
        "isEnding": false
    },
    "ㄐ": {
        "pinyin": "j",
        "pronounced": "",
        "isEnding": false
    },
    "ㄑ": {
        "pinyin": "q",
        "pronounced": "ch",
        "isEnding": false
    },
    "ㄒ": {
        "pinyin": "x",
        "pronounced": "sh",
        "isEnding": false
    },
    "ㄓ": {
        "pinyin": "zh",
        "pronounced": "J",
        "isEnding": false
    },
    "ㄔ": {
        "pinyin": "ch",
        "pronounced": "",
        "isEnding": false
    },
    "ㄕ": {
        "pinyin": "sh",
        "pronounced": "",
        "isEnding": false
    },
    "ㄖ": {
        "pinyin": "r",
        "pronounced": "french j",
        "isEnding": false
    },
    "ㄗ": {
        "pinyin": "z",
        "pronounced": "",
        "isEnding": false
    },
    "ㄘ": {
        "pinyin": "c",
        "pronounced": "ts",
        "isEnding": false
    },
    "ㄙ": {
        "pinyin": "s",
        "pronounced": "",
        "isEnding": false
    },
    "一": {
        "pinyin": "i, y",
        "pronounced": "eee",
        "isEnding": true
    },
    "ㄨ": {
        "pinyin": "u, w",
        "pronounced": "ooo",
        "isEnding": true
    },
    "ㄩ": {
        "pinyin": "ü, yu",
        "pronounced": "yeuu",
        "isEnding": true
    },
    "ㄚ": {
        "pinyin": "a",
        "pronounced": "ah",
        "isEnding": true
    },
    "ㄛ": {
        "pinyin": "o",
        "pronounced": "ooh",
        "isEnding": true
    },
    "ㄜ": {
        "pinyin": "e",
        "pronounced": "uh",
        "isEnding": true
    },
    "ㄝ": {
        "pinyin": "e",
        "pronounced": "eh",
        "isEnding": true
    },
    "ㄞ": {
        "pinyin": "ai",
        "pronounced": "",
        "isEnding": true
    },
    "ㄟ": {
        "pinyin": "ei",
        "pronounced": "eyy",
        "isEnding": true
    },
    "ㄠ": {
        "pinyin": "ao",
        "pronounced": "",
        "isEnding": true
    },
    "ㄡ": {
        "pinyin": "ou",
        "pronounced": "oh",
        "isEnding": true
    },
    "ㄢ": {
        "pinyin": "an",
        "pronounced": "",
        "isEnding": true
    },
    "ㄣ": {
        "pinyin": "en",
        "pronounced": "uen",
        "isEnding": true
    },
    "ㄤ": {
        "pinyin": "ang",
        "pronounced": "",
        "isEnding": true
    },
    "ㄥ": {
        "pinyin": "eng",
        "pronounced": "ung",
        "isEnding": true
    },
    "ㄦ": {
        "pinyin": "er",
        "pronounced": "",
        "isEnding": true
    }
};
const chineseRadicals = {
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one",
        "variant": ""
    },
    "丨": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn ",
        "tone": 3,
        "english": "line, down",
        "variant": ""
    },
    "丶": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "variant": ""
    },
    "丿": {
        "zhuyin": "ㄆ一ㄝˇ",
        "pinyin": "piě",
        "tone": 3,
        "english": "slash, left",
        "variant": "乀, 乁"
    },
    "乙": {
        "zhuyin": "一",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "second, twist",
        "variant": "乚, 乛"
    },
    "亅": {
        "zhuyin": "ㄍㄡ",
        "pinyin": "gōu",
        "tone": 1,
        "english": "hook",
        "variant": ""
    },
    "二": {
        "zhuyin": "ㄦˋ",
        "pinyin": "èr",
        "tone": 4,
        "english": "two",
        "variant": ""
    },
    "亠": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "tóu",
        "tone": 2,
        "english": "lid",
        "variant": ""
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "variant": "亻"
    },
    "儿": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "legs",
        "variant": ""
    },
    "入": {
        "zhuyin": "ㄖㄨˋ",
        "pinyin": "rù",
        "tone": 4,
        "english": "enter",
        "variant": ""
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "eight",
        "variant": "丷"
    },
    "冂": {
        "zhuyin": "ㄐㄩㄥˇ",
        "pinyin": "jiǒng",
        "tone": 3,
        "english": "down box, borders",
        "variant": ""
    },
    "冖": {
        "zhuyin": "ㄇ一ˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "cover, crown",
        "variant": ""
    },
    "冫": {
        "zhuyin": "ㄅ一ㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "ice",
        "variant": ""
    },
    "几": {
        "zhuyin": "ㄐ一",
        "pinyin": "jī, jǐ",
        "tone": 1,
        "english": "table",
        "variant": ""
    },
    "凵": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "qǔ",
        "tone": 3,
        "english": "open box, bowl",
        "variant": ""
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "dāo",
        "tone": 1,
        "english": "knife",
        "variant": "刂"
    },
    "力": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "power, strength",
        "variant": ""
    },
    "勹": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "bāo",
        "tone": 1,
        "english": "wrap",
        "variant": ""
    },
    "匕": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "ladle",
        "variant": ""
    },
    "匚": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "right open box",
        "variant": ""
    },
    "匸": {
        "zhuyin": "ㄒ一ˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "hiding enclosure",
        "variant": ""
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "ten",
        "variant": ""
    },
    "卜": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "bǔ",
        "tone": 3,
        "english": "divination, divine",
        "variant": ""
    },
    "卩": {
        "zhuyin": "ㄐ一ㄝˊ",
        "pinyin": "jié",
        "tone": 2,
        "english": "seal",
        "variant": ""
    },
    "厂": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "hàn",
        "tone": 4,
        "english": "cliff, slope",
        "variant": ""
    },
    "厶": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private, cocoon",
        "variant": ""
    },
    "又": {
        "zhuyin": "一ㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again, right hand",
        "variant": ""
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "mouth, opening",
        "variant": ""
    },
    "囗": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wéi",
        "tone": 2,
        "english": "enclosure, surround",
        "variant": ""
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "tǔ",
        "tone": 3,
        "english": "earth",
        "variant": ""
    },
    "士": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "scholar, knight",
        "variant": ""
    },
    "夂": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "go, follow",
        "variant": ""
    },
    "夊": {
        "zhuyin": "ㄙㄨㄟ",
        "pinyin": "suī",
        "tone": 1,
        "english": "go slowly",
        "variant": ""
    },
    "夕": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "night",
        "variant": ""
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "variant": ""
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "tone": 3,
        "english": "woman",
        "variant": ""
    },
    "子": {
        "zhuyin": "ㄗˇ",
        "pinyin": "zǐ",
        "tone": 3,
        "english": "child",
        "variant": ""
    },
    "宀": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "roof",
        "variant": ""
    },
    "寸": {
        "zhuyin": "ㄘㄨㄣˋ",
        "pinyin": "cùn",
        "tone": 4,
        "english": "inch, thumb",
        "variant": ""
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "variant": ""
    },
    "尢": {
        "zhuyin": "一ㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "lame",
        "variant": "尣"
    },
    "尸": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "corpse",
        "variant": ""
    },
    "屮": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "chè",
        "tone": 4,
        "english": "sprout",
        "variant": ""
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "mountain",
        "variant": ""
    },
    "川": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "chuān",
        "tone": 1,
        "english": "river",
        "variant": "巛, 巜"
    },
    "工": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "work",
        "variant": ""
    },
    "己": {
        "zhuyin": "ㄐ一ˇ",
        "pinyin": "jǐ",
        "tone": 3,
        "english": "oneself",
        "variant": ""
    },
    "巾": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "towel, cloth",
        "variant": ""
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "dry, shield",
        "variant": ""
    },
    "幺": {
        "zhuyin": "一ㄠ",
        "pinyin": "yāo",
        "tone": 1,
        "english": "thread, coil",
        "variant": ""
    },
    "广": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "shelter, house on cliff, lean to",
        "variant": ""
    },
    "廴": {
        "zhuyin": "一ㄣ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "stride, march",
        "variant": ""
    },
    "廾": {
        "zhuyin": "ㄍㄨㄥˇ",
        "pinyin": "gǒng",
        "tone": 3,
        "english": "clasp, hands joined",
        "variant": ""
    },
    "弋": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "dart, shoot with a bow",
        "variant": ""
    },
    "弓": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "bow",
        "variant": ""
    },
    "彐": {
        "zhuyin": "ㄐ一ˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "snout",
        "variant": "彑"
    },
    "彡": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "hair, streaks",
        "variant": ""
    },
    "彳": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "step",
        "variant": ""
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "variant": "忄, ⺗"
    },
    "戈": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "dagger, spear, lance",
        "variant": ""
    },
    "户": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "door",
        "variant": ""
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
        "variant": "扌"
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "branch",
        "variant": ""
    },
    "攴": {
        "zhuyin": "ㄆㄨ",
        "pinyin": "pū",
        "tone": 1,
        "english": "rap, knock",
        "variant": "攵"
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "script, pattern",
        "variant": ""
    },
    "斗": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dǒu",
        "tone": 3,
        "english": "dipper, peck",
        "variant": ""
    },
    "斤": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "axe",
        "variant": ""
    },
    "方": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "square",
        "variant": ""
    },
    "无": {
        "zhuyin": "ㄨˊ",
        "pinyin": "wú",
        "tone": 2,
        "english": "not, lack",
        "variant": ""
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun",
        "variant": ""
    },
    "曰": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "yuē",
        "tone": 1,
        "english": "say",
        "variant": ""
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "moon",
        "variant": ""
    },
    "木": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "tree",
        "variant": ""
    },
    "欠": {
        "zhuyin": "ㄑ一ㄢˋ",
        "pinyin": "qiàn",
        "tone": 4,
        "english": "yawn, lack",
        "variant": ""
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "stop",
        "variant": ""
    },
    "歹": {
        "zhuyin": "ㄉㄞˇ",
        "pinyin": "dǎi",
        "tone": 3,
        "english": "death, wicked, evil",
        "variant": ""
    },
    "殳": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "weapon, club",
        "variant": ""
    },
    "毋": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "don't, not",
        "variant": "母"
    },
    "比": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "compare",
        "variant": ""
    },
    "毛": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "máo",
        "tone": 4,
        "english": "fur",
        "variant": ""
    },
    "氏": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "clan",
        "variant": ""
    },
    "氣": {
        "zhuyin": "ㄑ一ˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "steam, breath",
        "variant": ""
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "shuǐ",
        "tone": 3,
        "english": "water",
        "variant": "氵"
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "huǒ",
        "tone": 3,
        "english": "fire",
        "variant": "灬"
    },
    "爪": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "zhǎo",
        "tone": 3,
        "english": "claw",
        "variant": "爫"
    },
    "父": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "father",
        "variant": ""
    },
    "爻": {
        "zhuyin": "一ㄠˊ",
        "pinyin": "yáo",
        "tone": 2,
        "english": "lines on a trigram, diagrams for divination",
        "variant": ""
    },
    "爿": {
        "zhuyin": "ㄑ一ㄤˊ",
        "pinyin": "qiáng",
        "tone": 2,
        "english": "half of a tree trunk, bed",
        "variant": ""
    },
    "片": {
        "zhuyin": "ㄆ一ㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "slice",
        "variant": ""
    },
    "牙": {
        "zhuyin": "一ㄚˊ",
        "pinyin": "yá",
        "tone": 2,
        "english": "fang, tooth",
        "variant": ""
    },
    "牛": {
        "zhuyin": "ㄋ一ㄡˊ",
        "pinyin": "niú",
        "tone": 2,
        "english": "cow",
        "variant": "牜"
    },
    "犬": {
        "zhuyin": "ㄑㄩㄢˇ",
        "pinyin": "quǎn",
        "tone": 3,
        "english": "dog",
        "variant": "犭"
    },
    "玄": {
        "zhuyin": "ㄒㄩㄢˊ",
        "pinyin": "xuán",
        "tone": 2,
        "english": "profound, dark",
        "variant": ""
    },
    "玉": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "jade",
        "variant": "王"
    },
    "瓜": {
        "zhuyin": "ㄍㄨㄚ",
        "pinyin": "guā",
        "tone": 1,
        "english": "melon",
        "variant": ""
    },
    "瓦": {
        "zhuyin": "ㄨㄚˇ",
        "pinyin": "wǎ",
        "tone": 3,
        "english": "tile",
        "variant": ""
    },
    "甘": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "sweet",
        "variant": ""
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, birth",
        "variant": ""
    },
    "用": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "use",
        "variant": ""
    },
    "田": {
        "zhuyin": "ㄊ一ㄢˊ",
        "pinyin": "tián",
        "tone": 2,
        "english": "field, rice paddy",
        "variant": ""
    },
    "疋": {
        "zhuyin": "ㄆ一ˇ",
        "pinyin": "pǐ",
        "tone": 3,
        "english": "bolt of cloth",
        "variant": ""
    },
    "疒": {
        "zhuyin": "ㄅ一ㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "illness",
        "variant": ""
    },
    "癶": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "foot steps, back",
        "variant": ""
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "tone": 2,
        "english": "white",
        "variant": ""
    },
    "皮": {
        "zhuyin": "ㄆ一ˊ",
        "pinyin": "pí",
        "tone": 2,
        "english": "skin",
        "variant": ""
    },
    "皿": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "dish",
        "variant": ""
    },
    "目": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "eye",
        "variant": ""
    },
    "矛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "máo",
        "tone": 2,
        "english": "spear",
        "variant": ""
    },
    "矢": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "arrow",
        "variant": ""
    },
    "石": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "stone, rock",
        "variant": ""
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "spirit, sign",
        "variant": "礻"
    },
    "禸": {
        "zhuyin": "ㄖㄡˊ",
        "pinyin": "róu",
        "tone": 2,
        "english": "track",
        "variant": ""
    },
    "禾": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "grain",
        "variant": ""
    },
    "穴": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "xuè",
        "tone": 4,
        "english": "cave",
        "variant": ""
    },
    "立": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "stand",
        "variant": ""
    },
    "竹": {
        "zhuyin": "ㄓㄨˊ",
        "pinyin": "zhú",
        "tone": 2,
        "english": "bamboo",
        "variant": ""
    },
    "米": {
        "zhuyin": "ㄇ一ˇ",
        "pinyin": "mǐ",
        "tone": 3,
        "english": "rice",
        "variant": ""
    },
    "糸": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "silk",
        "variant": "纟"
    },
    "缶": {
        "zhuyin": "ㄈㄡˇ",
        "pinyin": "fǒu",
        "tone": 3,
        "english": "jar, crock",
        "variant": ""
    },
    "网": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "net",
        "variant": "罒"
    },
    "羊": {
        "zhuyin": "一ㄤˊ",
        "pinyin": "yáng",
        "tone": 2,
        "english": "sheep",
        "variant": ""
    },
    "羽": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "feathers, wings",
        "variant": ""
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "lǎo",
        "tone": 3,
        "english": "old",
        "variant": ""
    },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, beard",
        "variant": ""
    },
    "耒": {
        "zhuyin": "ㄌㄟˇ",
        "pinyin": "lěi",
        "tone": 3,
        "english": "plow",
        "variant": ""
    },
    "耳": {
        "zhuyin": "ㄦˇ",
        "pinyin": "ěr",
        "tone": 3,
        "english": "ear",
        "variant": ""
    },
    "聿": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "brush",
        "variant": ""
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "ròu",
        "tone": 4,
        "english": "meat",
        "variant": ""
    },
    "臣": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "minister, bureaucrat",
        "variant": ""
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "oneself, small nose",
        "variant": ""
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "arrive, reach",
        "variant": ""
    },
    "臼": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "mortar",
        "variant": ""
    },
    "舌": {
        "zhuyin": "ㄕㄜˊ",
        "pinyin": "shé",
        "tone": 2,
        "english": "tongue",
        "variant": ""
    },
    "舛": {
        "zhuyin": "ㄔㄨㄢˇ",
        "pinyin": "chuǎn",
        "tone": 3,
        "english": "contrary, oppose, discord",
        "variant": ""
    },
    "舟": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "boat",
        "variant": ""
    },
    "艮": {
        "zhuyin": "ㄍㄣˋ",
        "pinyin": "gèn",
        "tone": 4,
        "english": "stubborn, tough, trigram mountain, stopping",
        "variant": ""
    },
    "色": {
        "zhuyin": "ㄙㄜˋ",
        "pinyin": "sè",
        "tone": 4,
        "english": "color",
        "variant": ""
    },
    "艸": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "cǎo",
        "tone": 3,
        "english": "grass",
        "variant": "艹"
    },
    "虍": {
        "zhuyin": "ㄏㄨˇ",
        "pinyin": "hǔ",
        "tone": 3,
        "english": "tiger",
        "variant": ""
    },
    "虫": {
        "zhuyin": "ㄔㄨㄥˊ",
        "pinyin": "chóng",
        "tone": 2,
        "english": "insect",
        "variant": ""
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "xuě",
        "tone": 3,
        "english": "blood",
        "variant": ""
    },
    "行": {
        "zhuyin": "ㄒ一ㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "walk, go",
        "variant": ""
    },
    "衣": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes, gown",
        "variant": "衤"
    },
    "西": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "west",
        "variant": "覀"
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "see",
        "variant": "见"
    },
    "角": {
        "zhuyin": "ㄐ一ㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "horn",
        "variant": ""
    },
    "言": {
        "zhuyin": "一ㄢˊ",
        "pinyin": "yán",
        "tone": 2,
        "english": "speech, words",
        "variant": ""
    },
    "谷": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "valley",
        "variant": ""
    },
    "豆": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "bean, flask",
        "variant": ""
    },
    "豕": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "pig",
        "variant": ""
    },
    "豸": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "badger, snake",
        "variant": ""
    },
    "貝": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "shell",
        "variant": ""
    },
    "赤": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "red",
        "variant": ""
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "walk, run",
        "variant": ""
    },
    "足": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "foot",
        "variant": ""
    },
    "身	": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "shēn",
        "tone": 1,
        "english": "torso, body",
        "variant": ""
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "cart, car",
        "variant": "车"
    },
    "辛": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "bitter",
        "variant": ""
    },
    "辰": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "morning",
        "variant": ""
    },
    "辶": {
        "zhuyin": "ㄔㄨㄛˋ",
        "pinyin": "chuò",
        "tone": 4,
        "english": "walk",
        "variant": ""
    },
    "邑": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "city",
        "variant": "阝"
    },
    "酉": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "wine",
        "variant": ""
    },
    "釆": {
        "zhuyin": "ㄅ一ㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "sift, distinguish",
        "variant": ""
    },
    "里": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "village",
        "variant": ""
    },
    "金": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "metal, gold",
        "variant": "钅"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "long",
        "variant": "长"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "tone": 2,
        "english": "gate",
        "variant": "门"
    },
    "阜": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "mound",
        "variant": "阝"
    },
    "隶": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "slave, grab",
        "variant": ""
    },
    "隹": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "dove, short-tailed bird",
        "variant": ""
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "rain",
        "variant": ""
    },
    "青": {
        "zhuyin": "ㄑ一ㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "blue, green",
        "variant": ""
    },
    "非": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "wrong",
        "variant": ""
    },
    "面": {
        "zhuyin": "ㄇ一ㄢˋ",
        "pinyin": "miàn",
        "tone": 4,
        "english": "face",
        "variant": ""
    },
    "革": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "gé",
        "tone": 2,
        "english": "leather, hide",
        "variant": ""
    },
    "韋": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "soft leather, tanned leather, walk off",
        "variant": "韦"
    },
    "韭	": {
        "zhuyin": "ㄐ一ㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "leek",
        "variant": ""
    },
    "音": {
        "zhuyin": "一ㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "sound, tone",
        "variant": ""
    },
    "頁": {
        "zhuyin": "一ㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "page, leaf",
        "variant": "页"
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "wind",
        "variant": "风"
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "fly",
        "variant": "飞"
    },
    "食": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "eat, food",
        "variant": "飠, 饣"
    },
    "首": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "head",
        "variant": ""
    },
    "香": {
        "zhuyin": "ㄒ一ㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "fragrant",
        "variant": ""
    },
    "馬": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "horse",
        "variant": "马"
    },
    "骨": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "bone",
        "variant": ""
    },
    "高	": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo",
        "tone": 1,
        "english": "high, tall",
        "variant": ""
    },
    "髟	": {
        "zhuyin": "ㄅ一ㄠ",
        "pinyin": "biāo",
        "tone": 1,
        "english": "long hair",
        "variant": ""
    },
    "鬥": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "fight",
        "variant": "斗"
    },
    "鬯": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "chàng",
        "tone": 4,
        "english": "sacrificial wine, mixed wine",
        "variant": ""
    },
    "鬲": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "cauldron",
        "variant": ""
    },
    "鬼": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guǐ",
        "tone": 1,
        "english": "ghost",
        "variant": ""
    },
    "魚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "fish",
        "variant": "鱼"
    },
    "鳥": {
        "zhuyin": "ㄋ一ㄠˇ",
        "pinyin": "niǎo",
        "tone": 3,
        "english": "bird",
        "variant": "鸟"
    },
    "鹵": {
        "zhuyin": "ㄌㄨˇ",
        "pinyin": "lǔ",
        "tone": 3,
        "english": "salty",
        "variant": "卤"
    },
    "鹿": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "deer",
        "variant": ""
    },
    "麥": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "wheat",
        "variant": "麦"
    },
    "麻": {
        "zhuyin": "ㄇㄚˊ",
        "pinyin": "má",
        "tone": 2,
        "english": "hemp",
        "variant": ""
    },
    "黄": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "huáng",
        "tone": 2,
        "english": "yellow",
        "variant": ""
    },
    "黍": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "millet (an ancient seed cooked like a grain)",
        "variant": ""
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "hēi",
        "tone": 1,
        "english": "black",
        "variant": ""
    },
    "黹": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "embroidery",
        "variant": ""
    },
    "黽": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "frog, toad",
        "variant": "黾"
    },
    "鼎": {
        "zhuyin": "ㄉ一ㄥˇ",
        "pinyin": "dǐng",
        "tone": 3,
        "english": "tripod",
        "variant": ""
    },
    "鼓": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "drum",
        "variant": ""
    },
    "鼠	": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "rat, mouse",
        "variant": ""
    },
    "鼻": {
        "zhuyin": "ㄅ一ˊ",
        "pinyin": "bí",
        "tone": 2,
        "english": "big nose",
        "variant": ""
    },
    "齊": {
        "zhuyin": "ㄑ一ˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "even, line up",
        "variant": "齐"
    },
    "齒": {
        "zhuyin": "ㄔ",
        "pinyin": "chǐ",
        "tone": 1,
        "english": "tooth, teeth",
        "variant": "齿"
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "lóng",
        "tone": 2,
        "english": "dragon",
        "variant": "龙"
    },
    "龜": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guī",
        "tone": 1,
        "english": "turtle, tortoise",
        "variant": "龟"
    },
    "龠": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "flute",
        "variant": "",
    }
};
const HSK1words = {
    "愛": {
        "zhuyin": "ㄞˋ",
        "pinyin": "ài",
        "level": "HSK1",
        "english": "love"
    },
    "愛好": {
        "zhuyin": "ㄞˋ ㄏㄠˇ",
        "pinyin": "ài hào",
        "level": "HSK1",
        "english": "hobby"
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "level": "HSK1",
        "english": "eight"
    },
    "爸爸": {
        "zhuyin": "ㄅㄚˋ ㄅㄚˋ",
        "pinyin": "bà ba",
        "level": "HSK1",
        "english": "(informal) father"
    },
    "吧": {
        "zhuyin": "ㄅㄚ˙",
        "pinyin": "ba",
        "level": "HSK1",
        "english": "(interjection p.)"
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "level": "HSK1",
        "english": "white"
    },
    "白天": {
        "zhuyin": "ㄅㄞˊ ㄊㄧㄢ",
        "pinyin": "bái tiān",
        "level": "HSK1",
        "english": "day, daytime"
    },
    "百": {
        "zhuyin": "ㄅㄞˇ ",
        "pinyin": "bǎi",
        "level": "HSK1",
        "english": "hundred"
    },
    "班": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "level": "HSK1",
        "english": "class"
    },
    "半": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "level": "HSK1",
        "english": "half"
    },
    "半年": {
        "zhuyin": "ㄅㄢˋ ㄋㄧㄢˊ",
        "pinyin": "bàn nián",
        "level": "HSK1",
        "english": "half a year"
    },
    "半天": {
        "zhuyin": "ㄅㄢˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "half day"
    },
    "幫": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "bāng",
        "level": "HSK1",
        "english": "help"
    },
    "幫忙": {
        "zhuyin": "ㄅㄤ ㄇㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "help"
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "package"
    },
    "包子": {
        "zhuyin": "ㄅㄠ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bun"
    },
    "杯子": {
        "zhuyin": "ㄅㄟ ㄗˇ",
        "pinyin": "bēi zi",
        "level": "HSK1",
        "english": "cup, glass"
    },
    "北": {
        "zhuyin": "ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "north"
    },
    "北邊": {
        "zhuyin": "ㄅㄟˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "north side"
    },
    "北京": {
        "zhuyin": "ㄅㄟˇ ㄐㄧㄥ",
        "pinyin": "Běi jīng",
        "level": "HSK1",
        "english": "Beijing"
    },
    "本": {
        "zhuyin": "ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(measure word for books or volumes)"
    },
    "本子": {
        "zhuyin": "ㄅㄣˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book"
    },
    "比": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(comparison p.)"
    },
    "别": {
        "zhuyin": "ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "don't"
    },
    // "副": {
    //     "zhuyin": "ㄈㄨˋ",
    //     "pinyin": "",
    //     "level": "HSK1",
    //     "english": "don't"
    // },
    "别的": {
        "zhuyin": "ㄅㄧㄝˊ ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "other"
    },
    "别人": {
        "zhuyin": "ㄅㄧㄝˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "other people"
    },
    "病": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "disease"
    },
    "病人": {
        "zhuyin": " ㄅㄧㄥˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "patient"
    },
    "不大": {
        "zhuyin": "ㄅㄨˋ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "not big"
    },
    "不對": {
        "zhuyin": "ㄅㄨˋ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wrong, not correct"
    },
    "不客氣": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˋ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you're welcome"
    },
    "不用": {
        "zhuyin": "ㄅㄨˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "no need to"
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "no"
    },
    "菜": {
        "zhuyin": "ㄘㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "veggie, greens, dish(food)"
    },
    "茶": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tea"
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "differ from, bad, short of"
    },
    "常": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "often"
    },
    "常常": {
        "zhuyin": "ㄔㄤˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "often"
    },
    "唱": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sing"
    },
    "唱歌": {
        "zhuyin": "ㄔㄤˋ ㄍㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sing"
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "car"
    },
    "車票": {
        "zhuyin": "ㄔㄜ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ticket"
    },
    "車上": {
        "zhuyin": "ㄔㄜ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in the car"
    },
    "車站": {
        "zhuyin": "ㄔㄜ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "station"
    },
    "吃": {
        "zhuyin": "ㄔ",
        "pinyin": "",
        "level": "HSK1",
        "english": "eat"
    },
    "吃飯": {
        "zhuyin": "ㄔ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have a meal"
    },
    "出": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "out"
    },
    "出來": {
        "zhuyin": "ㄔㄨ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come"
    },
    "出去": {
        "zhuyin": "ㄔㄨ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go out"
    },
    "穿": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wear"
    },
    "床": {
        "zhuyin": "ㄔㄨㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bed"
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(measure word for times, frequency)"
    },
    "從": {
        "zhuyin": "ㄘㄨㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "from"
    },
    "錯": {
        "zhuyin": "ㄘㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wrong"
    },
    "打": {
        "zhuyin": "ㄉㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hit take"
    },
    "打車": {
        "zhuyin": "ㄉㄚˇ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "take a taxi"
    },
    "打電話": {
        "zhuyin": "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "make a phone call"
    },
    "打開": {
        "zhuyin": "ㄉㄚˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK1",
        "english": "turn on"
    },
    "打球": {
        "zhuyin": "ㄉㄚˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "play ball"
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "big"
    },
    "大學": {
        "zhuyin": "ㄉㄚˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "university"
    },
    "大學生": {
        "zhuyin": "ㄉㄚˋ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "university student"
    },
    "到": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "reach"
    },
    "得到": {
        "zhuyin": "ㄉㄜˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get"
    },
    "地": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "-ly, (linking p.)"
    },
    "的": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "of, 's (possesssive p.)"
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wait"
    },
    "地": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ground"
    },
    "地點": {
        "zhuyin": "ㄉㄧˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "location"
    },
    "地方": {
        "zhuyin": "ㄉㄧˋ ㄈㄤ",
        "pinyin": "",
        "level": "HSK1",
        "english": "local"
    },
    "地上": {
        "zhuyin": "ㄉㄧˋ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "on the ground"
    },
    "地圖": {
        "zhuyin": "ㄉㄧˋ ㄊㄨˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "map"
    },
    "弟弟": {
        "zhuyin": "ㄉㄧˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "younger brother"
    },
    "第": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "added to numbers to make 'first, second, third...'"
    },
    "點": {
        "zhuyin": "ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "spot"
    },
    "電": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "electricity"
    },
    "電話": {
        "zhuyin": "ㄉㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "phone"
    },

    "電腦": {
        "zhuyin": "ㄉㄧㄢˋ ㄋㄠˇ",
        "pinyin": "diàn nǎo",
        "level": "HSK1",
        "english": "computer"
    },
    "電視": {
        "zhuyin": "ㄉㄧㄢˋ ㄕˋ",
        "pinyin": "diàn shì",
        "level": "HSK1",
        "english": "tv"
    },
    "電影": {
        "zhuyin": "ㄉㄧㄢˋ ㄧㄥˇ",
        "pinyin": "diàn yǐng",
        "level": "HSK1",
        "english": "movie, film"
    },
    "電影院": {
        "zhuyin": "ㄉㄧㄢˋ ㄧㄥˇ ㄩㄢˋ",
        "pinyin": "diàn yǐng",
        "level": "HSK1",
        "english": "movie theatre, cinema"
    },
    "東": {
        "zhuyin": "ㄉㄨㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "east"
    },
    "東邊": {
        "zhuyin": "ㄉㄨㄥ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "east side"
    },
    "東西": {
        "zhuyin": "ㄉㄨㄥ ㄒㄧ",
        "pinyin": "dōng xi",
        "level": "HSK1",
        "english": "thing, stuff"
    },
    "動": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "move"
    },
    "動作": {
        "zhuyin": "ㄉㄨㄥˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "action"
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "",
        "level": "HSK1",
        "english": "all"
    },
    "讀": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "read"
    },
    "讀書": {
        "zhuyin": "ㄉㄨˊ ㄕㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "reading, study"
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right"
    },
    "對不起": {
        "zhuyin": "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "I'm sorry"
    },

    "多少": {
        "zhuyin": "ㄉㄨㄛ ㄕㄠˇ",
        "pinyin": "duō shao",
        "level": "HSK1",
        "english": "how much, how many"
    },
    "餓": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hungry"
    },
    "兒子": {
        "zhuyin": "ㄦˊ ㄗˇ",
        "pinyin": "ér zi",
        "level": "HSK1",
        "english": "son"
    },
    "飯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rice, meal"
    },
    "飯店": {
        "zhuyin": "ㄈㄢˋ ㄉㄧㄢˋ",
        "pinyin": "fàn diàn",
        "level": "HSK1",
        "english": "restaurant, hotel"
    },
    "飯館": {
        "zhuyin": "ㄈㄢˋ ㄍㄨㄢˇ",
        "pinyin": "fàn guǎn",
        "level": "HSK1",
        "english": "restaurant"
    },
    "房間": {
        "zhuyin": "ㄈㄤˊ ㄐㄧㄢ",
        "pinyin": "fáng jiān",
        "level": "HSK1",
        "english": "room"
    },
    "房子": {
        "zhuyin": " ㄈㄤˊ ㄗˇ",
        "pinyin": "fáng zi",
        "level": "HSK1",
        "english": "house, building"
    },
    "放": {
        "zhuyin": " ㄈㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "discharge, release"
    },
    "放假": {
        "zhuyin": "ㄈㄤˋ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "holiday, have a holiday"
    },
    "放學": {
        "zhuyin": "ㄈㄤˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "off school"
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fly"
    },

    "飛機": {
        "zhuyin": "ㄈㄟ ㄐㄧ ",
        "pinyin": "fēi jī",
        "level": "HSK1",
        "english": "airplane"
    },
    "非常": {
        "zhuyin": "ㄈㄟ ㄔㄤˊ",
        "pinyin": "fēi cháng",
        "level": "HSK1",
        "english": "extraordinary, unusual, exceptional, very"
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "fēn",
        "level": "HSK1",
        "english": "minute, point, part, (measure word)"
    },
    "分鐘": {
        "zhuyin": "ㄈㄣ ㄓㄨㄥ",
        "pinyin": "fēn zhōng",
        "level": "HSK1",
        "english": "minute"
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "level": "HSK1",
        "english": "wind",
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "level": "HSK1",
        "english": "dry, shield",
    },
    "乾淨": {
        "zhuyin": "ㄍㄢ ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "clean, neat"
    },
    "乾脆": {
        "zhuyin": "ㄍㄢ ㄘㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "straightforward, clear cut, blunt"
    },
    "幹什麼": {
        "zhuyin": "ㄍㄢˋ ㄕㄣˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "what to do"
    },
    "高	": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo",
        "level": "HSK1",
        "english": "high, tall",
    },
    "高興": {
        "zhuyin": "ㄍㄠ ㄒㄧㄥ",
        "pinyin": "gāo xìng",
        "level": "HSK1",
        "english": "happy, glad"
    },
    "告訴": {
        "zhuyin": "ㄍㄠˋ ㄙㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tell"
    },
    "哥哥": {
        "zhuyin": "ㄍㄜ ㄍㄜ",
        "pinyin": "gē ge",
        "level": "HSK1",
        "english": "older brother"
    },
    "歌": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "level": "HSK1",
        "english": "song"
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "individual"
    },
    "給": {
        "zhuyin": "ㄍㄟˇ",
        "pinyin": "gěi",
        "level": "HSK1",
        "english": "give, to, for",
    },
    "跟": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "level": "HSK1",
        "english": "with, to follow",
    },
    "工人": {
        "zhuyin": "ㄍㄨㄥ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "worker"
    },
    "工作": {
        "zhuyin": "ㄍㄨㄥ ㄗㄨㄛˋ",
        "pinyin": "gōng zuò",
        "level": "HSK1",
        "english": "to work, job, work, task"
    },
    "關": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "level": "HSK1",
        "english": "close, shut",
    },
    "關上": {
        "zhuyin": "ㄍㄨㄢ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "close, shut to, turn off",
    },
    "貴": {
        "zhuyin": "ㄍㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "noble"
    },
    "國": {
        "zhuyin": "ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "country, state, nation"
    },
    "國家": {
        "zhuyin": "ㄍㄨㄛˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "home country"
    },
    "外國": {
        "zhuyin": "ㄨㄞˋ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign, oversea, abroad"
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "pass, surpass, cross",
    },
    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "level": "HSK1",
        "english": "still, yet",
    },
    "還是": {
        "zhuyin": "ㄏㄞˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "still"
    },
    "還有": {
        "zhuyin": "ㄏㄞˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "also, in addition, besides"
    },
    "孩子": {
        "zhuyin": "ㄏㄞˊ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "children",
    },
    "漢語": {
        "zhuyin": "ㄏㄢˋ ㄩˇ",
        "pinyin": "hàn yǔ",
        "level": "HSK1",
        "english": "Chinese language"
    },
    "漢字": {
        "zhuyin": "ㄏㄢˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Chinese character"
    },
    "好": {
        "zhuyin": "ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "good"
    },
    "好吃": {
        "zhuyin": "ㄏㄠˇ ㄔ",
        "pinyin": "hǎo chī",
        "level": "HSK1",
        "english": "delicious, yummy"
    },
    "好看": {
        "zhuyin": "ㄏㄠˇ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "good looking"
    },
    "好聽": {
        "zhuyin": "ㄏㄠˇ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "pleasant to hear"
    },
    "好玩兒": {
        "zhuyin": "ㄏㄠˇ ㄨㄢˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fun, interesting"
    },

    "號": {
        "zhuyin": "ㄏㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "number/date"
    },
    "喝": {
        "zhuyin": "ㄏㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "drink"
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "level": "HSK1",
        "english": "and",
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "english": "very",
    },
    "後": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "back, behind, after, later"
    },
    "後邊": {
        "zhuyin": "ㄏㄡˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "behind, back"
    },
    "後面": {
        "zhuyin": "ㄏㄡˋ ㄇㄧㄢˋ",
        "pinyin": "hòu mian",
        "level": "HSK1",
        "english": "rear face, back, behind"
    },
    "後天": {
        "zhuyin": "ㄏㄡˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "day after tomorrow"
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "flower"
    },
    "話": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "word, words"
    },
    "壞": {
        "zhuyin": "ㄏㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bad"
    },
    "還": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "return, pay back"
    },
    "回": {
        "zhuyin": "ㄏㄨㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go back, return"
    },
    "回答": {
        "zhuyin": "ㄏㄨㄟˊ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "answer"
    },
    "回到": {
        "zhuyin": "ㄏㄨㄟˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "back to"
    },
    "回家": {
        "zhuyin": "ㄏㄨㄟˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go home, return home"
    },
    "回來": {
        "zhuyin": "ㄏㄨㄟˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come back, return"
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can, be able to"
    },
    "火車": {
        "zhuyin": "ㄏㄨㄛˇ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "train"
    },
    "機場": {
        "zhuyin": "ㄐㄧ ㄔㄤˊ",
        "pinyin": "jī chǎng",
        "level": "HSK1",
        "english": "airport"
    },
    "機票": {
        "zhuyin": "ㄐㄧ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "air ticket, plane ticket"
    },
    "雞蛋": {
        "zhuyin": "ㄐㄧ ㄉㄢˋ",
        "pinyin": "jīdàn",
        "level": "HSK1",
        "english": "egg, hen's egg"
    },
    "幾": {
        "zhuyin": "ㄐㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "several, how many"
    },
    "記": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember"
    },
    "記得": {
        "zhuyin": "ㄐㄧˋ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember"
    },
    "記住": {
        "zhuyin": "ㄐㄧˋ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember, keep in mind"
    },
    "家": {
        "zhuyin": "ㄐ一ㄚ",
        "pinyin": "jiā",
        "level": "HSK1",
        "english": "home, family",
    },
    "家裡": {
        "zhuyin": "ㄐ一ㄚ ㄌㄧˇ",
        "pinyin": "jiā",
        "level": "HSK1",
        "english": "in the home",
    },
    "家人": {
        "zhuyin": "ㄐㄧㄚ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "family"
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "level": "HSK1",
        "english": "between, among, room, space, (measure word for rooms)",
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "level": "HSK1",
        "english": "see",
    },
    "見面": {
        "zhuyin": "ㄐㄧㄢˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "meet"
    },
    "教": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "teach"
    },
    "叫": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "call, be called"
    },
    "教學樓": {
        "zhuyin": "ㄐㄧㄠˋ ㄒㄩㄝˊ ㄌㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "teaching building"
    },
    "姐姐": {
        "zhuyin": "ㄐㄧㄝˇ ㄐㄧㄝˇ",
        "pinyin": "jiě jie",
        "level": "HSK1",
        "english": "older sister"
    },
    "介紹": {
        "zhuyin": "ㄐㄧㄝˋ ㄕㄠˋ",
        "pinyin": "jiè shào",
        "level": "HSK1",
        "english": "to present, introduce, recommend, suggest"
    },
    "今年": {
        "zhuyin": "ㄐㄧㄣ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "this year"
    },
    "今天": {
        "zhuyin": "ㄐㄧㄣ ㄊㄧㄢ",
        "pinyin": "jīn tiān",
        "level": "HSK1",
        "english": "today, now"
    },
    "進": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "enter"
    },
    "進來": {
        "zhuyin": "ㄐㄧㄣˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come in"
    },
    "進去": {
        "zhuyin": "ㄐㄧㄣˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go in"
    },
    "九": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "nine"
    },
    "就": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "level": "HSK1",
        "english": "as soon as, right away, then",
    },
    "覺得": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "think"
    },
    "開": {
        "zhuyin": "ㄎㄞ",
        "pinyin": "kāi",
        "level": "HSK1",
        "english": "to open, to start",
    },
    "開車": {
        "zhuyin": "ㄎㄞ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "drive, drive a car"
    },
    "開會": {
        "zhuyin": "ㄎㄞ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have a meeting"
    },
    "開玩笑": {
        "zhuyin": "ㄎㄞ ㄨㄢˊ ㄒㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "make fun of"
    },
    "看": {
        "zhuyin": "ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "see"
    },
    "看病": {
        "zhuyin": "ㄎㄢˋ ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "see a doctor"
    },
    "看到": {
        "zhuyin": "ㄎㄢˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can see (thing)"
    },
    "看見": {
        "zhuyin": "ㄎㄢˋ ㄐㄧㄢˋ",
        "pinyin": "kàn jiàn",
        "level": "HSK1",
        "english": "seeing, to catch sight of"
    },
    "考": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "test, examine"
    },
    "考試": {
        "zhuyin": "ㄎㄠˇ ㄕˋ",
        "pinyin": "kǎo shì",
        "level": "HSK1",
        "english": "exam"
    },
    "渴": {
        "zhuyin": "ㄎㄜˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "thirsty"
    },
    "課": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "course"
    },
    "課本": {
        "zhuyin": "ㄎㄜˋ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "textbook"
    },
    // 200/500 done
    "課文": {
        "zhuyin": "ㄎㄜˋ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "course text"
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "level": "HSK1",
        "english": "mouth, opening",
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "level": "HSK1",
        "english": "block, lump, piece"
    },
    "快": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fast"
    },
    "來": {
        "zhuyin": "ㄌㄞˊ",
        "pinyin": "lái",
        "level": "HSK1",
        "english": "come",
    },
    "來到": {
        "zhuyin": "ㄌㄞˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come, arrive"
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "old (aged)"
    },
    "老人": {
        "zhuyin": "ㄌㄠˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "old person, old folks"
    },
    "老師": {
        "zhuyin": "ㄌㄠˇ ㄕ",
        "pinyin": "lǎo shī",
        "level": "HSK1",
        "english": "teacher"
    },
    "了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "le",
        "level": "HSK1",
        "english": "-ed, (completed action p.)",
    },
    "累": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tired"
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "level": "HSK1",
        "english": "cold",
    },
    "裡": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "level": "HSK1",
        "english": "in, inside",
    },
    "裡邊": {
        "zhuyin": "ㄌㄧˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "inside"
    },
    "兩": {
        "zhuyin": "ㄌㄧㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "two, both"
    },
    "零": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "zero"
    },
    "六": {
        "zhuyin": "ㄌㄧㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "six"
    },
    "樓": {
        "zhuyin": "ㄌㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "floor"
    },
    "樓上": {
        "zhuyin": "ㄌㄡˊ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "upstairs"
    },
    "樓下": {
        "zhuyin": "ㄌㄡˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "downstairs"
    },
    "路": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "road"
    },
    "路口": {
        "zhuyin": "ㄌㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "intersection, crossing"
    },
    "路上": {
        "zhuyin": "ㄌㄨˋ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "on the road"
    },
    "媽媽": {
        "zhuyin": "ㄇㄚ ㄇㄚ",
        "pinyin": "mā ma",
        "level": "HSK1",
        "english": "(informal) mother"
    },
    "馬路": {
        "zhuyin": "ㄇㄚˇ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "road"
    },
    "馬上": {
        "zhuyin": "ㄇㄚˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "at once, right away, right off, immediately"
    },
    "嗎": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "level": "HSK1",
        "english": "yes or no ?",
    },
    "買": {
        "zhuyin": "ㄇㄞˇ",
        "pinyin": "mǎi",
        "level": "HSK1",
        "english": "buy"
    },
    "慢": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "slow"
    },
    "忙": {
        "zhuyin": "ㄇㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "busy"
    },
    "毛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fur, a fractional unit of money in China(10分)"
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "level": "HSK1",
        "english": "have not, no",
    },
    "沒關係": {
        "zhuyin": "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
        "pinyin": "méi guān xi",
        "level": "HSK1",
        "english": "it doesn't matter(no problem)",
    },
    "沒什麼": {
        "zhuyin": "ㄇㄟˊ ㄕˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "It’s nothing"
    },
    "沒事兒": {
        "zhuyin": "ㄇㄟˊ ㄕˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "it's okay"
    },
    "沒有": {
        "zhuyin": "ㄇㄟˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have not; don't have"
    },
    "妹妹": {
        "zhuyin": "ㄇㄟˋ ㄇㄟˋ",
        "pinyin": "mèi mei",
        "level": "HSK1",
        "english": "younger sister"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "level": "HSK1",
        "english": "gate",
    },
    "門口": {
        "zhuyin": "ㄇㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "doorway, area by entrance"
    },
    "門票": {
        "zhuyin": "ㄇㄣˊ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tickets, entry pass"
    },
    "們": {
        "zhuyin": "ㄇㄣ˙",
        "pinyin": "men",
        "level": "HSK1",
        "english": "(plural p.)",
    },
    "米飯": {
        "zhuyin": "ㄇㄧˇ ㄈㄢˋ",
        "pinyin": "mǐ fàn",
        "level": "HSK1",
        "english": "steamed rice"
    },
    "麵包": {
        "zhuyin": "ㄇㄧㄢˋ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bread"
    },
    "麵條兒": {
        "zhuyin": "ㄇㄧㄢˋ ㄊㄧㄠˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "noodles"
    },
    "名字": {
        "zhuyin": "ㄇㄧㄥˊ ㄗˋ",
        "pinyin": "míng zi",
        "level": "HSK1",
        "english": "name"
    },
    "明白": {
        "zhuyin": "ㄇㄧㄥˊ ㄅㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "clear"
    },
    "明年": {
        "zhuyin": "ㄇㄧㄥˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "next year"
    },
    "明天": {
        "zhuyin": "ㄇㄧㄥˊ ㄊㄧㄢ",
        "pinyin": "míng tiān",
        "level": "HSK1",
        "english": "tomorrow"
    },
    "拿": {
        "zhuyin": "ㄋㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "take"
    },
    "哪": {
        "zhuyin": "ㄋㄚˇ",
        "pinyin": "nǎ",
        "level": "HSK1",
        "english": "which",
    },
    "哪裡": {
        "zhuyin": "ㄋㄚˇ ㄌㄧˇ",
        "pinyin": "nǎlǐ",
        "level": "HSK1",
        "english": "where, wherever"
    },

    "哪兒": {
        "zhuyin": "ㄋㄚˇ ㄦˊ",
        "pinyin": "nǎ ér",
        "level": "HSK1",
        "english": "where?, wherever, anywhere"
    },
    "哪些": {
        "zhuyin": "ㄋㄚˇ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "which"
    },
    "那": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "nà",
        "level": "HSK1",
        "english": "that",
    },
    "那邊": {
        "zhuyin": "ㄋㄚˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that side, there"
    },
    "那裡": {
        "zhuyin": "ㄋㄚˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that place, that area, there"
    },
    "那兒": {
        "zhuyin": "ㄋㄚˋㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "there"
    },
    "那些": {
        "zhuyin": "ㄋㄚˋ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "those"
    },
    // 258/500
    "奶": {
        "zhuyin": "ㄋㄞˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "milk"
    },
    "奶奶": {
        "zhuyin": "ㄋㄞˇ ㄋㄞˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "grandma"
    },
    "男": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "man"
    },
    "男孩兒": {
        "zhuyin": "ㄋㄢˊ ㄏㄞˊ ㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boy"
    },
    "男朋友": {
        "zhuyin": "ㄋㄢˊ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boyfriend"
    },
    "男人": {
        "zhuyin": "ㄋㄢˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "man, guy"
    },
    "男生": {
        "zhuyin": "ㄋㄢˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boy"
    },
    "南": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "south"
    },
    "南邊": {
        "zhuyin": "ㄋㄢˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "south, south side"
    },
    "難": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "disaster, blame"
    },
    "呢": {
        "zhuyin": "ㄋㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "(? particle)"
    },
    "能": {
        "zhuyin": "ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can, be able to"
    },
    "你": {
        "zhuyin": "ㄋㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you"
    },
    "你們": {
        "zhuyin": "ㄋㄧˇ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "yall"
    },
    "年": {
        "zhuyin": "ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "year"
    },
    "您": {
        "zhuyin": "ㄋㄧㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you(formal, corteous)"
    },
    "牛奶": {
        "zhuyin": "ㄋㄧㄡˊ ㄋㄞˇ",
        "pinyin": "niú nǎi",
        "level": "HSK1",
        "english": "cow's milk"
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "level": "HSK1",
        "english": "woman",
    },
    "女兒": {
        "zhuyin": "ㄋㄩˇ ㄦˊ",
        "pinyin": "nǚ ér",
        "level": "HSK1",
        "english": "daughter"
    },
    "女孩兒": {
        "zhuyin": "ㄋㄩˇㄏㄞˊㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "girl"
    },
    "女朋友": {
        "zhuyin": "ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "girlfriend"
    },
    "女人": {
        "zhuyin": "ㄋㄩˇ ㄦˊ",
        "pinyin": "nǚ rén",
        "level": "HSK1",
        "english": "woman"
    },
    "女生": {
        "zhuyin": "ㄋㄩˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "lady"
    },
    "旁邊": {
        "zhuyin": "ㄆㄤˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Side"
    },
    "跑": {
        "zhuyin": "ㄆㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "run"
    },
    "朋友": {
        "zhuyin": "ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "péng you",
        "level": "HSK1",
        "english": "friend"
    },
    "朋友們": {
        "zhuyin": "ㄆㄥˊ ㄧㄡˇ ㄇㄣ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "friends"
    },
    "票": {
        "zhuyin": "ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ticket"
    },
    "漂亮": {
        "zhuyin": "ㄆㄧㄠ ㄌㄧㄤˋ",
        "pinyin": "piào liang",
        "level": "HSK1",
        "english": "pretty, beautiful"
    },
    "蘋果": {
        "zhuyin": "ㄆㄧㄥˊ ㄍㄨㄛˇ",
        "pinyin": "píng guǒ",
        "level": "HSK1",
        "english": "apple"
    },
    "七": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "seven"
    },
    "起": {
        "zhuyin": "ㄑㄧˇ",
        "pinyin": "qǐ",
        "level": "HSK1",
        "english": "get up, start, rise"
    },
    "起床": {
        "zhuyin": "ㄑㄧˇㄔㄨㄤˊ",
        "pinyin": "qǐ chuáng",
        "level": "HSK1",
        "english": "to get up"
    },
    "汽車": {
        "zhuyin": "ㄑㄧˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "car"
    },
    "前": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "front"
    },
    "前邊": {
        "zhuyin": "ㄑㄧㄢˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in front, front face"
    },
    "前天": {
        "zhuyin": "ㄑㄧㄢˊ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "the day before yesterday"
    },
    "前面": {
        "zhuyin": "ㄑㄧㄢˊ ㄇㄧㄢˋ",
        "pinyin": "qián miàn",
        "level": "HSK1",
        "english": "ahead, in front, preceding"
    },
    "錢": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "money"
    },
    "錢包": {
        "zhuyin": "ㄑㄧㄢˊ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wallet"
    },
    "請": {
        "zhuyin": "ㄑㄧㄥˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please"
    },
    "請假": {
        "zhuyin": "ㄑㄧㄥˇ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ask for leave"
    },
    "請進": {
        "zhuyin": "ㄑㄧㄥˇ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please come in"
    },
    "請問": {
        "zhuyin": "ㄑㄧㄥˇ ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "excuse me"
    },
    "請坐": {
        "zhuyin": "ㄑㄧㄥˇ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please have a seat"
    },
    // 300/500 done

    "球": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ball"
    },
    "去": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go"
    },
    "去年": {
        "zhuyin": "ㄑㄩˋ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last year"
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "heat"
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "people"
    },

    "認識": {
        "zhuyin": "ㄖㄣˋ ㄕˊ",
        "pinyin": "rèn shi",
        "level": "HSK1",
        "english": "to know, to recognize, to be familliar with"
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "earnest"
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sun, date"
    },
    "日期": {
        "zhuyin": "ㄖˋ ㄑㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Date"
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "meat"
    },
    "三": {
        "zhuyin": "ㄙㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "three"
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "mountain"
    },
    "商場": {
        "zhuyin": "ㄕㄤ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "shopping mall"
    },

    "商店": {
        "zhuyin": "ㄕㄤ ㄉㄧㄢˋ",
        "pinyin": "shāng diàn",
        "level": "HSK1",
        "english": "store, shop"
    },
    "上": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "upper"
    },
    "上班": {
        "zhuyin": "ㄕㄤˋ ㄅㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go to work"
    },
    "上邊": {
        "zhuyin": "ㄕㄤˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "above, on"
    },
    "上車": {
        "zhuyin": "ㄕㄤˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get on"
    },
    "上次": {
        "zhuyin": "ㄕㄤˋ ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last time"
    },
    "上課": {
        "zhuyin": "ㄕㄤˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "attend a class, have a class"
    },
    "上網": {
        "zhuyin": "ㄕㄤˋ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "surf the net, browse the web"
    },
    "上午": {
        "zhuyin": "ㄕㄤˋ ㄨˇ",
        "pinyin": "shàng wǔ",
        "level": "HSK1",
        "english": "morning"
    },
    "上學": {
        "zhuyin": "ㄕㄤˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go to school"
    },
    "少": {
        "zhuyin": "ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "less"
    },
    "誰": {
        "zhuyin": "ㄕㄨㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "who"
    },
    "身上": {
        "zhuyin": "ㄕㄣ ㄕㄤˋ ",
        "pinyin": "",
        "level": "HSK1",
        "english": "body, on one's body"
    },
    "身體 ": {
        "zhuyin": "ㄕㄣ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "body"
    },
    "什麼": {
        "zhuyin": "ㄕˊ ㄇㄜ˙",
        "pinyin": "shén me",
        "level": "HSK1",
        "english": "what, who, something, anything"
    },
    "生病": {
        "zhuyin": "ㄕㄥ ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fall ill"
    },
    "生氣": {
        "zhuyin": "ㄕㄥ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get angry"
    },
    // 330/500 done

    "生日": {
        "zhuyin": "ㄕㄥ ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "birthday"
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ten"
    },
    "時候": {
        "zhuyin": "ㄕˊ ㄏㄡˋ",
        "pinyin": "shí hou",
        "level": "HSK1",
        "english": "time, length of time, moment, period"
    },
    "時間": {
        "zhuyin": "ㄕˊ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "time"
    },
    "事": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "thing"
    },
    "試": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "try"
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "yes"
    },
    "是不是": {
        "zhuyin": "ㄕˋ ㄅㄨˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "isn't it?"
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hand"
    },
    "手機": {
        "zhuyin": "ㄕㄡˇ ㄐㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "mobile phone"
    },
    "書": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book"
    },
    "書包": {
        "zhuyin": "ㄕㄨ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book bag, school bag"
    },
    "書店": {
        "zhuyin": "ㄕㄨ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bookstore"
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tree, cultivatee"
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "water"
    },
    "水果": {
        "zhuyin": "ㄕㄨㄟˇ ㄍㄨㄛˇ",
        "pinyin": "shuǐ guǒ",
        "level": "HSK1",
        "english": "fruit, fruits"
    },
    "睡": {
        "zhuyin": "ㄕㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sleep"
    },
    "睡覺": {
        "zhuyin": "ㄕㄨㄟˋ ㄐㄩㄝˊ",
        "pinyin": "shuì jiào",
        "level": "HSK1",
        "english": "to go to bed, to sleep"
    },
    "說": {
        "zhuyin": "ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK1",
        "english": "speak"
    },
    "說話": {
        "zhuyin": "ㄕㄨㄛ ㄏㄨㄚˋ",
        "pinyin": "shuō huà",
        "level": "HSK1",
        "english": "to speak, say, talk, tell stories"
    },
    "四": {
        "zhuyin": "ㄙˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "four"
    },
    "送": {
        "zhuyin": "ㄙㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "give"
    },
    "歲": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "age, year"
    },
    "他": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "he"
    },
    "他們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "they"
    },
    "她": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "she"
    },
    "她們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "they"
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "too"
    },
    "天": {
        "zhuyin": "ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "day"
    },
    "天氣": {
        "zhuyin": "ㄊㄧㄢ ㄑㄧˋ",
        "pinyin": "tiān qì",
        "level": "HSK1",
        "english": "weather"
    },
    "聽": {
        "zhuyin": "ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽到": {
        "zhuyin": "ㄊㄧㄥ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽見": {
        "zhuyin": "ㄊㄧㄥ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽寫": {
        "zhuyin": "ㄊㄧㄥ ㄒㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "dictation"
    },
    "同學": {
        "zhuyin": "ㄊㄨㄥˊ ㄒㄩㄝˊ",
        "pinyin": "tóng xué",
        "level": "HSK1",
        "english": "to study at the same school, classmate"
    },
    "圖書館": {
        "zhuyin": "ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "library"
    },
    "外": {
        "zhuyin": "ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "abroad, outside"
    },
    "外邊": {
        "zhuyin": "ㄨㄞˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "outside"
    },
    "外國": {
        "zhuyin": "ㄨㄞˋ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign country"
    },
    "外語": {
        "zhuyin": "ㄨㄞˋ ㄩˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign language"
    },
    "玩兒": {
        "zhuyin": "ㄨㄢˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "play"
    },
    "晚": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "late"
    },
    "晚飯": {
        "zhuyin": "ㄨㄢˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "dinner"
    },
    "晚上": {
        "zhuyin": "ㄨㄢˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "night"
    },
    "網上": {
        "zhuyin": "ㄨㄤˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "online"
    },
    // 375/500 done
    "網友": {
        "zhuyin": "ㄨㄤˇ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "online friend"
    },
    "忘": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "forget"
    },
    "忘記": {
        "zhuyin": "ㄨㄤˋ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "forget"
    },
    "問": {
        "zhuyin": "ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ask"
    },
    "我": {
        "zhuyin": "ㄨㄛˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "I, me"
    },
    "我們": {
        "zhuyin": "ㄨㄛˇ ㄇㄣˊ",
        "pinyin": "wǒ men",
        "level": "HSK1",
        "english": "we, us, ourselves, our"
    },
    "五": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "five"
    },
    "午飯": {
        "zhuyin": "ㄨˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "lunch"
    },
    "西": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "west"
    },
    "西邊": {
        "zhuyin": "ㄒㄧ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "west side, west"
    },
    "洗": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wash"
    },
    "洗手間": {
        "zhuyin": "ㄒㄧˇ ㄕㄡˇ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "restroom, washroom"
    },
    "喜歡": {
        "zhuyin": "ㄒㄧˇ ㄏㄨㄢ",
        "pinyin": "xǐ huan",
        "level": "HSK1",
        "english": "to like, be fond of"
    },
    "下": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "below, under, go down, get off"
    },
    "下班": {
        "zhuyin": "ㄒㄧㄚˋ ㄅㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get off work"
    },
    "下邊": {
        "zhuyin": "ㄒㄧㄚˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "below, under"
    },
    "下車": {
        "zhuyin": "ㄒㄧㄚˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get off, disembark"
    },
    "下次": {
        "zhuyin": "ㄒㄧㄚˋ ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "next time"
    },
    "下課": {
        "zhuyin": "ㄒㄧㄚˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "finish class"
    },
    "下午": {
        "zhuyin": "ㄒㄧㄚˋ ㄨˇ",
        "pinyin": "xià wǔ",
        "level": "HSK1",
        "english": "afternoon"
    },
    "下雨": {
        "zhuyin": "ㄒㄧㄚˋ ㄩˇ",
        "pinyin": "xià yǔ",
        "level": "HSK1",
        "english": "to rain, rainy"
    },
    "先": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "before"
    },
    "先生": {
        "zhuyin": "ㄒㄧㄢ ㄕㄥ",
        "pinyin": "xiān sheng",
        "level": "HSK1",
        "english": "Mr. or sir"
    },
    "現在": {
        "zhuyin": "ㄒㄧㄢˋ ㄗㄞˋ",
        "pinyin": "xiàn zài",
        "level": "HSK1",
        "english": "now, at present, at the moment, nowadays, currently"
    },
    "想": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "think"
    },
    "小": {
        "zhuyin": "ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "small"
    },
    "小孩兒": {
        "zhuyin": "ㄒㄧㄠˇ ㄏㄞˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "child, kid"
    },
    "小姐": {
        "zhuyin": "ㄒㄧㄠˇ ㄐㄧㄝˇ",
        "pinyin": "xiǎo jiě",
        "level": "HSK1",
        "english": "Miss"
    },
    "小朋友": {
        "zhuyin": "ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "child, kid"
    },
    "小時": {
        "zhuyin": "ㄒㄧㄠˇ ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hour"
    },
    "小學": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "elementary school"
    },
    "小學生": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "elementary student"
    },
    "笑": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "laugh, smile"
    },
    "寫": {
        "zhuyin": "ㄒㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "write"
    },
    "謝謝": {
        "zhuyin": "ㄒㄧㄝˋ ㄒㄧㄝˋ",
        "pinyin": "xiè xie",
        "level": "HSK1",
        "english": "thanks, to thank"
    },
    "新": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "new"
    },
    "新年": {
        "zhuyin": "ㄒㄧㄣ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "new year"
    },
    "星期": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ",
        "pinyin": "xīng qī",
        "level": "HSK1",
        "english": "week"
    },
    "星期日": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Sunday"
    },
    "星期天": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Sunday"
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that's ok, go, do"
    },
    "休息": {
        "zhuyin": "ㄒㄧㄡ ㄒㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rest"
    },
    "學": {
        "zhuyin": "ㄒㄩㄝˊ",
        "pinyin": "xué",
        "level": "HSK1",
        "english": "learn, study"
    },
    "學生": {
        "zhuyin": "ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "xué sheng",
        "level": "HSK1",
        "english": "student"
    },
    "學習": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧˊ",
        "pinyin": "xué xí",
        "level": "HSK1",
        "english": "to learn, to study"
    },
    "學校": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧㄠˋ",
        "pinyin": "xué xiào",
        "level": "HSK1",
        "english": "school"
    },
    "學院": {
        "zhuyin": "ㄒㄩㄝˊ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "college, academy"
    },
    "要": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "want, going to, must, probably, if"
    },
    "爺爺": {
        "zhuyin": "ㄧㄝˊ ㄧㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "grandpa"
    },
    "也": {
        "zhuyin": "ㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "also"
    },
    "頁": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "page"
    },
    "一": {
        "zhuyin": "一",
        "pinyin": "",
        "level": "HSK1",
        "english": "one"
    },
    "衣服": {
        "zhuyin": "ㄧ ㄈㄨˊ",
        "pinyin": "yī fu",
        "level": "HSK1",
        "english": "clothes"
    },
    "醫生": {
        "zhuyin": "ㄧ ㄕㄥ",
        "pinyin": "yī shēng",
        "level": "HSK1",
        "english": "doctor"
    },
    "醫院": {
        "zhuyin": "ㄧ ㄩㄢˋ",
        "pinyin": "yī yuàn",
        "level": "HSK1",
        "english": "hospital"
    },
    "一半": {
        "zhuyin": "ㄧ ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "half"
    },
    "一會兒": {
        "zhuyin": "ㄧ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little while"
    },
    "一塊兒": {
        "zhuyin": "ㄧ ㄎㄨㄞˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "together"
    },
    "一下兒": {
        "zhuyin": "ㄧ ㄒㄧㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little bit"
    },
    "一樣": {
        "zhuyin": "ㄧ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "equally"
    },
    "一邊": {
        "zhuyin": "ㄧ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "one side"
    },
    "一點兒": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little bit"
    },
    "一起": {
        "zhuyin": "ㄧ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "together, with"
    },
    "一些": {
        "zhuyin": "ㄧ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "用": {
        "zhuyin": "ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "use"
    },
    "有": {
        "zhuyin": "ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have"
    },
    "有的": {
        "zhuyin": "ㄧㄡˇ ㄉㄧˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "有名": {
        "zhuyin": "ㄧㄡˇ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "famous"
    },
    "有時候": {
        "zhuyin": "ㄧㄡˇ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sometimes"
    },
    "有（一）些": {
        "zhuyin": "ㄧㄡˇ （ㄧ） ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "椅子": {
        "zhuyin": "ㄧˇ ㄗˇ",
        "pinyin": "yǐ zi",
        "level": "HSK1",
        "english": "chair"
    },
    "有用": {
        "zhuyin": "ㄧㄡˇ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "useful"
    },
    "右": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right"
    },
    "右邊": {
        "zhuyin": "ㄧㄡˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right side"
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rain"
    },
    "元": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Yuan, element"
    },
    //450/500 done

    "遠": {
        "zhuyin": "ㄩㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "far"
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "month"
    },
    "再": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "again"
    },
    "再見": {
        "zhuyin": " ㄗㄞˋ ㄐㄧㄢˋ",
        "pinyin": "zài jiàn",
        "level": "HSK1",
        "english": "goodbye, see you later"
    },
    "在": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "stay, in process of"
    },
    "在家": {
        "zhuyin": "ㄗㄞˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "at home"
    },
    "早": {
        "zhuyin": "ㄗㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "early"
    },
    "早飯": {
        "zhuyin": "ㄗㄠˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "breakfast"
    },
    "早上": {
        "zhuyin": "ㄗㄠˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "morning"
    },

    "怎麼": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙",
        "pinyin": "zěn me",
        "level": "HSK1",
        "english": "how?, what?, why?"
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "station"
    },
    "找": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "look for"
    },
    "找到": {
        "zhuyin": "ㄓㄠˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "find"
    },
    "這": {
        "zhuyin": "ㄓㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, this"
    },
    "這邊": {
        "zhuyin": "ㄓㄜˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, this side"
    },
    "這裡": {
        "zhuyin": "ㄓㄜˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, are here"
    },
    "這兒": {
        "zhuyin": "ㄓㄜˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here"
    },
    "這些": {
        "zhuyin": "ㄓㄜˋ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "these"
    },
    "着": {
        "zhuyin": "ㄓㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in process of"
    },
    "真": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "really"
    },
    "真的": {
        "zhuyin": "ㄓㄣ ㄉㄛ",
        "pinyin": "",
        "level": "HSK1",
        "english": "really"
    },
    "正": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "just, exactly"
    },
    "正在": {
        "zhuyin": "ㄓㄥˋ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in process of, under(development), is _ing"
    },
    "知道": {
        "zhuyin": "ㄓ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "know, become aware of"
    },
    "知識": {
        "zhuyin": "ㄓ ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "knowledge"
    },
    "中": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle, in"
    },
    "中國": {
        "zhuyin": "ㄓㄨㄥ ㄍㄨㄛˊ",
        "pinyin": "Zhōng guó",
        "level": "HSK1",
        "english": "China"
    },
    "中間": {
        "zhuyin": "ㄓㄨㄥ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "between, among, the middle, center"
    },
    "中文": {
        "zhuyin": "ㄓㄨㄥ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Chinese"
    },
    "中午": {
        "zhuyin": "ㄓㄨㄥ ㄨˇ",
        "pinyin": "zhōng wǔ",
        "level": "HSK1",
        "english": "noon"
    },
    "中學": {
        "zhuyin": "ㄓㄨㄥ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle school"
    },
    "中學生": {
        "zhuyin": "ㄓㄨㄥ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle school student"
    },
    "重": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "heavy"
    },
    "重要": {
        "zhuyin": "ㄓㄨㄥˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "important"
    },
    "住": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "live"
    },
    "準備": {
        "zhuyin": "ㄓㄨㄣˇ ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get ready"
    },
    "桌子": {
        "zhuyin": "ㄓㄨㄛ ㄗˇ ",
        "pinyin": "zhuō zi",
        "level": "HSK1",
        "english": "table, desk"
    },
    "字": {
        "zhuyin": "ㄗˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "word, character"
    },
    "子": {
        "zhuyin": "ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(goes after some nouns)"
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go, walk"
    },
    "走路": {
        "zhuyin": "ㄗㄡˇ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "walk"
    },
    "最": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "most"
    },
    "最好": {
        "zhuyin": "ㄗㄨㄟˋ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "best"
    },
    "最後": {
        "zhuyin": "ㄗㄨㄟˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last"
    },
    "昨天": {
        "zhuyin": "ㄗㄨㄛˊ ㄊㄧㄢ",
        "pinyin": "zuó tiān",
        "level": "HSK1",
        "english": "yesterday"
    },
    "左": {
        "zhuyin": "ㄗㄨㄛˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "left"
    },
    "左邊": {
        "zhuyin": "ㄗㄨㄛˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "left side"
    },
    "坐": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sit"
    },
    "坐下": {
        "zhuyin": "ㄗㄨㄛˋ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sit down"
    },
    "做": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "do, make"
    }
};
const bookWordsMRG = {

    "一直": {
        "zhuyin": "ㄧ ㄓˊ",
        "pinyin": "",
        "english": "all along, continuously",
        "book": "盲人國(lv.1 graded reader)",
    },
    "生活": {
        "zhuyin": "ㄕㄥ ㄏㄨㄛˊ",
        "pinyin": "",
        "english": "to live, life",
        "book": "盲人國(lv.1 graded reader)",
    },
    "聽說": {
        "zhuyin": "ㄊㄧㄥ ㄕㄨㄛ",
        "pinyin": "",
        "english": "to hear talk of, heard of",
        "book": "盲人國(lv.1 graded reader)",
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "",
        "english": "(mw. for rivers, roads, long thin things)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "需要": {
        "zhuyin": "ㄒㄩ ㄧㄠˋ",
        "pinyin": "",
        "english": "to need",
        "book": "盲人國(lv.1 graded reader)",
    },
    "帶": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "english": "to carry, take(somebody somewhere)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "pinyin": "",
        "english": "afterward",
        "book": "盲人國(lv.1 graded reader)",
    },
    "變成": {
        "zhuyin": "ㄅㄧㄢˋ ㄔㄥˊ",
        "pinyin": "",
        "english": "to turn into, become",
        "book": "盲人國(lv.1 graded reader)",
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "english": "river",
        "book": "盲人國(lv.1 graded reader)",
    },
    "從那以後": {
        "zhuyin": "ㄘㄨㄥˊ ㄋㄚˋ ㄧˇ ㄏㄡˋ",
        "pinyin": "",
        "english": "from then on, from that point forward",
        "book": "盲人國(lv.1 graded reader)",
    },
    "再也沒有": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄇㄟˊ ㄧㄡˇ",
        "pinyin": "",
        "english": "never again(do smith), (there was) never again",
        "book": "盲人國(lv.1 graded reader)",
    },
    "世界": {
        "zhuyin": "ㄕˋ ㄐㄧㄝˋ",
        "pinyin": "",
        "english": "world",
        "book": "盲人國(lv.1 graded reader)",
    },
    "故事": {
        "zhuyin": "ㄍㄨˋ ㄕˋ",
        "pinyin": "",
        "english": "story",
        "book": "盲人國(lv.1 graded reader)",
    },
    "眼睛": {
        "zhuyin": "ㄧㄢˇ ㄐㄧㄥ",
        "pinyin": "",
        "english": "eyes",
        "book": "盲人國(lv.1 graded reader)",
    },
    "出現": {
        "zhuyin": "ㄔㄨ ㄒㄧㄢˋ",
        "pinyin": "",
        "english": "to appear, emerge",
        "book": "盲人國(lv.1 graded reader)",
    },
    "希望": {
        "zhuyin": "ㄒㄧ ㄨㄤˋ",
        "pinyin": "",
        "english": "to hope",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想到": {
        "zhuyin": "ㄒㄧㄤˇ ㄉㄠˋ",
        "pinyin": "",
        "english": "to think of, imagine",
        "book": "盲人國(lv.1 graded reader)",
    },
    "忘記": {
        "zhuyin": "ㄨㄤˋ ㄐㄧˋ",
        "pinyin": "",
        "english": "to forget",
        "book": "盲人國(lv.1 graded reader)",
    },
    "老婆": {
        "zhuyin": "ㄌㄠˇ ㄆㄛˊ",
        "pinyin": "",
        "english": "wife(informal)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "pinyin": "",
        "english": "sad, upset",
        "book": "盲人國(lv.1 graded reader)",
    },
    "記住": {
        "zhuyin": "ㄐㄧˋ ㄓㄨˋ",
        "pinyin": "",
        "english": "to memorize, remember in the future",
        "book": "盲人國(lv.1 graded reader)",
    },
    "告訴": {
        "zhuyin": "ㄍㄠˋ ㄙㄨˋ",
        "pinyin": "",
        "english": "to tell",
        "book": "盲人國(lv.1 graded reader)",
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "english": "tree",
        "book": "盲人國(lv.1 graded reader)",
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "",
        "english": "snow",
        "book": "盲人國(lv.1 graded reader)",
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "pinyin": "",
        "english": "to plant(a tree)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "越來越": {
        "zhuyin": "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ",
        "pinyin": "",
        "english": "more and more",
        "book": "盲人國(lv.1 graded reader)",
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "pinyin": "",
        "english": "pf poor quality",
        "book": "盲人國(lv.1 graded reader)",
    },
    "草地": {
        "zhuyin": "ㄘㄠˇ ㄉㄧˋ",
        "pinyin": "",
        "english": "grassland, grassy field",
        "book": "盲人國(lv.1 graded reader)",
    },
    "可怕": {
        "zhuyin": "ㄎㄜˇ ㄆㄚˋ",
        "pinyin": "",
        "english": "frightening",
        "book": "盲人國(lv.1 graded reader)",
    },
    "過去": {
        "zhuyin": "ㄍㄨㄛˋ ㄑㄩˋ",
        "pinyin": "",
        "english": "to pass, pass through",
        "book": "盲人國(lv.1 graded reader)",
    },
    "發生": {
        "zhuyin": " ㄈㄚ ㄕㄥ",
        "pinyin": "",
        "english": "to happen, occour",
        "book": "盲人國(lv.1 graded reader)",
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "pinyin": "",
        "english": "interesting",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想法": {
        "zhuyin": "ㄒㄧㄤˇ ㄈㄚˇ",
        "pinyin": "",
        "english": "way of thinking",
        "book": "盲人國(lv.1 graded reader)",
    },
    "決定": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄧㄥˋ",
        "pinyin": "",
        "english": "to decide, decision",
        "book": "盲人國(lv.1 graded reader)",
    },
    "為了": {
        "zhuyin": "ㄨㄟˊ ㄌㄧㄠˇ",
        "pinyin": "",
        "english": "in order to, for the purpose of",
        "book": "盲人國(lv.1 graded reader)",
    },
    "要不": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ",
        "pinyin": "",
        "english": "how about... (suggestion)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "另外": {
        "zhuyin": "ㄌㄧㄥˋ ㄨㄞˋ",
        "pinyin": "",
        "english": "another, other",
        "book": "盲人國(lv.1 graded reader)",
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "english": "surely, certainly",
        "book": "盲人國(lv.1 graded reader)",
    },
    "石頭": {
        "zhuyin": "ㄕˊ ㄊㄡˊ",
        "pinyin": "",
        "english": "stone, rock",
        "book": "盲人國(lv.1 graded reader)",
    },
    "大聲": {
        "zhuyin": "ㄉㄚˋ ㄕㄥ",
        "pinyin": "",
        "english": "loudly, in a loud voice",
        "book": "盲人國(lv.1 graded reader)",
    },
    "動物": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ",
        "pinyin": "",
        "english": "animal",
        "book": "盲人國(lv.1 graded reader)",
    },
    "醒": {
        "zhuyin": "ㄒㄧㄥˇ",
        "pinyin": "",
        "english": "to awaken",
        "book": "盲人國(lv.1 graded reader)",
    },
    "發現": {
        "zhuyin": "ㄈㄚ ㄒㄧㄢˋ",
        "pinyin": "",
        "english": "to discover",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想起": {
        "zhuyin": "ㄒㄧㄤˇ ㄑㄧˇ",
        "pinyin": "",
        "english": "to recall",
        "book": "盲人國(lv.1 graded reader)",
    },
    "站起來": {
        "zhuyin": "ㄓㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "pinyin": "",
        "english": "to stand up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "摔": {
        "zhuyin": "ㄕㄨㄞ",
        "pinyin": "",
        "english": "to trip and fall",
        "book": "盲人國(lv.1 graded reader)",
    },
    "力氣": {
        "zhuyin": "ㄌㄧˋ ㄑㄧˋ",
        "pinyin": "",
        "english": "strength, energy",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡著": {
        "zhuyin": "ㄕㄨㄟˋ ㄓㄨㄛˊ",
        "pinyin": "",
        "english": "to fall asleep",
        "book": "盲人國(lv.1 graded reader)",
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "pinyin": "",
        "english": "bird",
        "book": "盲人國(lv.1 graded reader)",
    },
    "奇怪": {
        "zhuyin": "ㄑㄧˊ ㄍㄨㄞˋ",
        "pinyin": "",
        "english": "strange",
        "book": "盲人國(lv.1 graded reader)",
    },
    "窗": {
        "zhuyin": "ㄔㄨㄤ",
        "pinyin": "",
        "english": "window",
        "book": "盲人國(lv.1 graded reader)",
    },
    "顏色": {
        "zhuyin": "ㄧㄢˊ ㄙㄜˋ",
        "pinyin": "",
        "english": "color",
        "book": "盲人國(lv.1 graded reader)",
    },
    "一點都": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄉㄨ",
        "pinyin": "",
        "english": "not at all",
        "book": "盲人國(lv.1 graded reader)",
    },
    "難看": {
        "zhuyin": "ㄋㄢˊ ㄎㄢˋ",
        "pinyin": "",
        "english": "bad-looking, ugly",
        "book": "盲人國(lv.1 graded reader)",
    },
    "生氣": {
        "zhuyin": "ㄕㄥ ㄑㄧˋ",
        "pinyin": "",
        "english": "angry, to get angry",
        "book": "盲人國(lv.1 graded reader)",
    },
    "耳朵": {
        "zhuyin": "ㄦˇ ㄉㄨㄛˇ",
        "pinyin": "",
        "english": "ear",
        "book": "盲人國(lv.1 graded reader)",
    },
    "自信": {
        "zhuyin": "ㄗˋ ㄒㄧㄣˋ",
        "pinyin": "",
        "english": "self confidence",
        "book": "盲人國(lv.1 graded reader)",
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "pinyin": "",
        "english": "earnest, serious",
        "book": "盲人國(lv.1 graded reader)",
    },
    "抓": {
        "zhuyin": "ㄓㄨㄚ",
        "pinyin": "",
        "english": "to grab",
        "book": "盲人國(lv.1 graded reader)",
    },
    "摸": {
        "zhuyin": "ㄇㄛ",
        "pinyin": "",
        "english": "to touch, feel(with hands)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "要不然": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ",
        "pinyin": "",
        "english": "otherwise",
        "book": "盲人國(lv.1 graded reader)",
    },
    "沒錯": {
        "zhuyin": "ㄇㄟˊ ㄘㄨㄛˋ",
        "pinyin": "",
        "english": "no mistake, quite sure",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡醒": {
        "zhuyin": "ㄕㄨㄟˋ ㄒㄧㄥˇ",
        "pinyin": "",
        "english": "to awaken from sleep, be fully awake",
        "book": "盲人國(lv.1 graded reader)",
    },
    "總是": {
        "zhuyin": "ㄗㄨㄥˇ ㄕˋ",
        "pinyin": "",
        "english": "always",
        "book": "盲人國(lv.1 graded reader)",
    },
    "有用": {
        "zhuyin": "ㄧㄡˇ ㄩㄥˋ",
        "pinyin": "",
        "english": "useful",
        "book": "盲人國(lv.1 graded reader)",
    },
    "坐起來": {
        "zhuyin": "ㄗㄨㄛˋ ㄑㄧˇ ㄌㄞˊ",
        "pinyin": "",
        "english": "to sit up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "暖和": {
        "zhuyin": "ㄋㄨㄢˇ ㄏㄜˊ",
        "pinyin": "",
        "english": "warm",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡不著": {
        "zhuyin": "ㄕㄨㄟˋ ㄅㄨˋ ㄓㄨㄛˊ",
        "pinyin": "",
        "english": "to be unable to fall asleep",
        "book": "盲人國(lv.1 graded reader)",
    },
    "對… 來說": {
        "zhuyin": "ㄉㄨㄟˋ … ㄌㄞˊ ㄕㄨㄛ",
        "pinyin": "",
        "english": "for... (a person)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "可笑": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "english": "laughable",
        "book": "盲人國(lv.1 graded reader)",
    },
    "以為": {
        "zhuyin": "ㄧˇ ㄨㄟˊ",
        "pinyin": "",
        "english": "to (mistakenly) think that",
        "book": "盲人國(lv.1 graded reader)",
    },
    "拿起": {
        "zhuyin": "ㄋㄚˊ ㄑㄧˇ",
        "pinyin": "",
        "english": "to pick up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "放下": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄚˋ",
        "pinyin": "",
        "english": "to put down",
        "book": "盲人國(lv.1 graded reader)",
    },
    "方向": {
        "zhuyin": "ㄈㄤ ㄒㄧㄤˋ",
        "pinyin": "",
        "english": "direction",
        "book": "盲人國(lv.1 graded reader)",
    },
    "再也不": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄅㄨˋ",
        "pinyin": "",
        "english": "never again",
        "book": "盲人國(lv.1 graded reader)",
    },
    "用心": {
        "zhuyin": "ㄩㄥˋ ㄒㄧㄣ",
        "pinyin": "",
        "english": "to be attentive",
        "book": "盲人國(lv.1 graded reader)",
    },
    "機會": {
        "zhuyin": "ㄐㄧ ㄏㄨㄟˋ",
        "pinyin": "",
        "english": "opportunity",
        "book": "盲人國(lv.1 graded reader)",
    },
    "關心": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧㄣ",
        "pinyin": "",
        "english": "be concerned over",
        "book": "盲人國(lv.1 graded reader)",
    },
    "再也": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ",
        "pinyin": "",
        "english": "never again",
        "book": "盲人國(lv.1 graded reader)",
    },
    "成為": {
        "zhuyin": "ㄔㄥˊ ㄨㄟˊ",
        "pinyin": "",
        "english": "to become",
        "book": "盲人國(lv.1 graded reader)",
    },
    "看不清": {
        "zhuyin": "ㄎㄢˋ ㄅㄨˋ ㄑㄧㄥ ",
        "pinyin": "",
        "english": "unable to see clearly",
        "book": "盲人國(lv.1 graded reader)",
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
};