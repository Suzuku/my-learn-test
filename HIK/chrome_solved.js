// 一键solved缺陷
// 使用方法，将代码拷贝至chrome的console的Snippets上 在缺陷详情页，运行即可，支持定制文案

// 意见
HANDLE_SUGGESTION = '经过排查，确定为显示问题，已修复';
// 是否直接提交
SUBMIT = false;
// 引入活动，需要填页面列表里规定的值 引入原因暂不支持定制 后续加上
ACTIVITY = '编码';

// 所属模块 value和name需要通过HTML在页面点开来的列表找到自己项目对应模块的option
MODULE_VALUE = '012579';
MODULE_NAME = '楼宇对讲产品/WEB';
// 解决办法
SOLUTION = '经过排查，确定为意见所述问题';

// SVN存放路径 文件名称 版本号 这里是写死的
SVN_PATH = 'https://192.0.0.240/VIS-IPDPrj/2019/PJ01PD20190723093_4.3寸人脸门口机产品切平台项目/04研发/02软件开发/04软件集成/集成测试/集成测试Build3-1/WEB';
SVN_FILENAME = 'WEB';
SVN_VERSION = '34018';

// 延时器可定制 因为需要让页面的弹框渲染好才能访问DOM  但是取决于公司网络
TIMEOUT = 500;

document.getElementById('solved').click();
document.getElementById('s3_handleSuggestion').value = HANDLE_SUGGESTION;
document.getElementById('solution').value = SOLUTION;
// 测试逃逸 默认否 其他
if (document.getElementById('testEscapeNo')) {
    document.getElementById('testEscapeNo').click();
    document.getElementById('testOthers').click();
}

for (let item of document.getElementsByClassName('combo-panel')) {
    if (item.childNodes && item.childNodes.length > 0) {
        for (let item2 of item.childNodes) {
            if (item2.innerHTML === ACTIVITY || item2.innerHTML === '其他' || item2.innerHTML === 'SVN') {
                item2.classList.add('combobox-item-hover');
                item2.click();
            }
        }
    }
}
document.getElementById('storagePath0').value = SVN_PATH;
document.getElementById('fileName0').value = SVN_FILENAME;
document.getElementById('version0').value = SVN_VERSION;
document.getElementById('s3_moduleName').click();

function moduleWrite() {
    var frame = document.getElementById('layui-layer-iframe1') || document.getElementById('layui-layer-iframe2') || document.getElementById('layui-layer-iframe3'); //获取以 HTML 对象来返回 iframe 中的文档
    childHtml = frame.contentWindow;
    var option = document.createElement('option');
    option.value = MODULE_VALUE;
    option.innerHTML = MODULE_NAME;
    childHtml.document.getElementById('tabValueList').appendChild(option); //获取iframe里面id为num的input的value
    document.getElementsByClassName('layui-layer-btn0')[0].click();
}

function submit() {
    document.getElementsByClassName('approve')[0].click();
    document.getElementsByClassName('messager-button')[0].childNodes[0].click();
}
setTimeout(() => {
    moduleWrite();
    document.getElementById('reason').click();
}, TIMEOUT);
setTimeout(() => {
    document.getElementsByClassName('jbox-button-focus')[0].click();
}, TIMEOUT + 500);
if (SUBMIT) {
    setTimeout(() => {
        submit();
    }, TIMEOUT + 500 + 500);
}
