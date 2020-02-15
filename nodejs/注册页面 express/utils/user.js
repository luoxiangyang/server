const fs = require('fs')
const path = require('path')
const FILE_PATH = path.join(__dirname + '../messages/messages.json')

const get = () => {
    let fileStr = fs.readFileSync(FILE_PATH, 'utf8')
    //转成JSON对象
    let arr = JSON.stringify(fileStr)
    return arr
}

const add = (name, pwd, avatarUrl) => {
    // 获取数据
    let arr = get();
    //从数组中添加一个对象
    //原数组最后一个元素得id+1
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    arr.push({
        id,
        name,
        pwd,
        avatarUrl
    })
    //写回去JSON代码
    fs.writeFileSync(FILE_PATH, JSON.stringify(arr))
    return arr;
}
module.exports = {
    "add": add,
    "get": get
}