// 题目 1

/**
 * 解析 URL 中的query string 
 *
 * @https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D
 * @
    ```
    {
      name: "coder",
      age: 20,
      callback: 'https://youzan.com?name=test',
      list: ["a", "b"],
      json: { str: "abc", num: 123 }   json是key
    }
    ```
 */

function queryString(url) {
  let urlDecodeString = decodeURIComponent(url);
  let result = {};
  //   需要先将第一个？号前的给截掉，不然不好处理
  let tempIndex = urlDecodeString.indexOf('?');
  let urlString = urlDecodeString.substring(tempIndex + 1, urlDecodeString.length);
  console.log(urlString);

  // 根据url的query特性进行截取
  let urlQueryStringArr = urlString.split('&');
  console.log(urlQueryStringArr);
  for (let i = 0; i < urlQueryStringArr.length; i++) {
    let splitArr = urlQueryStringArr[i].split('=');
    //   开始进行一系列判断进行取值赋值
    if (urlQueryStringArr[i].includes('?')) {
      result[splitArr[0]] = `${splitArr[1]}=${splitArr[2]}`;
    } else if (urlQueryStringArr[i].includes('[') && urlQueryStringArr[i].includes(']')) {
      // 数组
      let arrName = splitArr[0].split('[')[0];
      // 初始化
      if (!result[arrName]) {
        result[arrName] = [];
      }
      result[arrName].push(splitArr[1]);
    } else if (splitArr[0] === 'json') {
      // 对象
      result[splitArr[0]] = JSON.parse(splitArr[1]);
    } else {
      result[splitArr[0]] = splitArr[1];
    }
  }
  console.log(result);
}

queryString(
  'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list%5B%5D=a&list%5B%5D=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D'
);
