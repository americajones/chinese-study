//most commonly found 2633 characters apparently means 98% daily life comprehension

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
        "english": "4 or 5 character idioms",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "子女": {
        "zhuyin": "ㄗˇ ㄋㄩˇ",
        "pinyin": "",
        "english": "sons and daughters",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "好累": {
        "zhuyin": "ㄏㄠˇ ㄌㄟˊ",
        "pinyin": "",
        "english": "be very tired",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "小子": {
        "zhuyin": "ㄒㄧㄠˇ ㄗˇ",
        "pinyin": "",
        "english": "(colloqial)boy, bloke",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "人口": {
        "zhuyin": "ㄖㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "english": "population",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "三口人": {
        "zhuyin": "ㄙㄢ ㄎㄡˇ ㄖㄣˊ",
        "pinyin": "",
        "english": "three(count) people",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "口子": {
        "zhuyin": "ㄎㄡˇ ㄗˇ",
        "pinyin": "",
        "english": "hole, opening, cut, rip",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "小手": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄡˇ",
        "pinyin": "",
        "english": "pickpocket",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "門口": {
        "zhuyin": "ㄇㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "english": "doorway, area by entrance",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "天天": {
        "zhuyin": "ㄊㄧㄢ ㄊㄧㄢ",
        "pinyin": "",
        "english": "every day",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "好笑": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "english": "be easy to laugh at, funny, ridiculous",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "矮子": {
        "zhuyin": "ㄞˇ ㄗˇ",
        "pinyin": "",
        "english": "short person, dwarf",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "忙人": {
        "zhuyin": "ㄇㄤˊ ㄖㄣˊ",
        "pinyin": "",
        "english": "busy person",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "pinyin": "",
        "english": "Be careful!",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "無心": {
        "zhuyin": "ㄨˊ ㄒㄧㄣ",
        "pinyin": "",
        "english": "not feel like, not in the mood for, unintentionally"
        , "book": "Reading and Writing Chinese: Third Edition",
    },
    "不好": {
        "zhuyin": "ㄅㄨˋ ㄏㄠˇ",
        "pinyin": "",
        "english": "no good, it's not good",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "不很": {
        "zhuyin": "ㄅㄨˋ ㄏㄣˇ",
        "pinyin": "",
        "english": "not very",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "很不": {
        "zhuyin": "ㄏㄣˇ ㄅㄨˋ",
        "pinyin": "",
        "english": "very un-",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "不忙": {
        "zhuyin": "ㄅㄨˋ ㄇㄤˊ",
        "pinyin": "",
        "english": "there is no hurry, take your time",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "太太": {
        "zhuyin": "ㄊㄞˋ ㄊㄞˋ",
        "pinyin": "",
        "english": "wife",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "太子": {
        "zhuyin": "ㄊㄞˋ ㄗˇ",
        "pinyin": "",
        "english": "prince",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "太忙": {
        "zhuyin": "ㄊㄞˋ ㄇㄤˊ",
        "pinyin": "",
        "english": "be too busy",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "可笑": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "english": "be laughable",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "可口": {
        "zhuyin": "ㄎㄜˇ ㄎㄡˇ",
        "pinyin": "",
        "english": "suit one's mouth, taste good",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "可心": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄣ",
        "pinyin": "",
        "english": "be satisfying, pleasing",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "不可": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˇ",
        "pinyin": "",
        "english": "should not",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "又不": {
        "zhuyin": "ㄧㄡˋ ㄅㄨˋ",
        "pinyin": "",
        "english": "not at all",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "土人": {
        "zhuyin": "ㄊㄨˇ ㄖㄣˊ",
        "pinyin": "",
        "english": "native person",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "土木": {
        "zhuyin": "ㄊㄨˇ ㄇㄨˋ",
        "pinyin": "",
        "english": "building and construction",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "幸好": {
        "zhuyin": "ㄒㄧㄥˋ ㄏㄠˇ",
        "pinyin": "",
        "english": "fortunately, luckily",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "不幸": {
        "zhuyin": "ㄅㄨˋ ㄒㄧㄥˋ",
        "pinyin": "",
        "english": "bad luck, unlucky, unfortunately",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "筆心": {
        "zhuyin": "ㄅㄧˇ ㄒㄧㄣ",
        "pinyin": "",
        "english": "pencil lead, pen refill",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "山口": {
        "zhuyin": "ㄕㄢ ㄎㄡˇ",
        "pinyin": "",
        "english": "mountain pass",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "鋼筆": {
        "zhuyin": "ㄍㄤ ㄅㄧˇ",
        "pinyin": "",
        "english": "pen",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "王八": {
        "zhuyin": "ㄨㄤˊ ㄅㄚ",
        "pinyin": "",
        "english": "cuck, stupid man",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "王八蛋": {
        "zhuyin": "ㄨㄤˊ ㄅㄚ ㄉㄢˋ",
        "pinyin": "",
        "english": "son of a bitch, stupid motherfucker",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "鉛筆": {
        "zhuyin": "ㄑㄧㄢ ㄅㄧˇ",
        "pinyin": "",
        "english": "pencil",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "刀子": {
        "zhuyin": "ㄉㄠ ㄗˇ",
        "pinyin": "",
        "english": "knife",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "分手": {
        "zhuyin": "ㄈㄣ ㄕㄡˇ",
        "pinyin": "",
        "english": "to part w/ somebody",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "分心": {
        "zhuyin": "ㄈㄣ ㄒㄧㄣ",
        "pinyin": "",
        "english": "to distract somebody's attention",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "童女": {
        "zhuyin": "ㄊㄨㄥˊ ㄋㄩˇ",
        "pinyin": "",
        "english": "maiden, virgin",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "童心": {
        "zhuyin": "ㄊㄨㄥˊ ㄒㄧㄣ",
        "pinyin": "",
        "english": "childish disposition",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "童山": {
        "zhuyin": "ㄊㄨㄥˊ ㄕㄢ",
        "pinyin": "",
        "english": "bare hills, bald mountain",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "十分鐘": {
        "zhuyin": "ㄕˊ ㄈㄣ ㄓㄨㄥ",
        "pinyin": "",
        "english": "ten minutes",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "大衣": {
        "zhuyin": "ㄉㄚˋ ㄧ",
        "pinyin": "",
        "english": "overcoat",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "手錶": {
        "zhuyin": "ㄕㄡˇ ㄅㄧㄠˇ",
        "pinyin": "",
        "english": "wristwatch",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "中心": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄣ",
        "pinyin": "",
        "english": "center, core",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "中立": {
        "zhuyin": "ㄓㄨㄥ ㄌㄧˋ",
        "pinyin": "",
        "english": "stand in the midde, neutrality",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "山羊": {
        "zhuyin": "ㄕㄢ ㄧㄤˊ",
        "pinyin": "",
        "english": "goat",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "小羊": {
        "zhuyin": "ㄒㄧㄠˇ ㄧㄤˊ",
        "pinyin": "",
        "english": "lamb",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "美國": {
        "zhuyin": "ㄇㄟˇ ㄍㄨㄛˊ",
        "pinyin": "",
        "english": "America",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "美金": {
        "zhuyin": "ㄇㄟˇ ㄐㄧㄣ",
        "pinyin": "",
        "english": "American money",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "美好": {
        "zhuyin": "ㄇㄟˇ ㄏㄠˇ",
        "pinyin": "",
        "english": "be fine, happy, glorious",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "外表": {
        "zhuyin": "ㄨㄞˋ ㄅㄧㄠˇ",
        "pinyin": "",
        "english": "outward appearence, surface",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "看中": {
        "zhuyin": "ㄎㄢˋ ㄓㄨㄥ",
        "pinyin": "",
        "english": "take a liking to, pick out, choose",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "更好": {
        "zhuyin": "ㄍㄥ ㄏㄠˇ",
        "pinyin": "",
        "english": "be better, even more",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "小便": {
        "zhuyin": "ㄒㄧㄠˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "english": "to pee, piss",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "大便": {
        "zhuyin": "ㄉㄚˋ ㄅㄧㄢˋ",
        "pinyin": "",
        "english": "to poop, shit",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "便依": {
        "zhuyin": "ㄅㄧㄢˋ ㄧ",
        "pinyin": "",
        "english": "street clothes, civvies",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "便宜": {
        "zhuyin": "ㄅㄧㄢˋ ㄧˊ",
        "pinyin": "",
        "english": "be inexpensive",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "要不": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ",
        "pinyin": "",
        "english": "otherwise, or else, or",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "要好": {
        "zhuyin": "ㄧㄠˋ ㄏㄠˇ",
        "pinyin": "",
        "english": "be on good terms, good friends, eager to improve",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "人士": {
        "zhuyin": "ㄖㄣˊ ㄕˋ",
        "pinyin": "",
        "english": "notable person",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "士女": {
        "zhuyin": "ㄕˋ ㄋㄩˇ",
        "pinyin": "",
        "english": "young men and women, guys and gals",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "女士": {
        "zhuyin": "ㄋㄩˇ ㄕˋ",
        "pinyin": "",
        "english": "(polite) professional woman",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "買賣": {
        "zhuyin": "ㄇㄞˇ ㄇㄞˋ",
        "pinyin": "",
        "english": "buisness",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "老二": {
        "zhuyin": "ㄌㄠˇ ㄦˋ",
        "pinyin": "",
        "english": "second child",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "老者": {
        "zhuyin": "ㄌㄠˇ ㄓㄜˇ",
        "pinyin": "",
        "english": "old fellow, old man",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "甘心": {
        "zhuyin": "ㄍㄢ ㄒㄧㄣ",
        "pinyin": "",
        "english": "willingly, be happy with",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "入口": {
        "zhuyin": "ㄖㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "english": "entrance",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "入門": {
        "zhuyin": "ㄖㄨˋ ㄇㄣˊ",
        "pinyin": "",
        "english": "primer, to start well",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "入手": {
        "zhuyin": "ㄖㄨˋ ㄕㄡˇ",
        "pinyin": "",
        "english": "put your hand in, get started",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "麻木": {
        "zhuyin": "ㄇㄚˊ ㄇㄨˋ",
        "pinyin": "",
        "english": "numb, apathetic",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "大麻": {
        "zhuyin": "ㄉㄚˋ ㄇㄚˊ",
        "pinyin": "",
        "english": "hemp, marijuana",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "甚麼": {
        "zhuyin": "ㄕㄣˋ ㄇㄜ˙",
        "pinyin": "",
        "english": "what? (old complex vers.)",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "書桌": {
        "zhuyin": "ㄕㄨ ㄓㄨㄛ",
        "pinyin": "",
        "english": "writing desk",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "好奇": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ",
        "pinyin": "",
        "english": "curious, interested in odd things or just many things"
        , "book": "Reading and Writing Chinese: Third Edition",
    },
    "好奇心": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ ㄒㄧㄣ",
        "pinyin": "",
        "english": "curiosity",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "金錢": {
        "zhuyin": "ㄐㄧㄣ ㄑㄧㄢˊ",
        "pinyin": "",
        "english": "money",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "古老": {
        "zhuyin": "ㄍㄨˇ ㄌㄠˇ",
        "pinyin": "",
        "english": "ancient",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "古玩": {
        "zhuyin": "ㄍㄨˇ ㄨㄢˊ",
        "pinyin": "",
        "english": "antique object, curio",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "個人": {
        "zhuyin": "ㄍㄜˋ ㄖㄣˊ",
        "pinyin": "",
        "english": "each person, everyone",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "這個": {
        "zhuyin": "ㄓㄜˋ ㄍㄜˋ",
        "pinyin": "",
        "english": "this one",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "這麼": {
        "zhuyin": "ㄓㄜˋ ㄇㄜ˙",
        "pinyin": "",
        "english": "so, thus, in this case, to this extent",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "那個": {
        "zhuyin": "ㄋㄚˋ ㄍㄜˋ",
        "pinyin": "",
        "english": "that one, that",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "那麼": {
        "zhuyin": "ㄋㄚˋ ㄇㄜ˙",
        "pinyin": "",
        "english": "that being so, in that case",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "有錢": {
        "zhuyin": "ㄧㄡˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "english": "be rich",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "沒買": {
        "zhuyin": "ㄇㄟˊ ㄇㄞˇ",
        "pinyin": "",
        "english": "did not buy, has not bought(yet)",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "吉他": {
        "zhuyin": "ㄐㄧˊ ㄊㄚ",
        "pinyin": "",
        "english": "guitar",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "喜人": {
        "zhuyin": "ㄒㄧˇ ㄖㄣˊ",
        "pinyin": "",
        "english": "to be satisfying",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "喜好": {
        "zhuyin": "ㄒㄧˇ ㄏㄠˇ",
        "pinyin": "",
        "english": "to like, love, be fond of",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "歡笑": {
        "zhuyin": "ㄏㄨㄢ ㄒㄧㄠˋ",
        "pinyin": "",
        "english": "to laugh delightedly",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "歡心": {
        "zhuyin": "ㄏㄨㄢ ㄒㄧㄣ",
        "pinyin": "",
        "english": "favor(noun), love (noun)",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "十足": {
        "zhuyin": "ㄕˊ ㄗㄨˊ",
        "pinyin": "",
        "english": "sheer, total, absolute",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "跟上": {
        "zhuyin": "ㄍㄣ ㄕㄤˋ",
        "pinyin": "",
        "english": "keep up with, keep pace with",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "誰請": {
        "zhuyin": "ㄕㄨㄟˊ ㄑㄧㄥˇ",
        "pinyin": "",
        "english": "who's paying?",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "請問": {
        "zhuyin": "ㄑㄧㄥˇ ㄨㄣˋ",
        "pinyin": "",
        "english": "please tell me",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "聞人": {
        "zhuyin": "ㄨㄣˊ ㄖㄣˊ",
        "pinyin": "",
        "english": "famous person",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "耳聞": {
        "zhuyin": "ㄦˇ ㄨㄣˊ",
        "pinyin": "",
        "english": "to hear about from others",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "田間": {
        "zhuyin": "ㄊㄧㄢˊ ㄐㄧㄢ",
        "pinyin": "",
        "english": "farm, field",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "人間": {
        "zhuyin": "ㄖㄣˊ ㄐㄧㄢ",
        "pinyin": "",
        "english": "the human world, world of human affairs",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "哪裡": {
        "zhuyin": "ㄋㄚˇ ㄌㄧˇ",
        "pinyin": "nǎlǐ",
        "english": "where, wherever",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期一": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄧ",
        "pinyin": "xīngqīyī",
        "english": "Monday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期二": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄦˋ",
        "pinyin": "xīngqīèr",
        "english": "Tuesday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期三": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄙㄢ",
        "pinyin": "xīngqīsān",
        "english": "Wednesday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期四": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄙˋ",
        "pinyin": "xīngqīsì",
        "english": "Thursday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期五": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄨˇ",
        "pinyin": "xīngqīwǔ",
        "english": "Friday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "星期六": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄌㄧㄡˋ",
        "pinyin": "xīngqīliù",
        "english": "Saturday",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "認識": {
        "zhuyin": "ㄖㄣˋ ㄕˊ",
        "pinyin": "rènshí",
        "english": "to know, recognize, understand",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "司匹馬力": {
        "zhuyin": "ㄙ ㄆㄧˇ ㄇㄚˇ ㄌㄧˋ",
        "pinyin": "",
        "english": "four horsepower",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "賣力": {
        "zhuyin": " ㄇㄞˋ ㄌㄧˋ",
        "pinyin": "",
        "english": "put your back onto a job, do smth with all your might",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "另外": {
        "zhuyin": " ㄌㄧㄥˋ ㄨㄞˋ",
        "pinyin": "",
        "english": "in addition",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "分別": {
        "zhuyin": "ㄈㄣ ㄅㄧㄝˊ",
        "pinyin": "",
        "english": "leave each other out, sort out, differentiate",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "別買": {
        "zhuyin": " ㄅㄧㄝˊ ㄇㄞˇ",
        "pinyin": "",
        "english": "don't buy it!",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "個別": {
        "zhuyin": "ㄍㄜˋ ㄅㄧㄝˊ",
        "pinyin": "",
        "english": "specific, very few, be exceptional",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "親人": {
        "zhuyin": " ㄑㄧㄣ ㄖㄣˊ",
        "pinyin": "",
        "english": "kinfolk",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "弓子": {
        "zhuyin": "ㄍㄨㄥ ㄗˇ",
        "pinyin": "",
        "english": "bow(like a violin bow)",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "未可": {
        "zhuyin": " ㄨㄟˋ ㄎㄜˇ",
        "pinyin": "",
        "english": "cannot, be unable to",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "手紙": {
        "zhuyin": " ㄕㄡˇ ㄓˇ",
        "pinyin": "",
        "english": "toilet paper",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "報紙": {
        "zhuyin": "ㄅㄠˋ ㄓˇ",
        "pinyin": "",
        "english": "newspaper",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "長大": {
        "zhuyin": "ㄓㄤˇ ㄉㄚˋ",
        "pinyin": "",
        "english": "to grow up",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "三張紙": {
        "zhuyin": " ㄙㄢ ㄓㄤ ㄓˇ",
        "pinyin": "",
        "english": "three sheets of paper",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "張弓": {
        "zhuyin": " ㄓㄤ ㄍㄨㄥ",
        "pinyin": "",
        "english": "draw a bow",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "一張畫": {
        "zhuyin": " ㄧ ㄓㄤ ㄏㄨㄚˋ",
        "pinyin": "",
        "english": "a painting",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "畫報": {
        "zhuyin": " ㄏㄨㄚˋ ㄅㄠˋ",
        "pinyin": "",
        "english": "illustrated magazine",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "兒童": {
        "zhuyin": "ㄦˊ ㄊㄨㄥˊ",
        "pinyin": "",
        "english": "child",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "白給": {
        "zhuyin": "ㄅㄞˊ ㄍㄟˇ",
        "pinyin": "",
        "english": "to give free of charge",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "表白": {
        "zhuyin": "ㄅㄧㄠˇ ㄅㄞˊ",
        "pinyin": "",
        "english": "to vindicate",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "勺子": {
        "zhuyin": "ㄕㄠˊ ㄗˇ",
        "pinyin": "",
        "english": "spoon",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "木勺": {
        "zhuyin": "ㄇㄨˋ ㄕㄠˊ",
        "pinyin": "",
        "english": "wooden ladle",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "我的": {
        "zhuyin": "ㄨㄛˇ ㄉㄜ˙",
        "pinyin": "",
        "english": "mine",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "有的": {
        "zhuyin": "ㄧㄡˇ ㄉㄜ˙",
        "pinyin": "",
        "english": "some",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "目的": {
        "zhuyin": "ㄇㄨˋ ㄉㄜ˙",
        "pinyin": "",
        "english": "aim, purpose",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "日本": {
        "zhuyin": "ㄖˋ ㄅㄣˇ",
        "pinyin": "",
        "english": "Japan",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "本人": {
        "zhuyin": "ㄅㄣˇ ㄖㄣˊ",
        "pinyin": "",
        "english": "in person",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "本錢": {
        "zhuyin": "ㄅㄣˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "english": "capital, money",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "對了": {
        "zhuyin": "ㄉㄨㄟˋ ㄌ",
        "pinyin": "",
        "english": "that's right",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "對手": {
        "zhuyin": "ㄉㄨㄟˋ ㄕㄡˇ",
        "pinyin": "",
        "english": "adversary, opponent",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "對鐘": {
        "zhuyin": "ㄉㄨㄟˋ ㄓㄨㄥ",
        "pinyin": "",
        "english": "to set a clock",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "兄弟": {
        "zhuyin": "ㄒㄩㄥ ㄉㄧˋ",
        "pinyin": "",
        "english": "brothers",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "表兄": {
        "zhuyin": "ㄅㄧㄠˇ ㄒㄩㄥ",
        "pinyin": "",
        "english": "older male cousin on mother's side",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "兌給": {
        "zhuyin": "ㄉㄨㄟˋ ㄍㄟˇ",
        "pinyin": "",
        "english": "to pay to",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "說笑": {
        "zhuyin": "ㄕㄨㄛ ㄒㄧㄠˋ",
        "pinyin": "",
        "english": "to talk and laugh together",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "說一不二": {
        "zhuyin": "ㄕㄨㄛ ㄧ ㄅㄨˋ ㄦ",
        "pinyin": "",
        "english": "to mean what you say",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "千里": {
        "zhuyin": "ㄑㄧㄢ ㄌㄧˇ",
        "pinyin": "",
        "english": "many miles, long journey",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "千古": {
        "zhuyin": "ㄑㄧㄢ ㄍㄨˇ",
        "pinyin": "",
        "english": "eternal, of the ages",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "買重了": {
        "zhuyin": "ㄇㄞˇ ㄓㄨㄥˋ ㄌ",
        "pinyin": "",
        "english": "bought an extra",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "貴重": {
        "zhuyin": "ㄍㄨㄟˋ ㄓㄨㄥˋ",
        "pinyin": "",
        "english": "be valuable",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "重了": {
        "zhuyin": "ㄓㄨㄥˋ ㄌ",
        "pinyin": "",
        "english": "be done twice, get repeated",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "古董": {
        "zhuyin": "ㄍㄨˇ ㄉㄨㄥˇ",
        "pinyin": "",
        "english": "antique, old fart",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "看不懂": {
        "zhuyin": "ㄎㄢˋ ㄅㄨˋ ㄉㄨㄥˇ",
        "pinyin": "",
        "english": "be unable to read",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "不是": {
        "zhuyin": "ㄅㄨˋ ㄕˋ",
        "pinyin": "",
        "english": "no!, a fault",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "是的": {
        "zhuyin": "ㄕˋ ㄉㄜ˙",
        "pinyin": "",
        "english": "yes!, that's right",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "要是": {
        "zhuyin": "ㄧㄠˋ ㄕˋ",
        "pinyin": "",
        "english": "if",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "先父": {
        "zhuyin": "ㄒㄧㄢ ㄈㄨˋ",
        "pinyin": "",
        "english": "my late father",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "先生": {
        "zhuyin": "ㄒㄧㄢ ㄕㄥ",
        "pinyin": "",
        "english": "Mr.",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "李子": {
        "zhuyin": "ㄌㄧˇ ㄗˇ",
        "pinyin": "",
        "english": "plum",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "姓氏": {
        "zhuyin": "ㄒㄧㄥˋ ㄕˋ",
        "pinyin": "",
        "english": "surname",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "字母": {
        "zhuyin": "ㄗˋ ㄇㄨˇ",
        "pinyin": "",
        "english": "alphabet, letter",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    "別字": {
        "zhuyin": "ㄅㄧㄝˊ ㄗˋ",
        "pinyin": "",
        "english": "mispronounced or wrongly written character",
        "book": "Reading and Writing Chinese: Third Edition",
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "book": "Reading and Writing Chinese: Third Edition",
    // },

};
const bookWordsCACG = {
    "詩人": {
        "zhuyin": "ㄕ ㄖㄣˊ",
        "english": "poet",
        "book": "Chinese: A Comp. Grammar",
    },
    "牡丹": {
        "zhuyin": "ㄇㄨˇ ㄉㄢ",
        "english": "peony",
        "book": "Chinese: A Comp. Grammar",
    },
    "鞋": {
        "zhuyin": "ㄒㄧㄝˊ",
        "english": "shoe(s)",
        "book": "Chinese: A Comp. Grammar",
    },
    "鹽": {
        "zhuyin": "ㄧㄢˊ",
        "english": "salt",
        "book": "Chinese: A Comp. Grammar",
    },
    "語言": {
        "zhuyin": "ㄩˇ ㄧㄢˊ",
        "english": "language",
        "book": "Chinese: A Comp. Grammar",
    },
    "音樂": {
        "zhuyin": "ㄧㄣ ㄩㄝˋ",
        "english": "music",
        "book": "Chinese: A Comp. Grammar",
    },
    "廣告": {
        "zhuyin": "ㄍㄨㄤˇ ㄍㄠˋ",
        "english": "advertisement",
        "book": "Chinese: A Comp. Grammar",
    },
    "比賽": {
        "zhuyin": "ㄅㄧˇ ㄙㄞˋ",
        "english": "contest",
        "book": "Chinese: A Comp. Grammar",
    },
    "戰爭": {
        "zhuyin": "ㄓㄢˋ ㄓㄥ",
        "english": "war",
        "book": "Chinese: A Comp. Grammar",
    },
    "地震": {
        "zhuyin": "ㄉㄧˋ ㄓㄣˋ",
        "english": "earthquake",
        "book": "Chinese: A Comp. Grammar",
    },
    "細胞": {
        "zhuyin": "ㄒㄧˋ ㄅㄠ",
        "english": "biology cell",
        "book": "Chinese: A Comp. Grammar",
    },
    "分子": {
        "zhuyin": "ㄈㄣ ㄗˇ",
        "english": "molecule",
        "book": "Chinese: A Comp. Grammar",
    },
    "原則": {
        "zhuyin": "ㄩㄢˊ ㄗㄜˊ",
        "english": "atom",
        "book": "Chinese: A Comp. Grammar",
    },
    "銅的": {
        "zhuyin": "ㄊㄨㄥˊ ㄉㄜ˙",
        "english": "made of brass",
        "book": "Chinese: A Comp. Grammar",
    },
    "塑料的": {
        "zhuyin": "ㄙㄨˋ ㄌㄧㄠˋ ㄉㄜ˙",
        "english": "made of plastic",
        "book": "Chinese: A Comp. Grammar",
    },
    "玻璃的": {
        "zhuyin": "ㄅㄛ ㄌㄧˊ ㄉㄜ˙",
        "english": "made of glass",
        "book": "Chinese: A Comp. Grammar",
    },
    "父母": {
        "zhuyin": "ㄈㄨˋ ㄇㄨˇ",
        "english": "parents",
        "book": "Chinese: A Comp. Grammar",
    },
    "夫婦": {
        "zhuyin": "ㄈㄨ ㄈㄨˋ",
        "english": "married couple",
        "book": "Chinese: A Comp. Grammar",
    },
    "子女": {
        "zhuyin": "ㄗˇ ㄋㄩˇ",
        "english": "children",
        "book": "Chinese: A Comp. Grammar",
    },
    "師生": {
        "zhuyin": "ㄕ ㄕㄥ",
        "english": "teachers and students",
        "book": "Chinese: A Comp. Grammar",
    },
    "親友": {
        "zhuyin": "ㄑㄧㄣ ㄧㄡˇ",
        "english": "friends and relatives",
        "book": "Chinese: A Comp. Grammar",
    },
    "城鄉": {
        "zhuyin": "ㄔㄥˊ ㄒㄧㄤ",
        "english": "cities and villages",
        "book": "Chinese: A Comp. Grammar",
    },
    "文具": {
        "zhuyin": "ㄨㄣˊ ㄐㄩˋ",
        "english": "stationary",
        "book": "Chinese: A Comp. Grammar",
    },
    "樹木": {
        "zhuyin": "ㄕㄨˋ ㄇㄨˋ",
        "english": "trees",
        "book": "Chinese: A Comp. Grammar",
    },
    "飯菜": {
        "zhuyin": "ㄈㄢˋ ㄘㄞˋ",
        "english": "food",
        "book": "Chinese: A Comp. Grammar",
    },
    "財產": {
        "zhuyin": "ㄘㄞˊ ㄔㄢˇ",
        "english": "possessions",
        "book": "Chinese: A Comp. Grammar",
    },
    "事項": {
        "zhuyin": "ㄕˋ ㄒㄧㄤˋ",
        "english": "matters",
        "book": "Chinese: A Comp. Grammar",
    },
    "矛盾": {
        "zhuyin": "ㄇㄠˊ ㄉㄨㄣˋ",
        "english": "contradition",
        "book": "Chinese: A Comp. Grammar",
    },
    "名聲": {
        "zhuyin": "ㄇㄧㄥˊ ㄕㄥ",
        "english": "reputation",
        "book": "Chinese: A Comp. Grammar",
    },
    "真理": {
        "zhuyin": "ㄓㄣ ㄌㄧˇ",
        "english": "truth",
        "book": "Chinese: A Comp. Grammar",
    },
    "範圍": {
        "zhuyin": "ㄈㄢˋ ㄨㄟˊ",
        "english": "scope",
        "book": "Chinese: A Comp. Grammar",
    },
    "前景": {
        "zhuyin": "ㄑㄧㄢˊ ㄐㄧㄥˇ",
        "english": "prospect",
        "book": "Chinese: A Comp. Grammar",
    },
    "影響": {
        "zhuyin": "ㄧㄥˇ ㄒㄧㄤˇ",
        "english": "influence",
        "book": "Chinese: A Comp. Grammar",
    },
    "印象": {
        "zhuyin": "ㄧㄣˋ ㄒㄧㄤˋ",
        "english": "impression",
        "book": "Chinese: A Comp. Grammar",
    },
    "效果": {
        "zhuyin": "ㄒㄧㄠˋ ㄍㄨㄛˇ",
        "english": "effect",
        "book": "Chinese: A Comp. Grammar",
    },
    "大自然": {
        "zhuyin": "ㄉㄚˋ ㄗˋ ㄖㄢˊ",
        "english": "nature",
        "book": "Chinese: A Comp. Grammar",
    },
    "天空": {
        "zhuyin": "ㄊㄧㄢ ㄎㄨㄥ",
        "english": "the sky",
        "book": "Chinese: A Comp. Grammar",
    },
    "海洋": {
        "zhuyin": "ㄏㄞˇ ㄧㄤˊ",
        "english": "the ocean",
        "book": "Chinese: A Comp. Grammar",
    },
    "波濤": {
        "zhuyin": "ㄅㄛ ㄊㄠ",
        "english": "billows, great waves",
        "book": "Chinese: A Comp. Grammar",
    },
    "潮汐": {
        "zhuyin": "ㄔㄠˊ ㄒㄧ",
        "english": "the morning and evening tides",
        "book": "Chinese: A Comp. Grammar",
    },
    "地勢": {
        "zhuyin": "ㄉㄧˋ ㄕˋ",
        "english": "topography, terrain",
        "book": "Chinese: A Comp. Grammar",
    },
    "風水": {
        "zhuyin": "ㄈㄥ ㄕㄨㄟˇ",
        "english": "fengshui, geomancy",
        "book": "Chinese: A Comp. Grammar",
    },
    "烈日": {
        "zhuyin": "ㄌㄧㄝˋ ㄖˋ",
        "english": "the scorching sun",
        "book": "Chinese: A Comp. Grammar",
    },
    "身心": {
        "zhuyin": "ㄕㄣ ㄒㄧㄣ",
        "english": "body and mind",
        "book": "Chinese: A Comp. Grammar",
    },
    "体魄": {
        "zhuyin": "ㄊㄧˇ ㄆㄛˋ",
        "english": "physical condition",
        "book": "Chinese: A Comp. Grammar",
    },
    "外表": {
        "zhuyin": "ㄨㄞˋ ㄅㄧㄠˇ",
        "english": "physical appearance",
        "book": "Chinese: A Comp. Grammar",
    },
    "心靈": {
        "zhuyin": "ㄒㄧㄣ ㄌㄧㄥˊ",
        "english": "heart and soul",
        "book": "Chinese: A Comp. Grammar",
    },
    "儀表": {
        "zhuyin": "ㄧˊ ㄅㄧㄠˇ",
        "english": "demeanor",
        "book": "Chinese: A Comp. Grammar",
    },
    "智能": {
        "zhuyin": "ㄓˋ ㄋㄥˊ",
        "english": "intelligence",
        "book": "Chinese: A Comp. Grammar",
    },
    "眼界": {
        "zhuyin": "ㄧㄢˇ ㄐㄧㄝˋ",
        "english": "outlook, field of vision",
        "book": "Chinese: A Comp. Grammar",
    },
    "意境": {
        "zhuyin": "ㄧˋ ㄐㄧㄥˋ",
        "english": "frame of mind",
        "book": "Chinese: A Comp. Grammar",
    },
    "電腦": {
        "zhuyin": "ㄉㄧㄢˋ ㄋㄠˇ",
        "english": "computer",
        "book": "Chinese: A Comp. Grammar",
    },
    "將來": {
        "zhuyin": "ㄐㄧㄤ ㄌㄞˊ",
        "english": "future",
        "book": "Chinese: A Comp. Grammar",
    },
    "風景": {
        "zhuyin": "ㄈㄥ ㄐㄧㄥˇ",
        "english": "view",
        "book": "Chinese: A Comp. Grammar",
    },
    "尊敬": {
        "zhuyin": "ㄗㄨㄣ ㄐㄧㄥˋ",
        "english": "respect",
        "book": "Chinese: A Comp. Grammar",
    },
    "表面": {
        "zhuyin": "ㄅㄧㄠˇ ㄇㄧㄢˋ",
        "english": "surface, superficially",
        "book": "Chinese: A Comp. Grammar",
    },
    "部分": {
        "zhuyin": "ㄅㄨˋ ㄈㄣ",
        "english": "part, partially",
        "book": "Chinese: A Comp. Grammar",
    },
    "集體": {
        "zhuyin": "ㄐㄧˊ ㄊㄧˇ",
        "english": "collective",
        "book": "Chinese: A Comp. Grammar",
    },
    "和平": {
        "zhuyin": "ㄏㄜˊ ㄆㄧㄥˊ",
        "english": "peace",
        "book": "Chinese: A Comp. Grammar",
    },
    "本能": {
        "zhuyin": "ㄅㄣˇ ㄋㄥˊ",
        "english": "instinct",
        "book": "Chinese: A Comp. Grammar",
    },
    "歷史": {
        "zhuyin": "ㄌㄧˋ ㄕˇ",
        "english": "history",
        "book": "Chinese: A Comp. Grammar",
    },
    "邏輯": {
        "zhuyin": "ㄌㄨㄛˊ ㄐㄧˊ",
        "english": "logic",
        "book": "Chinese: A Comp. Grammar",
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "english": "snow",
        "book": "Chinese: A Comp. Grammar",
    },
    "冰": {
        "zhuyin": "ㄅㄧㄥ",
        "english": "ice",
        "book": "Chinese: A Comp. Grammar",
    },
    "雹子": {
        "zhuyin": "ㄅㄠˊ ㄗˇ",
        "english": "hailstone",
        "book": "Chinese: A Comp. Grammar",
    },
    "云": {
        "zhuyin": "ㄩㄣˊ",
        "english": "cloud",
        "book": "Chinese: A Comp. Grammar",
    },
    "霜": {
        "zhuyin": "ㄕㄨㄤ",
        "english": "frost",
        "book": "Chinese: A Comp. Grammar",
    },
    "露水": {
        "zhuyin": "ㄌㄨˋ ㄕㄨㄟˇ",
        "english": "dew",
        "book": "Chinese: A Comp. Grammar",
    },
    "虹": {
        "zhuyin": "ㄏㄨㄥˊ",
        "english": "rainbow",
        "book": "Chinese: A Comp. Grammar",
    },
    "彩霞": {
        "zhuyin": "ㄘㄞˇ ㄒㄧㄚˊ",
        "english": "sunset clouds",
        "book": "Chinese: A Comp. Grammar",
    },
    "霧": {
        "zhuyin": "ㄨˋ",
        "english": "fog",
        "book": "Chinese: A Comp. Grammar",
    },
    "煙霧": {
        "zhuyin": "ㄧㄢ ㄨˋ",
        "english": "smog",
        "book": "Chinese: A Comp. Grammar",
    },
    "雷": {
        "zhuyin": "ㄌㄟˊ",
        "english": "thunder",
        "book": "Chinese: A Comp. Grammar",
    },
    "閃電": {
        "zhuyin": "ㄕㄢˇ ㄉㄧㄢˋ",
        "english": "lightening",
        "book": "Chinese: A Comp. Grammar",
    },
    "毛毛雨": {
        "zhuyin": "ㄇㄠˊ ㄇㄠˊ ㄩˇ",
        "english": "drizzle",
        "book": "Chinese: A Comp. Grammar",
    },
    "陣雨": {
        "zhuyin": "ㄓㄣˋ ㄩˇ",
        "english": "shower",
        "book": "Chinese: A Comp. Grammar",
    },
    "暴風雨": {
        "zhuyin": "ㄅㄠˋ ㄈㄥ ㄩˇ",
        "english": "storm",
        "book": "Chinese: A Comp. Grammar",
    },
    "微風": {
        "zhuyin": "ㄨㄟ ㄈㄥ",
        "english": "breeze",
        "book": "Chinese: A Comp. Grammar",
    },
    "大風": {
        "zhuyin": "ㄉㄚˋ ㄈㄥ",
        "english": "gale",
        "book": "Chinese: A Comp. Grammar",
    },
    "台風": {
        "zhuyin": "ㄊㄞˊ ㄈㄥ",
        "english": "typhoon",
        "book": "Chinese: A Comp. Grammar",
    },
    "颶風": {
        "zhuyin": "ㄐㄩˋ ㄈㄥ",
        "english": "hurricane",
        "book": "Chinese: A Comp. Grammar",
    },
    "龍捲風": {
        "zhuyin": "ㄌㄨㄥˊ ㄐㄩㄢˋ ㄈㄥ",
        "english": "tornado",
        "book": "Chinese: A Comp. Grammar",
    },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "Chinese: A Comp. Grammar",
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "Chinese: A Comp. Grammar",
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "Chinese: A Comp. Grammar",
    // },
}
const bookWords = {

    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    //     "book": "",
    // },
}
const measureWords = {
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "english": "general measure word for people or things",
        "simplified": "个"
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "english": "respectful measure word for people",
        "simplified": ""
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "english": "measure word for professionals, doctors",
        "simplified": ""
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "english": "measure word for dependents",
        "simplified": ""
    },
    "具": {
        "zhuyin": "ㄐㄩˋ",
        "english": "measure word for corpses",
        "simplified": ""
    },
    "戶": {
        "zhuyin": "ㄏㄨˋ",
        "english": "measure word for households",
        "simplified": "户"
    },
    "只": {
        "zhuyin": "ㄓ",
        "english": "measure word for birds and certain animals, one of a pair, some utensils, vessels etc",
        "simplified": ""
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "english": "measure word for livestock, cows",
        "simplified": "头"
    },
    "匹": {
        "zhuyin": "ㄆㄧˇ",
        "english": "measure word for horses",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for fish, snakes, ribbons, long thin things",
        "simplified": "条"
    },
    "棵": {
        "zhuyin": "ㄎㄜ",
        "english": "measure word for trees, cabbages",
        "simplified": ""
    },
    "株": {
        "zhuyin": "ㄓㄨ",
        "english": "measure word for plants, flowers still in the ground",
        "simplified": ""
    },
    "朵": {
        "zhuyin": "ㄉㄨㄛˇ",
        "english": "measure word for flower bulbs or stems or clouds",
        "simplified": ""
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "english": "measure word for handfuls or objects with a handle",
        "simplified": ""
    },
    "支": {
        "zhuyin": "ㄓ",
        "english": "measure word for long (and straight) things, pens",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for long (and winding) things, rivers, roads",
        "simplified": "条"
    },
    "根": {
        "zhuyin": "ㄍㄣ",
        "english": "measure word for long (and thin) things, hair",
        "simplified": ""
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "english": "measure word for flat things, paper, a ticket",
        "simplified": "张"
    },
    "團": {
        "zhuyin": "ㄊㄨㄢˊ",
        "english": "measure word for piles",
        "simplified": "团"
    },
    "堆": {
        "zhuyin": "ㄉㄨㄟ",
        "english": "measure word for big piles",
        "simplified": ""
    },
    "顆": {
        "zhuyin": "ㄎㄜ",
        "english": "measure word for small, compact things, pearls, corn grains, teeth, hearts, satellites etc",
        "simplified": "颗"
    },
    "粒": {
        "zhuyin": "ㄌㄧˋ",
        "english": "measure word for small round things (peas, bullets, peanuts, pills, grains etc)",
        "simplified": ""
    },
    "扇": {
        "zhuyin": "ㄕㄢˋ",
        "english": "measure word for things that turns on a hinge, doors, windows",
        "simplified": ""
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "english": "measure word for packs",
        "simplified": ""
    },
    "卷": {
        "zhuyin": "ㄐㄩㄢˋ",
        "english": "measure word for rolls",
        "simplified": ""
    },
    "封": {
        "zhuyin": "ㄈㄥ",
        "english": "measure word for envelopes, letters",
        "simplified": ""
    },
    "桶": {
        "zhuyin": "ㄊㄨㄥˇ",
        "english": "measure word for tubes, buckets, paint",
        "simplified": ""
    },
    "盒": {
        "zhuyin": "ㄏㄜˊ",
        "english": "measure word for boxes of things",
        "simplified": ""
    },
    "束": {
        "zhuyin": "ㄕㄨˋ",
        "english": "measure word for boquets",
        "simplified": ""
    },
    "本": {
        "zhuyin": "ㄅㄣˇ",
        "english": "measure word for books",
        "simplified": ""
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "english": "measure word for newspapers",
        "simplified": ""
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "english": "measure word for incidents, circumstances, 事s",
        "simplified": ""
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "english": "measure word for events, episodes, one class from a series or course",
        "simplified": "节"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "english": "measure word for subjects or series of classes",
        "simplified": "门"
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "english": "measure word for times, occurrences",
        "simplified": ""
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "english": "measure word for large events",
        "simplified": "场"
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "english": "measure word for a period of time",
        "simplified": ""
    },
    "陣": {
        "zhuyin": "ㄓㄣˋ",
        "english": "measure word for sudden, passing events",
        "simplified": "阵"
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "english": "measure word for a moment, moments",
        "simplified": ""
    },
    "番": {
        "zhuyin": "ㄈㄢ",
        "english": "measure word for a long period of time, stretch, or an activity that requires significant effort",
        "simplified": ""
    },
    "趟": {
        "zhuyin": "ㄊㄤˋ",
        "english": "measure word for trips, tours",
        "simplified": ""
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "english": "measure word for rooms, houses",
        "simplified": "间"
    },
    "棟": {
        "zhuyin": "ㄉㄨㄥˋ",
        "english": "measure word for tall buildings",
        "simplified": "栋"
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "english": "measure word for floors, stories(of building)",
        "simplified": "层"
    },
    "堵": {
        "zhuyin": "ㄉㄨˇ",
        "english": "measure word for walls",
        "simplified": ""
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "english": "measure word for walls",
        "simplified": ""
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "english": "measure word for multi building complex, hospitals",
        "simplified": ""
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "english": "measure word for fields, open public spaces",
        "simplified": "场"
    },
    "家": {
        "zhuyin": "ㄐㄧㄚ",
        "english": "measure word for places of work",
        "simplified": ""
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "english": "measure word for large structures, bridges, mountains",
        "simplified": ""
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "english": "measure word for portions",
        "simplified": ""
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "english": "measure word for pieces",
        "simplified": ""
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "english": "measure word for pieces, slices",
        "simplified": "块"
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "english": "measure word for sips, mouthfuls",
        "simplified": ""
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "english": "measure word for dishes",
        "simplified": ""
    },
    "頓": {
        "zhuyin": "ㄉㄨㄣˋ",
        "english": "measure word for meals",
        "simplified": "顿"
    },
    "碗": {
        "zhuyin": "ㄨㄢˇ",
        "english": "measure word for bowls of food",
        "simplified": ""
    },
    "盤": {
        "zhuyin": "ㄆㄢˊ",
        "english": "measure word for plates of food",
        "simplified": "盘"
    },
    "滴": {
        "zhuyin": "ㄉㄧ",
        "english": "measure word for drops",
        "simplified": ""
    },
    "杯": {
        "zhuyin": "ㄅㄟ",
        "english": "measure word for cups",
        "simplified": ""
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "english": "measure word for bottles",
        "simplified": ""
    },
    "壺": {
        "zhuyin": "ㄏㄨˊ",
        "english": "measure word for teapots",
        "simplified": "壶"
    },
    "罐": {
        "zhuyin": "ㄍㄨㄢˋ",
        "english": "measure word for cans, jars",
        "simplified": ""
    },
    "股": {
        "zhuyin": "ㄍㄨˇ",
        "english": "measure word for whiffs, smells, aromas",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for towels, tablecloths, blankets",
        "simplified": "条"
    },
    "盞": {
        "zhuyin": "ㄓㄢˇ",
        "english": "measure word for lamps",
        "simplified": "盏"
    },
    "幅": {
        "zhuyin": "ㄈㄨˊ",
        "english": "measure word for paintings or drawings",
        "simplified": ""
    },
    "幀": {
        "zhuyin": "ㄓㄣ",
        "english": "measure word for printed pictures",
        "simplified": "帧"
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "english": "measure word for articles of clothing",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for a long articles of clothing, neckties",
        "simplified": "条"
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "english": "measure word for costumes",
        "simplified": ""
    },
    "頂": {
        "zhuyin": "ㄉㄧㄥˇ",
        "english": "measure word for hats",
        "simplified": "顶"
    },
    "雙": {
        "zhuyin": "ㄕㄨㄤ",
        "english": "measure word for pairs of identical objects, eyes",
        "simplified": "双"
    },
    "副": {
        "zhuyin": "ㄈㄨˋ",
        "english": "measure word for pairs of complementary objects",
        "simplified": ""
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "english": "measure word for married pairs",
        "simplified": "对"
    },
    "些": {
        "zhuyin": "ㄒㄧㄝ",
        "english": "measure word for few things",
        "simplified": ""
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "english": "measure word for kinds, typess",
        "simplified": "种"
    },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
}
//add some mw tests sometime?
// 一座山
// 兩朵花二
// 四家商店
// 五棟房子
// 那個人
// 這本書
// 一滴水
// 三片麵包
// 一杯茶
// 五公斤米
// 二十公升汽油
const bookWordsXWZ = {
    "猛獸": {
        "zhuyin": "ㄇㄥˇ ㄕㄡˋ",
        "english": "fierce beast",
        "book": "小王子",
    },
    "親身經歷的故事": {
        "zhuyin": "ㄑㄧㄣ ㄕㄣ ㄐㄧㄥ ㄌㄧˋ ㄉㄜ˙ ㄍㄨˋ ㄕˋ",
        "english": "personally experienced stories ",
        "book": "小王子",
    },
    "蟒蛇": {
        "zhuyin": "ㄇㄤˇ ㄕㄜˊ",
        "english": "python, boa",
        "book": "小王子",
    },
    "吞食": {
        "zhuyin": "ㄊㄨㄣ ㄕˊ",
        "english": "devour",
        "book": "小王子",
    },
    "獵物": {
        "zhuyin": "ㄌㄧㄝˋ ㄨˋ",
        "english": "prey",
        "book": "小王子",
    },
    "整個吞下": {
        "zhuyin": "ㄓㄥˇ ㄍㄜˋ ㄊㄨㄣ ㄒㄧㄚˋ",
        "english": "swallow down whole",
        "book": "小王子",
    },
    "嚼": {
        "zhuyin": "ㄐㄧㄠˊ",
        "english": "chew",
        "book": "小王子",
    },
    "它動彈不了": {
        "zhuyin": "ㄊㄚ ㄉㄨㄥˋ ㄉㄢˋ ㄅㄨˋ ㄌㄧㄠˇ",
        "english": "it can't move",
        "book": "小王子",
    },
    "整整": {
        "zhuyin": "ㄓㄥˇ ㄓㄥˇ",
        "english": "full",
        "book": "小王子",
    },
    "才能消化肚子裡的東西": {
        "zhuyin": "ㄘㄞˊ ㄋㄥˊ ㄒㄧㄠ ㄏㄨㄚˋ ㄉㄨˋ ㄗˇ ㄌㄧˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ",
        "english": "to digest what's in the stomach",
        "book": "小王子",
    },
    "職業": {
        "zhuyin": "ㄓˊ ㄧㄝˋ",
        "english": "profession",
        "book": "小王子",
    },
    "選": {
        "zhuyin": "ㄒㄩㄢˇ",
        "english": "select, choose",
        "book": "小王子",
    },
    "孤獨": {
        "zhuyin": "ㄍㄨ ㄉㄨˊ",
        "english": "alone, lonely",
        "book": "小王子",
    },
    "故障": {
        "zhuyin": "ㄍㄨˋ ㄓㄤˋ",
        "english": "malfunction, fault",
        "book": "小王子",
    },
    "撒哈拉大沙漠": {
        "zhuyin": "ㄙㄚ ㄏㄚ ㄌㄚ ㄉㄚˋ ㄕㄚ ㄇㄛˋ",
        "english": "The Saharah Desert",
        "book": "小王子",
    },
    "引擎": {
        "zhuyin": "ㄧㄣˇ ㄑㄧㄥˊ",
        "english": "engine",
        "book": "小王子",
    },
    "東西弄碎了": {
        "zhuyin": "ㄉㄨㄥ ㄒㄧ ㄋㄨㄥˋ ㄙㄨㄟˋ ㄌㄜ",
        "english": "something broken",
        "book": "小王子",
    },
    "複雜棘手": {
        "zhuyin": "ㄈㄨˋ ㄗㄚˊ ㄐㄧˊ ㄕㄡˇ",
        "english": "complicated and tricky",
        "book": "小王子",
    },
    "修理": {
        "zhuyin": "ㄒㄧㄡ ㄌㄧˇ",
        "english": "repair",
        "book": "小王子",
    },
    "只夠": {
        "zhuyin": "ㄓ ㄍㄡˋ",
        "english": "only enough",
        "book": "小王子",
    },
    "孤零零": {
        "zhuyin": "ㄍㄨ ㄌㄧㄥˊ ㄌㄧㄥˊ",
        "english": "alone",
        "book": "小王子",
    },
    "黎明": {
        "zhuyin": "ㄌㄧˊ ㄇㄧㄥˊ",
        "english": "dawn",
        "book": "小王子",
    },
    "因此": {
        "zhuyin": "ㄧㄣ ㄘˇ",
        "english": "therefore",
        "book": "小王子",
    },
    "驚": {
        "zhuyin": "ㄐㄧㄥ",
        "english": "shock",
        "book": "小王子",
    },
    "綿羊": {
        "zhuyin": "ㄇㄧㄢˊ ㄧㄤˊ",
        "english": "sheep",
        "book": "小王子",
    },
    "猛然": {
        "zhuyin": "ㄇㄥˇ ㄖㄢˊ",
        "english": "suddenly",
        "book": "小王子",
    },
    "跳": {
        "zhuyin": "ㄊㄧㄠˋ",
        "english": "jump",
        "book": "小王子",
    },
    "被雷擊中一樣": {
        "zhuyin": "ㄅㄟˋ ㄌㄟˊ ㄐㄧ ㄓㄨㄥ ㄧ ㄧㄤˋ",
        "english": "like being struck by lightening",
        "book": "小王子",
    },
    "拼命": {
        "zhuyin": "ㄆㄧㄣ ㄇㄧㄥˋ",
        "english": "desperately, desperation",
        "book": "小王子",
    },
    "揉": {
        "zhuyin": "ㄖㄡˊ",
        "english": "rub",
        "book": "小王子",
    },
    "仔細看了看": {
        "zhuyin": "ㄗ ㄒㄧˋ ㄎㄢˋ ㄌㄧㄠˇ ㄎㄢˋ",
        "english": "take a closer look",
        "book": "小王子",
    },
    "驚奇": {
        "zhuyin": "ㄐㄧㄥ ㄑㄧˊ",
        "english": "surprised, surprise",
        "book": "小王子",
    },
    "失望": {
        "zhuyin": "ㄕ ㄨㄤˋ",
        "english": "disappointed",
        "book": "小王子",
    },
    "放棄": {
        "zhuyin": "ㄈㄤˋ ㄑㄧˋ",
        "english": "give up",
        "book": "小王子",
    },
    "除了": {
        "zhuyin": "ㄔㄨˊ ㄌㄜ",
        "english": "apart from",
        "book": "小王子",
    },
    "瞪": {
        "zhuyin": "ㄉㄥˋ",
        "english": "stare",
        "book": "小王子",
    },
    "荒無人煙的地方": {
        "zhuyin": "ㄏㄨㄤ ㄨˊ ㄖㄣˊ ㄧㄢ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ",
        "english": "deserted place",
        "book": "小王子",
    },
    "迷了路": {
        "zhuyin": "ㄇㄧˊ ㄌㄧㄠˇ ㄌㄨˋ",
        "english": "lost way",
        "book": "小王子",
    },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "小王子",
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "小王子",
    // },
}
const plecoLookupWords = {
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "",
        "english": "stand",
    },
    "哭": {
        "zhuyin": "ㄎㄨ",
        "pinyin": "",
        "english": "cry, weep, wail",
    },
    "平常": {
        "zhuyin": "ㄆㄧㄥˊ ㄔㄤˊ",
        "pinyin": "",
        "english": "generally, usually, ordinarily, as a rule, common",
    },
    "送": {
        "zhuyin": "ㄙㄨㄥˋ",
        "pinyin": "",
        "english": "deliver, carry, give as a present",
    },
    "隻": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "english": "single, one, only",
    },
    "完": {
        "zhuyin": "ㄨㄢˊ",
        "pinyin": "",
        "english": "finish, intact, whole, exhaust",
    },
    "總是": {
        "zhuyin": "ㄗㄨㄥˇ ㄕˋ",
        "pinyin": "",
        "english": "always",
    },
    "才": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "english": "ability, talent, gift",
    },
    "更": {
        "zhuyin": "ㄍㄥ",
        "pinyin": "",
        "english": "more, even more, further",
    },
    "剛": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "",
        "english": "firm, strong, unyielding, just, exactly, precisely, barely, only",
    },
    "已經": {
        "zhuyin": "ㄧˇ ㄐㄧㄥ",
        "pinyin": "",
        "english": "already",
    },
    "會心": {
        "zhuyin": "ㄏㄨㄟˋ ㄒㄧㄣ",
        "pinyin": "",
        "english": "understand",
    },
    "酒": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "english": "wine",
    },
    "送給": {
        "zhuyin": "ㄙㄨㄥˋ ㄍㄟˇ",
        "pinyin": "",
        "english": "to send, give as a present",
    },
    "離": {
        "zhuyin": "ㄌㄧˊ",
        "pinyin": "",
        "english": "leave, part from",
    },
    "向": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "",
        "english": "take a side, be partial to, towards, in the direction of",
    },
    "森林": {
        "zhuyin": "ㄙㄣ ㄌㄧㄣˊ",
        "pinyin": "",
        "english": "forest",
    },
    "原始": {
        "zhuyin": "ㄩㄢˊ ㄕˇ",
        "pinyin": "",
        "english": "original, firsthand, primeval, primitive",
    },
    "存在": {
        "zhuyin": "ㄘㄨㄣˊ ㄗㄞˋ",
        "pinyin": "",
        "english": "exist, be, existence",
    },
    "答": {
        "zhuyin": "ㄉㄚˊ",
        "pinyin": "",
        "english": "answer, reply, respond",
    },
    "事實": {
        "zhuyin": "ㄕˋ ㄕˊ",
        "pinyin": "",
        "english": "fact",
    },
    "假如": {
        "zhuyin": "ㄐㄧㄚˇ ㄖㄨˊ",
        "pinyin": "",
        "english": "if, supposing, in case",
    },
    "紅臉": {
        "zhuyin": "ㄏㄨㄥˊ ㄌㄧㄢˇ",
        "pinyin": "",
        "english": "red face",
    },
    "危險": {
        "zhuyin": "ㄨㄟ ㄒㄧㄢˇ",
        "pinyin": "",
        "english": "dangerous, perilous",
    },
    "由": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "english": "cause, reason",
    },
    "雖然": {
        "zhuyin": "ㄙㄨㄟ ㄖㄢˊ",
        "pinyin": "",
        "english": "though, although"
    },
    "應當": {
        "zhuyin": "ㄧㄥ ㄉㄤ",
        "pinyin": "",
        "english": "should, ought to",
    },
    "活": {
        "zhuyin": "ㄏㄨㄛˊ",
        "pinyin": "",
        "english": "life (opposite 死)",
    },
    "終於": {
        "zhuyin": "ㄓㄨㄥ ㄩˊ",
        "pinyin": "",
        "english": "in the end, finally, at long last",
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "english": "behavior, conduct, go, walk, circulate, do, preform, carry out",
    },
    "收": {
        "zhuyin": "ㄕㄡ",
        "pinyin": "",
        "english": "receive, accept, collect ",
    },
    "容易": {
        "zhuyin": "ㄖㄨㄥˊ ㄧˋ",
        "pinyin": "",
        "english": "easy, likely, apt",
    },
    "頭髮": {
        "zhuyin": "ㄊㄡˊ ㄈㄚ",
        "pinyin": "",
        "english": "hair",
    },
    "壞": {
        "zhuyin": "ㄏㄨㄞˋ",
        "pinyin": "",
        "english": "bad, harmful, extremely, very much",
    },
    "沙漠": {
        "zhuyin": "ㄕㄚ ㄇㄛˋ",
        "pinyin": "",
        "english": "desert",
    },
    "簡單": {
        "zhuyin": "ㄐㄧㄢˇ ㄉㄢ",
        "pinyin": "",
        "english": "simple, uncomplicated",
    },
    "蝴蝶": {
        "zhuyin": "ㄏㄨˊ ㄉㄧㄝˊ",
        "pinyin": "",
        "english": "butterfly",
    },
    "浣熊": {
        "zhuyin": "ㄏㄨㄢˋ ㄒㄩㄥˊ",
        "pinyin": "",
        "english": "raccoon",
    },
    "刺蝟": {
        "zhuyin": "ㄘˋ ㄨㄟˋ",
        "pinyin": "",
        "english": "hedgehog",
    },
    "住": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "english": "live, reside, stay, stop, cease, (after a verb) firmly, to a stop",
    },
    "往": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "",
        "english": "go, in the direction of, towards, to",
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "english": "",
    // },
}
const HSK3words = {
    // 973 words
    "愛心": {
        "zhuyin": "ㄞˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "love"
    },
    "安排": {
        "zhuyin": "ㄢ ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrange"
    },
    "安裝": {
        "zhuyin": "ㄢ ㄓㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "install"
    },
    "按": {
        "zhuyin": "ㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "press, push, check, restrain"
    },
    "按照": {
        "zhuyin": "ㄢˋ ㄓㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "according to"
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(particle marking the following noun as a direct object)"
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(measure word for things with handles)"
    },
    "把握": {
        "zhuyin": "ㄅㄚˇ ㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grasp"
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "without results, in vain, waste efforts"
    },
    "白菜": {
        "zhuyin": "ㄅㄞˊ ㄘㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "chinese cabbage"
    },
    "班級": {
        "zhuyin": "ㄅㄢ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "class"
    },
    "搬": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "turn, move"
    },
    "搬家": {
        "zhuyin": "ㄅㄢ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "move houses"
    },
    "板": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "board, plank, shutter"
    },
    "辦理": {
        "zhuyin": "ㄅㄢˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "handle"
    },
    "保": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "defend, protect, keep, guarantee, ensure"
    },
    "保安": {
        "zhuyin": "ㄅㄠˇ ㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "security guard, public security, ensure safety"
    },
    "保持": {
        "zhuyin": "ㄅㄠˇ ㄔˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "keep"
    },
    "保存": {
        "zhuyin": "ㄅㄠˇ ㄘㄨㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "preservation"
    },
    "保護": {
        "zhuyin": "ㄅㄠˇ ㄏㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "protect"
    },
    "保留": {
        "zhuyin": "ㄅㄠˇ ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "retain"
    },
    "保險": {
        "zhuyin": "ㄅㄠˇ ㄒㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "insurance"
    },
    "保證": {
        "zhuyin": "ㄅㄠˇ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ensure"
    },
    "報": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "newspaper, periodical, journal, report, telegram"
    },
    "報到": {
        "zhuyin": "ㄅㄠˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "register, check in"
    },
    "報道": {
        "zhuyin": "ㄅㄠˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "report"
    },
    "報告": {
        "zhuyin": "ㄅㄠˋ ㄍㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "presentation"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "back"
    },
    "北部": {
        "zhuyin": "ㄅㄟˇ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "north"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "back of the body, back side of an object"
    },
    "背後": {
        "zhuyin": "ㄅㄟˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "behind, at the back"
    },
    "被": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cover"
    },
    "被子": {
        "zhuyin": "ㄅㄟˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quilt"
    },
    "本來": {
        "zhuyin": "ㄅㄣˇ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "originally"
    },
    "本領": {
        "zhuyin": "ㄅㄣˇ ㄌㄧㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ability"
    },
    "本事": {
        "zhuyin": "ㄅㄣˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "skill"
    },
    "比較": {
        "zhuyin": "ㄅㄧˇ ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "compare"
    },
    "比例": {
        "zhuyin": "ㄅㄧˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "proportion"
    },
    "比賽": {
        "zhuyin": "ㄅㄧˇ ㄙㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "match"
    },
    "必然": {
        "zhuyin": "ㄅㄧˋ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "inevitable"
    },
    "必要": {
        "zhuyin": "ㄅㄧˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "necessary"
    },
    "變化": {
        "zhuyin": " ㄅㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "change"
    },
    "變為": {
        "zhuyin": "ㄅㄧㄢˋ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "become, turn into, chnage into"
    },
    "標題": {
        "zhuyin": "ㄅㄧㄠ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "title, heading"
    },
    "標準": {
        "zhuyin": "ㄅㄧㄠ ㄓㄨㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "standard"
    },
    "表達": {
        "zhuyin": "ㄅㄧㄠˇ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "expression"
    },
    "表格": {
        "zhuyin": "ㄅㄧㄠˇ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "form"
    },
    "表面": {
        "zhuyin": "ㄅㄧㄠˇ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "surface"
    },
    "表明": {
        "zhuyin": "ㄅㄧㄠˇ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "indicate"
    },
    "表現": {
        "zhuyin": "ㄅㄧㄠˇ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "performance"
    },
    // 50/973 done
    "表演": {
        "zhuyin": "ㄅㄧㄠˇ ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "perform"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK3",
    //     "english": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK3",
    //     "english": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK3",
    //     "english": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK3",
    //     "english": ""
    // },
}

//100% complete

const bookWordsGradedReaders = {
    //blind man's country
    // "一直": {
    //     "zhuyin": "ㄧ ㄓˊ",
    //     "english": "all along, continuously",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    // "生活": {
    //     "zhuyin": "ㄕㄥ ㄏㄨㄛˊ",
    //     "english": "to live, life",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    // "聽說": {
    //     "zhuyin": "ㄊㄧㄥ ㄕㄨㄛ",
    //     "english": "to hear talk of, heard of",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "(mw. for rivers, roads, long thin things)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "需要": {
        "zhuyin": "ㄒㄩ ㄧㄠˋ",
        "english": "to need",
        "book": "盲人國(lv.1 graded reader)",
    },
    // "帶": {
    //     "zhuyin": "ㄉㄞˋ",
    //     "english": "to carry, take(somebody somewhere)",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "english": "afterward",
        "book": "盲人國(lv.1 graded reader)",
    },
    "變成": {
        "zhuyin": "ㄅㄧㄢˋ ㄔㄥˊ",
        "english": "to turn into, become",
        "book": "盲人國(lv.1 graded reader)",
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "english": "river",
        "book": "盲人國(lv.1 graded reader)",
    },
    "從那以後": {
        "zhuyin": "ㄘㄨㄥˊ ㄋㄚˋ ㄧˇ ㄏㄡˋ",
        "english": "from then on, from that point forward",
        "book": "盲人國(lv.1 graded reader)",
    },
    // "再也沒有": {
    //     "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄇㄟˊ ㄧㄡˇ",
    //     "english": "never again(do smith), (there was) never again",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    // "世界": {
    //     "zhuyin": "ㄕˋ ㄐㄧㄝˋ",
    //     "english": "world",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    // "故事": {
    //     "zhuyin": "ㄍㄨˋ ㄕˋ",
    //     "english": "story",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    // "眼睛": {
    //     "zhuyin": "ㄧㄢˇ ㄐㄧㄥ",
    //     "english": "eyes",
    //     "book": "盲人國(lv.1 graded reader)",
    // },
    "出現": {
        "zhuyin": "ㄔㄨ ㄒㄧㄢˋ",
        "english": "to appear, emerge",
        "book": "盲人國(lv.1 graded reader)",
    },
    "希望": {
        "zhuyin": "ㄒㄧ ㄨㄤˋ",
        "english": "to hope",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想到": {
        "zhuyin": "ㄒㄧㄤˇ ㄉㄠˋ",
        "english": "to think of, imagine",
        "book": "盲人國(lv.1 graded reader)",
    },
    "忘記": {
        "zhuyin": "ㄨㄤˋ ㄐㄧˋ",
        "english": "to forget",
        "book": "盲人國(lv.1 graded reader)",
    },
    "老婆": {
        "zhuyin": "ㄌㄠˇ ㄆㄛˊ",
        "english": "wife(informal)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "english": "sad, upset",
        "book": "盲人國(lv.1 graded reader)",
    },
    "記住": {
        "zhuyin": "ㄐㄧˋ ㄓㄨˋ",
        "english": "to memorize, remember in the future",
        "book": "盲人國(lv.1 graded reader)",
    },
    "告訴": {
        "zhuyin": "ㄍㄠˋ ㄙㄨˋ",
        "english": "to tell",
        "book": "盲人國(lv.1 graded reader)",
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "english": "tree",
        "book": "盲人國(lv.1 graded reader)",
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "english": "snow",
        "book": "盲人國(lv.1 graded reader)",
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "english": "to plant(a tree)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "越來越": {
        "zhuyin": "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ",
        "english": "more and more",
        "book": "盲人國(lv.1 graded reader)",
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "english": "pf poor quality",
        "book": "盲人國(lv.1 graded reader)",
    },
    "草地": {
        "zhuyin": "ㄘㄠˇ ㄉㄧˋ",
        "english": "grassland, grassy field",
        "book": "盲人國(lv.1 graded reader)",
    },
    "可怕": {
        "zhuyin": "ㄎㄜˇ ㄆㄚˋ",
        "english": "frightening",
        "book": "盲人國(lv.1 graded reader)",
    },
    "過去": {
        "zhuyin": "ㄍㄨㄛˋ ㄑㄩˋ",
        "english": "to pass, pass through",
        "book": "盲人國(lv.1 graded reader)",
    },
    "發生": {
        "zhuyin": " ㄈㄚ ㄕㄥ",
        "english": "to happen, occour",
        "book": "盲人國(lv.1 graded reader)",
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "english": "interesting",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想法": {
        "zhuyin": "ㄒㄧㄤˇ ㄈㄚˇ",
        "english": "way of thinking",
        "book": "盲人國(lv.1 graded reader)",
    },
    "決定": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄧㄥˋ",
        "english": "to decide, decision",
        "book": "盲人國(lv.1 graded reader)",
    },
    "為了": {
        "zhuyin": "ㄨㄟˊ ㄌㄧㄠˇ",
        "english": "in order to, for the purpose of",
        "book": "盲人國(lv.1 graded reader)",
    },
    "要不": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ",
        "english": "how about... (suggestion)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "另外": {
        "zhuyin": "ㄌㄧㄥˋ ㄨㄞˋ",
        "english": "another, other",
        "book": "盲人國(lv.1 graded reader)",
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "english": "surely, certainly",
        "book": "盲人國(lv.1 graded reader)",
    },
    "石頭": {
        "zhuyin": "ㄕˊ ㄊㄡˊ",
        "english": "stone, rock",
        "book": "盲人國(lv.1 graded reader)",
    },
    "大聲": {
        "zhuyin": "ㄉㄚˋ ㄕㄥ",
        "english": "loudly, in a loud voice",
        "book": "盲人國(lv.1 graded reader)",
    },
    "動物": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ",
        "english": "animal",
        "book": "盲人國(lv.1 graded reader)",
    },
    "醒": {
        "zhuyin": "ㄒㄧㄥˇ",
        "english": "to awaken",
        "book": "盲人國(lv.1 graded reader)",
    },
    "發現": {
        "zhuyin": "ㄈㄚ ㄒㄧㄢˋ",
        "english": "to discover",
        "book": "盲人國(lv.1 graded reader)",
    },
    "想起": {
        "zhuyin": "ㄒㄧㄤˇ ㄑㄧˇ",
        "english": "to recall",
        "book": "盲人國(lv.1 graded reader)",
    },
    "站起來": {
        "zhuyin": "ㄓㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "english": "to stand up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "摔": {
        "zhuyin": "ㄕㄨㄞ",
        "english": "to trip and fall",
        "book": "盲人國(lv.1 graded reader)",
    },
    "力氣": {
        "zhuyin": "ㄌㄧˋ ㄑㄧˋ",
        "english": "strength, energy",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡著": {
        "zhuyin": "ㄕㄨㄟˋ ㄓㄨㄛˊ",
        "english": "to fall asleep",
        "book": "盲人國(lv.1 graded reader)",
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "english": "bird",
        "book": "盲人國(lv.1 graded reader)",
    },
    "奇怪": {
        "zhuyin": "ㄑㄧˊ ㄍㄨㄞˋ",
        "english": "strange",
        "book": "盲人國(lv.1 graded reader)",
    },
    "窗": {
        "zhuyin": "ㄔㄨㄤ",
        "english": "window",
        "book": "盲人國(lv.1 graded reader)",
    },
    "顏色": {
        "zhuyin": "ㄧㄢˊ ㄙㄜˋ",
        "english": "color",
        "book": "盲人國(lv.1 graded reader)",
    },
    "一點都": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄉㄨ",
        "english": "not at all",
        "book": "盲人國(lv.1 graded reader)",
    },
    "難看": {
        "zhuyin": "ㄋㄢˊ ㄎㄢˋ",
        "english": "bad-looking, ugly",
        "book": "盲人國(lv.1 graded reader)",
    },
    "生氣": {
        "zhuyin": "ㄕㄥ ㄑㄧˋ",
        "english": "angry, to get angry",
        "book": "盲人國(lv.1 graded reader)",
    },
    "耳朵": {
        "zhuyin": "ㄦˇ ㄉㄨㄛˇ",
        "english": "ear",
        "book": "盲人國(lv.1 graded reader)",
    },
    "自信": {
        "zhuyin": "ㄗˋ ㄒㄧㄣˋ",
        "english": "self confidence",
        "book": "盲人國(lv.1 graded reader)",
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "english": "earnest, serious",
        "book": "盲人國(lv.1 graded reader)",
    },
    "抓": {
        "zhuyin": "ㄓㄨㄚ",
        "english": "to grab",
        "book": "盲人國(lv.1 graded reader)",
    },
    "摸": {
        "zhuyin": "ㄇㄛ",
        "english": "to touch, feel(with hands)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "要不然": {
        "zhuyin": "ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ",
        "english": "otherwise",
        "book": "盲人國(lv.1 graded reader)",
    },
    "沒錯": {
        "zhuyin": "ㄇㄟˊ ㄘㄨㄛˋ",
        "english": "no mistake, quite sure",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡醒": {
        "zhuyin": "ㄕㄨㄟˋ ㄒㄧㄥˇ",
        "english": "to awaken from sleep, be fully awake",
        "book": "盲人國(lv.1 graded reader)",
    },
    "總是": {
        "zhuyin": "ㄗㄨㄥˇ ㄕˋ",
        "english": "always",
        "book": "盲人國(lv.1 graded reader)",
    },
    "有用": {
        "zhuyin": "ㄧㄡˇ ㄩㄥˋ",
        "english": "useful",
        "book": "盲人國(lv.1 graded reader)",
    },
    "坐起來": {
        "zhuyin": "ㄗㄨㄛˋ ㄑㄧˇ ㄌㄞˊ",
        "english": "to sit up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "暖和": {
        "zhuyin": "ㄋㄨㄢˇ ㄏㄜˊ",
        "english": "warm",
        "book": "盲人國(lv.1 graded reader)",
    },
    "睡不著": {
        "zhuyin": "ㄕㄨㄟˋ ㄅㄨˋ ㄓㄨㄛˊ",
        "english": "to be unable to fall asleep",
        "book": "盲人國(lv.1 graded reader)",
    },
    "對… 來說": {
        "zhuyin": "ㄉㄨㄟˋ … ㄌㄞˊ ㄕㄨㄛ",
        "english": "for... (a person)",
        "book": "盲人國(lv.1 graded reader)",
    },
    "可笑": {
        "zhuyin": "ㄎㄜˇ ㄒㄧㄠˋ",
        "english": "laughable",
        "book": "盲人國(lv.1 graded reader)",
    },
    "以為": {
        "zhuyin": "ㄧˇ ㄨㄟˊ",
        "english": "to (mistakenly) think that",
        "book": "盲人國(lv.1 graded reader)",
    },
    "拿起": {
        "zhuyin": "ㄋㄚˊ ㄑㄧˇ",
        "english": "to pick up",
        "book": "盲人國(lv.1 graded reader)",
    },
    "放下": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄚˋ",
        "english": "to put down",
        "book": "盲人國(lv.1 graded reader)",
    },
    "方向": {
        "zhuyin": "ㄈㄤ ㄒㄧㄤˋ",
        "english": "direction",
        "book": "盲人國(lv.1 graded reader)",
    },
    "再也不": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄅㄨˋ",
        "english": "never again",
        "book": "盲人國(lv.1 graded reader)",
    },
    "用心": {
        "zhuyin": "ㄩㄥˋ ㄒㄧㄣ",
        "english": "to be attentive",
        "book": "盲人國(lv.1 graded reader)",
    },
    "機會": {
        "zhuyin": "ㄐㄧ ㄏㄨㄟˋ",
        "english": "opportunity",
        "book": "盲人國(lv.1 graded reader)",
    },
    "關心": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧㄣ",
        "english": "be concerned over",
        "book": "盲人國(lv.1 graded reader)",
    },
    "再也": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ",
        "english": "never again",
        "book": "盲人國(lv.1 graded reader)",
    },
    "成為": {
        "zhuyin": "ㄔㄥˊ ㄨㄟˊ",
        "english": "to become",
        "book": "盲人國(lv.1 graded reader)",
    },
    "看不清": {
        "zhuyin": "ㄎㄢˋ ㄅㄨˋ ㄑㄧㄥ ",
        "english": "unable to see clearly",
        "book": "盲人國(lv.1 graded reader)",
    },
    //monkey's paw
    "外面": {
        "zhuyin": "ㄨㄞˋ ㄇㄧㄢˋ",
        "english": "outside",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一直": {
        "zhuyin": "ㄧ ㄓˊ",
        "english": "continuously, all along",
        "book": "侯爪(lv.1 graded reader)",
    },
    "下雨": {
        "zhuyin": "ㄒㄧㄚˋ ㄩˇ",
        "english": "to rain",
        "book": "侯爪(lv.1 graded reader)",
    },
    "暖和": {
        "zhuyin": "ㄋㄨㄢˇ ㄏㄨㄛ",
        "english": "warm",
        "book": "侯爪(lv.1 graded reader)",
    },
    "看起來": {
        "zhuyin": "ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "english": "to appear, look a certain way",
        "book": "侯爪(lv.1 graded reader)",
    },
    "工廠": {
        "zhuyin": "ㄍㄨㄥ ㄔㄤˇ",
        "english": "factory",
        "book": "侯爪(lv.1 graded reader)",
    },
    "有錢": {
        "zhuyin": "ㄧㄡˇ ㄑㄧㄢˊ",
        "english": "rich",
        "book": "侯爪(lv.1 graded reader)",
    },
    "好像": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄤˋ",
        "english": "to seem that",
        "book": "侯爪(lv.1 graded reader)",
    },
    "出門": {
        "zhuyin": "ㄔㄨ ㄇㄣˊ",
        "english": "to go out",
        "book": "侯爪(lv.1 graded reader)",
    },
    "叔叔": {
        "zhuyin": "ㄕㄨ ㄕㄨ",
        "english": "uncle",
        "book": "侯爪(lv.1 graded reader)",
    },
    "左右": {
        "zhuyin": "ㄗㄨㄛˇ ㄧㄡˋ",
        "english": "approximately, around",
        "book": "侯爪(lv.1 graded reader)",
    },
    "可能": {
        "zhuyin": "ㄎㄜˇ ㄋㄥˊ",
        "english": "maybe, possibly",
        "book": "侯爪(lv.1 graded reader)",
    },
    "還是": {
        "zhuyin": "ㄏㄞˊ ㄕˋ",
        "english": "still",
        "book": "侯爪(lv.1 graded reader)",
    },
    "說到": {
        "zhuyin": "ㄕㄨㄛ ㄉㄠˋ",
        "english": "to talk about, to mention",
        "book": "侯爪(lv.1 graded reader)",
    },
    "同事": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˋ",
        "english": "coworker",
        "book": "侯爪(lv.1 graded reader)",
    },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "english": "afterward",
        "book": "侯爪(lv.1 graded reader)",
    },
    "生意": {
        "zhuyin": "ㄕㄥ ㄧˋ",
        "english": "business",
        "book": "侯爪(lv.1 graded reader)",
    },
    "神奇": {
        "zhuyin": "ㄕㄣˊ ㄑㄧˊ",
        "english": "mystical, magical",
        "book": "侯爪(lv.1 graded reader)",
    },
    "故事": {
        "zhuyin": "ㄍㄨˋ ㄕˋ",
        "english": "story",
        "book": "侯爪(lv.1 graded reader)",
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "english": "interesting",
        "book": "侯爪(lv.1 graded reader)",
    },
    "害怕": {
        "zhuyin": "ㄏㄞˋ ㄆㄚˋ",
        "english": "to fear",
        "book": "侯爪(lv.1 graded reader)",
    },
    "離開": {
        "zhuyin": "ㄌㄧˊ ㄎㄞ",
        "english": "to depart, leave",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "english": "definitely, certainly",
        "book": "侯爪(lv.1 graded reader)",
    },
    "猴子": {
        "zhuyin": "ㄏㄡˊ ㄗˇ",
        "english": "monkey",
        "book": "侯爪(lv.1 graded reader)",
    },
    "爪子": {
        "zhuyin": "ㄓㄠˇ ㄗˇ",
        "english": "claw, paw",
        "book": "侯爪(lv.1 graded reader)",
    },
    "猴爪": {
        "zhuyin": "ㄏㄡˊ ㄓㄠˇ",
        "english": "monkey paw",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一下子": {
        "zhuyin": "ㄧ ㄒㄧㄚˋ ㄗˇ",
        "english": "all at once, all off a sudden",
        "book": "侯爪(lv.1 graded reader)",
    },
    "奇怪": {
        "zhuyin": "ㄑㄧˊ ㄍㄨㄞˋ",
        "english": "strange, weird",
        "book": "侯爪(lv.1 graded reader)",
    },
    "一家人": {
        "zhuyin": "ㄧ ㄐㄧㄚ ㄖㄣˊ",
        "english": "the whole family",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小看": {
        "zhuyin": "ㄒㄧㄠˇ ㄎㄢˋ",
        "english": "to look down upon, think little of",
        "book": "侯爪(lv.1 graded reader)",
    },
    "魔力": {
        "zhuyin": "ㄇㄛˊ ㄌㄧˋ",
        "english": "magical power, magic",
        "book": "侯爪(lv.1 graded reader)",
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "english": "serious, earnest",
        "book": "侯爪(lv.1 graded reader)",
    },
    "實現": {
        "zhuyin": "ㄕˊ ㄒㄧㄢˋ",
        "english": "to realize, make real",
        "book": "侯爪(lv.1 graded reader)",
    },
    "願望": {
        "zhuyin": "ㄩㄢˋ ㄨㄤˋ",
        "english": "a wish",
        "book": "侯爪(lv.1 graded reader)",
    },
    "好奇": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ",
        "english": "curious",
        "book": "侯爪(lv.1 graded reader)",
    },
    "得到": {
        "zhuyin": "ㄉㄜˊ ㄉㄠˋ",
        "english": "get, gain",
        "book": "侯爪(lv.1 graded reader)",
    },
    "失去": {
        "zhuyin": "ㄕ ㄑㄩˋ",
        "english": "to lose (something)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小聲": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄥ",
        "english": "in a low voice",
        "book": "侯爪(lv.1 graded reader)",
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "english": "sad, upset",
        "book": "侯爪(lv.1 graded reader)",
    },
    "老婆": {
        "zhuyin": "ㄌㄠˇ ㄆㄛˊ",
        "english": "wife",
        "book": "侯爪(lv.1 graded reader)",
    },
    "沒用": {
        "zhuyin": "ㄇㄟˊ ㄩㄥˋ",
        "english": "useless",
        "book": "侯爪(lv.1 graded reader)",
    },
    "送給": {
        "zhuyin": "ㄙㄨㄥˋ ㄍㄟˇ",
        "english": "to give to (someone)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "發生": {
        "zhuyin": "ㄈㄚ ㄕㄥ",
        "english": "to happen, to occur",
        "book": "侯爪(lv.1 graded reader)",
    },
    "也許": {
        "zhuyin": "ㄧㄝˇ ㄒㄩˇ",
        "english": "perhaps, maybe",
        "book": "侯爪(lv.1 graded reader)",
    },
    "相信": {
        "zhuyin": "ㄒㄧㄤ ㄒㄧㄣˋ",
        "english": "to believe",
        "book": "侯爪(lv.1 graded reader)",
    },
    "許願": {
        "zhuyin": "ㄒㄩˇ ㄩㄢˋ",
        "english": "to make a wish",
        "book": "侯爪(lv.1 graded reader)",
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "english": "to be careful",
        "book": "侯爪(lv.1 graded reader)",
    },
    "應該": {
        "zhuyin": "ㄧㄥ ㄍㄞ",
        "english": "should, ought to",
        "book": "侯爪(lv.1 graded reader)",
    },
    "想好": {
        "zhuyin": "ㄒㄧㄤˇ ㄏㄠˇ",
        "english": "to think over",
        "book": "侯爪(lv.1 graded reader)",
    },
    "記得": {
        "zhuyin": "ㄐㄧˋ ㄉㄜˊ",
        "english": "to remember",
        "book": "侯爪(lv.1 graded reader)",
    },
    "樣子": {
        "zhuyin": "ㄧㄤˋ ㄗˇ",
        "english": "appearance",
        "book": "侯爪(lv.1 graded reader)",
    },
    "不一定": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄉㄧㄥˋ",
        "english": "not necessarily",
        "book": "侯爪(lv.1 graded reader)",
    },
    "希望": {
        "zhuyin": "ㄒㄧ ㄨㄤˋ",
        "english": "to hope",
        "book": "侯爪(lv.1 graded reader)",
    },
    "還給": {
        "zhuyin": "ㄏㄨㄢˊ ㄍㄟˇ",
        "english": "to return (something) to (someone)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "需要": {
        "zhuyin": "ㄒㄩ ㄧㄠˋ",
        "english": "to need",
        "book": "侯爪(lv.1 graded reader)",
    },
    "點頭": {
        "zhuyin": "ㄉㄧㄢˇ ㄊㄡˊ",
        "english": "to nod one's head",
        "book": "侯爪(lv.1 graded reader)",
    },
    "可怕": {
        "zhuyin": "ㄎㄜˇ ㄆㄚˋ",
        "english": "frightening, scary",
        "book": "侯爪(lv.1 graded reader)",
    },
    "地上": {
        "zhuyin": "ㄉㄧˋ ㄕㄤˋ",
        "english": "on the ground",
        "book": "侯爪(lv.1 graded reader)",
    },
    "看來": {
        "zhuyin": "ㄎㄢˋ ㄌㄞˊ",
        "english": "to appear (that)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "方法": {
        "zhuyin": "ㄈㄤ ㄈㄚˇ",
        "english": "method, manner, way",
        "book": "侯爪(lv.1 graded reader)",
    },
    "窗外": {
        "zhuyin": "ㄔㄨㄤ ㄨㄞˋ",
        "english": "outside the window",
        "book": "侯爪(lv.1 graded reader)",
    },
    "失望": {
        "zhuyin": "ㄕ ㄨㄤˋ",
        "english": "to be disappointed",
        "book": "侯爪(lv.1 graded reader)",
    },
    "跟... 一樣": {
        "zhuyin": "ㄍㄣ ... ㄧ ㄧㄤˋ",
        "english": "the same as....",
        "book": "侯爪(lv.1 graded reader)",
    },
    "午飯": {
        "zhuyin": "ㄨˇ ㄈㄢˋ",
        "english": "lunch",
        "book": "侯爪(lv.1 graded reader)",
    },
    "走過來": {
        "zhuyin": "ㄗㄡˇ ㄍㄨㄛˋ ㄌㄞˊ",
        "english": "to walk over",
        "book": "侯爪(lv.1 graded reader)",
    },
    "站起來": {
        "zhuyin": "ㄓㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "english": "to stand up",
        "book": "侯爪(lv.1 graded reader)",
    },
    "出事": {
        "zhuyin": "ㄔㄨ ㄕˋ",
        "english": "to have an accident",
        "book": "侯爪(lv.1 graded reader)",
    },
    "機器": {
        "zhuyin": "ㄐㄧ ㄑㄧˋ",
        "english": "machine",
        "book": "侯爪(lv.1 graded reader)",
    },
    "墓地": {
        "zhuyin": "ㄇㄨˋ ㄉㄧˋ",
        "english": "grave, cemetery",
        "book": "侯爪(lv.1 graded reader)",
    },
    "再也不": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄅㄨˋ",
        "english": "never again",
        "book": "侯爪(lv.1 graded reader)",
    },
    "白天": {
        "zhuyin": "ㄅㄞˊ ㄊㄧㄢ",
        "english": "daytime",
        "book": "侯爪(lv.1 graded reader)",
    },
    "睡不著": {
        "zhuyin": "ㄕㄨㄟˋ ㄅㄨˋ ㄓㄨㄛˊ",
        "english": "to be unable to sleep",
        "book": "侯爪(lv.1 graded reader)",
    },
    "回到… 身邊": {
        "zhuyin": "ㄏㄨㄟˊ ㄉㄠˋ … ㄕㄣ ㄅㄧㄢ",
        "english": "to return to ... (someone)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "再也沒": {
        "zhuyin": "ㄗㄞˋ ㄧㄝˇ ㄇㄟˊ",
        "english": "never again have",
        "book": "侯爪(lv.1 graded reader)",
    },
    "聲音": {
        "zhuyin": "ㄕㄥ ㄧㄣ",
        "english": "noise",
        "book": "侯爪(lv.1 graded reader)",
    },
    "老天": {
        "zhuyin": "ㄌㄠˇ ㄊㄧㄢ",
        "english": "heaven",
        "book": "侯爪(lv.1 graded reader)",
    },
    "面前": {
        "zhuyin": "ㄇㄧㄢˋ ㄑㄧㄢˊ",
        "english": "in front of ones face",
        "book": "侯爪(lv.1 graded reader)",
    },
    "發出": {
        "zhuyin": "ㄈㄚ ㄔㄨ",
        "english": "to let out, send out",
        "book": "侯爪(lv.1 graded reader)",
    },
    "跑過去": {
        "zhuyin": "ㄆㄠˇ ㄍㄨㄛˋ ㄑㄩˋ",
        "english": "to run over (to)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "平常": {
        "zhuyin": "ㄆㄧㄥˊ ㄔㄤˊ",
        "english": "ordinary, common",
        "book": "侯爪(lv.1 graded reader)",
    },
    "雲南": {
        "zhuyin": "ㄩㄣˊ ㄋㄢˊ",
        "english": "Yunnan",
        "book": "侯爪(lv.1 graded reader)",
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "english": "Zhang(last name)",
        "book": "侯爪(lv.1 graded reader)",
    },
    // "希": {
    //     "zhuyin": "ㄒㄧ",
    //     "pinyin": "",
    //     "english": "hope(name char)",
    //     "book": "侯爪(lv.1 graded reader)",
    // },
    "平": {
        "zhuyin": "ㄆㄧㄥˊ",
        "english": "even, flat, calm(name char)",
        "book": "侯爪(lv.1 graded reader)",
    },
    "貴": {
        "zhuyin": "ㄍㄨㄟˋ",
        "english": "expensive, noble, precious",
        "book": "侯爪(lv.1 graded reader)",
    },
    "運": {
        "zhuyin": "ㄩㄣˋ",
        "english": "movement, luck",
        "book": "侯爪(lv.1 graded reader)",
    },
    "總是": {
        "zhuyin": "ㄗㄨㄥˇ ㄕˋ",
        "english": "always",
        "book": "侯爪(lv.1 graded reader)",
    },
    "聲": {
        "zhuyin": "ㄕㄥ",
        "english": "sound",
        "book": "侯爪(lv.1 graded reader)",
    },
    "萬": {
        "zhuyin": "ㄨㄢˋ",
        "english": "ten thousand",
        "book": "侯爪(lv.1 graded reader)",
    },
    //Emma
    "老板": {
        "zhuyin": "ㄌㄠˇ ㄅㄢˇ",
        "english": "boss",
        "book": "安末(lv.1 graded reader)",
    },
    "公司": {
        "zhuyin": "ㄍㄨㄥ ㄙ",
        "english": "company",
        "book": "安末(lv.1 graded reader)",
    },
    "設計": {
        "zhuyin": "ㄕㄜˋ ㄐㄧˋ",
        "english": "design",
        "book": "安末(lv.1 graded reader)",
    },
    "長得": {
        "zhuyin": "ㄔㄤˊ ㄉㄜˊ",
        "english": "to look(pretty, the same, ect)",
        "book": "安末(lv.1 graded reader)",
    },
    "酒吧": {
        "zhuyin": "ㄐㄧㄡˇ ㄅㄚ",
        "english": "bar",
        "book": "安末(lv.1 graded reader)",
    },
    "想法": {
        "zhuyin": "ㄒㄧㄤˇ ㄈㄚˇ",
        "english": "idea, thinking",
        "book": "安末(lv.1 graded reader)",
    },
    "最近": {
        "zhuyin": "ㄗㄨㄟˋ ㄐㄧㄣˋ",
        "english": "recently, these days",
        "book": "安末(lv.1 graded reader)",
    },
    "姑姑": {
        "zhuyin": "ㄍㄨ ㄍㄨ",
        "english": "father's sister",
        "book": "安末(lv.1 graded reader)",
    },
    "沒想到": {
        "zhuyin": "ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ",
        "english": "didn't expect",
        "book": "安末(lv.1 graded reader)",
    },
    "結婚": {
        "zhuyin": "ㄐㄧㄝˊ ㄏㄨㄣ",
        "english": "to get married",
        "book": "安末(lv.1 graded reader)",
    },
    "咖啡": {
        "zhuyin": "ㄎㄚ ㄈㄟ",
        "english": "coffee",
        "book": "安末(lv.1 graded reader)",
    },
    "關係": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧˋ",
        "english": "relation, relationship",
        "book": "安末(lv.1 graded reader)",
    },
    "生意": {
        "zhuyin": "ㄕㄥ ㄧˋ",
        "english": "buisness",
        "book": "安末(lv.1 graded reader)",
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "english": "to be careful",
        "book": "安末(lv.1 graded reader)",
    },
    "相信": {
        "zhuyin": "ㄒㄧㄤ ㄒㄧㄣˋ",
        "english": "to believe",
        "book": "安末(lv.1 graded reader)",
    },
    "叫外賣": {
        "zhuyin": "ㄐㄧㄠˋ ㄨㄞˋ ㄇㄞˋ",
        "english": "to order take-out",
        "book": "安末(lv.1 graded reader)",
    },
    "周末": {
        "zhuyin": "ㄓㄡ ㄇㄛˋ",
        "english": "weekend",
        "book": "安末(lv.1 graded reader)",
    },
    "不好意思": {
        "zhuyin": "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ",
        "english": "to feel embarrassed or awkward",
        "book": "安末(lv.1 graded reader)",
    },
    "發短信": {
        "zhuyin": "ㄈㄚ ㄉㄨㄢˇ ㄒㄧㄣˋ",
        "english": "send out a text message",
        "book": "安末(lv.1 graded reader)",
    },
    "發現": {
        "zhuyin": "ㄈㄚ ㄒㄧㄢˋ",
        "english": "to find, discover",
        "book": "安末(lv.1 graded reader)",
    },
    "生日": {
        "zhuyin": "ㄕㄥ ㄖˋ",
        "english": "birthday",
        "book": "安末(lv.1 graded reader)",
    },
    "自拍": {
        "zhuyin": "ㄗˋ ㄆㄞ",
        "english": "to take a selfie",
        "book": "安末(lv.1 graded reader)",
    },
    "網上": {
        "zhuyin": "ㄨㄤˇ ㄕㄤˋ",
        "english": "online",
        "book": "安末(lv.1 graded reader)",
    },
    "親": {
        "zhuyin": "ㄑㄧㄣ",
        "english": "kiss",
        "book": "安末(lv.1 graded reader)",
    },
    "發生": {
        "zhuyin": "ㄈㄚ ㄕㄥ",
        "english": "to happen",
        "book": "安末(lv.1 graded reader)",
    },
    "以為": {
        "zhuyin": "ㄧˇ ㄨㄟˊ",
        "english": "to (mistakenly) think",
        "book": "安末(lv.1 graded reader)",
    },
    "身邊": {
        "zhuyin": "ㄕㄣ ㄅㄧㄢ",
        "english": "at one's side, on hand",
        "book": "安末(lv.1 graded reader)",
    },
    "好意": {
        "zhuyin": "ㄏㄠˇ ㄧˋ",
        "english": "good intentions, kindness",
        "book": "安末(lv.1 graded reader)",
    },
    "出差": {
        "zhuyin": "ㄔㄨ ㄔㄚˋ",
        "english": "to go on a buisness trip",
        "book": "安末(lv.1 graded reader)",
    },
    "過得": {
        "zhuyin": "ㄍㄨㄛˋ ㄉㄜˊ",
        "english": "to get by, spend time",
        "book": "安末(lv.1 graded reader)",
    },
    //journey to the center of the earth
    "教": {
        "zhuyin": "ㄐㄧㄠˋ",
        "english": "to teach",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "地質學": {
        "zhuyin": "ㄉㄧˋ ㄓˋ ㄒㄩㄝˊ",
        "english": "Geology",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "興奮": {
        "zhuyin": "ㄒㄧㄥ ㄈㄣˋ",
        "english": "excited",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "紙": {
        "zhuyin": "ㄓˇ",
        "english": "paper",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "english": "to lose, drop",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "秘密": {
        "zhuyin": "ㄇㄧˋ ㄇㄧˋ",
        "english": "secret",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "不管": {
        "zhuyin": "ㄅㄨˋ ㄍㄨㄢˇ",
        "english": "no matter",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "完全": {
        "zhuyin": "ㄨㄢˊ ㄑㄩㄢˊ",
        "english": "completely",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "休息": {
        "zhuyin": "ㄒㄧㄡ ㄒㄧ",
        "english": "to rest",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "不停地": {
        "zhuyin": "ㄅㄨˋ ㄊㄧㄥˊ ㄉㄧˋ",
        "english": "unceasingly",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "突然": {
        "zhuyin": "ㄊㄨ ㄖㄢˊ",
        "english": "suddenly",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "開始": {
        "zhuyin": "ㄎㄞ ㄕˇ",
        "english": "to start",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "影子": {
        "zhuyin": "ㄧㄥˇ ㄗˇ",
        "english": "shadow",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "敢": {
        "zhuyin": "ㄍㄢˇ",
        "english": "dare to",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "亂": {
        "zhuyin": "ㄌㄨㄢˋ",
        "english": "messy",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "擔心": {
        "zhuyin": "ㄉㄢ ㄒㄧㄣ",
        "english": "to worry about",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "出發": {
        "zhuyin": "ㄔㄨ ㄈㄚ",
        "english": "to set off",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "就算": {
        "zhuyin": "ㄐㄧㄡˋ ㄙㄨㄢˋ",
        "english": "even if",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "要是": {
        "zhuyin": "ㄧㄠˋ ㄕˋ",
        "english": "if",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "其實": {
        "zhuyin": "ㄑㄧˊ ㄕˊ",
        "english": "actually",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "改變": {
        "zhuyin": "ㄍㄞˇ ㄅㄧㄢˋ",
        "english": "to change, a change",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "工具": {
        "zhuyin": "ㄍㄨㄥ ㄐㄩˋ",
        "english": "tool",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "感覺": {
        "zhuyin": "ㄍㄢˇ ㄐㄩㄝˊ",
        "english": "to feel, feeling",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "扔": {
        "zhuyin": "ㄖㄥ",
        "english": "to throw",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "醒": {
        "zhuyin": "ㄒㄧㄥˇ",
        "english": "to awaken",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "除了": {
        "zhuyin": "ㄔㄨˊ ㄌㄧㄠˇ",
        "english": "except for, besides",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "同意": {
        "zhuyin": "ㄊㄨㄥˊ ㄧˋ",
        "english": "to agree",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "安全": {
        "zhuyin": "ㄢ ㄑㄩㄢˊ",
        "english": "safe, safety",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "太陽": {
        "zhuyin": "ㄊㄞˋ ㄧㄤˊ",
        "english": "the sun",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "深": {
        "zhuyin": "ㄕㄣ",
        "english": "deep",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "安靜": {
        "zhuyin": "ㄢ ㄐㄧㄥˋ",
        "english": "quiet",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "注意": {
        "zhuyin": "ㄓㄨˋ ㄧˋ",
        "english": "to pay attention to",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "發光": {
        "zhuyin": "ㄈㄚ ㄍㄨㄤ",
        "english": "to glow",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "光": {
        "zhuyin": "ㄍㄨㄤ",
        "english": "light",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "終於": {
        "zhuyin": "ㄓㄨㄥ ㄩˊ",
        "english": "finally",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "髒": {
        "zhuyin": "ㄗㄤˋ",
        "english": "dirty",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "餅": {
        "zhuyin": "ㄅㄧㄥˇ",
        "english": "salty pancake",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "方向": {
        "zhuyin": "ㄈㄤ ㄒㄧㄤˋ",
        "english": "direction",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "記下": {
        "zhuyin": "ㄐㄧˋ ㄒㄧㄚ",
        "english": "to write down, record",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "照明燈": {
        "zhuyin": "ㄓㄠˋ ㄇㄧㄥˊ ㄉㄥ",
        "english": "lantern",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "夠": {
        "zhuyin": "ㄍㄡˋ",
        "english": "enough",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "信心": {
        "zhuyin": "ㄒㄧㄣˋ ㄒㄧㄣ",
        "english": "confidence",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "力氣": {
        "zhuyin": "ㄌㄧˋ ㄑㄧˋ",
        "english": "physical strength",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "english": "urgent",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "暈": {
        "zhuyin": "ㄩㄣˋ",
        "english": "to faint",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "差點": {
        "zhuyin": "ㄔㄚˋ ㄉㄧㄢˇ",
        "english": "almost",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "洞": {
        "zhuyin": "ㄉㄨㄥˋ",
        "english": "cave, hole",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "噴": {
        "zhuyin": "ㄆㄣ",
        "english": "to spew",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "了不起": {
        "zhuyin": "ㄌㄧㄠˇ ㄅㄨˋ ㄑㄧˇ",
        "english": "amazing, impressive",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "只要": {
        "zhuyin": "ㄓ ㄧㄠˋ",
        "english": "as long as",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "解決": {
        "zhuyin": "ㄐㄧㄝˇ ㄐㄩㄝˊ",
        "english": "to solve",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ",
        "english": "or",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "公里": {
        "zhuyin": "ㄍㄨㄥ ㄌㄧˇ",
        "english": "kilometer",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "修": {
        "zhuyin": "ㄒㄧㄡ",
        "english": "to fix",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "意外": {
        "zhuyin": "ㄧˋ ㄨㄞˋ",
        "english": "surprise, surprising",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "特別": {
        "zhuyin": "ㄊㄜˋ ㄅㄧㄝˊ",
        "english": "special, especially",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "撞": {
        "zhuyin": "ㄓㄨㄤˋ",
        "english": "to crash into",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "船": {
        "zhuyin": "ㄔㄨㄢˊ",
        "english": "boat",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "海面": {
        "zhuyin": "ㄏㄞˇ ㄇㄧㄢˋ",
        "english": "surface of the sea",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "靜靜的": {
        "zhuyin": "ㄐㄧㄥˋ ㄐㄧㄥˋ ㄉㄜ˙",
        "english": "silently",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "植物": {
        "zhuyin": "ㄓˊ ㄨˋ",
        "english": "plant",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "骨頭": {
        "zhuyin": "ㄍㄨˇ ㄊㄡˊ",
        "english": "bone",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "怪物": {
        "zhuyin": "ㄍㄨㄞˋ ㄨˋ",
        "english": "monster",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "島": {
        "zhuyin": "ㄉㄠˇ",
        "english": "island",
        "book": "地心遊記(lv.2 graded reader)",
    },
    "噴發": {
        "zhuyin": "ㄆㄣ ㄈㄚ",
        "english": "to spout, erupt",
        "book": "地心遊記(lv.2 graded reader)",
    },
    //secret garden
    "理": {
        "zhuyin": "ㄌㄧˇ",
        "english": "to pay attention to",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "好像": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄤˋ",
        "english": "it seems",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "阿姨": {
        "zhuyin": "ㄚ ㄧˊ",
        "english": "maid, housekeeper",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "瘦": {
        "zhuyin": "ㄕㄡˋ",
        "english": "thin",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "平時": {
        "zhuyin": "ㄆㄧㄥˊ ㄕˊ",
        "english": "usual, usually",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "聽話": {
        "zhuyin": "ㄊㄧㄥ ㄏㄨㄚˋ",
        "english": "to obey, listen to words",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "健康": {
        "zhuyin": "ㄐㄧㄢˋ ㄎㄤ",
        "english": "healthy",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "學會": {
        "zhuyin": "ㄒㄩㄝˊ ㄏㄨㄟˋ",
        "english": "to learn",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "往前": {
        "zhuyin": "ㄨㄤˇ ㄑㄧㄢˊ",
        "english": "forward",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "不怎麼": {
        "zhuyin": "ㄅㄨˋ ㄗㄣˇ ㄇㄜ˙",
        "english": "not very",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "做事": {
        "zhuyin": "ㄗㄨㄛˋ ㄕˋ",
        "english": "to do things",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "牆": {
        "zhuyin": "ㄑㄧㄤˊ",
        "english": "wall",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "打理": {
        "zhuyin": "ㄉㄚˇ ㄌㄧˇ",
        "english": "to take care of",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "english": "to fall",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "緊張": {
        "zhuyin": "ㄐㄧㄣˇ ㄓㄤ",
        "english": "nervous",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "樹林": {
        "zhuyin": "ㄕㄨˋ ㄌㄧㄣˊ",
        "english": "forest",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "鑰匙": {
        "zhuyin": "ㄧㄠˋㄕ˙",
        "english": "key",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "種子": {
        "zhuyin": "ㄓㄨㄥˇ ㄗˇ",
        "english": "seed",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "放心": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄣ",
        "english": "to relax, be relieved",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "家具": {
        "zhuyin": "ㄐㄧㄚ ㄐㄩˋ",
        "english": "furniture",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "旅行": {
        "zhuyin": "ㄌㄩˇ ㄒㄧㄥˊ",
        "english": "to travel",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "恨": {
        "zhuyin": "ㄏㄣˋ",
        "english": "to hate",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "輪椅": {
        "zhuyin": "ㄌㄨㄣˊ ㄧˇ",
        "english": "wheelchair",
        "book": "秘密花園(lv.1 graded reader)",
    },
    "搬到": {
        "zhuyin": "ㄅㄢ ㄉㄠˋ",
        "english": "to move to",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "聯繫": {
        "zhuyin": "ㄌㄧㄢˊ ㄒㄧˋ",
        "english": "to contact, contact",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "沒想到": {
        "zhuyin": "ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ",
        "english": "didn't expect that",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "教書": {
        "zhuyin": "ㄐㄧㄠˋ ㄕㄨ",
        "english": "to teach classes",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "化學": {
        "zhuyin": "ㄏㄨㄚˋ ㄒㄩㄝˊ",
        "english": "Chemistry",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "實驗室": {
        "zhuyin": "ㄕˊ ㄧㄢˋ ㄕˋ",
        "english": "laboratory (experiment room)",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "實驗": {
        "zhuyin": "ㄕˊ ㄧㄢˋ",
        "english": "experiment",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "除了": {
        "zhuyin": "ㄔㄨˊ ㄌ",
        "english": "except for, besides",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "關心": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧㄣ",
        "english": "to show concern for",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "事情": {
        "zhuyin": "ㄕˋ ㄑㄧㄥˊ",
        "english": "matter, affair, thing",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "生活": {
        "zhuyin": "ㄕㄥ ㄏㄨㄛˊ",
        "english": "life",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "公交車": {
        "zhuyin": "ㄍㄨㄥ ㄐㄧㄠ ㄔㄜ",
        "english": "public bus",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "上班": {
        "zhuyin": "ㄕㄤˋ ㄅㄢ",
        "english": "go to work",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "下班": {
        "zhuyin": "ㄒㄧㄚˋ ㄅㄢ",
        "english": "get off work",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "習慣": {
        "zhuyin": "ㄒㄧˊ ㄍㄨㄢˋ",
        "english": "get used to, habit",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "以前": {
        "zhuyin": "ㄧˇ ㄑㄧㄢˊ",
        "english": "before, ago",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "於是": {
        "zhuyin": "ㄩˊ ㄕˋ",
        "english": "consequently",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "偷偷的": {
        "zhuyin": "ㄊㄡ ㄊㄡ ㄉㄜ˙",
        "english": "secretly, stealthily",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "跟在": {
        "zhuyin": "ㄍㄣ ㄗㄞˋ",
        "english": "to follow",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "緊張": {
        "zhuyin": "ㄐㄧㄣˇ ㄓㄤ",
        "english": "nervous",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "english": "hurry, anxious",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "煩": {
        "zhuyin": "ㄈㄢˊ",
        "english": "annoying, annoyed",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "願意": {
        "zhuyin": "ㄩㄢˋ ㄧˋ",
        "english": "to be willing (to do)",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "清楚": {
        "zhuyin": "ㄑㄧㄥ ㄔㄨˇ",
        "english": "clear",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "回頭": {
        "zhuyin": "ㄏㄨㄟˊ ㄊㄡˊ",
        "english": "to look back",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "老樣子": {
        "zhuyin": "ㄌㄠˇ ㄧㄤˋ ㄗˇ",
        "english": "same as always",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "原因": {
        "zhuyin": "ㄩㄢˊ ㄧㄣ",
        "english": "cause, reason",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "聊": {
        "zhuyin": "ㄌㄧㄠˊ",
        "english": "to chat",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "關係": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧˋ",
        "english": "relationship",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "短": {
        "zhuyin": "ㄉㄨㄢˇ",
        "english": "short",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "冷冰冰": {
        "zhuyin": "ㄌㄥˇ ㄅㄧㄥ ㄅㄧㄥ",
        "english": "ice cold",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "談": {
        "zhuyin": "ㄊㄢˊ",
        "english": "to talk (about)",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "藥水": {
        "zhuyin": "ㄧㄠˋ ㄕㄨㄟˇ",
        "english": "(liquid) medicine",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "心理學": {
        "zhuyin": "ㄒㄧㄣ ㄌㄧˇ ㄒㄩㄝˊ",
        "english": "Psychology",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "各種": {
        "zhuyin": "ㄍㄜˋ ㄓㄨㄥˇ",
        "english": "all kinds",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "其中": {
        "zhuyin": "ㄑㄧˊ ㄓㄨㄥ",
        "english": "among",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "睡著": {
        "zhuyin": "ㄕㄨㄟˋ ㄓㄨㄛˊ",
        "english": "to fall asleep",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "反應": {
        "zhuyin": "ㄈㄢˇ ㄧㄥ",
        "english": "reaction, response",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "金色": {
        "zhuyin": "ㄐㄧㄣ ㄙㄜˋ",
        "english": "gold (in color)",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "另外": {
        "zhuyin": "ㄌㄧㄥˋ ㄨㄞˋ",
        "english": "in addition",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "教學樓": {
        "zhuyin": "ㄐㄧㄠˋ ㄒㄩㄝˊ ㄌㄡˊ",
        "english": "classroom building",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "看… 一眼": {
        "zhuyin": "ㄎㄢˋ … ㄧ ㄧㄢˇ",
        "english": "to take a look at",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "化學品": {
        "zhuyin": "ㄏㄨㄚˋ ㄒㄩㄝˊ ㄆㄧㄣˇ",
        "english": "chemicals",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "辣椒": {
        "zhuyin": "ㄌㄚˋ ㄐㄧㄠ",
        "english": "hot pepper",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "也許": {
        "zhuyin": "ㄧㄝˇ ㄒㄩˇ",
        "english": "perhaps",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "english": "measure word for liquid in bottles",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "離開": {
        "zhuyin": "ㄌㄧˊ ㄎㄞ",
        "english": "to leave",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "戴": {
        "zhuyin": "ㄉㄞˋ",
        "english": "to wear(on the face, glasses, a mask)",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "面具": {
        "zhuyin": "ㄇㄧㄢˋ ㄐㄩˋ",
        "english": "mask",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "看上去": {
        "zhuyin": "ㄎㄢˋ ㄕㄤˋ ㄑㄩˋ",
        "english": "it would appear that",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "找死": {
        "zhuyin": "ㄓㄠˇ ㄙˇ",
        "english": "be looking to get killed",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "發火": {
        "zhuyin": "ㄈㄚ ㄏㄨㄛˇ",
        "english": "to lose one's temper",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "十萬": {
        "zhuyin": "ㄕˊ ㄨㄢˋ",
        "english": "100,000",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "老大": {
        "zhuyin": "ㄌㄠˇ ㄉㄚˋ",
        "english": "mob boss",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "借": {
        "zhuyin": "ㄐㄧㄝˋ",
        "english": "to borrow",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "黑社會": {
        "zhuyin": "ㄏㄟ ㄕㄜˋ ㄏㄨㄟˋ",
        "english": "the mob, organized crime",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "用力": {
        "zhuyin": "ㄩㄥˋ ㄌㄧˋ",
        "english": "forcefully",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "抓了起來": {
        "zhuyin": "ㄓㄨㄚ ㄌㄜ˙ ㄑㄧˇ ㄌㄞˊ",
        "english": "grabbed and lifted up",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "放下": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄚˋ",
        "english": "to put down",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "受傷": {
        "zhuyin": "ㄕㄡˋ ㄕㄤ",
        "english": "to be injured",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "english": "to fall",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "最後": {
        "zhuyin": "ㄗㄨㄟˋ ㄏㄡˋ",
        "english": "in the end",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "機會": {
        "zhuyin": "ㄐㄧ ㄏㄨㄟˋ",
        "english": "opportunity",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "站著": {
        "zhuyin": "ㄓㄢˋ ㄓㄨㄛˊ",
        "english": "standing",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "吵": {
        "zhuyin": "ㄔㄠˇ",
        "english": "noisy, to argue",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "怎麼回事": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄏㄨㄟˊ ㄕˋ",
        "english": "what's going on?",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "一開始": {
        "zhuyin": "ㄧ ㄎㄞ ㄕˇ",
        "english": "at first",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "掛了電話": {
        "zhuyin": "ㄍㄨㄚˋ ㄌㄜ˙ ㄉㄧㄢˋ ㄏㄨㄚˋ",
        "english": "hung up the phone",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "嚴重": {
        "zhuyin": "ㄧㄢˊ ㄓㄨㄥˋ",
        "english": "serious",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "解決": {
        "zhuyin": "ㄐㄧㄝˇ ㄐㄩㄝˊ",
        "english": "to resolve",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "聰明": {
        "zhuyin": "ㄘㄨㄥ ㄇㄧㄥˊ",
        "english": "smart, intelligent",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "住進": {
        "zhuyin": "ㄓㄨˋ ㄐㄧㄣˋ",
        "english": "to be admitted for overnight stay",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "放好": {
        "zhuyin": "ㄈㄤˋ ㄏㄠˇ",
        "english": "to put away",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "動作": {
        "zhuyin": "ㄉㄨㄥˋ ㄗㄨㄛˋ",
        "english": "action",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "有道理": {
        "zhuyin": "ㄧㄡˇ ㄉㄠˋ ㄌㄧˇ",
        "english": "make sense, reasonable",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "待": {
        "zhuyin": "ㄉㄞˋ",
        "english": "to stay",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "吵架": {
        "zhuyin": "ㄔㄠˇ ㄐㄧㄚˋ",
        "english": "to argue, fight",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "偷": {
        "zhuyin": "ㄊㄡ",
        "english": "to steal",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "老地方": {
        "zhuyin": "ㄌㄠˇ ㄉㄧˋ ㄈㄤ",
        "english": "the usual place",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "拿走": {
        "zhuyin": "ㄋㄚˊ ㄗㄡˇ",
        "english": "to walk off with",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "輕輕的": {
        "zhuyin": "ㄑㄧㄥ ㄑㄧㄥ ㄉㄜ˙",
        "english": "lightly",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "髒髒的": {
        "zhuyin": "ㄗㄤˋ ㄗㄤˋ ㄉㄜ˙",
        "english": "dirty",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "結果": {
        "zhuyin": "ㄐㄧㄝˊ ㄍㄨㄛˇ",
        "english": "as a result",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "english": "to leave (smth for smone",
        "book": "江可和黑德(lv.2 graded reader)",
    },
    "村子": {
        "zhuyin": "ㄘㄨㄣ ㄗˇ",
        "english": "village",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "死小孩": {
        "zhuyin": "ㄙˇ ㄒㄧㄠˇ ㄏㄞˊ",
        "english": "rotten kid",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "感謝": {
        "zhuyin": "ㄍㄢˇ ㄒㄧㄝˋ",
        "english": "to be grateful to",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "修理工": {
        "zhuyin": "ㄒㄧㄡ ㄌㄧˇ ㄍㄨㄥ",
        "english": "repairman",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "不管": {
        "zhuyin": "ㄅㄨˋ ㄍㄨㄢˇ",
        "english": "no matter",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "髒": {
        "zhuyin": "ㄗㄤˋ",
        "english": "dirty",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "破": {
        "zhuyin": "ㄆㄛˋ",
        "english": "worn out, run down",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "腳": {
        "zhuyin": "ㄐㄧㄠˇ",
        "english": "foot",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "犯人": {
        "zhuyin": "ㄈㄢˋ ㄖㄣˊ",
        "english": "convict",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "修理點": {
        "zhuyin": "ㄒㄧㄡ ㄌㄧˇ ㄉㄧㄢˇ",
        "english": "repair shop",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "按": {
        "zhuyin": "ㄢˋ",
        "english": "to press, hold down",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "千萬": {
        "zhuyin": "ㄑㄧㄢ ㄨㄢˋ",
        "english": "absolutely (not)",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "難道": {
        "zhuyin": "ㄋㄢˊ ㄉㄠˋ",
        "english": "could it be that...?",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "節日": {
        "zhuyin": "ㄐㄧㄝˊ ㄖˋ",
        "english": "holiday",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "月餅": {
        "zhuyin": "ㄩㄝˋ ㄅㄧㄥˇ",
        "english": "moon cake",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "買不起": {
        "zhuyin": " ㄇㄞˇ ㄅㄨˋ ㄑㄧˇ",
        "english": "cannot afford (to buy)",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "平時": {
        "zhuyin": "ㄆㄧㄥˊ ㄕˊ",
        "english": "usually",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "除了": {
        "zhuyin": "ㄔㄨˊ ㄌㄜ",
        "english": "except for",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "臉色": {
        "zhuyin": "ㄌㄧㄢˇ ㄙㄜˋ",
        "english": "the look on one's face",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "待": {
        "zhuyin": "ㄉㄞˋ",
        "english": "to stay",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "撞": {
        "zhuyin": "ㄓㄨㄤˋ",
        "english": "to crash into ",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "只有": {
        "zhuyin": "ㄓ ㄧㄡˇ",
        "english": "only if",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "只是": {
        "zhuyin": "ㄓ ㄕˋ",
        "english": "it's just that",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "願意": {
        "zhuyin": "ㄩㄢˋ ㄧˋ",
        "english": "to be willing",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "胖": {
        "zhuyin": "ㄆㄤˋ",
        "english": "fat",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "瘦": {
        "zhuyin": "ㄕㄡˋ ",
        "english": "thin",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "公主": {
        "zhuyin": "ㄍㄨㄥ ㄓㄨˇ",
        "english": "princess",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "有好": {
        "zhuyin": "ㄧㄡˇ ㄏㄠˇ",
        "english": "friendly",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "婚紗": {
        "zhuyin": "ㄏㄨㄣ ㄕㄚ",
        "english": "wedding dress",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "其實": {
        "zhuyin": "ㄑㄧˊ ㄕˊ",
        "english": "actually",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "無聊": {
        "zhuyin": "ㄨˊ ㄌㄧㄠˊ",
        "english": "bored, boring",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "笨": {
        "zhuyin": "ㄅㄣˋ",
        "english": "stupid",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "傷": {
        "zhuyin": "ㄕㄤ",
        "english": "to hurt (someone)",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "理解": {
        "zhuyin": "ㄌㄧˇ ㄐㄧㄝˇ",
        "english": "to understand, comprehend",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "心情": {
        "zhuyin": "ㄒㄧㄣ ㄑㄧㄥˊ",
        "english": "mood",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "打傷": {
        "zhuyin": "ㄉㄚˇ ㄕㄤ",
        "english": "to hit and injure",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "打算": {
        "zhuyin": "ㄉㄚˇ ㄙㄨㄢˋ",
        "english": "to plan to, plans",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "原來": {
        "zhuyin": "ㄩㄢˊ ㄌㄞˊ",
        "english": "originally",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "玩具": {
        "zhuyin": "ㄨㄢˊ ㄐㄩˋ",
        "english": "toy",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "幹活": {
        "zhuyin": "ㄍㄢ ㄏㄨㄛˊ",
        "english": "to do manual labor",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "就算": {
        "zhuyin": "ㄐㄧㄡˋ ㄙㄨㄢˋ",
        "english": "even if",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "只要": {
        "zhuyin": "ㄓ ㄧㄠˋ",
        "english": "as long as",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "住口": {
        "zhuyin": "ㄓㄨˋ ㄎㄡˇ",
        "english": "to shut one's mouth",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "了不起": {
        "zhuyin": "ㄌㄧㄠˇ ㄅㄨ ㄑㄧˇ",
        "english": "amazing",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "好不容易": {
        "zhuyin": "ㄏㄠˇ ㄅㄨˋ ㄖㄨㄥˊ ㄧˋ",
        "english": "with great difficulty",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "戴": {
        "zhuyin": "ㄉㄞˋ",
        "english": "to wear(glasses, jewelry, accessories)",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "打架": {
        "zhuyin": "ㄉㄚˇ ㄐㄧㄚˋ",
        "english": "to fight",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "贏": {
        "zhuyin": "ㄧㄥˊ",
        "english": "to win",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "親": {
        "zhuyin": "ㄑㄧㄣ",
        "english": "to kiss",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "要飯的": {
        "zhuyin": "ㄧㄠˋ ㄈㄢˋ ㄉㄜ˙",
        "english": "beggar",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "前途": {
        "zhuyin": "ㄑㄧㄢˊ ㄊㄨˊ",
        "english": "prospects, future, expectations",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "交給": {
        "zhuyin": "ㄐㄧㄠ ㄍㄟˇ",
        "english": "to hand over",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "意識到": {
        "zhuyin": "ㄧˋ ㄕˊ ㄉㄠˋ",
        "english": "to realize",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "家具": {
        "zhuyin": "ㄐㄧㄚ ㄐㄩˋ",
        "english": "furniture",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "english": "to become",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "失去": {
        "zhuyin": "ㄕ ㄑㄩˋ",
        "english": "to lose",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "認出": {
        "zhuyin": "ㄖㄣˋ ㄔㄨ",
        "english": "to recognize (someone)",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "律師": {
        "zhuyin": " ㄌㄩˋ ㄕ",
        "english": "lawyer",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "美好": {
        "zhuyin": "ㄇㄟˇ ㄏㄠˇ",
        "english": "wonderful, glorious",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "條件": {
        "zhuyin": "ㄊㄧㄠˊ ㄐㄧㄢˋ",
        "english": "condition, living conditions",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "受傷": {
        "zhuyin": "ㄕㄡˋ ㄕㄤ",
        "english": "to be injured",
        "book": "美好的前途（上）(lv.2 graded reader)",
    },
    "辦公室": {
        "zhuyin": "ㄅㄢˋ ㄍㄨㄥ ㄕˋ",
        "english": "office",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "小偷": {
        "zhuyin": "ㄒㄧㄠˇ ㄊㄡ",
        "english": "thief",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "注意": {
        "zhuyin": "ㄓㄨˋ ㄧˋ",
        "english": "to notice",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "輛": {
        "zhuyin": "ㄌㄧㄤˋ",
        "english": "measure word for cars",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "司機": {
        "zhuyin": "ㄙ ㄐㄧ",
        "english": "driver",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "認出": {
        "zhuyin": "ㄖㄣˋ ㄔㄨ",
        "english": "to recognize (someone)",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "無聊": {
        "zhuyin": "ㄨˊ ㄌㄧㄠˊ",
        "english": "bored, boring, lame",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "傷害": {
        "zhuyin": "ㄕㄤ ㄏㄞˋ",
        "english": "to hurt, harm",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "陽光": {
        "zhuyin": "ㄧㄤˊ ㄍㄨㄤ",
        "english": "sunlight",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "意識到": {
        "zhuyin": "ㄧˋ ㄕˊ ㄉㄠˋ",
        "english": "to realize",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "原來": {
        "zhuyin": "ㄩㄢˊ ㄌㄞˊ",
        "english": "it turns out that-, originally",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "於是": {
        "zhuyin": "ㄩˊ ㄕˋ",
        "english": "as a result-, and then-",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "信用卡": {
        "zhuyin": "ㄒㄧㄣˋ ㄩㄥˋ ㄎㄚˇ",
        "english": "credit card",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "撞": {
        "zhuyin": "ㄓㄨㄤˋ",
        "english": "to crash into",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "高一": {
        "zhuyin": "ㄍㄠ ㄧ",
        "english": "first year of high school",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "難道": {
        "zhuyin": "ㄋㄢˊ ㄉㄠˋ",
        "english": "could it be that? (rhetorical question)",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "真心": {
        "zhuyin": "ㄓㄣ ㄒㄧㄣ",
        "english": "sincere, heartfelt",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "感到": {
        "zhuyin": "ㄍㄢˇ ㄉㄠˋ",
        "english": "to feel",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "english": "leave behind, stay behind",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "感情": {
        "zhuyin": "ㄍㄢˇ ㄑㄧㄥˊ",
        "english": "emotion, sentiment",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "待": {
        "zhuyin": "ㄉㄞˋ",
        "english": "to stay",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "失望": {
        "zhuyin": "ㄕ ㄨㄤˋ",
        "english": "to be disappointed",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "怪": {
        "zhuyin": "ㄍㄨㄞˋ",
        "english": "to blame",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "受不了": {
        "zhuyin": "ㄕㄡˋ ㄅㄨˋ ㄌㄧㄠˇ",
        "english": "to be unable to stand (smth)",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "原因": {
        "zhuyin": "ㄩㄢˊ ㄧㄣ",
        "english": "cause, reason",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "條件": {
        "zhuyin": "ㄊㄧㄠˊ ㄐㄧㄢˋ",
        "english": "condition, living conditions",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "自然": {
        "zhuyin": "ㄗˋ ㄖㄢˊ",
        "english": "naturally, natural",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "放開": {
        "zhuyin": "ㄈㄤˋ ㄎㄞ",
        "english": "to let go",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "做生意": {
        "zhuyin": "ㄗㄨㄛˋ ㄕㄥ ㄧˋ",
        "english": "to do business",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "哥們兒": {
        "zhuyin": "ㄍㄜ ㄇㄣˊ ㄦˊ",
        "english": "dude, bro",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "罪": {
        "zhuyin": "ㄗㄨㄟˋ",
        "english": "crime, sin",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "嚴重": {
        "zhuyin": "ㄧㄢˊ ㄓㄨㄥˋ",
        "english": "serious, grave",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "同情": {
        "zhuyin": "ㄊㄨㄥˊ ㄑㄧㄥˊ",
        "english": "to sympathize with",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "照片": {
        "zhuyin": "ㄓㄠˋ ㄆㄧㄢˋ",
        "english": "photograph",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "意外": {
        "zhuyin": "ㄧˋ ㄨㄞˋ",
        "english": "unexpected",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "受傷": {
        "zhuyin": "ㄕㄡˋ ㄕㄤ",
        "english": "to be injured",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "倒": {
        "zhuyin": "ㄉㄠˇ",
        "english": "to fall over, fall down",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "交通事故": {
        "zhuyin": "ㄐㄧㄠ ㄊㄨㄥ ㄕˋ ㄍㄨˋ",
        "english": "traffic accident",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "拆": {
        "zhuyin": "ㄔㄞ",
        "english": "tear down, disassemble",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "離婚": {
        "zhuyin": "ㄌㄧˊ ㄏㄨㄣ",
        "english": "to get divorced",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "月亮": {
        "zhuyin": "ㄩㄝˋ ㄌㄧㄤˋ",
        "english": "the moon",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    "月光": {
        "zhuyin": "ㄩㄝˋ ㄍㄨㄤ",
        "english": "moonlight",
        "book": "美好的前途（下）(lv.2 graded reader)",
    },
    // "": {
    //     "zhuyin": "",
    //     "english": "",
    //     "book": "美好的前途（下）(lv.2 graded reader)",
    // },
};
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
    //500 words
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
        "english": "sing a song"
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
        "english": "to the side, besides"
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
        "english": "mobile phone, cell phone"
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
        "english": "night, in the evening"
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
const HSK2words = {
    //772 words
    "啊": {
        "zhuyin": "ㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ah"
    },
    "愛情": {
        "zhuyin": "ㄞˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Love"
    },
    "愛人": {
        "zhuyin": "ㄞˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lover"
    },
    "安靜": {
        "zhuyin": "ㄢ ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be quiet"
    },
    "安全": {
        "zhuyin": "ㄢ ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "security"
    },
    "白色": {
        "zhuyin": "ㄅㄞˊ ㄙㄜˋ",
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
        "zhuyin": "ㄅㄢˋ ㄧㄝˋ",
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
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full"
    },
    "報名": {
        "zhuyin": "ㄅㄠˋ ㄇㄧㄥˊ",
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
        "zhuyin": "ㄅㄟˇ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "north"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "carry on the back, shoulder"
    },
    "比如": {
        "zhuyin": "ㄅㄧˇ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "such as"
    },
    "比如說": {
        "zhuyin": "ㄅㄧˇ ㄖㄨˊ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for example"
    },
    "筆": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pen"
    },
    "筆記": {
        "zhuyin": "ㄅㄧˇ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "note, notes"
    },
    "筆記本": {
        "zhuyin": "ㄅㄧˇ ㄐㄧˋ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "notebook"
    },
    "必須": {
        "zhuyin": "ㄅㄧˋ ㄒㄩ",
        "pinyin": "",
        "level": "HSK2",
        "english": "must"
    },
    "邊": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "side"
    },
    "變": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "變成": {
        "zhuyin": "ㄅㄧㄢˋ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become, change into"
    },
    "遍": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "times"
    },
    "錶": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "watch"
    },
    "表": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exterior surface, a modal, to show one's opinion"
    },
    "表示": {
        "zhuyin": "ㄅㄧㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "express, represent, indicate"
    },
    "不錯": {
        "zhuyin": "ㄅㄨˋ ㄘㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not bad, pretty good"
    },
    "不但": {
        "zhuyin": "ㄅㄨˋ ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not only"
    },
    "不夠": {
        "zhuyin": "ㄅㄨˋ ㄍㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not enough"
    },
    "不過": {
        "zhuyin": "ㄅㄨˋ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "however"
    },
    "不太": {
        "zhuyin": "ㄅㄨˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not too-, not very much"
    },
    "不要": {
        "zhuyin": "ㄅㄨˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "don't"
    },
    "不好意思": {
        "zhuyin": "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sorry, feel embarrassed"
    },
    "不久": {
        "zhuyin": "ㄅㄨˋ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "soon"
    },
    "不滿": {
        "zhuyin": "ㄅㄨˋ ㄇㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dissatisfied"
    },
    "不如": {
        "zhuyin": "ㄅㄨˋ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not as good as"
    },
    "不少": {
        "zhuyin": "ㄅㄨˋ ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not a few, a lot"
    },
    "不同": {
        "zhuyin": "ㄅㄨˋ ㄊㄨㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "different"
    },
    "不行": {
        "zhuyin": "ㄅㄨˋ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "no way, out of the question"
    },
    "不一定": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not necessarily, uncertain"
    },
    "不一會兒": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄏㄨㄟˋ ㄦˊ",
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
    "才": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "only, just"
    },
    "菜單": {
        "zhuyin": "ㄘㄞˋ ㄉㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "menu"
    },
    "參觀": {
        "zhuyin": "ㄘㄢ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "visit"
    },
    "參加": {
        "zhuyin": "ㄘㄢ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "participate in"
    },
    "草": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grass"
    },
    "草地": {
        "zhuyin": "ㄘㄠˇ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grass, lawn"
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "layer"
    },
    "查": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "search, check"
    },
    "差不多": {
        "zhuyin": "ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "almost"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "long"
    },
    "常見": {
        "zhuyin": "ㄔㄤˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "common"
    },
    "常用": {
        "zhuyin": "ㄔㄤˊ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in common use"
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "site"
    },
    "超過": {
        "zhuyin": "ㄔㄠ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exceed"
    },
    "超市": {
        "zhuyin": "ㄔㄠ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "supermarket"
    },
    "車輛": {
        "zhuyin": "ㄔㄜ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "car, vehicle"
    },
    "稱": {
        "zhuyin": "ㄔㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "call, say"
    },
    "成": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become, finish"
    },
    "成績": {
        "zhuyin": "ㄔㄥˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "achievement"
    },
    "成為": {
        "zhuyin": "ㄔㄥˊ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become"
    },
    "重複": {
        "zhuyin": "ㄔㄨㄥˋ ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "repeat"
    },
    "重新": {
        "zhuyin": "ㄔㄨㄥˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "again"
    },
    "出發": {
        "zhuyin": "ㄔㄨ ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "set out"
    },
    "出國": {
        "zhuyin": "ㄔㄨ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go abroad"
    },
    "出口": {
        "zhuyin": "ㄔㄨ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "export"
    },
    "出門": {
        "zhuyin": "ㄔㄨ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go out"
    },
    "出生": {
        "zhuyin": "ㄔㄨ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "birth"
    },
    "出現": {
        "zhuyin": "ㄔㄨ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "appear"
    },
    "出院": {
        "zhuyin": "ㄔㄨ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discharged, leave the hospital"
    },
    "出租": {
        "zhuyin": "ㄔㄨ ㄗㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "rent"
    },
    "出租車": {
        "zhuyin": "ㄔㄨ ㄗㄨ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "taxi"
    },
    "船": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ship"
    },
    "吹": {
        "zhuyin": "ㄔㄨㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blow"
    },
    "春節": {
        "zhuyin": "ㄔㄨㄣ ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Spring Festival, Chinese New Year"
    },
    "春天": {
        "zhuyin": "ㄔㄨㄣ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "spring"
    },
    "詞": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "word"
    },
    "詞典": {
        "zhuyin": "ㄘˊ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dictionary"
    },
    "詞語": {
        "zhuyin": "ㄘˊ ㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "terms"
    },
    "從小": {
        "zhuyin": "ㄘㄨㄥˊ ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "from childhood"
    },
    //84/772 done
    "答應": {
        "zhuyin": "ㄉㄚˊ ㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "promise"
    },
    "打工": {
        "zhuyin": "ㄉㄚˇ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "work"
    },
    "打算": {
        "zhuyin": "ㄉㄚˇ ㄙㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "plan"
    },
    "打印": {
        "zhuyin": "ㄉㄚˇ ㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "print"
    },
    "大部分": {
        "zhuyin": "ㄉㄚˋ ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most"
    },
    "大大": {
        "zhuyin": "ㄉㄚˋ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "greatly, enormously"
    },
    "大多數": {
        "zhuyin": "ㄉㄚˋ ㄉㄨㄛ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most, great majority"
    },
    "大海": {
        "zhuyin": "ㄉㄚˋ ㄏㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sea"
    },
    "大家": {
        "zhuyin": "ㄉㄚˋ ㄐㄧㄚ",
        "pinyin": "dà jiā",
        "level": "HSK2",
        "english": "everyone, everybody"
    },
    "大量": {
        "zhuyin": "ㄉㄚˋ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a lot of, lots of"
    },
    "大門": {
        "zhuyin": "ㄉㄚˋ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "door, gate"
    },
    "大人": {
        "zhuyin": "ㄉㄚˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "adult"
    },
    "大聲": {
        "zhuyin": "ㄉㄚˋ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "loud"
    },
    "大小": {
        "zhuyin": "ㄉㄚˋ ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "size"
    },
    "大衣": {
        "zhuyin": "ㄉㄚˋ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "overcoat"
    },
    "大自然": {
        "zhuyin": "ㄉㄚˋ ㄗˋ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nature"
    },
    "帶": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "belt"
    },
    "帶來": {
        "zhuyin": "ㄉㄞˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bring"
    },
    "單位": {
        "zhuyin": "ㄉㄢ ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Company"
    },
    "但": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "but, however"
    },
    "但是": {
        "zhuyin": "ㄉㄢˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "but, however"
    },
    "蛋": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "egg"
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "when"
    },
    "當時": {
        "zhuyin": "ㄉㄤ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time"
    },
    "倒": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall, topople, fail"
    },
    "到處": {
        "zhuyin": "ㄉㄠˋ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "everywhere"
    },
    "倒": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inverted"
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "road, way, path"
    },
    "道理": {
        "zhuyin": "ㄉㄠˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "truth"
    },
    "道路": {
        "zhuyin": "ㄉㄠˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "road, way, path"
    },
    "得": {
        "zhuyin": "ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get"
    },
    "得出": {
        "zhuyin": "ㄉㄜˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "obtain results, reach conclusion"
    },
    //116/772 done
    "的話": {
        "zhuyin": "ㄉㄜ˙ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "if"
    },
    "得": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "(auxiliary verb)"
    },
    "燈": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lamp"
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "etc.; and so on"
    },
    "等到": {
        "zhuyin": "ㄉㄥˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wait until, by the time"
    },
    "等於": {
        "zhuyin": "ㄉㄥˇ ㄩˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be equal to"
    },
    "低": {
        "zhuyin": "ㄉㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "low"
    },
    "地球": {
        "zhuyin": "ㄉㄧˋ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "earth"
    },
    "地鐵": {
        "zhuyin": "ㄉㄧˋ ㄊㄧㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "metro"
    },
    "地鐵站": {
        "zhuyin": "ㄉㄧˋ ㄊㄧㄝˇ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "subway station"
    },
    "點頭": {
        "zhuyin": "ㄉㄧㄢˇ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to nod(one's head)"
    },
    "店": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shop, store"
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall"
    },
    "東北": {
        "zhuyin": "ㄉㄨㄥ ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "northeast"
    },
    "東方": {
        "zhuyin": "ㄉㄨㄥ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "east"
    },
    "東南": {
        "zhuyin": "ㄉㄨㄥ ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "southeast"
    },
    "冬天": {
        "zhuyin": "ㄉㄨㄥ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "winter"
    },
    "懂": {
        "zhuyin": "ㄉㄨㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "understand"
    },
    "懂得": {
        "zhuyin": "ㄉㄨㄥˇ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "know, understand, comprehend"
    },
    "動物": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "animal"
    },
    "動物園": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "zoo"
    },
    "讀音": {
        "zhuyin": "ㄉㄨˊ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pronunciation"
    },
    "度": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "degree, limit"
    },
    "短": {
        "zhuyin": "ㄉㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "short"
    },
    "短信": {
        "zhuyin": "ㄉㄨㄢˇ ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "message"
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "paragraph"
    },
    "隊": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team"
    },
    "隊長": {
        "zhuyin": "ㄉㄨㄟˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team leader, captain"
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to, at, face, be opposite, answer"
    },
    "對話": {
        "zhuyin": "ㄉㄨㄟˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dialogue"
    },
    "對面": {
        "zhuyin": "ㄉㄨㄟˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opposite side"
    },
    "多": {
        "zhuyin": "ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "much more, far more"
    },
    "多久": {
        "zhuyin": "ㄉㄨㄛ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how long"
    },
    "多麼": {
        "zhuyin": "ㄉㄨㄛ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "what"
    },
    "多數": {
        "zhuyin": "ㄉㄨㄛ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most, majority"
    },
    "多雲": {
        "zhuyin": "ㄉㄨㄛ ㄩㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloudy"
    },
    "而且": {
        "zhuyin": "ㄦˊ ㄑㄧㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "and"
    },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "send out"
    },
    "發現": {
        "zhuyin": "ㄈㄚ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "find, discover"
    },
    "飯館": {
        "zhuyin": "ㄈㄢˋ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "restaurant"
    },
    "方便": {
        "zhuyin": "ㄈㄤ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "convenient"
    },
    "方便麵": {
        "zhuyin": "ㄈㄤ ㄅㄧㄢˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "instant noodles"
    },
    "方法": {
        "zhuyin": "ㄈㄤ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "method"
    },
    "方面": {
        "zhuyin": "ㄈㄤ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "aspect"
    },
    "方向": {
        "zhuyin": "ㄈㄤ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "direction"
    },
    "放下": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "put, lay down, drop"
    },
    "放心": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "don't worry"
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "divide, part, distribute"
    },
    "分開": {
        "zhuyin": "ㄈㄣ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "separate part"
    },
    "分數": {
        "zhuyin": "ㄈㄣ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "score, mark, fraction"
    },
    "分鐘": {
        "zhuyin": "ㄈㄣ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "minute"
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "share"
    },
    "服務": {
        "zhuyin": "ㄈㄨˊ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "service"
    },
    "複習": {
        "zhuyin": "ㄈㄨˋ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "review"
    },
    "該": {
        "zhuyin": "ㄍㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "deserve, should, owe"
    },
    "改": {
        "zhuyin": "ㄍㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change, correct, revise, switch over"
    },
    "改變": {
        "zhuyin": "ㄍㄞˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "乾杯": {
        "zhuyin": "ㄍㄢ ㄅㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cheers!"
    },
    "感到": {
        "zhuyin": "ㄍㄢˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "feel, sense"
    },
    "感動": {
        "zhuyin": "ㄍㄢˇ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be moved"
    },
    "感覺": {
        "zhuyin": "ㄍㄢˇ ㄐㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "feel"
    },
    "感謝": {
        "zhuyin": "ㄍㄢˇ ㄒㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thank"
    },
    "幹活兒": {
        "zhuyin": "ㄍㄢ ㄏㄨㄛˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "work on a job"
    },
    "剛": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just"
    },
    "剛才": {
        "zhuyin": "ㄍㄤ ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just"
    },
    "剛剛": {
        "zhuyin": "ㄍㄤ ㄍㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just, only, just a moment ago"
    },
    "高級": {
        "zhuyin": "ㄍㄠ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "senior"
    },
    "高中": {
        "zhuyin": "ㄍㄠ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "senior high school"
    },
    "個子": {
        "zhuyin": "ㄍㄜˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "height"
    },
    "更": {
        "zhuyin": "ㄍㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "more"
    },
    "公共汽車": {
        "zhuyin": "ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bus"
    },
    "公交車": {
        "zhuyin": "ㄍㄨㄥ ㄐㄧㄠ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bus"
    },
    "公斤": {
        "zhuyin": "ㄍㄨㄥ ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilogram"
    },
    "公里": {
        "zhuyin": "ㄍㄨㄥ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilometer"
    },
    "公路": {
        "zhuyin": "ㄍㄨㄥ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "highway"
    },
    "公平": {
        "zhuyin": "ㄍㄨㄥ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fair"
    },
    "公司": {
        "zhuyin": "ㄍㄨㄥ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "company"
    },
    "公園": {
        "zhuyin": "ㄍㄨㄥ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "public park"
    },
    "狗": {
        "zhuyin": "ㄍㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dog"
    },
    "夠": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enough"
    },
    "故事": {
        "zhuyin": "ㄍㄨˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "story"
    },
    "故意": {
        "zhuyin": "ㄍㄨˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "deliberately"
    },
    "顧客": {
        "zhuyin": "ㄍㄨˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "customer"
    },
    "關機": {
        "zhuyin": "ㄍㄨㄢ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shutdown"
    },
    "關心": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "care for"
    },
    "觀點": {
        "zhuyin": "ㄍㄨㄢ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "viewpoint"
    },
    "廣場": {
        "zhuyin": "ㄍㄨㄤˇ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "square"
    },
    "廣告": {
        "zhuyin": "ㄍㄨㄤˇ ㄍㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "advertisement"
    },
    "國際": {
        "zhuyin": "ㄍㄨㄛˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "international"
    },
    "過來": {
        "zhuyin": "ㄍㄨㄛˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "come, come over"
    },
    "過年": {
        "zhuyin": "ㄍㄨㄛˋ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "celebrate the new year"
    },
    "過去": {
        "zhuyin": "ㄍㄨㄛˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go over, pass by"
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cross, pass, spend, live"
    },
    "海": {
        "zhuyin": "ㄏㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sea"
    },
    "海邊": {
        "zhuyin": "ㄏㄞˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seaside"
    },
    "喊": {
        "zhuyin": "ㄏㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shout"
    },
    "好處": {
        "zhuyin": "ㄏㄠˇ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "benefit"
    },
    "好多": {
        "zhuyin": "ㄏㄠˇ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "many, a lot of"
    },
    "好久": {
        "zhuyin": "ㄏㄠˇ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for a long time, long"
    },
    "好人": {
        "zhuyin": "ㄏㄠˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good person"
    },
    "好事": {
        "zhuyin": "ㄏㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good deed, good thing"
    },
    "好像": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be like"
    },
    "合適": {
        "zhuyin": "ㄏㄜˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "appropriate"
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "river"
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "black"
    },
    "黑板": {
        "zhuyin": "ㄏㄟ ㄅㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blackboard"
    },
    "黑色": {
        "zhuyin": "ㄏㄟ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "black color"
    },
    "紅": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "red"
    },
    "紅色": {
        "zhuyin": "ㄏㄨㄥˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "red color"
    },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "later"
    },
    "忽然": {
        "zhuyin": "ㄏㄨ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "suddenly"
    },
    "湖": {
        "zhuyin": "ㄏㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lake"
    },
    "護照": {
        "zhuyin": "ㄏㄨˋ ㄓㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "passport"
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "spend, expend"
    },
    "花園": {
        "zhuyin": "ㄏㄨㄚ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "garden"
    },
    "畫": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painting"
    },
    "畫家": {
        "zhuyin": "ㄏㄨㄚˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painter, artist"
    },
    "畫兒": {
        "zhuyin": "ㄏㄨㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painting, drawing"
    },
    "壞處": {
        "zhuyin": "ㄏㄨㄞˋ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "disadvantage, harm"
    },
    "壞人": {
        "zhuyin": "ㄏㄨㄞˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bad person"
    },
    "歡迎": {
        "zhuyin": "ㄏㄨㄢ ㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "welcome"
    },
    "換": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "黃": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yellow"
    },
    "黃色": {
        "zhuyin": "ㄏㄨㄤˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yellow(in color)"
    },
    "回國": {
        "zhuyin": "ㄏㄨㄟˊ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "return home from abroad"
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meeting, gathering, union, party"
    },
    "活動": {
        "zhuyin": "ㄏㄨㄛˊ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "activity"
    },
    "或": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "or"
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "perhaps"
    },
    "機會": {
        "zhuyin": "ㄐㄧ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opportunity"
    },
    "雞": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chicken"
    },
    "級": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "level, rank, grade, degree, step"
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fast, anxious, urgent, annoyed"
    },
    "計劃": {
        "zhuyin": "ㄐㄧˋ ㄏㄨㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "plan"
    },
    "計算機": {
        "zhuyin": "ㄐㄧˋ ㄙㄨㄢˋ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "computer"
    },
    "加": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "add, increase, put in"
    },
    "加油": {
        "zhuyin": "ㄐㄧㄚ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "oil, refuel, make an all-out effort"
    },
    // 257/700 done
    "家": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "person noun suffix(like in 科學家 or 畫家)"
    },
    "家庭": {
        "zhuyin": "ㄐㄧㄚ ㄊㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "family"
    },
    "家長": {
        "zhuyin": "ㄐㄧㄚ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "parent, head of the family"
    },
    "假": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "false"
    },
    "假期": {
        "zhuyin": "ㄐㄧㄚˇ ㄑㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "holiday, vacation"
    },
    "檢查": {
        "zhuyin": "ㄐㄧㄢˇ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inspect, check"
    },
    "見到": {
        "zhuyin": "ㄐㄧㄢˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "see"
    },
    "見過": {
        "zhuyin": "ㄐㄧㄢˋ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seen, have seen"
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "piece"
    },
    "健康": {
        "zhuyin": "ㄐㄧㄢˋ ㄎㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "healthy"
    },
    "講": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "speak"
    },
    "講話": {
        "zhuyin": "ㄐㄧㄤˇ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "speak, talk"
    },
    "交": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hand over"
    },
    "交給": {
        "zhuyin": "ㄐㄧㄠ ㄍㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hand over"
    },
    "交朋友": {
        "zhuyin": "ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "make friends"
    },
    "交通": {
        "zhuyin": "ㄐㄧㄠ ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "traffic"
    },
    "角": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "horn"
    },
    "角度": {
        "zhuyin": "ㄐㄧㄠˇ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "angle"
    },
    "餃子": {
        "zhuyin": "ㄐㄧㄠˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dumplings"
    },
    "腳": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "foot"
    },
    "叫作": {
        "zhuyin": "ㄐㄧㄠˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be called, be known as"
    },
    "教師": {
        "zhuyin": "ㄐㄧㄠˋ ㄕ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teacher"
    },
    "教室": {
        "zhuyin": "ㄐㄧㄠˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "classroom"
    },
    "教學": {
        "zhuyin": "ㄐㄧㄠˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teach"
    },
    "教育": {
        "zhuyin": "ㄐㄧㄠˋ ㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "education"
    },
    "接": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, pick"
    },
    "接到": {
        "zhuyin": "ㄐㄧㄝ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "recieve"
    },
    "接受": {
        "zhuyin": "ㄐㄧㄝ ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accept"
    },
    "接下來": {
        "zhuyin": "ㄐㄧㄝ ㄒㄧㄚˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next"
    },
    "接着": {
        "zhuyin": "ㄐㄧㄝ ㄓㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next"
    },
    "街": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "street"
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "festival, holiday, joint"
    },
    "節目": {
        "zhuyin": "ㄐㄧㄝˊ ㄇㄨˋ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "program"
    },
    "節日": {
        "zhuyin": "ㄐㄧㄝˊ ㄖˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "festival"
    },
    "結果": {
        "zhuyin": "ㄐㄧㄝˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "result"
    },
    "借": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "borrow"
    },
    "斤": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a unit of weight(1/2 kilogram)"
    },
    "今後": {
        "zhuyin": "ㄐㄧㄣ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "from now on, in the future"
    },
    "進入": {
        "zhuyin": "ㄐㄧㄣˋ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enter, go in, join"
    },
    "進行": {
        "zhuyin": "ㄐㄧㄣˋ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "conduct"
    },
    "近": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "near"
    },
    "經常": {
        "zhuyin": "ㄐㄧㄥ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "often"
    },
    "經過": {
        "zhuyin": "ㄐㄧㄥ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "after, through"
    },
    "經理": {
        "zhuyin": "ㄐㄧㄥ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "manager"
    },
    "酒": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "alcohol"
    },
    "酒店": {
        "zhuyin": "ㄐㄧㄡˇ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hotel"
    },
    "就要": {
        "zhuyin": "ㄐㄧㄡˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be going to, be about to"
    },
    "舉": {
        "zhuyin": "ㄐㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lift"
    },
    "舉手": {
        "zhuyin": "ㄐㄩˇ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "raise one's hand or hands"
    },
    "舉行": {
        "zhuyin": "ㄐㄩˇ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hold"
    },
    "句": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sentence"
    },
    "句子": {
        "zhuyin": "ㄐㄩˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sentence"
    },
    "服務員": {
        "zhuyin": "ㄈㄨˊ ㄨˋ ㄩㄢˊ",
        "pinyin": "fú wù yuán",
        "level": "HSK2",
        "english": "attendant, customer service person, waiter"
    },
    "公共汽車": {
        "zhuyin": "ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ",
        "pinyin": "gōng gòng qì chē",
        "level": "HSK2",
        "english": "bus"
    },
    "公司": {
        "zhuyin": "ㄍㄨㄥ ㄙ",
        "pinyin": "gōng sī",
        "level": "HSK2",
        "english": "buisness, company"
    },
    "火車站": {
        "zhuyin": "ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ",
        "pinyin": "huǒ chē zhàn",
        "level": "HSK2",
        "english": "train station"
    },
    "卡": {
        "zhuyin": "ㄎㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "card"
    },
    "開機": {
        "zhuyin": "ㄎㄞ ㄐㄧ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "starting up"
    },
    "開心": {
        "zhuyin": "ㄎㄞ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "happy"
    },
    "開學": {
        "zhuyin": "ㄎㄞ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "school opens, term begins"
    },
    "看法": {
        "zhuyin": "ㄎㄢˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "view"
    },
    "考生": {
        "zhuyin": "ㄎㄠˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "examinee"
    },
    "靠": {
        "zhuyin": "ㄎㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lean"
    },
    "科": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "subject, family, section"
    },
    "科學": {
        "zhuyin": "ㄎㄜ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "science"
    },
    "可愛": {
        "zhuyin": "ㄎㄜˇ ㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lovely, cute"
    },
    "可能": {
        "zhuyin": "",
        "pinyin": "kě néng",
        "level": "HSK2",
        "english": "might, possible, probably, maybe"
    },
    "可怕": {
        "zhuyin": "ㄎㄜˇ ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dreadful"
    },
    "可是": {
        "zhuyin": "ㄎㄜˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "however"
    },
    "可以": {
        "zhuyin": "ㄎㄜˇ ㄧˇ",
        "pinyin": "kě yǐ",
        "level": "HSK2",
        "english": "sure, can, may, possible, able to"
    },
    "克": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "gram"
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "quarter(of an hour)"
    },
    "客人": {
        "zhuyin": "ㄎㄜˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "guest"
    },
    "課堂": {
        "zhuyin": "ㄎㄜˋ ㄊㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "classroom"
    },
    "空氣": {
        "zhuyin": "ㄎㄨㄥ ㄑㄧˋ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "atmosphere"
    },
    "哭": {
        "zhuyin": "ㄎㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cry"
    },
    "快餐": {
        "zhuyin": "ㄎㄨㄞˋ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fast food"
    },
    "快點兒": {
        "zhuyin": "ㄎㄨㄞˋ ㄉㄧㄢˇ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hurry up"
    },
    "快樂": {
        "zhuyin": "ㄎㄨㄞˋ ㄌㄜˋ",
        "pinyin": "kuài lè",
        "level": "HSK2",
        "english": "happy, merry"
    },
    "快要": {
        "zhuyin": "ㄎㄨㄞˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be about to, be going to"
    },
    "筷子": {
        "zhuyin": "ㄎㄨㄞˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chopsticks"
    },
    "拉": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pull"
    },
    "來自": {
        "zhuyin": "ㄌㄞˊ ㄗˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "come from"
    },
    "藍": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blue"
    },
    "藍色": {
        "zhuyin": "ㄌㄢˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blue(in color)"
    },
    "籃球": {
        "zhuyin": "ㄌㄢˊ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "basketball"
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always, constantly, noun prefix"
    },
    "老年": {
        "zhuyin": "ㄌㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "elderly"
    },
    "老朋友": {
        "zhuyin": "ㄌㄠˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "old friend"
    },
    "老是": {
        "zhuyin": "ㄌㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always, all times"
    },
    "離": {
        "zhuyin": "ㄌㄧˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leave"
    },
    "離開": {
        "zhuyin": "ㄌㄧˊ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leave"
    },
    "禮物": {
        "zhuyin": "ㄌㄧˇ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "gift"
    },
    "裡頭": {
        "zhuyin": "ㄌㄧˇ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inside"
    },
    "理想": {
        "zhuyin": "ㄌㄧˇ ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ideal"
    },
    "例如": {
        "zhuyin": "ㄌㄧˋ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for example"
    },
    "例子": {
        "zhuyin": "ㄌㄧˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "example"
    },
    "臉": {
        "zhuyin": "ㄌㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "face"
    },
    "練": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "practice, train"
    },
    "練習": {
        "zhuyin": "ㄌㄧㄢˋ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Practice"
    },
    "涼": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cool"
    },
    "涼快": {
        "zhuyin": "ㄌㄧㄤˊ ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pleasantly cool"
    },
    "亮": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bright"
    },
    "輛": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "measure word for cars"
    },
    "零下": {
        "zhuyin": "ㄌㄧㄥˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "below zero"
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stay"
    },
    "留下": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stay, remain"
    },
    "留學生": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "student studying abroad, returned student"
    },
    "流": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "flow, spread"
    },
    "流利": {
        "zhuyin": "ㄌㄧㄡˊ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fluent"
    },
    "流行": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "popular"
    },
    "路邊": {
        "zhuyin": "ㄌㄨˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "roadside, wayside"
    },
    "旅客": {
        "zhuyin": "ㄌㄩˇ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "passenger, traveler"
    },
    "旅行": {
        "zhuyin": "ㄌㄩˇ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "travel"
    },
    "旅遊": {
        "zhuyin": "ㄌㄩˇ ㄧㄡˊ",
        "pinyin": "lǚ yóu",
        "level": "HSK2",
        "english": "trip, journey, tourism, travel"
    },
    "綠": {
        "zhuyin": "ㄌㄩ",
        "pinyin": "",
        "level": "HSK2",
        "english": "green"
    },
    "綠色": {
        "zhuyin": "ㄌㄩ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "green (in color)"
    },
    "賣": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sell"
    },
    "滿": {
        "zhuyin": "ㄇㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full"
    },
    "滿意": {
        "zhuyin": "ㄇㄢˇ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "satisfied"
    },
    "貓": {
        "zhuyin": "ㄇㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cat"
    },
    "米": {
        "zhuyin": "ㄇㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meter"
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "(measure word), side, aspect"
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "face, surface, outside, side, scale, flour"
    },
    "面前": {
        "zhuyin": "ㄇㄧㄢˋ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in front of, before"
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "name"
    },
    "名稱": {
        "zhuyin": "ㄇㄧㄥˊ ㄔㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "name, designation"
    },
    "名單": {
        "zhuyin": "ㄇㄧㄥˊ ㄉㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "list"
    },
    "明星": {
        "zhuyin": "ㄇㄧㄥˊ ㄒㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "star"
    },
    "目的": {
        "zhuyin": "ㄇㄨˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "objective"
    },
    "拿出": {
        "zhuyin": "ㄋㄚˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take out"
    },
    "拿到": {
        "zhuyin": "ㄋㄚˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get"
    },
    "那": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "then, in that case"
    },
    "那會兒": {
        "zhuyin": "ㄋㄚˋ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time, then"
    },
    "那麼": {
        "zhuyin": "ㄋㄚˋ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "then, in that case"
    },
    "那時候": {
        "zhuyin": "ㄋㄚˋ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time, then"
    },
    "那樣": {
        "zhuyin": "ㄋㄚˋ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "that kind, like that, such"
    },
    "南方": {
        "zhuyin": "ㄋㄢˊ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "south"
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sorry"
    },
    "難看": {
        "zhuyin": "ㄋㄢˊ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ugly"
    },
    "難受": {
        "zhuyin": "ㄋㄢˊ ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "uncomfortable"
    },
    "難題": {
        "zhuyin": "ㄋㄢˊ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "problen, difficult problem, puzzle"
    },
    "難聽": {
        "zhuyin": "ㄋㄢˊ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "unpleasant to hear"
    },
    "能夠": {
        "zhuyin": "ㄋㄥˊ ㄍㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be able to, can"
    },
    "年級": {
        "zhuyin": "ㄋㄧㄢˊ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grade"
    },
    "年輕": {
        "zhuyin": "ㄋㄧㄢˊ ㄑㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "young, light in years"
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bird"
    },
    "弄": {
        "zhuyin": "ㄋㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get, make"
    },
    "努力": {
        "zhuyin": "ㄋㄨˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "strive, great effort"
    },
    "爬": {
        "zhuyin": "ㄆㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "climb, creep, crawl, scramble"
    },
    "爬山": {
        "zhuyin": "ㄆㄚˊ ㄕㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mountain climbing"
    },
    "怕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be afraid, fear, dread"
    },
    "排": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "row, line"
    },
    "排隊": {
        "zhuyin": "ㄆㄞˊ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "queue, stand in a line"
    },
    "排球": {
        "zhuyin": "ㄆㄞˊ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "volleyball"
    },
    "碰": {
        "zhuyin": "ㄆㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "touch, meet"
    },
    "碰到": {
        "zhuyin": "ㄆㄥˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, run into, bump into"
    },
    "碰見": {
        "zhuyin": "ㄆㄥˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, run into, bump into"
    },
    "篇": {
        "zhuyin": "ㄆㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "piece"
    },
    "便宜": {
        "zhuyin": "ㄅㄧㄢˋ ㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cheap"
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "slice"
    },
    "漂亮": {
        "zhuyin": "ㄆㄧㄠ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "well done, beautiful"
    },
    "平": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "flat"
    },
    "平安": {
        "zhuyin": "ㄆㄧㄥˊ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sound and safe"
    },
    "平常": {
        "zhuyin": "ㄆㄧㄥˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "usual"
    },
    "平等": {
        "zhuyin": "ㄆㄧㄥˊ ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "equality"
    },
    "平時": {
        "zhuyin": "ㄆㄧㄥˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "peacetime"
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bottle"
    },
    "瓶子": {
        "zhuyin": "ㄆㄧㄥˊ ㄗˇ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bottle"
    },
    "普通": {
        "zhuyin": "ㄆㄨˇ ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ordinary, general, average, common"
    },
    "普通話": {
        "zhuyin": "ㄆㄨˇ ㄊㄨㄥ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mandarin"
    },
    "其他": {
        "zhuyin": "ㄑㄧˊ ㄊㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "other"
    },
    "其中": {
        "zhuyin": "ㄑㄧˊ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "among"
    },
    "騎": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ride"
    },
    "騎車": {
        "zhuyin": "ㄑㄧˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cycle"
    },
    "起飛": {
        "zhuyin": "ㄑㄧˇ ㄈㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take off"
    },
    "氣": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "air, gas, breath"
    },
    "氣溫": {
        "zhuyin": "ㄑㄧˋ ㄨㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "air temperature"
    },
    "千": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thousand"
    },
    "千克": {
        "zhuyin": "ㄑㄧㄢ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilogram"
    },
    "前年": {
        "zhuyin": "ㄑㄧㄢˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the year before last"
    },
    "牆": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wall"
    },
    "青年": {
        "zhuyin": "ㄑㄧㄥ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "youth, young"
    },
    "青少年": {
        "zhuyin": "ㄑㄧㄥ ㄕㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teenagers"
    },
    "輕": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "light"
    },
    "清楚": {
        "zhuyin": "ㄑㄧㄥ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "clear"
    },
    "晴": {
        "zhuyin": "ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sunny"
    },
    "晴天": {
        "zhuyin": "ㄑㄧㄥˊ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sunny day"
    },
    "請客": {
        "zhuyin": "ㄑㄧㄥˇ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stand treat, entertain"
    },
    "請求": {
        "zhuyin": "ㄑㄧㄥˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "request"
    },
    "秋天": {
        "zhuyin": "ㄑㄧㄡ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall, autumn"
    },
    "求": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "request, beg, entreat, beseech"
    },
    "球場": {
        "zhuyin": "ㄑㄧㄡˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "court, field"
    },
    "球隊": {
        "zhuyin": "ㄑㄧㄡˊ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team"
    },
    "球鞋": {
        "zhuyin": "ㄑㄧㄡˊ ㄒㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sneakers, gym shoes"
    },
    "取": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take"
    },
    "取得": {
        "zhuyin": "ㄑㄩˇ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "acquire, gain, obtain"
    },
    "全": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole, entire, complete"
    },
    "全部": {
        "zhuyin": "ㄑㄩㄢˊ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole"
    },
    "全國": {
        "zhuyin": "ㄑㄩㄢˊ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nationwide, entire country"
    },
    "全家": {
        "zhuyin": "ㄑㄩㄢˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole family"
    },
    "全年": {
        "zhuyin": "ㄑㄩㄢˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "annual, yearly"
    },
    "全身": {
        "zhuyin": "ㄑㄩㄢˊ ㄕㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole body"
    },
    "全體": {
        "zhuyin": "ㄑㄩㄢˊ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all, entire, whole"
    },
    "然後": {
        "zhuyin": "ㄖㄢˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "then"
    },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give way"
    },
    "熱情": {
        "zhuyin": "ㄖㄜˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enthusiasm"
    },
    "人口": {
        "zhuyin": "ㄖㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "population"
    },
    "人們": {
        "zhuyin": "ㄖㄣˊ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "people"
    },
    "人數": {
        "zhuyin": "ㄖㄣˊ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "number of people"
    },
    "認為": {
        "zhuyin": "ㄖㄣˋ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think"
    },
    "日報": {
        "zhuyin": "ㄖˋ ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "daily, journal"
    },
    "日子": {
        "zhuyin": "ㄖˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "life, days"
    },
    "如果": {
        "zhuyin": "ㄖㄨˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "if"
    },
    "入口": {
        "zhuyin": "ㄖㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "entrance"
    },
    "商量": {
        "zhuyin": "ㄕㄤ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discuss"
    },
    "商人": {
        "zhuyin": "ㄕㄤ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "buisnessman"
    },
    "上周": {
        "zhuyin": "ㄕㄤˋ ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "last week"
    },
    "少數": {
        "zhuyin": "ㄕㄠˇ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "small number, few, minority"
    },
    "少年": {
        "zhuyin": "ㄕㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "juvenille, young person"
    },
    "身邊": {
        "zhuyin": "ㄕㄣ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at(by) one's side"
    },
    "什麼樣": {
        "zhuyin": "ㄕㄣˊ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "what kind"
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give birth, be born"
    },
    "生詞": {
        "zhuyin": "ㄕㄥ ㄘˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "new word"
    },
    "生活": {
        "zhuyin": "ㄕㄥ ㄏㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Life"
    },
    "聲音": {
        "zhuyin": "ㄕㄥ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "voice"
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "province"
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "economize, save, omit, leave out"
    },
    "十分": {
        "zhuyin": "ㄕˊ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very"
    },
    "實際": {
        "zhuyin": "ㄕˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "actual"
    },
    "實習": {
        "zhuyin": "ㄕˊ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "internship"
    },
    "實現": {
        "zhuyin": "ㄕˊ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "realization"
    },
    "實在": {
        "zhuyin": "ㄕˊ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "real, indeed"
    },
    "實在": {
        "zhuyin": "ㄕˊ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "done carefully"
    },
    "食物": {
        "zhuyin": "ㄕˊ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "food"
    },
    "使用": {
        "zhuyin": "ㄕˇ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "use"
    },
    "市": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "city"
    },
    "市長": {
        "zhuyin": "ㄕˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mayor"
    },
    "事情": {
        "zhuyin": "ㄕˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thing, matter"
    },
    "收": {
        "zhuyin": "ㄕㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "collect"
    },
    "收到": {
        "zhuyin": "ㄕㄡ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "recieve, obtain"
    },
    "收入": {
        "zhuyin": "ㄕㄡ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "income"
    },
    "手錶": {
        "zhuyin": "ㄕㄡˇ ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wrist watch"
    },
    "受到": {
        "zhuyin": "ㄕㄡˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "suffer"
    },
    "舒服": {
        "zhuyin": "ㄕㄨ ㄈㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "comfortable"
    },
    "熟": {
        "zhuyin": "ㄕㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ripe, cooked, familliar, skilled"
    },
    "數": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to count"
    },
    "數字": {
        "zhuyin": "ㄕㄨˋ ㄗˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "number"
    },
    "水平": {
        "zhuyin": "ㄕㄨㄟˇ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "level"
    },
    "順利": {
        "zhuyin": "ㄕㄨㄣˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "smoothly"
    },
    "說明": {
        "zhuyin": "ㄕㄨㄛ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "explain"
    },
    // 505/772 done
    "司機": {
        "zhuyin": "ㄙ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "driver"
    },
    "送到": {
        "zhuyin": "ㄙㄨㄥˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sent to"
    },
    "送給": {
        "zhuyin": "ㄙㄨㄥˋ ㄍㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give to"
    },
    "算": {
        "zhuyin": "ㄙㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "count, calculate"
    },
    "雖然": {
        "zhuyin": "ㄙㄨㄟ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "although, though"
    },
    "隨便": {
        "zhuyin": "ㄙㄨㄟˊ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "casual"
    },
    "隨時": {
        "zhuyin": "ㄙㄨㄟˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at any time"
    },
    "所以": {
        "zhuyin": "ㄙㄨㄛˇ ㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "so"
    },
    "所有": {
        "zhuyin": "ㄙㄨㄛˇ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all"
    },
    "它": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "it"
    },
    "它們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "they"
    },
    "太太": {
        "zhuyin": "ㄊㄞˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Ma'am"
    },
    "太陽": {
        "zhuyin": "ㄊㄞˋ ㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sun"
    },
    "態度": {
        "zhuyin": "ㄊㄞˋ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attitude"
    },
    "討論": {
        "zhuyin": "ㄊㄠˇ ㄌㄨㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discuss"
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "set"
    },
    "特別": {
        "zhuyin": "ㄊㄜˋ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "especially"
    },
    "特點": {
        "zhuyin": "ㄊㄜˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "characteristic"
    },
    "疼": {
        "zhuyin": "ㄊㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hurt"
    },
    "提": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "carry"
    },
    "提出": {
        "zhuyin": "ㄊㄧˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "put forward, propose, raise"
    },
    "提到": {
        "zhuyin": "ㄊㄧˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mention, refer to"
    },
    "提高": {
        "zhuyin": "ㄊㄧˊ ㄍㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "increase, promote"
    },
    "題": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "topic"
    },
    "體育": {
        "zhuyin": "ㄊㄧˇ ㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sports"
    },
    "體育場": {
        "zhuyin": "ㄊㄧˇ ㄩˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stadium"
    },
    "體育館": {
        "zhuyin": "ㄊㄧˇ ㄩˋ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stadium, gymnasium, gym"
    },
    "天上": {
        "zhuyin": "ㄊㄧㄢ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the sky, heaven"
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "strip"
    },
    "條件": {
        "zhuyin": "ㄊㄧㄠˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "condition"
    },
    "聽講": {
        "zhuyin": "ㄊㄧㄥ ㄐㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attend a lecture, listen to a talk"
    },
    "聽說": {
        "zhuyin": "ㄊㄧㄥ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be told, hear of"
    },
    "停": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stop"
    },
    "停車": {
        "zhuyin": "ㄊㄧㄥˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "park"
    },
    "停車場": {
        "zhuyin": "ㄊㄧㄥˊ ㄔㄜ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "parking lot"
    },
    "挺": {
        "zhuyin": "ㄊㄧㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very, quite, rather, pretty"
    },
    "挺好": {
        "zhuyin": "ㄊㄧㄥˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very good, not half bad"
    },
    "通": {
        "zhuyin": "ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "through, common, all, understand, expert"
    },
    "通過": {
        "zhuyin": "ㄊㄨㄥ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "adopt"
    },
    "通知": {
        "zhuyin": "ㄊㄨㄥ ㄓ",
        "pinyin": "",
        "level": "HSK2",
        "english": "notice"
    },
    "同時": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meanwhile"
    },
    "同事": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "collegue"
    },
    "同樣": {
        "zhuyin": "ㄊㄨㄥˊ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "same"
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "head, beginning or end, side"
    },
    "頭髮": {
        "zhuyin": "ㄊㄡˊ ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hair"
    },
    "圖片": {
        "zhuyin": "ㄊㄨˊ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "picture, photograph"
    },
    "推": {
        "zhuyin": "ㄊㄨㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "push"
    },
    "腿": {
        "zhuyin": "ㄊㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leg"
    },
    "外地": {
        "zhuyin": "ㄨㄞˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "other places, nonlocal"
    },
    "外賣": {
        "zhuyin": "ㄨㄞˋ ㄇㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "takeaway, take out"
    },
    "完": {
        "zhuyin": "ㄨㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "finish"
    },
    "完成": {
        "zhuyin": "ㄨㄢˊ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "complete"
    },
    "完全": {
        "zhuyin": "ㄨㄢˊ ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "completely"
    },
    "晚安": {
        "zhuyin": "ㄨㄢˇ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good night"
    },
    "晚報": {
        "zhuyin": "ㄨㄢˇ ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "evening paper, evening news"
    },
    "晚餐": {
        "zhuyin": "ㄨㄢˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dinner"
    },
    "晚會": {
        "zhuyin": "ㄨㄢˇ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "evening party"
    },
    "碗": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bowl"
    },
    "萬": {
        "zhuyin": "ㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ten thousand"
    },
    "網": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "net, network"
    },
    // 566/772 done
    "網球": {
        "zhuyin": "ㄨㄤˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "tennis"
    },
    "網站": {
        "zhuyin": "ㄨㄤˇ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "website"
    },
    "往": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to, towards"
    },
    "為": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "by"
    },
    "為什麼": {
        "zhuyin": "ㄨㄟˊ ㄕㄣˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "why"
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "person (measure word)"
    },
    "味道": {
        "zhuyin": "ㄨㄟˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "taste"
    },
    "喂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hello, hey"
    },
    "溫度": {
        "zhuyin": "ㄨㄣ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "temperature"
    },
    "聞": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "smell"
    },
    "問路": {
        "zhuyin": "ㄨㄣˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ask for directions"
    },
    "問題": {
        "zhuyin": "ㄨㄣˋ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "problem"
    },
    "午餐": {
        "zhuyin": "ㄨˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lunch"
    },
    "午睡": {
        "zhuyin": "ㄨˇ ㄕㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nap"
    },
    "西北": {
        "zhuyin": "ㄒㄧ ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "northwest"
    },
    "西餐": {
        "zhuyin": "ㄒㄧ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "western food"
    },
    "西方": {
        "zhuyin": "ㄒㄧ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "west"
    },
    "西南": {
        "zhuyin": "ㄒㄧ ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "southwest"
    },
    "西醫": {
        "zhuyin": "ㄒㄧ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "western medicine"
    },
    "習慣": {
        "zhuyin": "ㄒㄧˊ ㄍㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "habit"
    },
    "洗衣機": {
        "zhuyin": "ㄒㄧˇ ㄧ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "washing machine"
    },
    "洗澡": {
        "zhuyin": "ㄒㄧˇ ㄗㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take a shower"
    },
    "下雪": {
        "zhuyin": "ㄒㄧㄚˋ ㄒㄩㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "snow, snowing"
    },
    "下周": {
        "zhuyin": "ㄒㄧㄚˋ ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next week"
    },
    "夏天": {
        "zhuyin": "ㄒㄧㄚˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "summer"
    },
    "相同": {
        "zhuyin": "ㄒㄧㄤ ㄊㄨㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "identical"
    },
    "相信": {
        "zhuyin": "ㄒㄧㄤ ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "believe"
    },
    "響": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "loud"
    },
    "想到": {
        "zhuyin": "ㄒㄧㄤˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think of, call to mind, have at heart"
    },
    "想法": {
        "zhuyin": "ㄒㄧㄤˇ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "idea, opinion, thought"
    },
    "想起": {
        "zhuyin": "ㄒㄧㄤˇ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "remember, recall, think of, call to mind"
    },
    "向": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "towards"
    },
    "相機": {
        "zhuyin": "ㄒㄧㄤ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "camera"
    },
    "像": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be like, resemble, look like, such as"
    },
    "小聲": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in a low voice, whispers"
    },
    "小時候": {
        "zhuyin": "ㄒㄧㄠˇ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in one's childhood, when one was young"
    },
    "小說": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "novel"
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "look out"
    },
    "小組": {
        "zhuyin": "ㄒㄧㄠˇ ㄗㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group"
    },
    "校園": {
        "zhuyin": "ㄒㄧㄠˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "campus, schoolyard"
    },
    "校長": {
        "zhuyin": "ㄒㄧㄠˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "principal"
    },
    "笑話": {
        "zhuyin": "ㄒㄧㄠˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "joke"
    },
    "笑話兒": {
        "zhuyin": "ㄒㄧㄠˋ ㄏㄨㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "joke"
    },
    "鞋": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shoes"
    },
    "心裡": {
        "zhuyin": "ㄒㄧㄣ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in the heart, at heart"
    },
    "心情": {
        "zhuyin": "ㄒㄧㄣ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mood"
    },
    "心中": {
        "zhuyin": "ㄒㄧㄣ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in the heart, at heart, in mind"
    },
    "新聞": {
        "zhuyin": "ㄒㄧㄣ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "news"
    },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "letter, mail, faith"
    },
    "信號": {
        "zhuyin": "ㄒㄧㄣˋ ㄏㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "signal"
    },
    "信息": {
        "zhuyin": "ㄒㄧㄣˋ ㄒㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "information"
    },
    "信心": {
        "zhuyin": "ㄒㄧㄣˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "confidence"
    },
    "信用卡": {
        "zhuyin": "ㄒㄧㄣˋ ㄩㄥˋ ㄑㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "credit card"
    },
    "星星": {
        "zhuyin": "ㄒㄧㄥ ㄒㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "star"
    },
    "行動": {
        "zhuyin": "ㄒㄧㄥˊ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get some action"
    },
    "行人": {
        "zhuyin": "ㄒㄧㄥˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pedestrian"
    },
    "行為": {
        "zhuyin": "ㄒㄧㄥˊ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "behavior"
    },
    "姓": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "surname"
    },
    "姓名": {
        "zhuyin": "ㄒㄧㄥˋ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full name"
    },
    "休假": {
        "zhuyin": "ㄒㄧㄡ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "have a holiday, take a vacation"
    },
    "許多": {
        "zhuyin": "ㄒㄩˇ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "many"
    },
    "選": {
        "zhuyin": "ㄒㄩㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "choose, select, pick"
    },
    "學期": {
        "zhuyin": "ㄒㄩㄝˊ ㄑㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "semester"
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "snow"
    },
    "顏色": {
        "zhuyin": "ㄧㄢˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "color"
    },
    "眼": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "eye"
    },
    "眼睛": {
        "zhuyin": "ㄧㄢˇ ㄐㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "eye"
    },
    "養": {
        "zhuyin": "ㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "raise, keep, support, cultivate"
    },
    "樣子": {
        "zhuyin": "ㄧㄤˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a look"
    },
    "要求": {
        "zhuyin": "ㄧㄠˋ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "requirment"
    },
    "藥": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "drug"
    },
    "藥店": {
        "zhuyin": "ㄧㄠˋ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pharmacy"
    },
    "藥片": {
        "zhuyin": "ㄧㄠˋ ㄆㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pill"
    },
    "藥水": {
        "zhuyin": "ㄧㄠˋ ㄕㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "liquid medicine"
    },
    "也許": {
        "zhuyin": "ㄧㄝˇ ㄒㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "perhaps"
    },
    "夜": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "night"
    },
    "夜裡": {
        "zhuyin": "ㄧㄝˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at night"
    },
    "一部分": {
        "zhuyin": "ㄧ ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a part, a portion"
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "certain"
    },
    "一共": {
        "zhuyin": "ㄧ ㄍㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "altogether"
    },
    "一會兒": {
        "zhuyin": "ㄧ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "awhile, in a moment, presently"
    },
    "一路平安": {
        "zhuyin": "ㄧ ㄌㄨˋ ㄆㄧㄥˊ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "safe journey, have a pleasane journey"
    },
    "一路順風": {
        "zhuyin": "ㄧ ㄌㄨˋ ㄕㄨㄣˋ ㄈㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bon voyage"
    },
    "已經": {
        "zhuyin": "ㄧˇ ㄐㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "already"
    },
    "以後": {
        "zhuyin": "ㄧˇ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "after, later on, afterwards, later"
    },
    "以前": {
        "zhuyin": "ㄧˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "before"
    },
    "以上": {
        "zhuyin": "ㄧˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "above, over"
    },
    "以外": {
        "zhuyin": "ㄧˇ ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "beyond, outside, other than, except"
    },
    "以為": {
        "zhuyin": "ㄧˇ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think"
    },
    "以下": {
        "zhuyin": "ㄧˇ ㄒㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "below, under"
    },
    "一般": {
        "zhuyin": "ㄧ ㄅㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "commonly"
    },
    "一點點": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a little bit"
    },
    "一生": {
        "zhuyin": "ㄧ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all one's life, lifetime"
    },
    "一直": {
        "zhuyin": "ㄧ ㄓˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always"
    },
    "億": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "billion"
    },
    "意見": {
        "zhuyin": "ㄧˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opinion"
    },
    "意思": {
        "zhuyin": "ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meaining"
    },
    "因為": {
        "zhuyin": "ㄧㄣ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "because"
    },
    "陰": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yin"
    },
    "陰天": {
        "zhuyin": "ㄧㄣ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloudy day, overcast day"
    },
    "音節": {
        "zhuyin": "ㄧㄣ ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "syllable"
    },
    "音樂": {
        "zhuyin": "ㄧㄣ ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "music"
    },
    "音樂會": {
        "zhuyin": "ㄧㄣ ㄩㄝˋ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "concert"
    },
    "銀行": {
        "zhuyin": "ㄧㄣˊ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bank"
    },
    "銀行卡": {
        "zhuyin": "ㄧㄣˊ ㄒㄧㄥˊ ㄎㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bank card"
    },
    "應該": {
        "zhuyin": "ㄧㄥ ㄍㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "should"
    },
    "英文": {
        "zhuyin": "ㄧㄥ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "english"
    },
    "英語": {
        "zhuyin": "ㄧㄥ ㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "english"
    },
    "影片": {
        "zhuyin": "ㄧㄥˇ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "film, movie"
    },
    "影響": {
        "zhuyin": "ㄧㄥˇ ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "influence"
    },
    "永遠": {
        "zhuyin": "ㄩㄥˇ ㄩㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "forever"
    },
    // 680/772 done
    "油": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "oil, fat, grease"
    },
    "遊客": {
        "zhuyin": "ㄧㄡˊ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "tourist, visitor"
    },
    "友好": {
        "zhuyin": "ㄧㄡˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "friendly"
    },
    "有空兒": {
        "zhuyin": "ㄧㄡˇ ㄎㄨㄥ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be free, at leisure"
    },
    "有人": {
        "zhuyin": "ㄧㄡˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "someone, there's someone"
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "interesting"
    },
    "又": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "also"
    },
    "魚": {
        "zhuyin": "ㄩˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fish"
    },
    "語言": {
        "zhuyin": "ㄩˇ ㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "language"
    },
    "原來": {
        "zhuyin": "ㄩㄢˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "original"
    },
    "原因": {
        "zhuyin": "ㄩㄢˊ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "reason"
    },
    "院": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yard, compound, courtyard, college"
    },
    "院長": {
        "zhuyin": "ㄩㄢˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dean"
    },
    "院子": {
        "zhuyin": "ㄩㄢˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "courtyard, yard"
    },
    "願意": {
        "zhuyin": "ㄩㄢˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be willing"
    },
    "月份": {
        "zhuyin": "ㄩㄝˋ ㄈㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "month"
    },
    "月亮": {
        "zhuyin": "ㄩㄝˋ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "moon"
    },
    "越": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the more"
    },
    "越來越": {
        "zhuyin": "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "more and more"
    },
    "雲": {
        "zhuyin": "ㄩㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloud"
    },
    "運動": {
        "zhuyin": "ㄩㄣˋ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "motion"
    },
    "咱": {
        "zhuyin": "ㄗㄢˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "we, us"
    },
    "咱們": {
        "zhuyin": "ㄗㄢˊ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "we"
    },
    "臟": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dirty"
    },
    "早餐": {
        "zhuyin": "ㄗㄠˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "breakfast"
    },
    "早晨": {
        "zhuyin": "ㄗㄠˇ ㄔㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "morning"
    },
    "早就": {
        "zhuyin": "ㄗㄠˇ ㄐㄧㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "long since"
    },
    "怎麼辦": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how to, what to do"
    },
    "怎麼樣": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how about"
    },
    "怎樣": {
        "zhuyin": "ㄗㄣˇ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how"
    },
    "占": {
        "zhuyin": "ㄓㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "occupy"
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stand, halt, stop"
    },
    "站住": {
        "zhuyin": "ㄓㄢˋ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stop, halt"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grow"
    },
    "長大": {
        "zhuyin": "ㄔㄤˊ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grow up"
    },
    "找出": {
        "zhuyin": "ㄓㄠˇ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "find out"
    },
    "照顧": {
        "zhuyin": "ㄓㄠˋ ㄍㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "look after"
    },
    "照片": {
        "zhuyin": "ㄓㄠˋ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "photo"
    },
    "照相": {
        "zhuyin": "ㄓㄠˋ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take a picture, photograph"
    },
    "這麼": {
        "zhuyin": "ㄓㄜˋ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "so, such,, this way, like this"
    },
    "這時候": {
        "zhuyin": "ㄓㄜˋ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at this moment, at this time"
    },
    "這樣": {
        "zhuyin": "ㄓㄜˋ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "so, such, this way, like this"
    },
    "真正": {
        "zhuyin": "ㄓㄣ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "real"
    },
    "正常": {
        "zhuyin": "ㄓㄥˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "normal"
    },
    "正好": {
        "zhuyin": "ㄓㄥˋ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just right"
    },
    "正確": {
        "zhuyin": "ㄓㄥˋ ㄑㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "correct"
    },
    "正是": {
        "zhuyin": "ㄓㄥˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exactly"
    },
    "直接": {
        "zhuyin": "ㄓˊ ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "direct"
    },
    "只": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "level": "HSK2",
        "english": "only, just, merely"
    },
    "只能": {
        "zhuyin": "ㄓ ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "can only"
    },
    "只要": {
        "zhuyin": "ㄓ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "as long as"
    },
    "紙": {
        "zhuyin": "ㄓˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "paper"
    },
    "中餐": {
        "zhuyin": "ㄓㄨㄥ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chinese food"
    },
    "中級": {
        "zhuyin": "ㄓㄨㄥ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "intermediate, middle-level"
    },
    "中年": {
        "zhuyin": "ㄓㄨㄥ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "middle-age"
    },
    "中小學": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄠˇ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "elementary and middle school"
    },
    "中心": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "core"
    },
    "中醫": {
        "zhuyin": "ㄓㄨㄥˋ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chinese medicine"
    },
    "重點": {
        "zhuyin": "ㄓㄨㄥˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a key"
    },
    "重視": {
        "zhuyin": "ㄓㄨㄥˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attach importance to"
    },
    "周": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "week"
    },
    "周末": {
        "zhuyin": "ㄓㄡ ㄇㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "weekend"
    },
    "周年": {
        "zhuyin": "ㄓㄡ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "anniversary"
    },
    "主人": {
        "zhuyin": "ㄓㄨˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "master"
    },
    "主要": {
        "zhuyin": "ㄓㄨˇ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "main"
    },
    "住房": {
        "zhuyin": "ㄓㄨˋ ㄈㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "housing, lodging"
    },
    "住院": {
        "zhuyin": "ㄓㄨˋ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be hospitalized"
    },
    "裝": {
        "zhuyin": "ㄓㄨㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pretend"
    },
    "準確": {
        "zhuyin": "ㄓㄨㄣˇ ㄑㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accuracy"
    },
    "自己": {
        "zhuyin": "ㄗˋ ㄐㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "own, self"
    },
    "自行車": {
        "zhuyin": "ㄗˋ ㄒㄧㄥˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bicycle"
    },
    "自由": {
        "zhuyin": "ㄗˋ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "free"
    },
    "字典": {
        "zhuyin": "ㄗˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dictionary"
    },
    "走過": {
        "zhuyin": "ㄗㄡˇ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "walk through, pass through"
    },
    "走進": {
        "zhuyin": "ㄗㄡˇ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "walk in"
    },
    "走開": {
        "zhuyin": "ㄗㄡˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go away"
    },
    "租": {
        "zhuyin": "ㄗㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "rent"
    },
    "組": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group"
    },
    "組成": {
        "zhuyin": "ㄗㄨˇ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "form"
    },
    "組長": {
        "zhuyin": "ㄗㄨˇ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group leader"
    },
    "嘴": {
        "zhuyin": "ㄗㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mouth"
    },
    "最近": {
        "zhuyin": "ㄗㄨㄟˋ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lately"
    },
    "作家": {
        "zhuyin": "ㄗㄨㄛˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "writer"
    },
    "作文": {
        "zhuyin": "ㄗㄨㄛˋ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "composition"
    },
    "作業": {
        "zhuyin": "ㄗㄨㄛˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "task, homework"
    },
    "作用": {
        "zhuyin": "ㄗㄨㄛˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "effect"
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seat"
    },
    "座位": {
        "zhuyin": "ㄗㄨㄛˋ ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seat"
    },
    "做到": {
        "zhuyin": "ㄗㄨㄛˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accomplish, acheive"
    },
    "做法": {
        "zhuyin": "ㄗㄨㄛˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "practice, behavior, way of doing things"
    },
    "做飯": {
        "zhuyin": "ㄗㄨㄛˋ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cook, make food"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK2",
    //     "english": ""
    // },
};
const hanziAll = {
    // "我": {
    //     "zhuyin": "ㄨㄛˇ",
    //     "pinyin": "wǒ ",
    //     "tone": 3,
    //     "english": "I, me",
    //     "simplified": "",
    //     "radicals": ["手", "戈"]
    // },
    // "的": {
    //     "zhuyin": "ㄉㄜ.",
    //     "pinyin": "de",
    //     "tone": 5,
    //     "english": "'s",
    //     "simplified": "",
    //     "radicals": ["白", "勺"]
    // },
    // "你": {
    //     "zhuyin": "ㄋ一ˇ",
    //     "pinyin": "nǐ",
    //     "tone": 3,
    //     "english": "you",
    //     "simplified": "",
    //     "radicals": ["亻", "尔"]
    // },
    // "是": {
    //     "zhuyin": "ㄕˋ",
    //     "pinyin": "shì",
    //     "tone": 4,
    //     "english": "is, to be",
    //     "simplified": "",
    //     "radicals": ["日", "一", "止"]
    // },
    // "了": {
    //     "zhuyin": "ㄌㄜ˙",
    //     "pinyin": "le",
    //     "tone": 5,
    //     "english": "-ed, (completed action p.)",
    //     "simplified": "",
    //     "radicals": [""]
    // },
    // "不": {
    //     "zhuyin": "ㄅㄨˋ",
    //     "pinyin": "bù",
    //     "tone": 4,
    //     "english": "no, not",
    //     "simplified": "",
    //     "radicals": ["丆", "卜"]
    // },
    // "們": {
    //     "zhuyin": "ㄇㄣ˙",
    //     "pinyin": "men",
    //     "tone": 3,
    //     "english": "(plural p.)",
    //     "simplified": "们",
    //     "radicals": ["亻", "門"]
    // },
    // "這": {
    //     "zhuyin": "ㄓㄜˋ",
    //     "pinyin": "zhè",
    //     "tone": 4,
    //     "english": "this",
    //     "simplified": "这",
    //     "radicals": ["辶", "言"]
    // },
    // "一": {
    //     "zhuyin": "一",
    //     "pinyin": "yī",
    //     "tone": 1,
    //     "english": "one, a",
    //     "simplified": "",
    //     "radicals": ["一"]
    // },
    // "他": {
    //     "zhuyin": "ㄊㄚ",
    //     "pinyin": "tā",
    //     "tone": 1,
    //     "english": "he",
    //     "simplified": "",
    //     "radicals": ["亻", "也"]
    // },
    // "麼": {
    //     "zhuyin": "ㄇㄜ˙",
    //     "pinyin": "me",
    //     "tone": 5,
    //     "english": "(interrogative p.)",
    //     "simplified": "么",
    //     "radicals": ["麻", "幺"]
    // },
    // "在": {
    //     "zhuyin": "ㄗㄞˋ",
    //     "pinyin": "zài",
    //     "tone": 4,
    //     "english": "at",
    //     "simplified": "",
    //     "radicals": ["𠂇", "土"]
    // },
    // "有": {
    //     "zhuyin": "一ㄡˇ",
    //     "pinyin": "yǒu",
    //     "tone": 3,
    //     "english": "to have, there is",
    //     "simplified": "",
    //     "radicals": ["𠂇", "月"]
    // },
    // "個": {
    //     "zhuyin": "ㄍㄜˋ",
    //     "pinyin": "gè",
    //     "tone": 4,
    //     "english": "individual, (general measure word)",
    //     "simplified": "个",
    //     "radicals": ["亻", "固"]
    // },
    // "好": {
    //     "zhuyin": "ㄏㄠˇ",
    //     "pinyin": "hǎo",
    //     "tone": 3,
    //     "english": "good, well",
    //     "simplified": "",
    //     "radicals": ["女", "子"]
    // },
    // "來": {
    //     "zhuyin": "ㄌㄞˊ",
    //     "pinyin": "lái",
    //     "tone": 2,
    //     "english": "to come",
    //     "simplified": "来 ",
    //     "radicals": ["木", "从"]
    // },
    // "人": {
    //     "zhuyin": "ㄖㄣˊ",
    //     "pinyin": "rén",
    //     "tone": 2,
    //     "english": "person",
    //     "simplified": "",
    //     "radicals": [""]
    // },
    // "那": {
    //     "zhuyin": "ㄋㄚ ˋ",
    //     "pinyin": "nà",
    //     "tone": 4,
    //     "english": "that, those",
    //     "simplified": "",
    //     "radicals": ["二", "阝"]
    // },
    // "要": {
    //     "zhuyin": "一ㄠˋ",
    //     "pinyin": "yào",
    //     "tone": 4,
    //     "english": "to want, important",
    //     "simplified": "",
    //     "radicals": ["覀", "女"]
    // },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "huì",
        "tone": 4,
        "english": "meet, can, will, to know",
        "simplified": "会",
        "radicals": ["京", "尤"]
    },
    // "就": {
    //     "zhuyin": "ㄐ一ㄡˋ",
    //     "pinyin": "jiù",
    //     "tone": 4,
    //     "english": "then, just, at once",
    //     "simplified": "",
    //     "radicals": ["京", "尤"]
    // },
    // "甚": {
    //     "zhuyin": "ㄕㄣˊ",
    //     "pinyin": "shén",
    //     "tone": 2,
    //     "english": "what",
    //     "simplified": "什",
    //     "radicals": ["亻", "十"]
    // },
    // "沒": {
    //     "zhuyin": "ㄇㄟˊ",
    //     "pinyin": "méi",
    //     "tone": 2,
    //     "english": "have not",
    //     "simplified": "没",
    //     "radicals": ["氵", "又"]
    // },
    // "到": {
    //     "zhuyin": "ㄉㄠˋ",
    //     "pinyin": "dào",
    //     "tone": 4,
    //     "english": "to arrive",
    //     "simplified": "",
    //     "radicals": ["至", "刂"]
    // },
    // "說": {
    //     "zhuyin": "ㄕㄨㄛ",
    //     "pinyin": "shuō",
    //     "tone": 1,
    //     "english": "to speak",
    //     "simplified": "说",
    //     "radicals": ["言", "兌"]
    // },
    // "嗎": {
    //     "zhuyin": "ㄇㄚ˙",
    //     "pinyin": "ma",
    //     "tone": 5,
    //     "english": "yes or no ?",
    //     "simplified": "吗",
    //     "radicals": ["口", "馬"]
    // },
    // "為": {
    //     "zhuyin": "ㄨㄟˋ",
    //     "pinyin": "wèi",
    //     "tone": 4,
    //     "english": "because of",
    //     "simplified": "为",
    //     "radicals": ["丶", "灬"]
    // },
    // "想": {
    //     "zhuyin": "ㄒ一ㄤˇ",
    //     "pinyin": "xiǎng",
    //     "tone": 3,
    //     "english": "to think, to want",
    //     "simplified": "",
    //     "radicals": ["相", "心"]
    // },
    // "能": {
    //     "zhuyin": "ㄋㄥˊ",
    //     "pinyin": "néng",
    //     "tone": 2,
    //     "english": "to be able to",
    //     "simplified": "",
    //     "radicals": ["厶", "匕"]
    // },
    // "上": {
    //     "zhuyin": "ㄕㄤˋ",
    //     "pinyin": "shàng",
    //     "tone": 4,
    //     "english": "above",
    //     "simplified": "",
    //     "radicals": ["丨", "一"]
    // },

    // "去": {
    //     "zhuyin": "ㄑㄩˋ",
    //     "pinyin": "qù",
    //     "tone": 4,
    //     "english": "to go",
    //     "simplified": "",
    //     "radicals": ["土", "厶"]
    // },
    // "道": {
    //     "zhuyin": "ㄉㄠˋ",
    //     "pinyin": "dào",
    //     "tone": 4,
    //     "english": "way, method",
    //     "simplified": "",
    //     "radicals": ["辶", "首"]
    // },
    // "她": {
    //     "zhuyin": "ㄊㄚ",
    //     "pinyin": "tā",
    //     "tone": 1,
    //     "english": "she",
    //     "simplified": "",
    //     "radicals": ["女", "也"]
    // },
    // "很": {
    //     "zhuyin": "ㄏㄣˇ",
    //     "pinyin": "hěn",
    //     "tone": 3,
    //     "english": "very, is (Adj)",
    //     "simplified": "",
    //     "radicals": ["彳", "艮"]
    // },
    // "看": {
    //     "zhuyin": "ㄎㄢˋ",
    //     "pinyin": "kàn",
    //     "tone": 2,
    //     "english": "to see, look at",
    //     "simplified": "",
    //     "radicals": ["龵", "目"]
    // },
    // "可": {
    //     "zhuyin": "ㄎㄜˇ",
    //     "pinyin": "kě",
    //     "tone": 3,
    //     "english": "can able to",
    //     "simplified": "",
    //     "radicals": ["一", "口"]
    // },
    // "知": {
    //     "zhuyin": "ㄓ",
    //     "pinyin": "zhī",
    //     "tone": 1,
    //     "english": "to know",
    //     "simplified": "",
    //     "radicals": ["矢", "口"]
    // },
    // "得": {
    //     "zhuyin": "ㄉㄜ",
    //     "pinyin": "de",
    //     "tone": 5,
    //     "english": "(V + 得 + Adverb) p. indicates effect, degree, possibility etc",
    //     "simplified": "",
    //     "radicals": ["彳", "寸"]
    // },
    // "過": {
    //     "zhuyin": "ㄍㄨㄛˋ",
    //     "pinyin": "guo",
    //     "tone": 5,
    //     "english": "(experienced action p.)",
    //     "simplified": "过",
    //     "radicals": ["辶", "口"]
    // },
    // "吧": {
    //     "zhuyin": "ㄅㄚ˙",
    //     "pinyin": "ba",
    //     "tone": 5,
    //     "english": "...right?",
    //     "simplified": "",
    //     "radicals": ["口", "匚"]
    // },

    // "還": {
    //     "zhuyin": "ㄏㄞˊ",
    //     "pinyin": "hái",
    //     "tone": 2,
    //     "english": "still, yet, to return",
    //     "simplified": "还",
    //     "radicals": ["辶", "口"]
    // },
    // "對": {
    //     "zhuyin": "ㄉㄨㄟˋ",
    //     "pinyin": "duì",
    //     "tone": 4,
    //     "english": "correct, opposite",
    //     "simplified": "对",
    //     "radicals": ["羊", "寸"]
    // },
    // "裡": {
    //     "zhuyin": "ㄌ一ˇ",
    //     "pinyin": "lǐ",
    //     "tone": 3,
    //     "english": "inside",
    //     "simplified": "里",
    //     "radicals": ["田", "土"]
    // },
    // "以": {
    //     "zhuyin": "一ˇ",
    //     "pinyin": "yǐ",
    //     "tone": 3,
    //     "english": "so as to, according to",
    //     "simplified": "",
    //     "radicals": ["丶", "人"]
    // },
    // "都": {
    //     "zhuyin": "ㄉㄡ",
    //     "pinyin": "dōu",
    //     "tone": 1,
    //     "english": "all, both",
    //     "simplified": "",
    //     "radicals": ["日", "阝"]
    // },
    // "事": {
    //     "zhuyin": "ㄕˋ",
    //     "pinyin": "shì",
    //     "tone": 4,
    //     "english": "thing, item, matter",
    //     "simplified": "",
    //     "radicals": ["中", "匚"]
    // },
    // "子": {
    //     "zhuyin": "ㄗ˙",
    //     "pinyin": "zi",
    //     "tone": 5,
    //     "english": "child, son",
    //     "simplified": "",
    //     "radicals": ["了", "一"]
    // },
    // "生": {
    //     "zhuyin": "ㄕㄥ",
    //     "pinyin": "shēng",
    //     "tone": 1,
    //     "english": "life, raw",
    //     "simplified": "",
    //     "radicals": ["龶", "㇒"]
    // },
    // "時": {
    //     "zhuyin": "ㄕˊ",
    //     "pinyin": "shí",
    //     "tone": 2,
    //     "english": "time",
    //     "simplified": "时",
    //     "radicals": ["日", "寸"]
    // },
    // "樣": {
    //     "zhuyin": "一ㄤˋ",
    //     "pinyin": "yàng",
    //     "tone": 4,
    //     "english": "manner, appearance",
    //     "simplified": "样",
    //     "radicals": ["木", "羊"]
    // },
    // "也": {
    //     "zhuyin": "一ㄝˇ",
    //     "pinyin": "yě",
    //     "tone": 3,
    //     "english": "also, too",
    //     "simplified": "",
    //     "radicals": ["丨"]
    // },
    // "和": {
    //     "zhuyin": "ㄏㄜˊ",
    //     "pinyin": "hé",
    //     "tone": 2,
    //     "english": "and",
    //     "simplified": "",
    //     "radicals": ["禾", "口"]
    // },
    // "下": {
    //     "zhuyin": "ㄒ一ㄚˋ",
    //     "pinyin": "xià",
    //     "tone": 4,
    //     "english": "below, down",
    //     "simplified": "",
    //     "radicals": ["一", "卜"]
    // },
    // "真": {
    //     "zhuyin": "ㄓㄣ",
    //     "pinyin": "zhēn",
    //     "tone": 1,
    //     "english": "really, truly",
    //     "simplified": "",
    //     "radicals": ["十", "目"]
    // },
    // "現": {
    //     "zhuyin": "ㄒ一ㄢˋ",
    //     "pinyin": "xiàn",
    //     "tone": 4,
    //     "english": "appear, present",
    //     "simplified": "现",
    //     "radicals": ["王", "目"]
    // },
    // "做": {
    //     "zhuyin": "ㄗㄨㄛˋ",
    //     "pinyin": "zuò",
    //     "tone": 4,
    //     "english": "make, to do",
    //     "simplified": "",
    //     "radicals": ["亻", "古"]
    // },
    // "大": {
    //     "zhuyin": "ㄉㄚˋ",
    //     "pinyin": "dà",
    //     "tone": 4,
    //     "english": "big",
    //     "simplified": "",
    //     "radicals": ["人", "一"]
    // },
    // "啊": {
    //     "zhuyin": "ㄚ˙",
    //     "pinyin": "a",
    //     "tone": 5,
    //     "english": "ah!",
    //     "simplified": "",
    //     "radicals": ["口", "阝", "可"]
    // },
    // "怎": {
    //     "zhuyin": "ㄗㄣˇ",
    //     "pinyin": "zěn",
    //     "tone": 3,
    //     "english": "how",
    //     "simplified": "",
    //     "radicals": ["丨", "心"]
    // },
    // "出": {
    //     "zhuyin": "ㄔㄨ",
    //     "pinyin": "chū",
    //     "tone": 1,
    //     "english": "exit, to go out",
    //     "simplified": "",
    //     "radicals": ["山"]
    // },
    // "點": {
    //     "zhuyin": "ㄉ一ㄢˇ",
    //     "pinyin": "diǎn",
    //     "tone": 3,
    //     "english": "dot",
    //     "simplified": "点",
    //     "radicals": ["黑", "口"]
    // },
    "起": {
        "zhuyin": "ㄑ一ˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "rise",
        "simplified": "",
        "radicals": ["土", "止", "匚"]
    },
    // "天": {
    //     "zhuyin": "ㄊ一ㄢ",
    //     "pinyin": "tiān",
    //     "tone": 1,
    //     "english": "sky, heavens",
    //     "simplified": "",
    //     "radicals": ["一", "大"]
    // },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "bǎ",
        "tone": 3,
        "english": "(direct obj p.), to hold",
        "simplified": "",
        "radicals": ["扌", "巴"]
    },
    // "開": {
    //     "zhuyin": "ㄎㄞ",
    //     "pinyin": "kāi",
    //     "tone": 1,
    //     "english": "to open, to start",
    //     "simplified": "开",
    //     "radicals": ["門", "一"]
    // },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "ràng",
        "tone": 4,
        "english": "yield, to allow, permit, by (passive p.)",
        "simplified": "让",
        "radicals": ["言", "口"]
    },
    // "給": {
    //     "zhuyin": "ㄍㄟˇ",
    //     "pinyin": "gěi",
    //     "tone": 3,
    //     "english": "give, to, for",
    //     "simplified": "给",
    //     "radicals": ["糹", "口"]
    // },
    // "但": {
    //     "zhuyin": "ㄉㄢˋ",
    //     "pinyin": "dàn",
    //     "tone": 4,
    //     "english": "but",
    //     "simplified": "",
    //     "radicals": ["亻", "日"]
    // },
    // "謝": {
    //     "zhuyin": "ㄒ一ㄝˋ",
    //     "pinyin": "xiè",
    //     "tone": 4,
    //     "english": "thanks",
    //     "simplified": "谢",
    //     "radicals": ["言", "身", "寸"]
    // },
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
    // "些": {
    //     "zhuyin": "ㄒ一ㄝ",
    //     "pinyin": "xiē",
    //     "tone": 1,
    //     "english": "some, few",
    //     "simplified": "",
    //     "radicals": ["止", "匕", "二"]
    // },
    "如": {
        "zhuyin": "ㄖㄨˊ",
        "pinyin": "rú",
        "tone": 2,
        "english": "as, as if, such as",
        "simplified": "",
        "radicals": ["女", "口"]
    },
    // "家": {
    //     "zhuyin": "ㄐ一ㄚ",
    //     "pinyin": "jiā",
    //     "tone": 1,
    //     "english": "home, family",
    //     "simplified": "",
    //     "radicals": ["宀", "一", "𧰨"]
    // },
    "后": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "behind, after",
        "simplified": "",
        "radicals": ["一", "口"]
    },
    // "兒": {
    //     "zhuyin": "ㄦˊ",
    //     "pinyin": "ér",
    //     "tone": 2,
    //     "english": "son",
    //     "simplified": "儿",
    //     "radicals": ["彐", "儿"]
    // },
    // "多": {
    //     "zhuyin": "ㄉㄨㄛ",
    //     "pinyin": "duō",
    //     "tone": 1,
    //     "english": "many, much",
    //     "simplified": "",
    //     "radicals": ["夕"]
    // },
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
    // "話": {
    //     "zhuyin": "ㄏㄨㄚˋ",
    //     "pinyin": "huà",
    //     "tone": 4,
    //     "english": "language, talk",
    //     "simplified": "话",
    //     "radicals": ["言", "舌"]
    // },
    // "小": {
    //     "zhuyin": "ㄒ一ㄠˇ",
    //     "pinyin": "xiǎo",
    //     "tone": 3,
    //     "english": "small",
    //     "simplified": "",
    //     "radicals": ["㇚", "八"]
    // },
    // "自": {
    //     "zhuyin": "ㄗˋ",
    //     "pinyin": "zì",
    //     "tone": 4,
    //     "english": "self",
    //     "simplified": "",
    //     "radicals": ["目", "丶"]
    // },
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
    // "果": {
    //     "zhuyin": "ㄍㄨㄛˇ",
    //     "pinyin": "guǒ",
    //     "tone": 3,
    //     "english": "fruit",
    //     "simplified": "",
    //     "radicals": ["田", "木"]
    // },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "fā",
        "tone": 1,
        "english": "to send, to develop",
        "simplified": "发",
        "radicals": ["癶", "弓", "殳"]
    },
    // "見": {
    //     "zhuyin": "ㄐ一ㄢˋ",
    //     "pinyin": "jiàn",
    //     "tone": 4,
    //     "english": "to see, to meet",
    //     "simplified": "见",
    //     "radicals": ["目", "儿"]
    // },
    // "心": {
    //     "zhuyin": "ㄒ一ㄣ",
    //     "pinyin": "xīn",
    //     "tone": 1,
    //     "english": "heart",
    //     "simplified": "",
    //     "radicals": ["丶"]
    // },
    // "走": {
    //     "zhuyin": "ㄗㄡˇ",
    //     "pinyin": "zǒu",
    //     "tone": 3,
    //     "english": "to walk, away",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    "定": {
        "zhuyin": "ㄉ一ㄥˋ",
        "pinyin": "dìng",
        "tone": 4,
        "english": "to set, decide",
        "simplified": "",
        "radicals": ["宀", "一", "止"]
    },
    // "聽": {
    //     "zhuyin": "ㄊ一ㄥ",
    //     "pinyin": "tīng",
    //     "tone": 1,
    //     "english": "to listen",
    //     "simplified": "听",
    //     "radicals": ["耳", "王", "十", "罒", "一", "心"]
    // },
    "覺": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to feel",
        "simplified": "觉",
        "radicals": ["臼", "爻", "冖", "見"]
    },
    // "太": {
    //     "zhuyin": "ㄊㄞˋ",
    //     "pinyin": "tài",
    //     "tone": 4,
    //     "english": "too (much)",
    //     "simplified": "",
    //     "radicals": ["大", "丶"]
    // },
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
    // "媽": {
    //     "zhuyin": "ㄇㄚ",
    //     "pinyin": "mā",
    //     "tone": 1,
    //     "english": "mom",
    //     "simplified": "妈",
    //     "radicals": ["女", "灬"]
    // },
    // "用": {
    //     "zhuyin": "ㄩㄥˋ",
    //     "pinyin": "yòng",
    //     "tone": 4,
    //     "english": "to use",
    //     "simplified": "",
    //     "radicals": ["丨", "二"]
    // },
    // "打": {
    //     "zhuyin": "ㄉㄚˇ",
    //     "pinyin": "dǎ",
    //     "tone": 3,
    //     "english": "to hit",
    //     "simplified": "",
    //     "radicals": ["扌", "一"]
    // },


    // "地": {
    //     "zhuyin": "ㄉㄜ˙",
    //     "pinyin": "de",
    //     "tone": 5,
    //     "english": "-ly, structural p.",
    //     "simplified": "",
    //     "radicals": ["土", "也"]
    // },
    // "再": {
    //     "zhuyin": "ㄗㄞˋ",
    //     "pinyin": "zài",
    //     "tone": 4,
    //     "english": "again, then",
    //     "simplified": "",
    //     "radicals": ["一", "土"]
    // },
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
    // "女": {
    //     "zhuyin": "ㄋㄩˇ",
    //     "pinyin": "nǚ",
    //     "tone": 3,
    //     "english": "woman",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "手": {
    //     "zhuyin": "ㄕㄡˇ",
    //     "pinyin": "shǒu",
    //     "tone": 3,
    //     "english": "hand",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    "前": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "front",
        "simplified": "",
        "radicals": ["", ""]
    },
    // "找": {
    //     "zhuyin": "ㄓㄠˇ",
    //     "pinyin": "zhǎo",
    //     "tone": 3,
    //     "english": "find, to look for",
    //     "simplified": "",
    //     "radicals": ["扌", "戈"]
    // },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "go, travel, walk, OK!",
        "simplified": "",
        "radicals": ["彳", "亍"]
    },
    // "快": {
    //     "zhuyin": "ㄎㄨㄞˋ",
    //     "pinyin": "kuài",
    //     "tone": 4,
    //     "english": "quick, rapid, almost",
    //     "simplified": "",
    //     "radicals": ["忄", "人"]
    // },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, as well as",
        "simplified": "",
        "radicals": ["", ""]
    },
    // "死": {
    //     "zhuyin": "ㄙˇ",
    //     "pinyin": "sǐ",
    //     "tone": 3,
    //     "english": "die",
    //     "simplified": "",
    //     "radicals": ["歹", "匕"]
    // },
    // "先": {
    //     "zhuyin": "ㄒㄧㄢ",
    //     "pinyin": "xiān",
    //     "tone": 1,
    //     "english": "first, former",
    //     "simplified": "",
    //     "radicals": ["⺧", "儿"]
    // },
    // "像": {
    //     "zhuyin": "ㄒㄧㄤˋ",
    //     "pinyin": "xiàng",
    //     "tone": 4,
    //     "english": "resemble, to be like, image",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "明": {
    //     "zhuyin": "ㄇㄧㄥˊ",
    //     "pinyin": "míng",
    //     "tone": 2,
    //     "english": "bright",
    //     "simplified": "",
    //     "radicals": ["日", "月"]
    // },
    // "中": {
    //     "zhuyin": "ㄓㄨㄥ",
    //     "pinyin": "zhōng",
    //     "tone": 1,
    //     "english": "middle, center",
    //     "simplified": "",
    //     "radicals": ["口", "丨"]
    // },
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
    // "跟": {
    //     "zhuyin": "ㄍㄣ",
    //     "pinyin": "gēn",
    //     "tone": 1,
    //     "english": "with, to follow",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "面": {
    //     "zhuyin": "ㄇㄧㄢˋ",
    //     "pinyin": "miàn",
    //     "tone": 4,
    //     "english": "face, surface, noodles, side, aspect",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    "訴": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "sù",
        "tone": 4,
        "english": "complain, tell, accuse",
        "simplified": "诉",
        "radicals": ["", ""]
    },
    // "愛": {
    //     "zhuyin": "ㄞˋ",
    //     "pinyin": "ài",
    //     "tone": 4,
    //     "english": "love",
    //     "simplified": "爱",
    //     "radicals": ["", ""]
    // },
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
    // "問": {
    //     "zhuyin": "ㄨㄣˋ",
    //     "pinyin": "wèn",
    //     "tone": 4,
    //     "english": "ask",
    //     "simplified": "问",
    //     "radicals": ["門", "口"]
    // },
    "錯": {
        "zhuyin": "ㄘㄨㄛˋ",
        "pinyin": "cuò",
        "tone": 4,
        "english": "mistake",
        "simplified": "错",
        "radicals": ["", ""]
    },
    // "孩": {
    //     "zhuyin": "ㄏㄞˊ",
    //     "pinyin": "hái",
    //     "tone": 2,
    //     "english": "child",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "它": {
    //     "zhuyin": "ㄊㄚ",
    //     "pinyin": "tā",
    //     "tone": 1,
    //     "english": "it",
    //     "simplified": "",
    //     "radicals": ["宀", "匕"]
    // },
    "感": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "feel, emotion",
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
    // "電": {
    //     "zhuyin": "ㄉㄧㄢˋ",
    //     "pinyin": "diàn",
    //     "tone": 4,
    //     "english": "electric",
    //     "simplified": "电",
    //     "radicals": ["雨", "电"]
    // },
    // "間": {
    //     "zhuyin": "ㄐㄧㄢ",
    //     "pinyin": "jiān",
    //     "tone": 1,
    //     "english": "between, among, room, space",
    //     "simplified": "间",
    //     "radicals": ["門", "日"]
    // },
    // "哪": {
    //     "zhuyin": "ㄋㄚˇ",
    //     "pinyin": "nǎ",
    //     "tone": 3,
    //     "english": "which",
    //     "simplified": "",
    //     "radicals": ["口", "那"]
    // },
    // "西": {
    //     "zhuyin": "ㄒㄧ",
    //     "pinyin": "xī",
    //     "tone": 1,
    //     "english": "west",
    //     "simplified": "",
    //     "radicals": ["兀", "囗"]
    // },
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
    // "次": {
    //     "zhuyin": "ㄘˋ",
    //     "pinyin": "cì",
    //     "tone": 4,
    //     "english": "once, time sequence, order",
    //     "simplified": "次",
    //     "radicals": ["", ""]
    // },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "xìn",
        "tone": 4,
        "english": "letter, to trust",
        "simplified": "",
        "radicals": ["", ""]
    },
    // "歡": {
    //     "zhuyin": "ㄏㄨㄢ",
    //     "pinyin": "huān",
    //     "tone": 1,
    //     "english": "joyous, pleased",
    //     "simplified": "欢",
    //     "radicals": ["雚", "欠"]
    // },
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
    // "車": {
    //     "zhuyin": "ㄔㄜ",
    //     "pinyin": "chē",
    //     "tone": 1,
    //     "english": "car, vehicle",
    //     "simplified": "车",
    //     "radicals": ["二", "日"]
    // },
    // "年": {
    //     "zhuyin": "ㄋㄧㄢˊ",
    //     "pinyin": "nián",
    //     "tone": 2,
    //     "english": "year",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "喜": {
    //     "zhuyin": "ㄒㄧˇ",
    //     "pinyin": "xǐ",
    //     "tone": 3,
    //     "english": "fond of, to like",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "老": {
    //     "zhuyin": "ㄌㄠˇ",
    //     "pinyin": "	lǎo",
    //     "tone": 3,
    //     "english": "old (prefix)",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "分": {
    //     "zhuyin": "ㄈㄣ",
    //     "pinyin": "",
    //     "tone": 1,
    //     "english": "to divide, fraction",
    //     "simplified": "",
    //     "radicals": ["八", "刀"]
    // },
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
    // "美": {
    //     "zhuyin": "ㄇㄟˇ",
    //     "pinyin": "měi",
    //     "tone": 3,
    //     "english": "beautiful",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "力": {
    //     "zhuyin": "ㄌㄧˋ",
    //     "pinyin": "	lì",
    //     "tone": 4,
    //     "english": "power",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "工": {
    //     "zhuyin": "ㄍㄨㄥ",
    //     "pinyin": "gōng",
    //     "tone": 1,
    //     "english": "work",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "名": {
    //     "zhuyin": "ㄇㄧㄥˊ",
    //     "pinyin": "",
    //     "tone": 2,
    //     "english": "name",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "學": {
    //     "zhuyin": "ㄒㄩㄝˊ",
    //     "pinyin": "",
    //     "tone": 2,
    //     "english": "learn",
    //     "simplified": "学",
    //     "radicals": ["", ""]
    // },
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
    // "叫": {
    //     "zhuyin": "ㄐㄧㄠˋ",
    //     "pinyin": "",
    //     "tone": 4,
    //     "english": "call",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    "理": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "essence, truth",
        "simplified": "",
        "radicals": ["", ""]
    },

    // "本": {
    //     "zhuyin": "ㄅㄣˇ",
    //     "pinyin": "",
    //     "tone": 3,
    //     "english": "measure w. for books",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "國": {
    //     "zhuyin": "ㄍㄨㄛˊ",
    //     "pinyin": "",
    //     "tone": 2,
    //     "english": "country",
    //     "simplified": "国",
    //     "radicals": ["", ""]
    // },
    // "第": {
    //     "zhuyin": "ㄉㄧˋ",
    //     "pinyin": "",
    //     "tone": 4,
    //     "english": "ordinal #",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "友": {
    //     "zhuyin": "ㄧㄡˇ",
    //     "pinyin": "",
    //     "tone": 3,
    //     "english": "friend",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    // "高": {
    //     "zhuyin": "ㄍㄠ",
    //     "pinyin": "",
    //     "tone": 1,
    //     "english": "high, tall",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "身": {
    //     "zhuyin": "ㄕㄣ",
    //     "pinyin": "",
    //     "tone": 1,
    //     "english": "body",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
    "受": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to receive",
        "simplified": "",
        "radicals": ["", ""]
    },
    // "住": {
    //     "zhuyin": "ㄓㄨˋ",
    //     "pinyin": "",
    //     "tone": 4,
    //     "english": "to live, reside",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "又": {
    //     "zhuyin": "ㄧㄡˋ",
    //     "pinyin": "yòu",
    //     "tone": 4,
    //     "english": "again, also",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "錢": {
    //     "zhuyin": "ㄑㄧㄢˊ",
    //     "pinyin": "qián",
    //     "tone": 2,
    //     "english": "money",
    //     "simplified": "钱",
    //     "radicals": ["", ""]
    // },
    // "馬": {
    //     "zhuyin": "ㄇㄚˇ",
    //     "pinyin": "mǎ",
    //     "tone": 3,
    //     "english": "horse",
    //     "simplified": "马",
    //     "radicals": ["", ""]
    // },
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
    // "吃": {
    //     "zhuyin": "ㄔ",
    //     "pinyin": "chī",
    //     "tone": 1,
    //     "english": "to eat",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "外": {
    //     "zhuyin": "ㄨㄞˋ",
    //     "pinyin": "wài",
    //     "tone": 4,
    //     "english": "outside, foreign",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "邊": {
    //     "zhuyin": "ㄅㄧㄢ",
    //     "pinyin": "biān",
    //     "tone": 1,
    //     "english": "side, edge",
    //     "simplified": "边",
    //     "radicals": ["", ""]
    // },
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
    // "男": {
    //     "zhuyin": "ㄋㄢˊ",
    //     "pinyin": "nán",
    //     "tone": 2,
    //     "english": "male",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
    // "氣": {
    //     "zhuyin": "ㄑㄧˋ",
    //     "pinyin": "qì",
    //     "tone": 4,
    //     "english": "air",
    //     "simplified": "气",
    //     "radicals": ["", ""]
    // },
    "每": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "měi",
        "tone": 3,
        "english": "each, every",
        "simplified": "",
        "radicals": ["", ""]
    },
    // "少": {
    //     "zhuyin": "ㄕㄠˇ",
    //     "pinyin": "shǎo",
    //     "tone": 3,
    //     "english": "few, little",
    //     "simplified": "",
    //     "radicals": ["", ""]
    // },
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
        "english": "to move, movement, fortune, luck",
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
    // count 500 ish
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
    "藥": {
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
    "倆": {
        "zhuyin": "ㄌㄧㄚˇ",
        "pinyin": "liǎ",
        "tone": 3,
        "english": "two, both",
        "simplified": "俩",
        "radicals": ["", ""]
    },
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
    "皮": {
        "zhuyin": "ㄆㄧˊ",
        "pinyin": "pí",
        "tone": 2,
        "english": "leather, skin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "存": {
        "zhuyin": "ㄘㄨㄣˊ",
        "pinyin": "cún",
        "tone": 2,
        "english": "to exist, to deposit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "練": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "liàn",
        "tone": 4,
        "english": "to practice",
        "simplified": "练",
        "radicals": ["", ""]
    },
    "娘": {
        "zhuyin": "ㄋㄧㄤˊ",
        "pinyin": "niáng",
        "tone": 2,
        "english": "mother, young lady",
        "simplified": "",
        "radicals": ["", ""]
    },
    "頓": {
        "zhuyin": "ㄉㄨㄣˋ",
        "pinyin": "dùn",
        "tone": 4,
        "english": "to pause, (mw. for meals)",
        "simplified": "顿",
        "radicals": ["", ""]
    },
    "斷": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "duàn",
        "tone": 4,
        "english": "to break, definitely, decidedly",
        "simplified": "断",
        "radicals": ["", ""]
    },
    "設": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to set up",
        "simplified": "设",
        "radicals": ["", ""]
    },
    "松": {
        "zhuyin": "ㄙㄨㄥ",
        "pinyin": "sōng",
        "tone": 1,
        "english": "loose, to relax",
        "simplified": "",
        "radicals": ["", ""]
    },
    "博": {
        "zhuyin": "ㄅㄛˊ",
        "pinyin": "bó",
        "tone": 2,
        "english": "rich, extensive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "置": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to install",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逃": {
        "zhuyin": "ㄊㄠˊ",
        "pinyin": "táo",
        "tone": 2,
        "english": "to escape",
        "simplified": "",
        "radicals": ["", ""]
    },
    "觀": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "to watch",
        "simplified": "观",
        "radicals": ["", ""]
    },
    "痛": {
        "zhuyin": "ㄊㄨㄥˋ",
        "pinyin": "tòng",
        "tone": 4,
        "english": "ache, pain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狂": {
        "zhuyin": "ㄎㄨㄤˊ",
        "pinyin": "kuáng",
        "tone": 2,
        "english": "mad, wild",
        "simplified": "",
        "radicals": ["", ""]
    },
    "足": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "foot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碼": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "number, code",
        "simplified": "码",
        "radicals": ["", ""]
    },
    "恐": {
        "zhuyin": "ㄎㄨㄥˇ",
        "pinyin": "kǒng",
        "tone": 3,
        "english": "afraid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吉": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "lucky",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歷": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "calendar, to experience",
        "simplified": "历",
        "radicals": ["", ""]
    },
    "慢": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "màn",
        "tone": 4,
        "english": "slow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妻": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "wife",
        "simplified": "",
        "radicals": ["", ""]
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "mountain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "普": {
        "zhuyin": "ㄆㄨˇ",
        "pinyin": "pǔ",
        "tone": 3,
        "english": "general, popular",
        "simplified": "",
        "radicals": ["", ""]
    },
    "價": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "jià",
        "tone": 4,
        "english": "price, value",
        "simplified": "价",
        "radicals": ["", ""]
    },
    "元": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "unit of money",
        "simplified": "",
        "radicals": ["", ""]
    },
    "角": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "angle, 0.1元",
        "simplified": "",
        "radicals": ["", ""]
    },
    "懷": {
        "zhuyin": "ㄏㄨㄞˊ",
        "pinyin": "huái",
        "tone": 2,
        "english": "bosom, heart",
        "simplified": "怀",
        "radicals": ["", ""]
    },
    "床": {
        "zhuyin": "ㄔㄨㄤˊ",
        "pinyin": "chuáng",
        "tone": 2,
        "english": "bed",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奧": {
        "zhuyin": "ㄠˋ",
        "pinyin": "ào",
        "tone": 4,
        "english": "obscure",
        "simplified": "奥",
        "radicals": ["", ""]
    },
    "模": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "to imitate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驗": {
        "zhuyin": "ㄧㄢˋ",
        "pinyin": "yàn",
        "tone": 4,
        "english": "to examine",
        "simplified": "验",
        "radicals": ["", ""]
    },
    "索": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "to search, ask",
        "simplified": "",
        "radicals": ["", ""]
    },
    "街": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "jiē",
        "tone": 1,
        "english": "street",
        "simplified": "",
        "radicals": ["", ""]
    },
    "呼": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "hū",
        "tone": 1,
        "english": "to call",
        "simplified": "",
        "radicals": ["", ""]
    },
    "祝": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "to wish, pray",
        "simplified": "",
        "radicals": ["", ""]
    },
    "料": {
        "zhuyin": "ㄌㄧㄠˋ",
        "pinyin": "liào",
        "tone": 4,
        "english": "material, stuff",
        "simplified": "",
        "radicals": ["", ""]
    },
    "休": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "xiū",
        "tone": 1,
        "english": "to rest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "靈": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "líng",
        "tone": 2,
        "english": "quick, effective",
        "simplified": "灵",
        "radicals": ["", ""]
    },
    "獄": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù ",
        "tone": 4,
        "english": "prison, lawsuit",
        "simplified": "狱",
        "radicals": ["", ""]
    },
    "劇": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "drama, play",
        "simplified": "剧",
        "radicals": ["", ""]
    },
    "亂": {
        "zhuyin": "ㄌㄨㄢˋ",
        "pinyin": "luàn",
        "tone": 4,
        "english": "messy, disorder",
        "simplified": "乱",
        "radicals": ["", ""]
    },
    "展": {
        "zhuyin": "ㄓㄢˇ",
        "pinyin": "zhǎn",
        "tone": 3,
        "english": "to spread out",
        "simplified": "",
        "radicals": ["", ""]
    },
    "板": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "bǎn",
        "tone": 3,
        "english": "board, plank",
        "simplified": "",
        "radicals": ["", ""]
    },
    "承": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "to bear, carry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "則": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "in contrast, norm",
        "simplified": "则",
        "radicals": ["", ""]
    },
    "顧": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "to look after",
        "simplified": "顾",
        "radicals": ["", ""]
    },
    "深": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "shēn",
        "tone": 1,
        "english": "deep, profound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "產": {
        "zhuyin": "ㄔㄢˇ",
        "pinyin": "chǎn",
        "tone": 3,
        "english": "give birth to, produce",
        "simplified": "产",
        "radicals": ["", ""]
    },
    "洗": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "to wash",
        "simplified": "",
        "radicals": ["", ""]
    },
    "政": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "political",
        "simplified": "",
        "radicals": ["", ""]
    },
    "迷": {
        "zhuyin": "ㄇㄧˊ",
        "pinyin": "mí",
        "tone": 2,
        "english": "fan (of)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "領": {
        "zhuyin": "ㄌㄧㄥˇ",
        "pinyin": "lǐng",
        "tone": 3,
        "english": "neck",
        "simplified": "领",
        "radicals": ["", ""]
    },
    "午": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "noon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "納": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "nà",
        "tone": 4,
        "english": "to recieve, bring in",
        "simplified": "纳",
        "radicals": ["", ""]
    },
    "謊": {
        "zhuyin": "ㄏㄨㄤˇ",
        "pinyin": "huǎng",
        "tone": 3,
        "english": "lie",
        "simplified": "谎",
        "radicals": ["", ""]
    },
    "具": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "tool, ability",
        "simplified": "",
        "radicals": ["", ""]
    },
    "退": {
        "zhuyin": "ㄊㄨㄟˋ",
        "pinyin": "tuì",
        "tone": 4,
        "english": "to retreat, to decline",
        "simplified": "",
        "radicals": ["", ""]
    },
    "福": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "luck, fortune",
        "simplified": "",
        "radicals": ["", ""]
    },
    "習": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "xí",
        "tone": 2,
        "english": "to study, habit",
        "simplified": "习",
        "radicals": ["", ""]
    },
    "秘": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "secret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奶": {
        "zhuyin": "ㄋㄞˇ",
        "pinyin": "nǎi",
        "tone": 3,
        "english": "milk, breast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遇": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to meet, encounter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "職": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "office, duty",
        "simplified": "职",
        "radicals": ["", ""]
    },
    "架": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "jià",
        "tone": 4,
        "english": "to support, framework",
        "simplified": "",
        "radicals": ["", ""]
    },
    "即": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "namely, at once",
        "simplified": "",
        "radicals": ["", ""]
    },
    "挺": {
        "zhuyin": "ㄊㄧㄥˇ",
        "pinyin": "tǐng",
        "tone": 3,
        "english": "to stand upright",
        "simplified": "",
        "radicals": ["", ""]
    },
    "史": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "history",
        "simplified": "",
        "radicals": ["", ""]
    },
    "負": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "to bear",
        "simplified": "负",
        "radicals": ["", ""]
    },
    "千": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "qiān",
        "tone": 1,
        "english": "thousand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "脫": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "tuō",
        "tone": 1,
        "english": "to take off",
        "simplified": "脱",
        "radicals": ["", ""]
    },
    "瑞": {
        "zhuyin": "ㄖㄨㄟˋ",
        "pinyin": "ruì",
        "tone": 4,
        "english": "auspicious(conducive to success, favorable)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "back of object",
        "simplified": "",
        "radicals": ["", ""]
    },
    "僅": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "jǐn",
        "tone": 3,
        "english": "barely, merely",
        "simplified": "仅",
        "radicals": ["", ""]
    },
    "追": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "to chase",
        "simplified": "",
        "radicals": ["", ""]
    },
    "倫": {
        "zhuyin": "ㄌㄨㄣˊ",
        "pinyin": "lún",
        "tone": 2,
        "english": "relationship",
        "simplified": "伦",
        "radicals": ["", ""]
    },
    "炸": {
        "zhuyin": "ㄓㄚˋ",
        "pinyin": "zhá",
        "tone": 2,
        "english": "to fry in oil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "資": {
        "zhuyin": "ㄗ",
        "pinyin": "zī",
        "tone": 1,
        "english": "property, wealth",
        "simplified": "资",
        "radicals": ["", ""]
    },
    "畫": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to draw, picture",
        "simplified": "画",
        "radicals": ["", ""]
    },
    "蹤": {
        "zhuyin": "ㄗㄨㄥ",
        "pinyin": "zōng",
        "tone": 1,
        "english": "footprints, traces",
        "simplified": "踪",
        "radicals": ["", ""]
    },
    "射": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to shoot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "棄": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "to abandon",
        "simplified": "弃",
        "radicals": ["", ""]
    },
    "傻": {
        "zhuyin": "ㄕㄚˇ",
        "pinyin": "shǎ",
        "tone": 3,
        "english": "foolish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藏": {
        "zhuyin": "ㄘㄤˊ",
        "pinyin": "cáng",
        "tone": 2,
        "english": "to conceal, to store",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屁": {
        "zhuyin": "ㄆㄧˋ",
        "pinyin": "pì",
        "tone": 4,
        "english": "fart, nonsense",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瞧": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "qiáo ",
        "tone": 2,
        "english": "to glance at",
        "simplified": "",
        "radicals": ["", ""]
    },
    "修": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "xiū",
        "tone": 1,
        "english": "to repair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屍": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "corpse",
        "simplified": "尸",
        "radicals": ["", ""]
    },
    "聞": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "to hear, news",
        "simplified": "闻",
        "radicals": ["", ""]
    },
    "共": {
        "zhuyin": "ㄍㄨㄥˋ",
        "pinyin": "gòng",
        "tone": 4,
        "english": "common, general",
        "simplified": "",
        "radicals": ["", ""]
    },
    "懂": {
        "zhuyin": "ㄉㄨㄥˇ",
        "pinyin": "dǒng",
        "tone": 3,
        "english": "to understand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蒂": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "stem of plant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "危": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "danger",
        "simplified": "",
        "radicals": ["", ""]
    },
    "專": {
        "zhuyin": "ㄓㄨㄢ",
        "pinyin": "zhuān",
        "tone": 1,
        "english": "specialized",
        "simplified": "专",
        "radicals": ["", ""]
    },
    "呆": {
        "zhuyin": "ㄉㄞ",
        "pinyin": "dái",
        "tone": 2,
        "english": "blank, stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "介": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to introduce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "薩": {
        "zhuyin": "ㄙㄚˋ",
        "pinyin": "sà",
        "tone": 4,
        "english": "Bodhisattva (Buddhism)",
        "simplified": "萨",
        "radicals": ["", ""]
    },
    "魔": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "devil, magic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "urgent, worried",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碰": {
        "zhuyin": "ㄆㄥˋ",
        "pinyin": "pèng",
        "tone": 4,
        "english": "to bump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "甚": {
        "zhuyin": "ㄕㄣˋ",
        "pinyin": "shén",
        "tone": 2,
        "english": "variant of 什",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糕": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo ",
        "tone": 1,
        "english": "cake",
        "simplified": "",
        "radicals": ["", ""]
    },
    "苦": {
        "zhuyin": "ㄎㄨˇ",
        "pinyin": "kǔ",
        "tone": 3,
        "english": "bitter, pain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "念": {
        "zhuyin": "ㄋㄧㄢˋ",
        "pinyin": "niàn",
        "tone": 4,
        "english": "to miss (sb), thought",
        "simplified": "",
        "radicals": ["", ""]
    },
    "適": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to fit, suitable",
        "simplified": "适",
        "radicals": ["", ""]
    },
    "華": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "huá",
        "tone": 2,
        "english": "splendid",
        "simplified": "华",
        "radicals": ["", ""]
    },
    "沖": {
        "zhuyin": "ㄔㄨㄥ",
        "pinyin": "chōng",
        "tone": 1,
        "english": "to clash, rinse",
        "simplified": "冲",
        "radicals": ["", ""]
    },
    "騙": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "to cheat",
        "simplified": "骗",
        "radicals": ["", ""]
    },
    "厭": {
        "zhuyin": "ㄧㄢˋ",
        "pinyin": "yàn",
        "tone": 4,
        "english": "to loathe",
        "simplified": "厌",
        "radicals": ["", ""]
    },
    "型": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "model, type",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麥": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "wheat, oats",
        "simplified": "麦",
        "radicals": ["", ""]
    },
    "似": {
        "zhuyin": "ㄙˋ",
        "pinyin": "sì",
        "tone": 4,
        "english": "-like, similar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紅": {
        "zhuyin": "ㄏㄨㄥˊ",
        "pinyin": "hóng",
        "tone": 2,
        "english": "red",
        "simplified": "红",
        "radicals": ["", ""]
    },
    "值": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "value",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腳": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "foot",
        "simplified": "脚",
        "radicals": ["", ""]
    },
    "六": {
        "zhuyin": "ㄌㄧㄡˋ",
        "pinyin": "liù",
        "tone": 4,
        "english": "six",
        "simplified": "",
        "radicals": ["", ""]
    },
    "謀": {
        "zhuyin": "ㄇㄡˊ",
        "pinyin": "móu",
        "tone": 2,
        "english": "plan, scheme",
        "simplified": "谋",
        "radicals": ["", ""]
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "pinyin": "tào",
        "tone": 4,
        "english": "cover, (mw. for sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凱": {
        "zhuyin": "ㄎㄞˇ",
        "pinyin": "kǎi",
        "tone": 3,
        "english": "triumphant",
        "simplified": "凯",
        "radicals": ["", ""]
    },
    "眾": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "zhòng",
        "tone": 4,
        "english": "many, crowd",
        "simplified": "众",
        "radicals": ["", ""]
    },
    "預": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to advance, prepare",
        "simplified": "预",
        "radicals": ["", ""]
    },
    "際": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "border, between",
        "simplified": "际",
        "radicals": ["", ""]
    },
    "咱": {
        "zhuyin": "ㄗㄢˊ",
        "pinyin": "zá/zán",
        "tone": 2,
        "english": "we, us",
        "simplified": "",
        "radicals": ["", ""]
    },
    "波": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "wave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "衛": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "to guard",
        "simplified": "卫",
        "radicals": ["", ""]
    },
    "聊": {
        "zhuyin": "ㄌㄧㄠˊ",
        "pinyin": "liáo",
        "tone": 2,
        "english": "to chat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "養": {
        "zhuyin": "ㄧㄤˇ",
        "pinyin": "yǎng",
        "tone": 3,
        "english": "to raise, bring up",
        "simplified": "养",
        "radicals": ["", ""]
    },
    "導": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "to guide",
        "simplified": "导",
        "radicals": ["", ""]
    },
    "慮": {
        "zhuyin": "ㄌㄩˋ",
        "pinyin": "lǜ",
        "tone": 4,
        "english": "to think over",
        "simplified": "虑",
        "radicals": ["", ""]
    },
    "私": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戴": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to put on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毀": {
        "zhuyin": "ㄏㄨㄟˇ",
        "pinyin": "huǐ",
        "tone": 3,
        "english": "to destroy",
        "simplified": "毁",
        "radicals": ["", ""]
    },
    "魚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "fish",
        "simplified": "鱼",
        "radicals": ["", ""]
    },
    "滾": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn",
        "tone": 3,
        "english": "to boil",
        "simplified": "滚",
        "radicals": ["", ""]
    },
    "志": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "sign, ambition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雜": {
        "zhuyin": "ㄗㄚˊ",
        "pinyin": "zá",
        "tone": 2,
        "english": "mixed",
        "simplified": "杂",
        "radicals": ["", ""]
    },
    "居": {
        "zhuyin": "ㄐㄩ",
        "pinyin": "jū",
        "tone": 1,
        "english": "to reside, residence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "詞": {
        "zhuyin": "ㄘˊ",
        "pinyin": "cí",
        "tone": 2,
        "english": "word",
        "simplified": "词",
        "radicals": ["", ""]
    },
    "食": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "food",
        "simplified": "",
        "radicals": ["", ""]
    },
    "諾": {
        "zhuyin": "ㄋㄨㄛˋ",
        "pinyin": "nuò",
        "tone": 4,
        "english": "promise",
        "simplified": "诺",
        "radicals": ["", ""]
    },
    "讀": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "dú",
        "tone": 2,
        "english": "to read",
        "simplified": "读",
        "radicals": ["", ""]
    },
    "誤": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "mistake",
        "simplified": "误",
        "radicals": ["", ""]
    },
    "撒": {
        "zhuyin": "ㄙㄚ",
        "pinyin": "sā",
        "tone": 1,
        "english": "to release",
        "simplified": "",
        "radicals": ["", ""]
    },
    "突": {
        "zhuyin": "ㄊㄨ",
        "pinyin": "tū",
        "tone": 1,
        "english": "to dash, sudden",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牛": {
        "zhuyin": "ㄋㄧㄡˊ",
        "pinyin": "niú",
        "tone": 2,
        "english": "cow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "館": {
        "zhuyin": "ㄍㄨㄢˇ",
        "pinyin": "guǎn",
        "tone": 3,
        "english": "building, shop",
        "simplified": "馆",
        "radicals": ["", ""]
    },
    "規": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guī",
        "tone": 1,
        "english": "a rule, compass",
        "simplified": "规",
        "radicals": ["", ""]
    },
    "陪": {
        "zhuyin": "ㄆㄟˊ",
        "pinyin": "péi",
        "tone": 2,
        "english": "to accompany",
        "simplified": "",
        "radicals": ["", ""]
    },
    "州": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "a state",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "ròu",
        "tone": 4,
        "english": "meat, flesh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "形": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "form, appear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凶": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "xiōng",
        "tone": 1,
        "english": "culprit, scary",
        "simplified": "",
        "radicals": ["", ""]
    },
    "森": {
        "zhuyin": "ㄙㄣ",
        "pinyin": "sēn",
        "tone": 1,
        "english": "forest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "商": {
        "zhuyin": "ㄕㄤ",
        "pinyin": "shāng",
        "tone": 1,
        "english": "commerce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紀": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "order, to dicipline",
        "simplified": "纪",
        "radicals": ["", ""]
    },
    "浪": {
        "zhuyin": "ㄌㄤˋ",
        "pinyin": "làng",
        "tone": 4,
        "english": "wave, unrestrained",
        "simplified": "",
        "radicals": ["", ""]
    },
    "石": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "stone",
        "simplified": "",
        "radicals": ["", ""]
    },
    "順": {
        "zhuyin": "ㄕㄨㄣˋ",
        "pinyin": "shùn",
        "tone": 4,
        "english": "to obey, along",
        "simplified": "顺",
        "radicals": ["", ""]
    },
    "舉": {
        "zhuyin": "ㄐㄩˇ",
        "pinyin": "jǔ",
        "tone": 3,
        "english": "to lift",
        "simplified": "举",
        "radicals": ["", ""]
    },
    "按": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "to press, retrain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "旅": {
        "zhuyin": "ㄌㄩˇ",
        "pinyin": "lǚ",
        "tone": 3,
        "english": "journey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "努": {
        "zhuyin": "ㄋㄨˇ",
        "pinyin": "nǔ",
        "tone": 3,
        "english": "to exert",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堅": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "strong",
        "simplified": "坚",
        "radicals": ["", ""]
    },
    "測": {
        "zhuyin": "ㄘㄜˋ",
        "pinyin": "cè",
        "tone": 4,
        "english": "to measure",
        "simplified": "测",
        "radicals": ["", ""]
    },
    "免": {
        "zhuyin": "ㄇㄧㄢˇ",
        "pinyin": "miǎn",
        "tone": 3,
        "english": "to exempt, avoid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喔": {
        "zhuyin": "ㄛ",
        "pinyin": "ō",
        "tone": 1,
        "english": "I see, oh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "絲": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "silk",
        "simplified": "丝",
        "radicals": ["", ""]
    },
    "輛": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "liàng",
        "tone": 4,
        "english": "(mw. for vehicles)",
        "simplified": "辆",
        "radicals": ["", ""]
    },
    "喬": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "qiáo",
        "tone": 2,
        "english": "tall, lofty",
        "simplified": "乔",
        "radicals": ["", ""]
    },
    "防": {
        "zhuyin": "ㄈㄤˊ",
        "pinyin": "fáng",
        "tone": 2,
        "english": "to protect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "句": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "sentence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "印": {
        "zhuyin": "ㄧㄣˋ",
        "pinyin": "yìn",
        "tone": 4,
        "english": "to print, image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戀": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "liàn",
        "tone": 4,
        "english": "to feel attached to",
        "simplified": "恋",
        "radicals": ["", ""]
    },
    "弗": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "not, negative",
        "simplified": "",
        "radicals": ["", ""]
    },
    "季": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "season",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嚴": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "yán",
        "tone": 2,
        "english": "strict, tight",
        "simplified": "严",
        "radicals": ["", ""]
    },
    "推": {
        "zhuyin": "ㄊㄨㄟ",
        "pinyin": "tuī",
        "tone": 1,
        "english": "to push",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伯": {
        "zhuyin": "ㄅㄛˊ",
        "pinyin": "bó",
        "tone": 2,
        "english": "eldest uncle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莉": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "white jasmine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "武": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "martial",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勝": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "shèng",
        "tone": 4,
        "english": "victory, better",
        "simplified": "胜",
        "radicals": ["", ""]
    },
    "毛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "máo",
        "tone": 2,
        "english": "hair, coarse",
        "simplified": "",
        "radicals": ["", ""]
    },
    "壓": {
        "zhuyin": "ㄧㄚ",
        "pinyin": "yā",
        "tone": 1,
        "english": "to push down",
        "simplified": "压",
        "radicals": ["", ""]
    },
    "敗": {
        "zhuyin": "ㄅㄞˋ",
        "pinyin": "bài",
        "tone": 4,
        "english": "to defeat",
        "simplified": "败",
        "radicals": ["", ""]
    },
    "究": {
        "zhuyin": "ㄐㄧㄡ",
        "pinyin": "jiū",
        "tone": 1,
        "english": "after all, to investigate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "評": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "píng",
        "tone": 2,
        "english": "to comment, critisize",
        "simplified": "评",
        "radicals": ["", ""]
    },
    "屋": {
        "zhuyin": "ㄨ",
        "pinyin": "wū",
        "tone": 1,
        "english": "house, room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雙": {
        "zhuyin": "ㄕㄨㄤ",
        "pinyin": "shuāng",
        "tone": 1,
        "english": "pair, double",
        "simplified": "双",
        "radicals": ["", ""]
    },
    "牙": {
        "zhuyin": "ㄧㄚˊ",
        "pinyin": "yá",
        "tone": 2,
        "english": "tooth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鬥": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "to fight",
        "simplified": "斗",
        "radicals": ["", ""]
    },
    "雞": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "chicken",
        "simplified": "鸡",
        "radicals": ["", ""]
    },
    "審": {
        "zhuyin": "ㄕㄣˇ",
        "pinyin": "shěn",
        "tone": 3,
        "english": "to examine",
        "simplified": "审",
        "radicals": ["", ""]
    },
    "南": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "south",
        "simplified": "",
        "radicals": ["", ""]
    },
    "速": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "sù",
        "tone": 4,
        "english": "fast, rapid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蠢": {
        "zhuyin": "ㄔㄨㄣˇ",
        "pinyin": "chǔn",
        "tone": 3,
        "english": "stupid, clumsy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丈": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "zhàng ",
        "tone": 4,
        "english": "husband",
        "simplified": "",
        "radicals": ["", ""]
    },
    "守": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "to guard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獲": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "to capture, reap",
        "simplified": "获",
        "radicals": ["", ""]
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "eight",
        "simplified": "",
        "radicals": ["", ""]
    },
    "致": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "fine, delicate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "細": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "thin, fine",
        "simplified": "细",
        "radicals": ["", ""]
    },
    "勒": {
        "zhuyin": "ㄌㄜˋ",
        "pinyin": "lè",
        "tone": 4,
        "english": "to rein in, compel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "稱": {
        "zhuyin": "ㄔㄥ",
        "pinyin": "chēng",
        "tone": 1,
        "english": "to weigh, name",
        "simplified": "称",
        "radicals": ["", ""]
    },
    "塔": {
        "zhuyin": "ㄊㄚˇ",
        "pinyin": "tǎ",
        "tone": 3,
        "english": "pagoda, tower",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丟": {
        "zhuyin": "ㄉㄧㄡ",
        "pinyin": "diū",
        "tone": 1,
        "english": "to lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冰": {
        "zhuyin": "ㄅㄧㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "ice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "態": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "attitude",
        "simplified": "态",
        "radicals": ["", ""]
    },
    "嚇": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "xià",
        "tone": 4,
        "english": "to scare",
        "simplified": "吓",
        "radicals": ["", ""]
    },
    "古": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "ancient",
        "simplified": "",
        "radicals": ["", ""]
    },
    "亡": {
        "zhuyin": "ㄨㄤˊ",
        "pinyin": "wáng",
        "tone": 2,
        "english": "to die",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狀": {
        "zhuyin": "ㄓㄨㄤˋ",
        "pinyin": "zhuàng",
        "tone": 4,
        "english": "suit, strong",
        "simplified": "状",
        "radicals": ["", ""]
    },
    "魯": {
        "zhuyin": "ㄌㄨˇ",
        "pinyin": "lǔ",
        "tone": 3,
        "english": "foolish, surname",
        "simplified": "鲁",
        "radicals": ["", ""]
    },
    "療": {
        "zhuyin": "ㄌㄧㄠˊ",
        "pinyin": "liáo",
        "tone": 2,
        "english": "to be healed",
        "simplified": "疗",
        "radicals": ["", ""]
    },
    "操": {
        "zhuyin": "ㄘㄠ",
        "pinyin": "cāo",
        "tone": 1,
        "english": "to operate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遺": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to lose, omit",
        "simplified": "遗",
        "radicals": ["", ""]
    },
    "判": {
        "zhuyin": "ㄆㄢˋ",
        "pinyin": "pàn",
        "tone": 4,
        "english": "to judge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "響": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "sound, noise",
        "simplified": "响",
        "radicals": ["", ""]
    },
    "網": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "net, network",
        "simplified": "网",
        "radicals": ["", ""]
    },
    "箱": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "box, chest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貨": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "goods",
        "simplified": "货",
        "radicals": ["", ""]
    },
    "圍": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wéi",
        "tone": 2,
        "english": "to encircle",
        "simplified": "围",
        "radicals": ["", ""]
    },
    "簽": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "qiān",
        "tone": 1,
        "english": "to sign, label",
        "simplified": "签",
        "radicals": ["", ""]
    },
    "牌": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "pái",
        "tone": 2,
        "english": "card, tablet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戶": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "door, household",
        "simplified": "户",
        "radicals": ["", ""]
    },
    "尋": {
        "zhuyin": "ㄒㄩㄣˊ",
        "pinyin": "xún",
        "tone": 2,
        "english": "to search",
        "simplified": "寻",
        "radicals": ["", ""]
    },
    "質": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "character, quality",
        "simplified": "质",
        "radicals": ["", ""]
    },
    "供": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "to supply",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獎": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "jiǎng",
        "tone": 3,
        "english": "prize",
        "simplified": "奖",
        "radicals": ["", ""]
    },
    "袋": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "pocket",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胡": {
        "zhuyin": "ㄏㄨˊ",
        "pinyin": "hú",
        "tone": 2,
        "english": "beard, mustache",
        "simplified": "",
        "radicals": ["", ""]
    },
    "臟": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "zāng ",
        "tone": 1,
        "english": "dirty",
        "simplified": "脏",
        "radicals": ["", ""]
    },
    "堂": {
        "zhuyin": "ㄊㄤˊ",
        "pinyin": "táng",
        "tone": 2,
        "english": "hall, (mw. for furniture sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "曼": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "màn ",
        "tone": 4,
        "english": "extended",
        "simplified": "",
        "radicals": ["", ""]
    },
    "效": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "xiào",
        "tone": 4,
        "english": "effect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "露": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "dew, to reveal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "替": {
        "zhuyin": "ㄊㄧˋ",
        "pinyin": "tì",
        "tone": 4,
        "english": "on behalf",
        "simplified": "",
        "radicals": ["", ""]
    },
    "娜": {
        "zhuyin": "ㄋㄨㄛˊ",
        "pinyin": "nuó",
        "tone": 2,
        "english": "elegant, delicate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "seat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "園": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "park",
        "simplified": "园",
        "radicals": ["", ""]
    },
    "擁": {
        "zhuyin": "ㄩㄥ",
        "pinyin": "yǒng",
        "tone": 3,
        "english": "to embrace",
        "simplified": "拥",
        "radicals": ["", ""]
    },
    "睛": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "eye, eyeball",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冒": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "mào",
        "tone": 4,
        "english": "to emit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "甜": {
        "zhuyin": "ㄊㄧㄢˊ",
        "pinyin": "tián",
        "tone": 2,
        "english": "sweet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "股": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "portion, thigh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "香": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "fragrant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "筆": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "pen, brush",
        "simplified": "笔",
        "radicals": ["", ""]
    },
    "沙": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "shā",
        "tone": 1,
        "english": "sand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擾": {
        "zhuyin": "ㄖㄠˇ",
        "pinyin": "rǎo",
        "tone": 3,
        "english": "to disturb",
        "simplified": "扰",
        "radicals": ["", ""]
    },
    "挑": {
        "zhuyin": "ㄊㄧㄠ",
        "pinyin": "tiāo",
        "tone": 1,
        "english": "to choose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姑": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "gū",
        "tone": 1,
        "english": "aunt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爆": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to explode",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鎮": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "suppress, small town",
        "simplified": "镇",
        "radicals": ["", ""]
    },
    "暴": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "violent, cruel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "困": {
        "zhuyin": "ㄎㄨㄣˋ",
        "pinyin": "kùn",
        "tone": 4,
        "english": "sleepy, difficult",
        "simplified": "",
        "radicals": ["", ""]
    },
    "項": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "item, back of the neck",
        "simplified": "项",
        "radicals": ["", ""]
    },
    "概": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "approximate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摩": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "to rub",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雖": {
        "zhuyin": "ㄙㄨㄟ",
        "pinyin": "suī",
        "tone": 1,
        "english": "although",
        "simplified": "虽",
        "radicals": ["", ""]
    },
    "紐": {
        "zhuyin": "ㄋㄧㄡˇ",
        "pinyin": "niǔ",
        "tone": 3,
        "english": "knot, knob, button",
        "simplified": "纽",
        "radicals": ["", ""]
    },
    "享": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "to enjoy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "配": {
        "zhuyin": "ㄆㄟˋ",
        "pinyin": "pèi",
        "tone": 4,
        "english": "to join, match",
        "simplified": "",
        "radicals": ["", ""]
    },
    "跡": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "traces",
        "simplified": "迹",
        "radicals": ["", ""]
    },
    "登": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "dēng",
        "tone": 1,
        "english": "to ascend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誕": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "give birth",
        "simplified": "诞",
        "radicals": ["", ""]
    },
    "竟": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "unexpectedly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "叔": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "father's younger brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "捕": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "bǔ",
        "tone": 3,
        "english": "to arrest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賭": {
        "zhuyin": "ㄉㄨˇ",
        "pinyin": "dǔ ",
        "tone": 3,
        "english": "to gamble",
        "simplified": "赌",
        "radicals": ["", ""]
    },
    "阻": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "to obstruct",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彩": {
        "zhuyin": "ㄘㄞˇ",
        "pinyin": "cǎi",
        "tone": 3,
        "english": "color, variety",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搬": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "to move(house)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屬": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "category, affiliation",
        "simplified": "属",
        "radicals": ["", ""]
    },
    "招": {
        "zhuyin": "ㄓㄠ",
        "pinyin": "zhāo",
        "tone": 1,
        "english": "to recruit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婆": {
        "zhuyin": "ㄆㄛˊ",
        "pinyin": "pó",
        "tone": 2,
        "english": "grandmother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "巧": {
        "zhuyin": "ㄑㄧㄠˇ",
        "pinyin": "qiǎo",
        "tone": 3,
        "english": "timely, opportunely",
        "simplified": "",
        "radicals": ["", ""]
    },
    "骨": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "bone",
        "simplified": "",
        "radicals": ["", ""]
    },
    "塞": {
        "zhuyin": "ㄙㄞ",
        "pinyin": "sāi",
        "tone": 1,
        "english": "to stop up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剩": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "shèng",
        "tone": 4,
        "english": "to remain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "酷": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "kù",
        "tone": 4,
        "english": "ruthless, cool",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啡": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi ",
        "tone": 1,
        "english": "coffee, morphine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "課": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "subject, lesson",
        "simplified": "课",
        "radicals": ["", ""]
    },
    "煙": {
        "zhuyin": "ㄧㄢ",
        "pinyin": "yān",
        "tone": 1,
        "english": "cigarette, smoke",
        "simplified": "烟",
        "radicals": ["", ""]
    },
    "攝": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to absorb",
        "simplified": "摄",
        "radicals": ["", ""]
    },
    "封": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "to grant, title",
        "simplified": "",
        "radicals": ["", ""]
    },
    "咖": {
        "zhuyin": "ㄎㄚ",
        "pinyin": "kā",
        "tone": 1,
        "english": "coffee, (phonetic ka)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "低": {
        "zhuyin": "ㄉㄧ",
        "pinyin": "dī",
        "tone": 1,
        "english": "low, beneath",
        "simplified": "",
        "radicals": ["", ""]
    },
    "技": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "skill",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遲": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "late, slow",
        "simplified": "迟",
        "radicals": ["", ""]
    },
    "紙": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "paper",
        "simplified": "纸",
        "radicals": ["", ""]
    },
    "燒": {
        "zhuyin": "ㄕㄠ",
        "pinyin": "shāo",
        "tone": 1,
        "english": "to cook, roast, bake",
        "simplified": "烧",
        "radicals": ["", ""]
    },
    "委": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "to entrust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "暗": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "dark, gloomy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "左": {
        "zhuyin": "ㄗㄨㄛˇ",
        "pinyin": "zuǒ",
        "tone": 3,
        "english": "left",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輸": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "to lose",
        "simplified": "输",
        "radicals": ["", ""]
    },
    "曲": {
        "zhuyin": "ㄑㄩ",
        "pinyin": "qǔ",
        "tone": 3,
        "english": "song, tune",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仍": {
        "zhuyin": "ㄖㄥˊ",
        "pinyin": "réng",
        "tone": 2,
        "english": "still, yet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訓": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "xùn",
        "tone": 4,
        "english": "to tell, teach",
        "simplified": "训",
        "radicals": ["", ""]
    },
    "借": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to lend, borrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扔": {
        "zhuyin": "ㄖㄥ",
        "pinyin": "rēng",
        "tone": 1,
        "english": "to throw",
        "simplified": "",
        "radicals": ["", ""]
    },
    "善": {
        "zhuyin": "ㄕㄢˋ",
        "pinyin": "shàn",
        "tone": 4,
        "english": "virtuous, kind",
        "simplified": "",
        "radicals": ["", ""]
    },
    "社": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "society",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輪": {
        "zhuyin": "ㄌㄨㄣˊ",
        "pinyin": "lún",
        "tone": 2,
        "english": "wheel, by turns",
        "simplified": "轮",
        "radicals": ["", ""]
    },
    "頂": {
        "zhuyin": "ㄉㄧㄥˇ",
        "pinyin": "dǐng",
        "tone": 1,
        "english": "apex, to replace",
        "simplified": "顶",
        "radicals": ["", ""]
    },
    "聰": {
        "zhuyin": "ㄘㄨㄥ",
        "pinyin": "cōng",
        "tone": 1,
        "english": "intelligent",
        "simplified": "聪",
        "radicals": ["", ""]
    },
    "秀": {
        "zhuyin": "ㄒㄧㄡˋ",
        "pinyin": "xiù",
        "tone": 4,
        "english": "handsome, elegant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "dāo",
        "tone": 1,
        "english": "knife",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莫": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "mò",
        "tone": 4,
        "english": "do not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腿": {
        "zhuyin": "ㄊㄨㄟˇ",
        "pinyin": "tuǐ",
        "tone": 3,
        "english": "legs, thighs",
        "simplified": "",
        "radicals": ["", ""]
    },
    "族": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "race, nationality",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鞋": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "xié",
        "tone": 2,
        "english": "shoes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兵": {
        "zhuyin": "ㄅㄧㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "soldiers",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鎖": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "lock",
        "simplified": "锁",
        "radicals": ["", ""]
    },
    "妮": {
        "zhuyin": "ㄋㄧ",
        "pinyin": "nī",
        "tone": 1,
        "english": "girl",
        "simplified": "",
        "radicals": ["", ""]
    },
    "異": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "different, other",
        "simplified": "异",
        "radicals": ["", ""]
    },
    "誓": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "swear, oath",
        "simplified": "",
        "radicals": ["", ""]
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "tree",
        "simplified": "树",
        "radicals": ["", ""]
    },
    "木": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "wood, tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搶": {
        "zhuyin": "ㄑㄧㄤˇ",
        "pinyin": "qiǎng ",
        "tone": 3,
        "english": "to plunder",
        "simplified": "抢",
        "radicals": ["", ""]
    },
    "檔": {
        "zhuyin": "ㄉㄤˋ",
        "pinyin": "dǎng",
        "tone": 3,
        "english": "grade(of goods), shelves",
        "simplified": "档",
        "radicals": ["", ""]
    },
    "雇": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "to employ",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廣": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "wide",
        "simplified": "广",
        "radicals": ["", ""]
    },
    "丹": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "pellet, powder, (phoenetic dan)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "銀": {
        "zhuyin": "ㄧㄣˊ",
        "pinyin": "yín",
        "tone": 2,
        "english": "silver",
        "simplified": "银",
        "radicals": ["", ""]
    },
    "鏡": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "mirror",
        "simplified": "镜",
        "radicals": ["", ""]
    },
    "群": {
        "zhuyin": "ㄑㄩㄣˊ",
        "pinyin": "qún",
        "tone": 2,
        "english": "group",
        "simplified": "",
        "radicals": ["", ""]
    },
    "坦": {
        "zhuyin": "ㄊㄢˇ",
        "pinyin": "tǎn",
        "tone": 3,
        "english": "flat, smooth",
        "simplified": "",
        "radicals": ["", ""]
    },
    //count 1000 ish
    "漢": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "hàn",
        "tone": 4,
        "english": "Han people",
        "simplified": "汉",
        "radicals": ["", ""]
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "tǔ",
        "tone": 3,
        "english": "earth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "短": {
        "zhuyin": "ㄉㄨㄢˇ",
        "pinyin": "duǎn",
        "tone": 3,
        "english": "short, brief",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伴": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "pertner",
        "simplified": "",
        "radicals": ["", ""]
    },
    "播": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "to scatter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "環": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "huán",
        "tone": 2,
        "english": "ring, to circle",
        "simplified": "环",
        "radicals": ["", ""]
    },
    "恨": {
        "zhuyin": "ㄏㄣˋ",
        "pinyin": "hèn",
        "tone": 4,
        "english": "to hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "移": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to move, alter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "編": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "biān",
        "tone": 1,
        "english": "to organize, compile",
        "simplified": "编",
        "radicals": ["", ""]
    },
    "溫": {
        "zhuyin": "ㄨㄣ",
        "pinyin": "wēn",
        "tone": 1,
        "english": "warm",
        "simplified": "温",
        "radicals": ["", ""]
    },
    "刺": {
        "zhuyin": "ㄘˋ",
        "pinyin": "cì",
        "tone": 4,
        "english": "to stab, pierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毫": {
        "zhuyin": "ㄏㄠˊ",
        "pinyin": "háo",
        "tone": 2,
        "english": "fine hair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "右": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "right",
        "simplified": "",
        "radicals": ["", ""]
    },
    "野": {
        "zhuyin": "ㄧㄝˇ",
        "pinyin": "yě",
        "tone": 3,
        "english": "field, wild",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哭": {
        "zhuyin": "ㄎㄨ",
        "pinyin": "kū",
        "tone": 1,
        "english": "to cry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遍": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "everywhere",
        "simplified": "",
        "radicals": ["", ""]
    },
    "庫": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "kù",
        "tone": 4,
        "english": "warehouse",
        "simplified": "库",
        "radicals": ["", ""]
    },
    "搭": {
        "zhuyin": "ㄉㄚ",
        "pinyin": "dā",
        "tone": 1,
        "english": "to put up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "康": {
        "zhuyin": "ㄎㄤ",
        "pinyin": "kāng",
        "tone": 1,
        "english": "healthy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "症": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "disease, illness",
        "simplified": "",
        "radicals": ["", ""]
    },
    "榮": {
        "zhuyin": "ㄖㄨㄥˊ",
        "pinyin": "róng",
        "tone": 2,
        "english": "glory, honor",
        "simplified": "荣",
        "radicals": ["", ""]
    },
    "充": {
        "zhuyin": "ㄔㄨㄥ",
        "pinyin": "chōng",
        "tone": 1,
        "english": "to fill, satisfy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "創": {
        "zhuyin": "ㄔㄨㄤˋ",
        "pinyin": "chuāng",
        "tone": 1,
        "english": "a wound",
        "simplified": "创",
        "radicals": ["", ""]
    },
    "嘗": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "taste, experience",
        "simplified": "尝",
        "radicals": ["", ""]
    },
    "列": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "liè",
        "tone": 4,
        "english": "to arrange, a list",
        "simplified": "",
        "radicals": ["", ""]
    },
    "畢": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "the whole of, finish",
        "simplified": "毕",
        "radicals": ["", ""]
    },
    "般": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "sort, kind",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聚": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "to assemble",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勞": {
        "zhuyin": "ㄌㄠˊ",
        "pinyin": "láo",
        "tone": 2,
        "english": "to toil",
        "simplified": "劳",
        "radicals": ["", ""]
    },
    "攻": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "to attack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忍": {
        "zhuyin": "ㄖㄣˇ",
        "pinyin": "rěn",
        "tone": 3,
        "english": "to endure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勢": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "power, potential",
        "simplified": "势",
        "radicals": ["", ""]
    },
    "尊": {
        "zhuyin": "ㄗㄨㄣ",
        "pinyin": "zūn",
        "tone": 1,
        "english": "senior, to honor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吻": {
        "zhuyin": "ㄨㄣˇ",
        "pinyin": "wěn ",
        "tone": 3,
        "english": "kiss, lips",
        "simplified": "",
        "radicals": ["", ""]
    },
    "湯": {
        "zhuyin": "ㄊㄤ",
        "pinyin": "tāng",
        "tone": 1,
        "english": "soup, hot water",
        "simplified": "汤",
        "radicals": ["", ""]
    },
    "優": {
        "zhuyin": "ㄧㄡ",
        "pinyin": "yōu",
        "tone": 1,
        "english": "excellent",
        "simplified": "优",
        "radicals": ["", ""]
    },
    "境": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "border, place",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蒙": {
        "zhuyin": "ㄇㄥ",
        "pinyin": "méng",
        "tone": 2,
        "english": "cover, ignorant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偶": {
        "zhuyin": "ㄡˇ",
        "pinyin": "ǒu",
        "tone": 3,
        "english": "accidental",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熟": {
        "zhuyin": "ㄕㄨˊ",
        "pinyin": "shú",
        "tone": 2,
        "english": "cooked, ripe, familiar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "營": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "yíng",
        "tone": 2,
        "english": "camp, barracks",
        "simplified": "营",
        "radicals": ["", ""]
    },
    "蘇": {
        "zhuyin": "ㄙㄨ",
        "pinyin": "sū",
        "tone": 1,
        "english": "to revive",
        "simplified": "苏",
        "radicals": ["", ""]
    },
    "爺": {
        "zhuyin": "ㄧㄝˊ",
        "pinyin": "yé ",
        "tone": 2,
        "english": "father, grandfather",
        "simplified": "爷",
        "radicals": ["", ""]
    },
    "微": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "tiny",
        "simplified": "",
        "radicals": ["", ""]
    },
    "埃": {
        "zhuyin": "ㄞ",
        "pinyin": "āi ",
        "tone": 1,
        "english": "fine dust, dirt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抽": {
        "zhuyin": "ㄔㄡ",
        "pinyin": "chōu",
        "tone": 1,
        "english": "to draw out",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蓋": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "lid, cover",
        "simplified": "",
        "radicals": ["", ""]
    },
    "燈": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "dēng",
        "tone": 1,
        "english": "light, lamp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莎": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "shā",
        "tone": 1,
        "english": "sedge grass",
        "simplified": "",
        "radicals": ["", ""]
    },
    "府": {
        "zhuyin": "ㄈㄨˇ",
        "pinyin": "fǔ",
        "tone": 3,
        "english": "seat of power",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1050/2633 done
    "透": {
        "zhuyin": "ㄊㄡˋ",
        "pinyin": "tòu",
        "tone": 4,
        "english": "to penetrate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "魂": {
        "zhuyin": "ㄏㄨㄣˊ",
        "pinyin": "hún",
        "tone": 2,
        "english": "soul, spirit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藝": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "skill, art",
        "simplified": "艺",
        "radicals": ["", ""]
    },
    "掌": {
        "zhuyin": "ㄓㄤˇ",
        "pinyin": "zhǎng",
        "tone": 3,
        "english": "palm of hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啥": {
        "zhuyin": "ㄕㄚˊ",
        "pinyin": "shà",
        "tone": 2,
        "english": "what?",
        "simplified": "",
        "radicals": ["", ""]
    },
    "升": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "to ascend, promote",
        "simplified": "",
        "radicals": ["", ""]
    },
    "褲": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "trousers",
        "simplified": "裤",
        "radicals": ["", ""]
    },
    "臨": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to face",
        "simplified": "临",
        "radicals": ["", ""]
    },
    "智": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "wisdom",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盤": {
        "zhuyin": "ㄆㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "plate",
        "simplified": "盘",
        "radicals": ["", ""]
    },
    "研": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "study, research",
        "simplified": "",
        "radicals": ["", ""]
    },
    "菲": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "fragrant, luxuriant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歸": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to return",
        "simplified": "归",
        "radicals": ["", ""]
    },
    "撞": {
        "zhuyin": "ㄓㄨㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隱": {
        "zhuyin": "ㄧㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "secret",
        "simplified": "隐",
        "radicals": ["", ""]
    },
    "附": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to be close to, to add",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搜": {
        "zhuyin": "ㄙㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "to seek",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擺": {
        "zhuyin": "ㄅㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to arrange",
        "simplified": "摆",
        "radicals": ["", ""]
    },
    "散": {
        "zhuyin": "ㄙㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to scatter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陽": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "yáng",
        "tone": 2,
        "english": "male, sun",
        "simplified": "阳",
        "radicals": ["", ""]
    },
    "協": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "xié",
        "tone": 2,
        "english": "to cooperate",
        "simplified": "协",
        "radicals": ["", ""]
    },
    "租": {
        "zhuyin": "ㄗㄨ",
        "pinyin": "zū",
        "tone": 1,
        "english": "to hire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "泰": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "safe, grand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "島": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "island",
        "simplified": "岛",
        "radicals": ["", ""]
    },
    "健": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "healthy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餅": {
        "zhuyin": "ㄅㄧㄥˇ",
        "pinyin": "bǐng",
        "tone": 3,
        "english": "biscuits",
        "simplified": "饼",
        "radicals": ["", ""]
    },
    "較": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "jiào",
        "tone": 4,
        "english": "comparatively",
        "simplified": "较",
        "radicals": ["", ""]
    },
    "避": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "to flee, avoid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貓": {
        "zhuyin": "ㄇㄠ",
        "pinyin": "māo",
        "tone": 1,
        "english": "cat",
        "simplified": "猫",
        "radicals": ["", ""]
    },
    "七": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "seven",
        "simplified": "",
        "radicals": ["", ""]
    },
    "菜": {
        "zhuyin": "ㄘㄞˋ",
        "pinyin": "cài",
        "tone": 4,
        "english": "dish, cuisine, vegetable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糖": {
        "zhuyin": "ㄊㄤˊ",
        "pinyin": "táng",
        "tone": 2,
        "english": "sugar, sweets",
        "simplified": "",
        "radicals": ["", ""]
    },
    "痴": {
        "zhuyin": "ㄔ",
        "pinyin": "chī",
        "tone": 1,
        "english": "imbecile",
        "simplified": "",
        "radicals": ["", ""]
    },
    "富": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "rich, abundant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "降": {
        "zhuyin": "ㄐㄧㄤˋ",
        "pinyin": "jiàng",
        "tone": 4,
        "english": "to drop, descend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "憐": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to pity",
        "simplified": "怜",
        "radicals": ["", ""]
    },
    "既": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "already, both",
        "simplified": "",
        "radicals": ["", ""]
    },
    "織": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to weave",
        "simplified": "织",
        "radicals": ["", ""]
    },
    "執": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "to execute, grasp",
        "simplified": "执",
        "radicals": ["", ""]
    },
    "戒": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to warn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佛": {
        "zhuyin": "ㄈㄛˊ",
        "pinyin": "fó",
        "tone": 2,
        "english": "Buddha",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抗": {
        "zhuyin": "ㄎㄤˋ",
        "pinyin": "kàng",
        "tone": 4,
        "english": "to resist, anti-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "笨": {
        "zhuyin": "ㄅㄣˋ",
        "pinyin": "bèn",
        "tone": 4,
        "english": "stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "航": {
        "zhuyin": "ㄏㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "boat, to sail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妙": {
        "zhuyin": "ㄇㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "wonderful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "邁": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to pass by",
        "simplified": "迈",
        "radicals": ["", ""]
    },
    "耳": {
        "zhuyin": "ㄦˇ",
        "pinyin": "",
        "tone": 3,
        "english": "ear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "匙": {
        "zhuyin": "ㄔˊ",
        "pinyin": "",
        "tone": 2,
        "english": "spoon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "宣": {
        "zhuyin": "ㄒㄩㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to announce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爛": {
        "zhuyin": "ㄌㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "soft, rotten",
        "simplified": "烂",
        "radicals": ["", ""]
    },
    "秒": {
        "zhuyin": "ㄇㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "a second",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掛": {
        "zhuyin": "ㄍㄨㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hang, register",
        "simplified": "挂",
        "radicals": ["", ""]
    },
    "旁": {
        "zhuyin": "ㄆㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "beside, side",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勇": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "brave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鑰": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "key, lock",
        "simplified": "钥",
        "radicals": ["", ""]
    },
    "悲": {
        "zhuyin": "ㄅㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "sorrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婦": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "married woman",
        "simplified": "妇",
        "radicals": ["", ""]
    },
    "圈": {
        "zhuyin": "ㄑㄩㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "ring, to cricle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敬": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to respect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勁": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "strong, tough",
        "simplified": "劲",
        "radicals": ["", ""]
    },
    "帕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "turban, veil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "草": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "grass",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1112/2500 done
    "醉": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "intoxicated",
        "simplified": "",
        "radicals": ["", ""]
    },
    "綁": {
        "zhuyin": "ㄅㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to tie",
        "simplified": "绑",
        "radicals": ["", ""]
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "layer, floor of building",
        "simplified": "层",
        "radicals": ["", ""]
    },
    "吵": {
        "zhuyin": "ㄔㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to quarrel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "dragon",
        "simplified": "龙",
        "radicals": ["", ""]
    },
    "揮": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to wave, disperse",
        "simplified": "挥",
        "radicals": ["", ""]
    },
    "奮": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to strive",
        "simplified": "奋",
        "radicals": ["", ""]
    },
    "憶": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to remember",
        "simplified": "忆",
        "radicals": ["", ""]
    },
    "折": {
        "zhuyin": "ㄓㄜ",
        "pinyin": "",
        "tone": 1,
        "english": "to break, turn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彼": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "that, those",
        "simplified": "",
        "radicals": ["", ""]
    },
    "末": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "tip, final",
        "simplified": "",
        "radicals": ["", ""]
    },
    "北": {
        "zhuyin": "ㄅㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "north",
        "simplified": "",
        "radicals": ["", ""]
    },
    "景": {
        "zhuyin": "ㄐㄧㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "scenery",
        "simplified": "",
        "radicals": ["", ""]
    },
    "沃": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to trrigate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廢": {
        "zhuyin": "ㄈㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to abolish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "副": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "secondary, vice-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "默": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "silent",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鐵": {
        "zhuyin": "ㄊㄧㄝˇ",
        "pinyin": "",
        "tone": 3,
        "english": "iron",
        "simplified": "",
        "radicals": ["", ""]
    },
    "初": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "at first",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "",
        "tone": 3,
        "english": "snow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瓦": {
        "zhuyin": "ㄨㄚˇ",
        "pinyin": "",
        "tone": 3,
        "english": "tile, pottery",
        "simplified": "",
        "radicals": ["", ""]
    },
    "素": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "raw, silk, nature",
        "simplified": "",
        "radicals": ["", ""]
    },
    "禁": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to prohibit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誠": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "honest, sincere",
        "simplified": "诚",
        "radicals": ["", ""]
    },
    "黃": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "yellow",
        "simplified": "黄",
        "radicals": ["", ""]
    },
    "敵": {
        "zhuyin": "ㄉㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "enemy, to resist",
        "simplified": "敌",
        "radicals": ["", ""]
    },
    "夏": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "summer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貴": {
        "zhuyin": "ㄍㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "expensive",
        "simplified": "贵",
        "radicals": ["", ""]
    },
    "歐": {
        "zhuyin": "ㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "Europe",
        "simplified": "欧",
        "radicals": ["", ""]
    },
    "旦": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "dawn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "依": {
        "zhuyin": "ㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to depend on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "諒": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to forgive",
        "simplified": "谅",
        "radicals": ["", ""]
    },
    "桌": {
        "zhuyin": "ㄓㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "table",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雄": {
        "zhuyin": "ㄒㄩㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "male, grand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丁": {
        "zhuyin": "ㄉㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "male adult, robust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舒": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "leisurely, to stretch",
        "simplified": "",
        "radicals": ["", ""]
    },
    "粉": {
        "zhuyin": "ㄈㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "powder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舊": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "old",
        "simplified": "旧",
        "radicals": ["", ""]
    },
    "朝": {
        "zhuyin": "ㄓㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "dynasty",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廳": {
        "zhuyin": "ㄊㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "hall",
        "simplified": "厅",
        "radicals": ["", ""]
    },
    "恭": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "polite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "汽": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "steam",
        "simplified": "",
        "radicals": ["", ""]
    },
    "補": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to make up for",
        "simplified": "补",
        "radicals": ["", ""]
    },
    "徒": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "apprentice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "稍": {
        "zhuyin": "ㄕㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "somewhat, a little",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搖": {
        "zhuyin": "ㄧㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to shake",
        "simplified": "摇",
        "radicals": ["", ""]
    },
    "躲": {
        "zhuyin": "ㄉㄨㄛˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to hide",
        "simplified": "",
        "radicals": ["", ""]
    },
    "窗": {
        "zhuyin": "ㄔㄨㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "window",
        "simplified": "",
        "radicals": ["", ""]
    },
    "源": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "source, origin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藍": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "blue",
        "simplified": "蓝",
        "radicals": ["", ""]
    },
    "章": {
        "zhuyin": "ㄓㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "chapter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "滅": {
        "zhuyin": "ㄇㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to extinguish",
        "simplified": "灭",
        "radicals": ["", ""]
    },
    "疼": {
        "zhuyin": "ㄊㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "aches, pains",
        "simplified": "",
        "radicals": ["", ""]
    },
    "孤": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "lonely",
        "simplified": "",
        "radicals": ["", ""]
    },
    "滑": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to slip, cunning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碎": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to break, broken",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弱": {
        "zhuyin": "ㄖㄨㄛˋ",
        "pinyin": "",
        "tone": 2,
        "english": "weak",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仔": {
        "zhuyin": "ㄗˇ",
        "pinyin": "",
        "tone": 3,
        "english": "meticulous, young",
        "simplified": "",
        "radicals": ["", ""]
    },
    "款": {
        "zhuyin": "ㄎㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "section",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拒": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to resist",
        "simplified": "",
        "radicals": ["", ""]
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "river",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伍": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to associate with",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紋": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "line, streak",
        "simplified": "纹",
        "radicals": ["", ""]
    },
    "臭": {
        "zhuyin": "ㄔㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "smell, stink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幻": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fantasy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "童": {
        "zhuyin": "ㄊㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "child",
        "simplified": "",
        "radicals": ["", ""]
    },
    "翰": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "writing brush",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閃": {
        "zhuyin": "ㄕㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dodge, flash",
        "simplified": "闪",
        "radicals": ["", ""]
    },
    "殘": {
        "zhuyin": "ㄘㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to injure, cruel",
        "simplified": "残",
        "radicals": ["", ""]
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "bird",
        "simplified": "鸟",
        "radicals": ["", ""]
    },
    "騎": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to ride",
        "simplified": "骑",
        "radicals": ["", ""]
    },
    "翻": {
        "zhuyin": "ㄈㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to translate, flip",
        "simplified": "",
        "radicals": ["", ""]
    },
    "洲": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "continent, island",
        "simplified": "",
        "radicals": ["", ""]
    },
    "沉": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to submerge, sink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餓": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "hungry",
        "simplified": "饿",
        "radicals": ["", ""]
    },
    "砸": {
        "zhuyin": "ㄗㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to smash",
        "simplified": "",
        "radicals": ["", ""]
    },
    "互": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "mutual",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卷": {
        "zhuyin": "ㄐㄩㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "roll, to roll up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拖": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "to drag",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瓜": {
        "zhuyin": "ㄍㄨㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "melon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "例": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "example, case",
        "simplified": "",
        "radicals": ["", ""]
    },
    "財": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "money, wealth",
        "simplified": "财",
        "radicals": ["", ""]
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "bottle, vase",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牆": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "wall",
        "simplified": "墙",
        "radicals": ["", ""]
    },
    "拳": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fist, boxing",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牢": {
        "zhuyin": "ㄌㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "prison, stable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "典": {
        "zhuyin": "ㄉㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "dictionary, law",
        "simplified": "",
        "radicals": ["", ""]
    },
    "垃": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "waste",
        "simplified": "",
        "radicals": ["", ""]
    },
    "染": {
        "zhuyin": "ㄖㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dye, acquire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "漫": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "free, to inundate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "觸": {
        "zhuyin": "ㄔㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to touch",
        "simplified": "触",
        "radicals": ["", ""]
    },
    "脅": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "ribs, to threaten",
        "simplified": "胁",
        "radicals": ["", ""]
    },
    "圾": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "garbage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "施": {
        "zhuyin": "ㄕ",
        "pinyin": "",
        "tone": 1,
        "english": "to grant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胸": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "breast, chest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陰": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "cloudy, female",
        "simplified": "阴",
        "radicals": ["", ""]
    },
    "孕": {
        "zhuyin": "ㄩㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "be pregnant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "惹": {
        "zhuyin": "ㄖㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to irritate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "硬": {
        "zhuyin": "ㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "hard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逮": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to seize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "銷": {
        "zhuyin": "ㄒㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to melt",
        "simplified": "销",
        "radicals": ["", ""]
    },
    "邦": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "country, nation",
        "simplified": "",
        "radicals": ["", ""]
    },
    "劫": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to take by force",
        "simplified": "",
        "radicals": ["", ""]
    },
    "襲": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to raid",
        "simplified": "袭",
        "radicals": ["", ""]
    },
    "育": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bring up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蟲": {
        "zhuyin": "ㄔㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "insects",
        "simplified": "虫",
        "radicals": ["", ""]
    },
    "嫌": {
        "zhuyin": "ㄒㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "累": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "tired",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怖": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "terror, fear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "握": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to grasp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "缺": {
        "zhuyin": "ㄑㄩㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "lack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "琳": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "gem",
        "simplified": "",
        "radicals": ["", ""]
    },
    "墨": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "black, corrupt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "迫": {
        "zhuyin": "ㄆㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to force",
        "simplified": "",
        "radicals": ["", ""]
    },
    "采": {
        "zhuyin": "ㄘㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to select, looks",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輩": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "generation",
        "simplified": "辈",
        "radicals": ["", ""]
    },
    "陷": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to submerge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蹈": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to stamp feet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "限": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "limit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "巨": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "huge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鮑": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "dried fish",
        "simplified": "鲍",
        "radicals": ["", ""]
    },
    "針": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "needle",
        "simplified": "针",
        "radicals": ["", ""]
    },
    "雅": {
        "zhuyin": "ㄧㄚˇ",
        "pinyin": "",
        "tone": 3,
        "english": "elegant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "茲": {
        "zhuyin": "ㄗ",
        "pinyin": "",
        "tone": 1,
        "english": "now, here, this",
        "simplified": "兹",
        "radicals": ["", ""]
    },
    "尾": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "tail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "青": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "green, blue, young",
        "simplified": "",
        "radicals": ["", ""]
    },
    "席": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "mat, banquet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逼": {
        "zhuyin": "ㄅㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to pressure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "猶": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "like, similar to",
        "simplified": "犹",
        "radicals": ["", ""]
    },
    "扮": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to dress up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "贊": {
        "zhuyin": "ㄗㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to praise, support",
        "simplified": "赞",
        "radicals": ["", ""]
    },
    "邀": {
        "zhuyin": "ㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to invite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凈": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "clean",
        "simplified": "净",
        "radicals": ["", ""]
    },
    "鬧": {
        "zhuyin": "ㄋㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "noisy",
        "simplified": "闹",
        "radicals": ["", ""]
    },
    "訪": {
        "zhuyin": "ㄈㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to call on, inquire",
        "simplified": "访",
        "radicals": ["", ""]
    },
    "良": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "good, very much",
        "simplified": "",
        "radicals": ["", ""]
    },
    "叛": {
        "zhuyin": "ㄆㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to rebel, rebellion",
        "simplified": "",
        "radicals": ["", ""]
    },
    "駕": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to operate vehicle",
        "simplified": "驾",
        "radicals": ["", ""]
    },
    "范": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "pattern, model",
        "simplified": "",
        "radicals": ["", ""]
    },
    "俄": {
        "zhuyin": "ㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "suddenly, Russia",
        "simplified": "",
        "radicals": ["", ""]
    },
    "豬": {
        "zhuyin": "ㄓㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "pig",
        "simplified": "猪",
        "radicals": ["", ""]
    },
    "辛": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "hot taste, hard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杉": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "pine, fir tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "淘": {
        "zhuyin": "ㄊㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "wash in sieve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "洞": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "cave, hole",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冠": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "hat, crown",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偉": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "big, great",
        "simplified": "伟",
        "radicals": ["", ""]
    },
    "珍": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "precious",
        "simplified": "",
        "radicals": ["", ""]
    },
    "梅": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "plum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "朗": {
        "zhuyin": "ㄌㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "clear, bright",
        "simplified": "",
        "radicals": ["", ""]
    },
    "欠": {
        "zhuyin": "ㄑㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "owe, lack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扯": {
        "zhuyin": "ㄔㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rip up, haul",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丑": {
        "zhuyin": "ㄔㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "clown, ugly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "競": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to compete",
        "simplified": "竞",
        "radicals": ["", ""]
    },
    "劑": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "liquid, solution",
        "simplified": "剂",
        "radicals": ["", ""]
    },
    "烈": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fierce, intense",
        "simplified": "",
        "radicals": ["", ""]
    },
    "李": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "plum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "村": {
        "zhuyin": "ㄘㄨㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "village",
        "simplified": "",
        "radicals": ["", ""]
    },
    "厲": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "strict",
        "simplified": "厉",
        "radicals": ["", ""]
    },
    "廚": {
        "zhuyin": "ㄔㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "kitchen",
        "simplified": "厨",
        "radicals": ["", ""]
    },
    "允": {
        "zhuyin": "ㄩㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to grant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "授": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to teach",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堆": {
        "zhuyin": "ㄉㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to pile up, heap",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慶": {
        "zhuyin": "ㄑㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to celebrate",
        "simplified": "庆",
        "radicals": ["", ""]
    },
    "率": {
        "zhuyin": "ㄕㄨㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to lead, frank",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怒": {
        "zhuyin": "ㄋㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "anger, rage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "寓": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "residence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "液": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "sap, juice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "謂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to speak, meaning",
        "simplified": "谓",
        "radicals": ["", ""]
    },
    "估": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "to estimate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鮮": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "fresh",
        "simplified": "鲜",
        "radicals": ["", ""]
    },
    "磨": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "grind, rub",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帥": {
        "zhuyin": "ㄕㄨㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "handsome",
        "simplified": "帅",
        "radicals": ["", ""]
    },
    "婊": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "prostitute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尿": {
        "zhuyin": "ㄋㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "urine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鍵": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "key(board)",
        "simplified": "键",
        "radicals": ["", ""]
    },
    "余": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "surplus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紹": {
        "zhuyin": "ㄕㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to continue",
        "simplified": "绍",
        "radicals": ["", ""]
    },
    "娃": {
        "zhuyin": "ㄨㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "baby, doll",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刑": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to punish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掃": {
        "zhuyin": "ㄙㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to sweep",
        "simplified": "扫",
        "radicals": ["", ""]
    },
    "核": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "seed",
        "simplified": "",
        "radicals": ["", ""]
    },
    "損": {
        "zhuyin": "ㄙㄨㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to decrease, damage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辯": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to dispute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慣": {
        "zhuyin": "ㄍㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "accustomed to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傲": {
        "zhuyin": "ㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "proud",
        "simplified": "",
        "radicals": ["", ""]
    },
    "減": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to lower, reduce",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1300/1500 done
    "泡": {
        "zhuyin": "ㄆㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "bubble, to steep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摸": {
        "zhuyin": "ㄇㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "feel with hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "著": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "manifest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "途": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "way, route",
        "simplified": "",
        "radicals": ["", ""]
    },
    "磯": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "jetty",
        "simplified": "矶",
        "radicals": ["", ""]
    },
    "鼓": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "drum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堡": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "fortress",
        "simplified": "",
        "radicals": ["", ""]
    },
    "愚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敏": {
        "zhuyin": "ㄇㄧㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "quick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "版": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "edition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盒": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "small box",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訂": {
        "zhuyin": "ㄉㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to agree",
        "simplified": "订",
        "radicals": ["", ""]
    },
    "寄": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to mail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賺": {
        "zhuyin": "ㄓㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to earn",
        "simplified": "赚",
        "radicals": ["", ""]
    },
    "爵": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "feudal title",
        "simplified": "",
        "radicals": ["", ""]
    },
    "材": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "material",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盛": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to ladle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尤": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "especially",
        "simplified": "",
        "radicals": ["", ""]
    },
    "皇": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "emperor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奪": {
        "zhuyin": "ㄉㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to take by force",
        "simplified": "夺",
        "radicals": ["", ""]
    },
    "郵": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "post, mail",
        "simplified": "邮",
        "radicals": ["", ""]
    },
    "俱": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "all, together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "九": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "nine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盜": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to steal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尺": {
        "zhuyin": "ㄔˇ",
        "pinyin": "",
        "tone": 3,
        "english": "Chinese 'foot'",
        "simplified": "",
        "radicals": ["", ""]
    },
    "愉": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "pleasant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "序": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "oder, sequence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鼠": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幕": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "curtain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "踢": {
        "zhuyin": "ㄊㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "kick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "憾": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to regret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "汰": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "excessive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隔": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to partition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "徹": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to penetrate",
        "simplified": "彻",
        "radicals": ["", ""]
    },
    "插": {
        "zhuyin": "ㄔㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to insert, pierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獵": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hunt",
        "simplified": "猎",
        "radicals": ["", ""]
    },
    "尚": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "still, yet, to value",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1337/1500 done
    "潛": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "to hide, hidden",
        "simplified": "潜",
        "radicals": ["", ""]
    },
    "構": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "gòu",
        "tone": 4,
        "english": "to assign, faction",
        "simplified": "构",
        "radicals": ["", ""]
    },
    "烤": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "kǎo",
        "tone": 3,
        "english": "bake, roast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "霍": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "quickly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "悔": {
        "zhuyin": "ㄏㄨㄟˇ",
        "pinyin": "huǐ",
        "tone": 3,
        "english": "to regret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "暫": {
        "zhuyin": "ㄗㄢˋ",
        "pinyin": "zàn",
        "tone": 4,
        "english": "temporary",
        "simplified": "暂",
        "radicals": ["", ""]
    },
    "爽": {
        "zhuyin": "ㄕㄨㄤˇ",
        "pinyin": "shuǎng",
        "tone": 3,
        "english": "bright, crisp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扎": {
        "zhuyin": "ㄓㄚ",
        "pinyin": "zhā",
        "tone": 1,
        "english": "to pierce, prick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "緒": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "xù",
        "tone": 4,
        "english": "beginnings, thread",
        "simplified": "绪",
        "radicals": ["", ""]
    },
    "訊": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "xùn",
        "tone": 4,
        "english": "to question",
        "simplified": "讯",
        "radicals": ["", ""]
    },
    "吐": {
        "zhuyin": "ㄊㄨˋ",
        "pinyin": "tù ",
        "tone": 4,
        "english": "to vomit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吹": {
        "zhuyin": "ㄔㄨㄟ",
        "pinyin": "chuī",
        "tone": 1,
        "english": "to blow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賓": {
        "zhuyin": "ㄅㄧㄣ",
        "pinyin": "bīn ",
        "tone": 1,
        "english": "guest, visitor",
        "simplified": "宾",
        "radicals": ["", ""]
    },
    "偵": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "zhēn ",
        "tone": 1,
        "english": "spy",
        "simplified": "侦",
        "radicals": ["", ""]
    },
    "顆": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "kē",
        "tone": 1,
        "english": "particle",
        "simplified": "颗",
        "radicals": ["", ""]
    },
    "寧": {
        "zhuyin": "ㄋㄧㄥˊ",
        "pinyin": "níng",
        "tone": 2,
        "english": "peaceful",
        "simplified": "宁",
        "radicals": ["", ""]
    },
    "罰": {
        "zhuyin": "ㄈㄚˊ",
        "pinyin": "fá ",
        "tone": 2,
        "english": "penalty",
        "simplified": "罚",
        "radicals": ["", ""]
    },
    "欲": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to wish for, desire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鄉": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "countryside",
        "simplified": "乡",
        "radicals": ["", ""]
    },
    "帽": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "mào",
        "tone": 4,
        "english": "hat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杜": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "dù ",
        "tone": 4,
        "english": "to prevent",
        "simplified": "",
        "radicals": ["", ""]
    },
    "豪": {
        "zhuyin": "ㄏㄠˊ",
        "pinyin": "háo",
        "tone": 2,
        "english": "heroic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "征": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "zhēng",
        "tone": 1,
        "english": "to recruit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "括": {
        "zhuyin": "ㄎㄨㄛˋ",
        "pinyin": "kuò",
        "tone": 4,
        "english": "to enclose, include",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盯": {
        "zhuyin": "ㄉㄧㄥ",
        "pinyin": "dīng ",
        "tone": 1,
        "english": "to keep eyes on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "穩": {
        "zhuyin": "ㄨㄣˇ",
        "pinyin": "wěn",
        "tone": 3,
        "english": "steady, stable",
        "simplified": "稳",
        "radicals": ["", ""]
    },
    "膽": {
        "zhuyin": "ㄉㄢˇ",
        "pinyin": "dǎn ",
        "tone": 3,
        "english": "gall, bravery",
        "simplified": "胆",
        "radicals": ["", ""]
    },
    "甲": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "jiǎ",
        "tone": 3,
        "english": "first, shell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賴": {
        "zhuyin": "ㄌㄞˋ",
        "pinyin": "lài",
        "tone": 4,
        "english": "to depend on, bad",
        "simplified": "赖",
        "radicals": ["", ""]
    },
    "啤": {
        "zhuyin": "ㄆㄧˊ",
        "pinyin": "pí ",
        "tone": 2,
        "english": "beer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佩": {
        "zhuyin": "ㄆㄟˋ",
        "pinyin": "pèi",
        "tone": 4,
        "english": "to respect, wear (belt)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啟": {
        "zhuyin": "ㄑㄧˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "to start, open",
        "simplified": "启",
        "radicals": ["", ""]
    },
    "胎": {
        "zhuyin": "ㄊㄞ",
        "pinyin": "tāi ",
        "tone": 1,
        "english": "embryo, fetus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帳": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "zhàng",
        "tone": 4,
        "english": "screen",
        "simplified": "帐",
        "radicals": ["", ""]
    },
    "賞": {
        "zhuyin": "ㄕㄤˇ",
        "pinyin": "shǎng",
        "tone": 3,
        "english": "to bestow",
        "simplified": "赏",
        "radicals": ["", ""]
    },
    "拋": {
        "zhuyin": "ㄆㄠ",
        "pinyin": "pāo ",
        "tone": 1,
        "english": "throw (away)",
        "simplified": "抛",
        "radicals": ["", ""]
    },
    "遭": {
        "zhuyin": "ㄗㄠ",
        "pinyin": "zāo",
        "tone": 1,
        "english": "meet by chance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "若": {
        "zhuyin": "ㄖㄨㄛˋ",
        "pinyin": "ruò",
        "tone": 4,
        "english": "seem like",
        "simplified": "",
        "radicals": ["", ""]
    },
    "梯": {
        "zhuyin": "ㄊㄧ",
        "pinyin": "tī ",
        "tone": 1,
        "english": "ladder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "震": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "to shake",
        "simplified": "",
        "radicals": ["", ""]
    },
    "述": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "to tell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陣": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "short time",
        "simplified": "阵",
        "radicals": ["", ""]
    },
    "儀": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "ceremony",
        "simplified": "仪",
        "radicals": ["", ""]
    },
    "乖": {
        "zhuyin": "ㄍㄨㄞ",
        "pinyin": "guāi",
        "tone": 1,
        "english": "clever, shrewd",
        "simplified": "",
        "radicals": ["", ""]
    },
    "宮": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "palace",
        "simplified": "宫",
        "radicals": ["", ""]
    },
    "咬": {
        "zhuyin": "ㄧㄠˇ",
        "pinyin": "yǎo ",
        "tone": 3,
        "english": "bite, gnaw",
        "simplified": "",
        "radicals": ["", ""]
    },
    "禱": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo ",
        "tone": 3,
        "english": "to pray",
        "simplified": "祷",
        "radicals": ["", ""]
    },
    "祖": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "ancestor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蜜": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì ",
        "tone": 4,
        "english": "honey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "耍": {
        "zhuyin": "ㄕㄨㄚˇ",
        "pinyin": "shuǎ ",
        "tone": 3,
        "english": "to frolic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拼": {
        "zhuyin": "ㄆㄧㄣ",
        "pinyin": "pīn",
        "tone": 1,
        "english": "to join together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "惜": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "to cherish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忠": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "loyal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "策": {
        "zhuyin": "ㄘㄜˋ",
        "pinyin": "cè",
        "tone": 4,
        "english": "policy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鼻": {
        "zhuyin": "ㄅㄧˊ",
        "pinyin": "bí ",
        "tone": 2,
        "english": "nose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鑽": {
        "zhuyin": "ㄗㄨㄢ",
        "pinyin": "zuān",
        "tone": 1,
        "english": "to drill",
        "simplified": "钻",
        "radicals": ["", ""]
    },
    "池": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "pond, resevoir",
        "simplified": "",
        "radicals": ["", ""]
    },
    "虛": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "xū",
        "tone": 1,
        "english": "emptiness, modest",
        "simplified": "虚",
        "radicals": ["", ""]
    },
    "桑": {
        "zhuyin": "ㄙㄤ",
        "pinyin": "sāng ",
        "tone": 1,
        "english": "mulberry tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拾": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "to collect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "泳": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dive, swim",
        "simplified": "",
        "radicals": ["", ""]
    },
    "頻": {
        "zhuyin": "ㄆㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "frequently",
        "simplified": "频",
        "radicals": ["", ""]
    },
    "尖": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "sharp, acute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "申": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to extend, to state",
        "simplified": "",
        "radicals": ["", ""]
    },
    "違": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to disobey",
        "simplified": "违",
        "radicals": ["", ""]
    },
    "零": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "zero",
        "simplified": "",
        "radicals": ["", ""]
    },
    "診": {
        "zhuyin": "ㄓㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to diagnose",
        "simplified": "诊",
        "radicals": ["", ""]
    },
    "噓": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "to exhale",
        "simplified": "嘘",
        "radicals": ["", ""]
    },
    "懼": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to fear",
        "simplified": "惧",
        "radicals": ["", ""]
    },
    "拯": {
        "zhuyin": "ㄓㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to help, to save",
        "simplified": "",
        "radicals": ["", ""]
    },
    "痕": {
        "zhuyin": "ㄏㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "scar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "批": {
        "zhuyin": "ㄆㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to criticize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "綠": {
        "zhuyin": "ㄌㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "green",
        "simplified": "绿",
        "radicals": ["", ""]
    },
    "乘": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to ride",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佳": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "beautiful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熊": {
        "zhuyin": "ㄒㄩㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "bear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辣": {
        "zhuyin": "ㄌㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "spicy, hot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "躺": {
        "zhuyin": "ㄊㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to lie down",
        "simplified": "",
        "radicals": ["", ""]
    },
    "祈": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to pray",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肥": {
        "zhuyin": "ㄈㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fat, plump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "址": {
        "zhuyin": "ㄓˇ",
        "pinyin": "",
        "tone": 3,
        "english": "location",
        "simplified": "",
        "radicals": ["", ""]
    },
    "占": {
        "zhuyin": "ㄓㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to divine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "絡": {
        "zhuyin": "ㄌㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "net",
        "simplified": "络",
        "radicals": ["", ""]
    },
    "掩": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to cover",
        "simplified": "",
        "radicals": ["", ""]
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to save, province",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羊": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "sheep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "荒": {
        "zhuyin": "ㄏㄨㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "wasteland",
        "simplified": "",
        "radicals": ["", ""]
    },
    "督": {
        "zhuyin": "ㄉㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "to supervise",
        "simplified": "",
        "radicals": ["", ""]
    },
    "撤": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to omit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胖": {
        "zhuyin": "ㄆㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辭": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "tone": 2,
        "english": "words",
        "simplified": "辞",
        "radicals": ["", ""]
    },
    "增": {
        "zhuyin": "ㄗㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "to increase, add",
        "simplified": "",
        "radicals": ["", ""]
    },
    "援": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to help",
        "simplified": "",
        "radicals": ["", ""]
    },
    "郎": {
        "zhuyin": "ㄌㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "young man",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獻": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to offer",
        "simplified": "献",
        "radicals": ["", ""]
    },
    "擦": {
        "zhuyin": "ㄘㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to wipe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "農": {
        "zhuyin": "ㄋㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "agriculture",
        "simplified": "农",
        "radicals": ["", ""]
    },
    "邪": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "demonic, evil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姻": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "marriage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "恢": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to restore",
        "simplified": "",
        "radicals": ["", ""]
    },
    "描": {
        "zhuyin": "ㄇㄧㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to copy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "匹": {
        "zhuyin": "ㄆㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "measure word for horses",
        "simplified": "",
        "radicals": ["", ""]
    },
    "軟": {
        "zhuyin": "ㄖㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "soft, flexible",
        "simplified": "软",
        "radicals": ["", ""]
    },
    "埋": {
        "zhuyin": "ㄇㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to bury",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慘": {
        "zhuyin": "ㄘㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "miserable",
        "simplified": "惨",
        "radicals": ["", ""]
    },
    "洋": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "ocean",
        "simplified": "",
        "radicals": ["", ""]
    },
    "純": {
        "zhuyin": "ㄔㄨㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "pure",
        "simplified": "纯",
        "radicals": ["", ""]
    },
    "浴": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bathe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貼": {
        "zhuyin": "ㄊㄧㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "to paste, post",
        "simplified": "贴",
        "radicals": ["", ""]
    },
    "尉": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "officer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "略": {
        "zhuyin": "ㄌㄩㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "summary, strategy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "符": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "symbol, charm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "侵": {
        "zhuyin": "ㄑㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to invade",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陸": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "shore, land",
        "simplified": "陆",
        "radicals": ["", ""]
    },
    "載": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to carry",
        "simplified": "载",
        "radicals": ["", ""]
    },
    "爬": {
        "zhuyin": "ㄆㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to crawl",
        "simplified": "",
        "radicals": ["", ""]
    },
    "挖": {
        "zhuyin": "ㄨㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to dig",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驕": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "pride",
        "simplified": "骄",
        "radicals": ["", ""]
    },
    "獸": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "beast",
        "simplified": "兽",
        "radicals": ["", ""]
    },
    "嫁": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to marry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "潔": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "clean",
        "simplified": "洁",
        "radicals": ["", ""]
    },
    "晨": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "early morning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喊": {
        "zhuyin": "ㄏㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to shout",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奏": {
        "zhuyin": "ㄗㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to play music",
        "simplified": "",
        "radicals": ["", ""]
    },
    "灰": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "ashes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摔": {
        "zhuyin": "ㄕㄨㄞ",
        "pinyin": "",
        "tone": 1,
        "english": "to stumble",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羞": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "disgrace, shy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鄰": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "neighbour",
        "simplified": "邻",
        "radicals": ["", ""]
    },
    "椅": {
        "zhuyin": "ㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "chair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "顏": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "face",
        "simplified": "颜",
        "radicals": ["", ""]
    },
    "欺": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "cheat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "端": {
        "zhuyin": "ㄉㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to hold, end points",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賀": {
        "zhuyin": "ㄏㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "congratulate",
        "simplified": "贺",
        "radicals": ["", ""]
    },
    "障": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to block",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慈": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "tone": 2,
        "english": "kind, charitable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仇": {
        "zhuyin": "ㄔㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "enemy, hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廠": {
        "zhuyin": "ㄔㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "factory",
        "simplified": "厂",
        "radicals": ["", ""]
    },
    "怨": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to blame",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遜": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "humble, worse",
        "simplified": "逊",
        "radicals": ["", ""]
    },
    "黎": {
        "zhuyin": "ㄌㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "dawn, black",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剪": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "scissors",
        "simplified": "",
        "radicals": ["", ""]
    },
    "春": {
        "zhuyin": "ㄔㄨㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "spring",
        "simplified": "",
        "radicals": ["", ""]
    },
    "額": {
        "zhuyin": "ㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "forehead",
        "simplified": "额",
        "radicals": ["", ""]
    },
    "豆": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "bean",
        "simplified": "",
        "radicals": ["", ""]
    },
    "罷": {
        "zhuyin": "ㄅㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to stop, suspend",
        "simplified": "罢",
        "radicals": ["", ""]
    },
    "裂": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "crack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擋": {
        "zhuyin": "ㄉㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to obstruct",
        "simplified": "挡",
        "radicals": ["", ""]
    },
    "偏": {
        "zhuyin": "ㄆㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to lean, oblique",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糊": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "paste",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卧": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to crouch",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敲": {
        "zhuyin": "ㄑㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to strike",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喪": {
        "zhuyin": "ㄙㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "to lose",
        "simplified": "丧",
        "radicals": ["", ""]
    },
    "烏": {
        "zhuyin": "ㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "crow",
        "simplified": "乌",
        "radicals": ["", ""]
    },
    "購": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to purchase",
        "simplified": "购",
        "radicals": ["", ""]
    },
    "域": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "field, region",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閑": {
        "zhuyin": "ㄒㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "idle",
        "simplified": "闲",
        "radicals": ["", ""]
    },
    "宇": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "universe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姓": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "surname",
        "simplified": "",
        "radicals": ["", ""]
    },
    "葬": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bury (dead)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "黨": {
        "zhuyin": "ㄉㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "party, association",
        "simplified": "",
        "radicals": ["", ""]
    },
    "售": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to sell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "塗": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to apply (paint)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遊": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to walk, tour, roam, travel",
        "simplified": "游",
        "radicals": ["", ""]
    },
    "碟": {
        "zhuyin": "ㄉㄧㄝˊ",
        "pinyin": "dié",
        "tone": 2,
        "english": "dish, plate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "灣": {
        "zhuyin": "ㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "bay, gulf",
        "simplified": "湾",
        "radicals": ["", ""]
    },
    "鳳": {
        "zhuyin": "ㄈㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "phoenix",
        "simplified": "凤",
        "radicals": ["", ""]
    },
    //count 1500 ish
    "唉": {
        "zhuyin": "ㄞ",
        "pinyin": "āi",
        "tone": 1,
        "english": "sigh",
        "simplified": ""
    },
    "貞": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "chaste",
        "simplified": "贞"
    },
    "係": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "link",
        "simplified": "系"
    },
    "嗚": {
        "zhuyin": "ㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "humming or whimpering",
        "simplified": "呜"
    },
    "亦": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "likewise",
        "simplified": ""
    },
    "宜": {
        "zhuyin": "ㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fitting, appropriate, suitable",
        "simplified": ""
    },
    "楊": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "Yang",
        "simplified": "杨"
    },
    "灌": {
        "zhuyin": "ㄍㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "irrigate, pour, install (software)",
        "simplified": ""
    },
    "徵": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "invite, recruit, draft, evidence",
        "simplified": "征"
    },
    "隻": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "tone": 1,
        "english": "measure word for birds and animals, one of a pair, some utensils, vessels etc",
        "simplified": "只"
    },
    "君": {
        "zhuyin": "ㄐㄩㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "monarch, lord, ruler",
        "simplified": ""
    },
    "宿": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "Su",
        "simplified": ""
    },
    "江": {
        "zhuyin": "ㄐㄧㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "river, surname",
        "simplified": ""
    },
    "宗": {
        "zhuyin": "ㄗㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "school, sect, measure word for batches, surname",
        "simplified": ""
    },
    "壘": {
        "zhuyin": "ㄌㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rampart, base(in baseball), to build with stones",
        "simplified": "垒"
    },
    "緣": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "cause, reason, karma, fate, margin, hem, edge, along",
        "simplified": "缘"
    },
    "週": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "week",
        "simplified": "周"
    },
    "蠻": {
        "zhuyin": "ㄇㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "barbarian, bullying, rough, reckless",
        "simplified": "蛮"
    },
    // "俊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "輯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "趙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "諸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "琴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "罵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "益": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "湖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "含": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "製": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "註": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "虎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "皆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "銘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鐘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "囉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "磁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "螢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "均": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "郭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "詳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "冊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鷹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "縣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "詩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "績": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "獅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "餘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "範": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "輝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "譯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "積": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蔡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "愈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "凡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "朱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "籃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "港": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "誌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "圓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "俠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "輔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "採": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "縮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鋼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "樞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "析": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蒼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "籍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "懶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "橋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "詢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "塵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "茶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "階": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "豐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "械": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "予": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "振": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鄭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "峰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "椰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "忽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "複": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "莊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "企": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "揚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "癡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "倚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "距": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "隆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "延": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "覆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "愁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "髮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "龜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "映": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "託": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鴻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "媒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "藉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "井": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "徐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "川": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "倍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "橫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "譜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瞭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鬆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "役": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "冬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "桃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "迴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "俗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "麵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "榜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "縱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蓮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "填": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "踏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "跌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "藤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "岸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鋒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "函": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "驅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "裁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蟹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "革": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "臥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蠍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "厚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "裕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "赤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "庸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "啪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "穹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "污": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "証": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "番": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "籌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "誇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "邱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "稅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鬱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "窩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "傾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "羽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "培": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "甘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "酸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "邏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "豈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "谷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "徑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "晶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "胞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "煞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "築": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "呂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "噴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "截": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "串": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "伸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "忌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "億": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "怡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "窮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "朵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "摘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "醜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "躍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "韓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "猛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "緩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "召": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "割": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "么": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "辨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "軒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "珠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "植": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "礙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "亨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "釣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蹟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蔣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "焦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "箭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "穌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "稿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "署": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "礎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "僑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "犧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "騷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "氏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "云": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "梁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鳴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "炮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "炎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鈴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "融": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "筋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "禍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "侯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嵐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "靂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "覽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "凌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "茫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "錦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "楓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "琪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "側": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "晴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嶺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "韻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "傢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "譽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "促": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "粗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "舟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蝶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鍋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "銳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "虧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "枝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "毅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "夾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "契": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "轟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蜂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "疏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "贈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "凝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "靖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "辱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "禪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蛙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "災": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "讚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "夥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "卒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "荷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "披": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "趨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "迅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "笛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鹿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "缸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "魅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "措": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "腰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鵝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "軌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "祕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蝦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "捉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "氛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "髒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "旺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "杉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "茂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "循": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "晃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "悄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "翅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "芒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "斜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "呦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鶴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "摔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "愧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "灑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "津": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "苗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "刑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "虫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "纏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "櫻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "趁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "呈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "琳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蛇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "搜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "患": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "柯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "疲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "儲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "祂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "塑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "繫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "疾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "泣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "粒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "渴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "璃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "茲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鄧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "歪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "騰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "玻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "娟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "返": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "併": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "晉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "稀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鴨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "汗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "添": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "妖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "泛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "杰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "飆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "壇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "阮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "垂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "催": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "糖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "澎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "櫃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蟻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "販": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "抑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "虹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "暮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "襲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "仿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "臂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "吻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "框": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "敲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "佑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "体": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "謹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "賊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "罐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "燦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "侶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "芭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "羨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "占": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "掩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "秩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "賠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "珊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "馨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "札": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "旨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蠢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "羯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "攔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "膚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嫁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "孕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "俄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "罩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "几": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "魏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蘋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "麟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "宵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "陌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "崗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "曆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "惟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "舌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "誘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "菁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "睹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "殿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "傅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "咒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "謙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "粽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鈕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "媚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "堯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "捧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "壹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "憤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "猴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "粹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "跨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "卿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "紋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "划": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "囂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "乳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "仗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "赫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "筒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "彿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "獵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "譬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "衫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "懇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瓊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "凍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "戚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "軸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "殖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "吋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "潭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "姻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "躺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "樑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "龐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "澳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瞬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "銅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "閩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "糾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鍊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "湊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "梭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "董": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "宅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "胃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "奸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "墓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "償": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "冥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "炒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蕩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "妄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "餓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "尿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "偽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鼎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "貧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "矩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蟑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "駁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "兆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "棍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "馳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "聘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "槽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蚊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "僧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "柱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "挫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "抖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "訝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "顛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "丘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "亭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瘟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "癢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "漆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "尹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "猩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "詹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "毋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "苑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "緻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "婉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "饒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "闖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "戈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "歧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "諷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "診": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "諧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "掙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鈞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "覓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瀟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "痞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鋪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "黏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蹈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "懸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蝴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "汁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "婷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "慨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "哼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "佬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "涂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "范": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "醬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "纖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "輻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "懿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "稚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "郁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "募": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "豫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "艇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "掰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "并": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鞭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "縫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "駿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "歹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "斑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "甄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "竿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "冤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "棵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "僕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "疊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "箏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "薰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "癮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蠟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瞎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "皓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蒂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "焉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "魁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "唇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "犬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "錶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "甩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "颱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "傘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嬌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "錫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "唔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "郝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "揭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "溶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "趟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "湧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "赴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "絃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "磚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "栗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "狹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嘎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瘦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "奴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "氧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "頹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "璋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "畏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "珮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "債": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "摧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鹽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "挽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "墾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "畔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "韋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "逍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "脾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嘟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "噪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "縛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "暈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "裙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "頸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "竊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "峽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蘊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "餵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "囊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "薇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "訣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "豔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "湘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "琦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "削": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鵬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "券": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "矢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "挨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "漿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "睜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "虐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "垮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "釘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "醇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嬰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "履": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "緯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "摯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鴉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蒸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嚐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "甫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "璿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "尉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "呻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "懲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "歇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "癌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "樸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "魄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "舜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "襄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "諮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蘿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嚮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },

    // 2663 done!!!
}


