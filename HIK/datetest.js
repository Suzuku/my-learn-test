function transDate(datestr) {
    let temp = datestr.split("-");
    if (temp[1] === "01") {
      temp[0] = parseInt(temp[0], 10) - 1;
      temp[1] = "12";
    } else {
      temp[1] = parseInt(temp[1], 10) - 1;
    }
    //new Date()的月份入参实际都是当前值-1
    let date = new Date(temp[0], temp[1], temp[2]);
    return date;
  }
  /**
   ***获取两个日期间的所有日期
   ***默认start<end
   **/
  function getDiffDate(start, end) {
    let startTime = transDate(start);
    let endTime = transDate(end);
    let dateArr = [];
    //循环到结束日期
    while (endTime.getTime() - startTime.getTime()>=0) {
      let year = startTime.getFullYear();
      let month =
        startTime.getMonth().toString().length+1 === 1
          ? "0" + (parseInt(startTime.getMonth().toString(), 10) + 1)
          : startTime.getMonth() + 1;
      let day =
        startTime.getDate().toString().length === 1
          ? "0" + startTime.getDate()
          : startTime.getDate();
      dateArr.push(year + "-" + month + "-" + day);
      startTime.setDate(startTime.getDate() + 1);
    }
    return dateArr;
  }

  function getDiffMonth(start, end) {
    let startTime = transDate(start);
    let endTime = transDate(end);
    let dateArr = [];
    //循环到结束日期
    while (endTime.getTime() - startTime.getTime()>=0) {
      let year = startTime.getFullYear();
      let month =
      (startTime.getMonth()+1).toString().length === 1
          ? "0" + (parseInt(startTime.getMonth().toString(), 10) + 1)
          : startTime.getMonth() + 1;
      dateArr.push(year + "-" + month);
      startTime.setMonth(startTime.getMonth() + 1);
    }
    return dateArr;
  }

  let getDiffMon=getDiffMonth('2018-9-3','2019-12-9')
  console.log(getDiffMon);