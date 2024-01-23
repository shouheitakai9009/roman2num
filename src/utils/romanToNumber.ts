/**
 * ローマ数字（文字列）をアラビア数字（数値）に変換する
 *
 * @example I => 1, II => 2, IX => 9, XI => 11, MI => 1001, IM => 999
 * @link https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%9E%E6%95%B0%E5%AD%97
 * @param romanText ローマ数字の文字列
 * @returns ローマ数字をアラビア数字に変換したもの
 */
export const romanToNumber = (romanText: string): number | undefined => {
  if (romanText === "") return undefined;

  let arabicNumber = 0;

  for (let i = romanText.length - 1; i >= 0; i--) {
    const currentValue = romanMap.get(romanText[i]);
    const prevValue = romanMap.get(romanText[i - 1]);
    if (!currentValue) return undefined;

    if (prevValue && currentValue > prevValue) {
      arabicNumber += currentValue - prevValue;
      i--;
    } else {
      arabicNumber += currentValue;
    }
  }

  return arabicNumber;
};

// 全ローマ数字とアラビア数字が対応したマップ
export const romanMap = new Map<string, number>([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
