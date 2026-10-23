const PUZZLE_DATABASE = [
  {
    id: 1,
    date: "2026-10-23", // 基準解鎖日期 (YYYY-MM-DD)
    clue: "我在麵店解出脫胺作用國考題的答案",
    length: 1,
    answer: "謎底",
    zhuyin: "ㄇㄧˊㄉㄧˇ",
    // 彈性提示陣列：你可以自由決定有幾個、標題叫什麼
    hints: [
      { title: "定義", content: "答案" },
      { title: "素材", content: "麵店" },
      { title: "指示", content: "脫胺作用" },
    ],
    explanation: "ㄇ一ㄢ ㄉㄧㄢ將ㄢ脫去，即為ㄇㄧ ㄉㄧ。"
  },

  // 之後你只要繼續往下加題目即可，程式會自動依日期或順序對應！
];