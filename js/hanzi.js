//most commonly found 100 characters
const hanziLevel1 = {
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
    "什": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "what",
        "simplified": "",
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
    "里": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "inside",
        "simplified": "",
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

    // 100/100 done!

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
        "simplified": "",
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
        "english": "face, surface, noodles",
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
        "simplified": "",
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
    //150/200 done!

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
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "radicals": ["", ""]
    // },

}

const A1grammar = {
    ".": {
        "zhuyin": "",
        "pinyin": "",
        "english": "",
        "pattern": "Subj. + Verb + Obj.",
        "explanation": "You can form very simple sentences with just two words, the subject + a verb. ",
        "section": "basics",
        "example": "誰想玩？"
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "english": "to be",
        "pattern": "Noun1 + 是 + Noun2",
        "explanation": "是 is only used to link two nouns. It cannot be used to link a noun and an adjective.",
        "section": "basics",
        "example": ""
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "english": "so, very, excessive",
        "pattern": "太 + Adj. + 了",
        "explanation": "Can express that something really is excessive (as a complaint), or can also colloquially express the meaning of 'so' or 'very'",
        "section": "basics",
        "example": "小貓太可愛了！"
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "english": "is (very)",
        "pattern": "Noun + 很 + Adj.",
        "explanation": "Links adjectives. Nouns are linked to other nouns with 是(ㄕˋ). Nouns are linked to adjectives with 很(ㄏㄣˇ). ",
        "section": "basics",
        "example": "我很高。"
    },
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
        "explanation": "Always needs to come before the verb (or adjective). 也 is inserted after the subject, before the verb or verb phrase or before the 很(ㄏㄣˇ) before the adjective. ",
        "section": "adverbs",
        "example": "我也喜欢。你也很高。"
    },
    "還是": {
        "zhuyin": "ㄏㄞˊㄕˋ",
        "pinyin": "háishì",
        "english": "or (in a question)",
        "pattern": "A + 還是 + B ?",
        "explanation": "Used to offer chioces in a question",
        "section": "conjunctions",
        "example": "冰的還是熱的？ 你要喝茶還是咖啡？"
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ ",
        "pinyin": "huòzhě",
        "english": "or (statement)",
        "pattern": "A + 或者 + B",
        "explanation": `used as an "or" statement ("it doesn't matter if we eat chicken or beef")`,
        "section": "conjunctions",
        "example": "我喝咖啡或者茶，都行。"
    },
    "???": {
        "zhuyin": "",
        "pinyin": "",
        "english": "affirmative-negative question",
        "pattern": "Verb + 不 + Verb",
        "explanation": "A common way to form questions in Chinese is to first use a verb in the positive, then repeat the same verb in its negative form, similar to how in English we can say, 'Do you have money or not?' The answer is either 'Verb' or '不 (bù) Verb.' It can also be done with adjectives (adjectives often behave like verbs in Chinese)",
        "section": "",
        "example": "他們來不來？"
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
}
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
    "不客氣": {
        "english": "you're welcome, don't mention it",
        "zhuyin": "",
        "pinyin": "bù kè qi",
        "category": "basics"
    },
    "對不起": {
        "english": "I'm sorry, unworthy, to let down, excuse me",
        "zhuyin": "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
        "pinyin": "duì bu qǐ",
        "category": "basics"
    },
    "沒關係": {
        "english": "it doesn't matter",
        "zhuyin": "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
        "pinyin": "méi guān xi",
        "category": "basics"
    },
    "怎麼樣": {
        "english": "how was it? how are things? how about?",
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "zěn me yàng",
        "category": "basics"
    },
    "我不是半途而廢的人": {
        "english": "I’m not someone who gives up halfway",
        "zhuyin": "ㄨㄛˇ ㄅㄨˋ ㄕˋ ㄅㄢˋ ㄊㄨˊ ㄦˊ ㄈㄟˋ ㄉㄧˊ ㄖㄣˊ",
        "pinyin": "wǒ búshì bàntúérfèi de rén",
        "category": "basics"
    },
    // "": {
    //     "english": "",
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "category": ""
    // },
    // "": {
    //     "english": "",
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "category": ""
    // },
}
const A1words = {
    "爸爸": {
        "zhuyin": "ㄅㄚˋ ㄅㄚˋ",
        "pinyin": "bà ba",
        "level": "A1",
        "english": "(informal) father"
    },
    "杯子": {
        "zhuyin": "ㄅㄟ ㄗˇ",
        "pinyin": "bēi zi",
        "level": "A1",
        "english": "cup, glass"
    },
    "北京": {
        "zhuyin": "ㄅㄟˇ ㄐㄧㄥ",
        "pinyin": "Běi jīng",
        "level": "A1",
        "english": "Beijing"
    },
    "電腦": {
        "zhuyin": "ㄉㄧㄢˋ ㄋㄠˇ",
        "pinyin": "diàn nǎo",
        "level": "A1",
        "english": "computer"
    },
    "電視": {
        "zhuyin": "ㄉㄧㄢˋ ㄕˋ",
        "pinyin": "diàn shì",
        "level": "A1",
        "english": "tv"
    },
    "電影": {
        "zhuyin": "ㄉㄧㄢˋ ㄧㄥˇ",
        "pinyin": "diàn yǐng",
        "level": "A1",
        "english": "movie, film"
    },
    "東西": {
        "zhuyin": "ㄉㄨㄥ ㄒㄧ",
        "pinyin": "dōng xi",
        "level": "A1",
        "english": "thing, stuff"
    },
    "多少": {
        "zhuyin": "ㄉㄨㄛ ㄕㄠˇ",
        "pinyin": "duō shao",
        "level": "A1",
        "english": "how much, how many"
    },
    "兒子": {
        "zhuyin": "ㄦˊ ㄗˇ",
        "pinyin": "ér zi",
        "level": "A1",
        "english": "son"
    },
    "飯店": {
        "zhuyin": "ㄈㄢˋ ㄉㄧㄢˋ",
        "pinyin": "fàn diàn",
        "level": "A1",
        "english": "restaurant, hotel"
    },
    "飯館": {
        "zhuyin": "ㄈㄢˋ ㄍㄨㄢˇ",
        "pinyin": "fàn guǎn",
        "level": "A1",
        "english": "restaurant"
    },
    "飛機": {
        "zhuyin": "ㄈㄟ ㄐㄧ ",
        "pinyin": "fēi jī",
        "level": "A1",
        "english": "airplane"
    },
    "分鐘": {
        "zhuyin": "ㄈㄣ ㄓㄨㄥ",
        "pinyin": "fēn zhōng",
        "level": "A1",
        "english": "minute"
    },
    "高興": {
        "zhuyin": "ㄍㄠ ㄒㄧㄥ",
        "pinyin": "gāo xìng",
        "level": "A1",
        "english": "happy, glad"
    },
    "工作": {
        "zhuyin": "ㄍㄨㄥ ㄗㄨㄛˋ",
        "pinyin": "gōng zuò",
        "level": "A1",
        "english": "to work, job, work, task"
    },
    "漢語": {
        "zhuyin": "ㄏㄢˋ ㄩˇ",
        "pinyin": "Hàn yǔ",
        "level": "A1",
        "english": "Chinese language"
    },
    "後面": {
        "zhuyin": "ㄏㄡˋ ㄇㄧㄢˋ",
        "pinyin": "hòu mian",
        "level": "A1",
        "english": "rear, back, behind, later, after"
    },
    "今天": {
        "zhuyin": "ㄐㄧㄣ ㄊㄧㄢ",
        "pinyin": "jīn tiān",
        "level": "A1",
        "english": "today, now"
    },
    "看見": {
        "zhuyin": "ㄎㄢˋ ㄐㄧㄢˋ",
        "pinyin": "kàn jiàn",
        "level": "A1",
        "english": "to see, to catch sight of"
    },
    "老師": {
        "zhuyin": "ㄌㄠˇ ㄕ",
        "pinyin": "lǎo shī",
        "level": "A1",
        "english": "teacher"
    },
    "媽媽": {
        "zhuyin": "ㄇㄚ ㄇㄚ",
        "pinyin": "mā ma",
        "level": "A1",
        "english": "(informal) mother"
    },
    "米飯": {
        "zhuyin": "ㄇㄧˇ ㄈㄢˋ",
        "pinyin": "mǐ fàn",
        "level": "A1",
        "english": "(cooked) rice"
    },
    "明天": {
        "zhuyin": "ㄇㄧㄥˊ ㄊㄧㄢ",
        "pinyin": "míng tiān",
        "level": "A1",
        "english": "tomorrow"
    },
    "名字": {
        "zhuyin": "ㄇㄧㄥˊ ㄗˋ",
        "pinyin": "míng zi",
        "level": "A1",
        "english": "name"
    },
    "哪兒": {
        "zhuyin": "ㄋㄚˇ ㄦˊ",
        "pinyin": "nǎ ér",
        "level": "A1",
        "english": "where?, wherever, anywhere"
    },
    "女兒": {
        "zhuyin": "ㄋㄩˇ ㄦˊ",
        "pinyin": "nǚ ér",
        "level": "A1",
        "english": "daughter"
    },
    "朋友": {
        "zhuyin": "ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "péng you",
        "level": "A1",
        "english": "friend"
    },
    "漂亮": {
        "zhuyin": "ㄆㄧㄠ ㄌㄧㄤˋ",
        "pinyin": "piào liang",
        "level": "A1",
        "english": "pretty, beautiful"
    },
    "蘋果": {
        "zhuyin": "ㄆㄧㄥˊ ㄍㄨㄛˇ",
        "pinyin": "píng guǒ",
        "level": "A1",
        "english": "apple"
    },
    "前面": {
        "zhuyin": "ㄑㄧㄢˊ ㄇㄧㄢˋ",
        "pinyin": "qián miàn",
        "level": "A1",
        "english": "ahead, in front, preceding"
    },
    "認識": {
        "zhuyin": "ㄖㄣˋ ㄕˊ",
        "pinyin": "rèn shi",
        "level": "A1",
        "english": "to know, to recognize, to be familliar with"
    },
    "商店": {
        "zhuyin": "ㄕㄤ ㄉㄧㄢˋ",
        "pinyin": "shāng diàn",
        "level": "A1",
        "english": "store, shop"
    },
    "上午": {
        "zhuyin": "ㄕㄤˋ ㄨˇ",
        "pinyin": "shàng wǔ",
        "level": "A1",
        "english": "morning"
    },
    "什麼": {
        "zhuyin": "ㄕˊ ㄇㄜ˙",
        "pinyin": "shén me",
        "level": "A1",
        "english": "what, who, something, anything"
    },
    "時候": {
        "zhuyin": "ㄕˊ ㄏㄡˋ",
        "pinyin": "shí hou",
        "level": "A1",
        "english": "time, length of time, moment, period"
    },
    "水果": {
        "zhuyin": "ㄕㄨㄟˇ ㄍㄨㄛˇ",
        "pinyin": "shuǐ guǒ",
        "level": "A1",
        "english": "fruit, fruits"
    },
    "睡覺": {
        "zhuyin": "ㄕㄨㄟˋ ㄐㄩㄝˊ",
        "pinyin": "shuì jiào",
        "level": "A1",
        "english": "to go to bed, to sleep"
    },
    "說話": {
        "zhuyin": "ㄕㄨㄛ ㄏㄨㄚˋ",
        "pinyin": "shuō huà",
        "level": "A1",
        "english": "to speak, say, talk, tell stories"
    },
    "天氣": {
        "zhuyin": "ㄊㄧㄢ ㄑㄧˋ",
        "pinyin": "tiān qì",
        "level": "A1",
        "english": "weather"
    },
    "同學": {
        "zhuyin": "ㄊㄨㄥˊ ㄒㄩㄝˊ",
        "pinyin": "tóng xué",
        "level": "A1",
        "english": "to study at the same school, classmate"
    },
    "我們": {
        "zhuyin": "ㄨㄛˇ ㄇㄣˊ",
        "pinyin": "wǒ men",
        "level": "A1",
        "english": "we, us, ourselves, our"
    },
    "喜歡": {
        "zhuyin": "ㄒㄧˇ ㄏㄨㄢ",
        "pinyin": "xǐ huan",
        "level": "A1",
        "english": "to like, be fond of"
    },
    "下午": {
        "zhuyin": "ㄒㄧㄚˋ ㄨˇ",
        "pinyin": "xià wǔ",
        "level": "A1",
        "english": "afternoon"
    },
    "下雨": {
        "zhuyin": "ㄒㄧㄚˋ ㄩˇ",
        "pinyin": "xià yǔ",
        "level": "A1",
        "english": "to rain, rainy"
    },
    "先生": {
        "zhuyin": "ㄒㄧㄢ ㄕㄥ",
        "pinyin": "xiān sheng",
        "level": "A1",
        "english": "Mr. or sir"
    },
    "小姐": {
        "zhuyin": "ㄒㄧㄠˇ ㄐㄧㄝˇ",
        "pinyin": "xiǎo jiě",
        "level": "A1",
        "english": "Miss"
    },
    "現在": {
        "zhuyin": "ㄒㄧㄢˋ ㄗㄞˋ",
        "pinyin": "xiàn zài",
        "level": "A1",
        "english": "now, at present, at the moment, nowadays, currently"
    },
    "謝謝": {
        "zhuyin": "ㄒㄧㄝˋ ㄒㄧㄝˋ",
        "pinyin": "xiè xie",
        "level": "A1",
        "english": "thanks, to thank"
    },
    "星期": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ",
        "pinyin": "xīng qī",
        "level": "A1",
        "english": "week"
    },
    "學生": {
        "zhuyin": "ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "xué sheng",
        "level": "A1",
        "english": "student"
    },
    "學習": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧˊ",
        "pinyin": "xué xí",
        "level": "A1",
        "english": "to learn, to study"
    },
    "學校": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧㄠˋ",
        "pinyin": "xué xiào",
        "level": "A1",
        "english": "school"
    },
    "衣服": {
        "zhuyin": "ㄧ ㄈㄨˊ",
        "pinyin": "yī fu",
        "level": "A1",
        "english": "clothes"
    },
    "醫生": {
        "zhuyin": "ㄧ ㄕㄥ",
        "pinyin": "yī shēng",
        "level": "A1",
        "english": "doctor"
    },
    "醫院": {
        "zhuyin": "ㄧ ㄩㄢˋ",
        "pinyin": "yī yuàn",
        "level": "A1",
        "english": "hospital"
    },
    "椅子": {
        "zhuyin": "ㄧˇ ㄗˇ",
        "pinyin": "yǐ zi",
        "level": "A1",
        "english": "chair"
    },
    "再見": {
        "zhuyin": " ㄗㄞˋ ㄐㄧㄢˋ",
        "pinyin": "zài jiàn",
        "level": "A1",
        "english": "goodbye, see you later"
    },
    "怎麼": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙",
        "pinyin": "zěn me",
        "level": "A1",
        "english": "how?, what?, why?"
    },
    "中國": {
        "zhuyin": "ㄓㄨㄥ ㄍㄨㄛˊ",
        "pinyin": "Zhōng guó",
        "level": "A1",
        "english": "China"
    },
    "中午": {
        "zhuyin": "ㄓㄨㄥ ㄨˇ",
        "pinyin": "zhōng wǔ",
        "level": "A1",
        "english": "noon"
    },
    "桌子": {
        "zhuyin": "ㄓㄨㄛ ㄗˇ ",
        "pinyin": "zhuō zi",
        "level": "A1",
        "english": "table, desk"
    },
    "昨天": {
        "zhuyin": "ㄗㄨㄛˊ ㄊㄧㄢ",
        "pinyin": "zuó tiān",
        "level": "A1",
        "english": "yesterday"
    },
    "成語": {
        "zhuyin": "ㄔㄥˊ ㄩˇ",
        "pinyin": "chéng yǔ",
        "level": "basics",
        "english": "4 or 5 character idioms"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "basics",  
    //     "english": ""
    // },
}
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
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "literal": "",
    //     "meaning": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "literal": "",
    //     "meaning": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "literal": "",
    //     "meaning": "",
    // },
}

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
}
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
        "english": "line",
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
        "english": "slash",
        "variant": "乀, 乁"
    },
    "乙": {
        "zhuyin": "一",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "second",
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
        "english": "down box",
        "variant": ""
    },
    "冖": {
        "zhuyin": "ㄇ一ˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "cover",
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
        "english": "open box",
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
        "english": "power",
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
        "english": "divination",
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
        "english": "cliff",
        "variant": ""
    },
    "厶": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private",
        "variant": ""
    },
    "又": {
        "zhuyin": "一ㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again",
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
        "english": "enclosure",
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
        "english": "scholar",
        "variant": ""
    },
    "夂": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "go",
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
        "english": "inch",
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
        "english": "towel",
        "variant": ""
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "dry",
        "variant": ""
    },
    "幺": {
        "zhuyin": "一ㄠ",
        "pinyin": "yāo",
        "tone": 1,
        "english": "thread",
        "variant": ""
    },
    "广": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "shelter, house on cliff",
        "variant": ""
    },
    "廴": {
        "zhuyin": "一ㄣ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "stride",
        "variant": ""
    },
    "廾": {
        "zhuyin": "ㄍㄨㄥˇ",
        "pinyin": "gǒng",
        "tone": 3,
        "english": "hands joined",
        "variant": ""
    },
    "弋": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "shoot with a bow",
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
        "english": "hair",
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
        "english": "dagger, spear",
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
        "english": "rap",
        "variant": "攵"
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "script",
        "variant": ""
    },
    "斗": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dǒu",
        "tone": 3,
        "english": "dipper",
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
        "english": "not",
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
        "english": "lack",
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
        "english": "death",
        "variant": ""
    },
    "殳": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "weapon",
        "variant": ""
    },
    "毋": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "mother",
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
    "气": {
        "zhuyin": "ㄑ一ˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "steam",
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
        "english": "half of a tree trunk",
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
        "english": "profound",
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
        "english": "life",
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
        "english": "foot steps",
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
        "english": "stone",
        "variant": ""
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "spirit",
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
        "english": "jar",
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
        "english": "feather",
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
        "english": "and",
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
        "english": "minister",
        "variant": ""
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "oneself",
        "variant": ""
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "arrive",
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
        "english": "contrary, oppose",
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
        "english": "walk",
        "variant": ""
    },
    "衣": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes",
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
        "english": "speech",
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
        "english": "bean",
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
        "english": "badger",
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
        "english": "body",
        "variant": ""
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "cart",
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
        "english": "distinguish",
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
        "english": "slave",
        "variant": ""
    },
    "隹": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "short-tailed bird",
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
        "english": "blue",
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
        "english": "leather",
        "variant": ""
    },
    "韋": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "soft leather, tanned leather",
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
        "english": "sound",
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
        "english": "eat",
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
        "english": "high",
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
        "english": "sacrificial wine",
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
        "english": "frog",
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
        "english": "rat",
        "variant": ""
    },
    "鼻": {
        "zhuyin": "ㄅ一ˊ",
        "pinyin": "bí",
        "tone": 2,
        "english": "nose",
        "variant": ""
    },
    "齊": {
        "zhuyin": "ㄑ一ˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "even",
        "variant": "齐"
    },
    "齒": {
        "zhuyin": "ㄔ",
        "pinyin": "chǐ",
        "tone": 1,
        "english": "tooth",
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
        "english": "turtle",
        "variant": "龟"
    },
    "龠": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "flute",
        "variant": "",
    }
}