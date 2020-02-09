//学习path模块
const path = require('path');
// console.log(path);
//path.basename()
//  返回path的最后一部分，一般可用来获取路径中的最后一部分
//path.join()路径拼接
//path.parse(path):把一个路径转成对象

var filePath1 = "F:\AA黑马学习\就业班\11-node.js\05.绝对路径读文件.js"
console.log(path.basename(filePath1))

const fs = require('fs');
let filePath = path.join(__dirname, '/test.txt')
var rs = fs.readFileSync(filePath, 'utf-8')
console.log(rs);
