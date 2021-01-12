// 选择排序
function swap(arr) {
    // 先来一趟
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        for (j = arr.length - 1; j >= i; j--) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        console.log(arr);
    }
}

swap([49, 38, 65, 97, 76, 13, 27, 49]);
/* 1.EVA 2.RE0 3.咒术回战 4.天元突破 5.HF剧场版 6.寒蝉本篇二周目+新篇 7.超炮第三季补完 8.空之境界二周目 9.异度侵入*/
