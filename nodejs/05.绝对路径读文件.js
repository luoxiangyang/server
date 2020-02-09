// __dirname:获取当前被执行文件的的文件夹所处的绝对路径
//__filename ：获取当前被执行文件的绝对路径
console.log(__dirname);
console.log(__filename);
const fs = require('fs');
var rs = fs.readFileSync(__dirname + '/test.txt', 'utf-8')
console.log(rs);

