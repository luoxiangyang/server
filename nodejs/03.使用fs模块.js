//使用模块步骤
//1.引入模块
const fs = require('fs');
//require('fs')把fs这个模块中的代码执行一次，并把‘执行结果保存’
//后面的fs是模块的名字  
//前面的fs是常量的名字
// console.log(fs);

//2.使用
//假设目标是要读出 当前文件夹下的'01.js'的内容
fs.readFile('01.js', 'utf8', (err, data) => {
    //如果有错误 则错误信息保存在第一个参数中
    //如果没有错误 则数据会保存在第二个参数中
    if (err)
        //throw err：把这个错误跑出来 交给上一级来处理
        throw err;
    // console.log(err);

    console.log(data);
    //如果不加配置项 就是buffer格式
    //Buffer格式：理解为之一段文本内容在硬盘中保存的编码
    //<Buffer 76 61 72 20 61 20 3d 20 31 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 61 29 3b 0d 0a>
    //Buffer转字符串，直接使用同String（）方法
});
//同步的 会堵塞代码执行
let rs = fs.readFileSync('01.js', 'utf8')
console.log(rs);
console.log(3);
try {
    //如果有错误 会自动进入catch 并传入错误信息
    //如果没有任何错误 则catch分支不会执行
    let rs = fs.readFileSync('011.js', 'utf8')
} catch (err) {
    console.log(err);

}


