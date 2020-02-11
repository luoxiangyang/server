const fs = require('fs');
const path = require('path')
//优化：消除魔术数
const DATA_FILE = 'message.json'
let fliePath = path.join(__dirname, DATA_FILE)
const get = () => {

    let rs = fs.readFileSync(fliePath, 'utf8')
    let arr = JSON.parse(rs)//把JSON字符串转成了JS中的数据
    // console.log(rs);
    // console.log(arr);
    return arr;

}
const insert = () => {

}
const del = () => {

}
module.exports = {
    'get': get,
    'insert': insert,
    'del': del
}