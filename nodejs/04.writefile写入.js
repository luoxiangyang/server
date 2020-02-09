const fs = require('fs');
//第一个参数 要写入的地址 如果没有会自动创建
//第二个参数内容 会把文件内容全部删除 再写入内容
let obj = { a: 1, b: 2 }
//转为JSON格式添加到内容的参数中
fs.writeFile('./test.txt', JSON.stringify(obj), err => {
    if (err) {
        console.log(err);

    }
    console.log('完成写入');

})
// appendFile  追加  写入的内容不会先删除在添加
// 同步
