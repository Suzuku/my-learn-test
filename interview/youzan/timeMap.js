/**
 * ## 问题3
 * 将48位的时间位图格式化成字符串
 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
 *
 * 规则描述：
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 *
 * 示例输入：`"110010000000000000000000000000000000000000000000"`
 * 示例输出：`["00:00~01:00", "02:00~02:30"]`
 */
/**
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
 * 例如110000000000000000000000000000000000000000000000，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
 * 也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如110010000000000000000000000000000000000000000000，
 * 表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 *
 * 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
 * 示例输入："110010000000000000000000110000000000000000000001"
 * 示例输出：["00:00~01:00", "02:00~02:30", 'startTime ~ endTime', 'startTime~24:00']
 */

function timeBitmapToRanges(str) {
  let arr = str.split('');
  let temp = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i]) {
      temp.push(i);
    }
  }
  //   分隔为连续的数组元素
  let constantArr = splitConstant(temp);
  //   转化为位图的时间即可
  for (const item of constantArr) {
    if (item.length > 0) {
      //   取第一个元素和最后一个元素连一起就行了，记得加索引
      result.push(`${transToTime(+item[0])}~${transToTime(+item[item.length - 1] + 1)}`);
    }
  }
  console.log(result);
}

timeBitmapToRanges('110010000000000000000000000000000000000000000000');

timeBitmapToRanges("110010000000000000000000110000000000000000000001")

/**
 * 分隔为连续的数组元素
 *
 * @param {*} arr
 */
function splitConstant(arr) {
  let temp = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = [];
    if (arr[i + 1] !== arr[i] + 1) {
      for (let j = temp; j < i + 1; j++) {
        result[i].push(arr[j]);
      }
      temp = i + 1;
    }
  }
  return result;
}
/**
 * 将索引转换成时间
 *
 * @param {*} index
 */
function transToTime(index) {
  let intTime = index * 30;
  let hour = Math.floor(intTime / 60);
  let hourStr = hour < 10 ? '0' + hour : hour;
  let min = intTime - Math.floor(intTime / 60) * 60;
  let minStr = min < 10 ? '0' + min : min;
  return `${hourStr}:${minStr}`;
}
