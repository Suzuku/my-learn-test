// 一键将缺陷指派到对应人员
// 使用方法，将代码拷贝至chrome的console的Snippets上 在缺陷详情页，运行即可，支持定制文案
// 意见
HANDLE_SUGGESTION = '能力集问题 已修复';
// 是否直接提交
SUBMIT = false;

// 需要指派的人员姓名 按照如下格式
NAME = '徐振华5 - xuzhenhua5';
// 延时器可定制 因为需要让页面的弹框渲染好才能访问DOM  但是取决于公司网络
TIMEOUT = 500;

document.getElementById('assignYes').click();
document.getElementById('s3_handleSuggestion').value = HANDLE_SUGGESTION;
document.getElementById('assignPeople').click();

function moduleWrite() {
    var option = document.createElement('option');
    option.value = NAME;
    option.innerHTML = NAME;
    document.getElementById('tabValueList').appendChild(option);
    document.getElementById('btn_ok').click();
}

function submit() {
    document.getElementsByClassName('approve')[0].click();
    document.getElementsByClassName('messager-button')[0].childNodes[0].click();
}
setTimeout(() => {
    moduleWrite();
}, TIMEOUT);
if (SUBMIT) {
    setTimeout(() => {
        submit();
    }, TIMEOUT + 500 + 500);
}
