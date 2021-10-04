/* 日常开发中，我们需要对日期格式化成各种各样的描述。保证我们能够灵活自由的用在各种业务场景下。这时候，我们会对日期有个简单的规则描述，用于准确的识别具体需要格式化成何种样式

需要实现的日期函数输入为两个参数
参数1: 合法的时间戳数字(毫秒)
参数2: 描述格式化时间样式的字符串，类似 'YY年MM月D'，对应于 2021年8月21日的输出结果为 '21年08月21'。
可以看到，YY、MM、D 都可以用来指定一定格式的日期数据输出。那么具体可用的字符有

YYYY：完整的年份，例如 2021 年，即输出 2021
yyyy: 同 YYYY
YY: 年份的后两位，例如 2021 年，即输出 21
yy: 同 yy
MM：月份数，如果月份小于 10，需要再前面补0。比如: '8月' => '08'  '10月' => '10'
M：月份数，但是不会再前面补 0。比如: '8月' => '8'  '10月' => '10'
DD：日期，规则和 MM 一致。比如: '8月12日' => '12'  '8月2日' => '02'
D：日期，规则和 M 一致。比如: '8月12日' => '12'  '8月2日' => '2'
HH: 当前小时数（24小时制），规则和 MM 一致。比如: '12日上午8时' => '08'  '12日下午1时' => '13'
H: 当前小时数（24小时制），规则和 M 一致。比如: '12日上午8时' => '8'  '12日下午1时' => '13'
mm: 当前分钟数，规则和 MM 一致。比如: '8时2分08秒' => '02'  '8时20分28秒' => '20'
m: 当前分钟数，规则和 M 一致。比如: '8时2分08秒' => '2'  '8时20分28秒' => '20'
ss: 当前秒数，规则和 MM 一致。比如: '8时2分08秒' => '08'  '8时2分28秒' => '28'
s: 当前秒数，规则和 M 一致。比如: '8时2分08秒' => '8'  '8时2分28秒' => '28'

函数的输出为格式出的具体时间描述字符串
 */

function moment(timestamp, rule) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  // 结果字符串
  let resultStr = (rule || '').trim();
  if (resultStr) {
    //   TODO循环次数优化
    for (let i = 0; i < resultStr.length; i++) {
      resultStr = formatStr(resultStr, 'YYYY', 'YY', year.toString(), year.toString().slice(2, 4));
      resultStr = formatStr(resultStr, 'yyyy', 'yy', year.toString(), year.toString().slice(2, 4));
      resultStr = formatStr(resultStr, 'MM', 'M', month < 10 ? '0' + month : month, month);
      resultStr = formatStr(resultStr, 'DD', 'D', day < 10 ? '0' + day : day, day);
      resultStr = formatStr(resultStr, 'HH', 'H', hour < 10 ? '0' + hour : hour, hour);
      resultStr = formatStr(resultStr, 'mm', 'm', min < 10 ? '0' + min : min, min);
      resultStr = formatStr(resultStr, 'ss', 's', second < 10 ? '0' + second : second, second);
    }
    return resultStr;
  }
  // 未传入规则时，按照 YYYY:MM:DD 格式化
  return `${year}年${month < 10 ? '0' + month : month}月${day < 10 ? '0' + day : day}日`;
}
/* 
对于月、日、时、分、秒进行统一 长字符匹配 短字符匹配 分别匹配 进行处理
 */
function formatStr(resultStr, longStr, shortStr, longData, shortData) {
  if (resultStr.includes(longStr)) {
    resultStr = resultStr.replace(new RegExp(`${longStr}`, 'g'), longData);
  } else if (resultStr.includes(shortStr)) {
    resultStr = resultStr.replace(new RegExp(`${shortStr}`, 'g'), shortData);
  }
  return resultStr;
}
// 2021-12-4 10:20:5
// const timestamp1 = 1638584405000
// moment(timestamp1, 'YY年MM月DD日 H时m分s秒') => '21年12月04日 10时20分5秒'
// // 未传入规则时，按照 YYYY:MM:DD 格式化
// moment(timestamp1) => '2021年12月04日'

console.log(moment(1638584405000));

console.log(moment(1638584405000, 'MM月 HH时mm分'));
console.log(moment(1609430400000, 'YYYY年MM月DD日 H时'));

console.log(moment(1609430400000, 'MM月 HH时mm分'));
console.log(moment(682737605000, 'MM月 HH时mm分'));
console.log(moment(682737605000, 'YYYY-MM-DD HH:mm:ss'));
console.log(moment(1609430400000, 'YYYY-MM-DD HH:mm:ss'));
console.log(moment(682737605000, ' Hh'));
console.log(moment(1609430400000, ' Hh'));
console.log(moment(1609430400000, 'YYYY年的尾数是YY'));
