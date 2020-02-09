//读取同级目录下的message.json
const fs = require('fs');
const path = require('path')
//优化：消除魔术数
const DATA_FILE = 'message.json'
let fliePath = path.join(__dirname, DATA_FILE)
//rs数据是string 格式  
//JSON格式是一种特殊格式的字符串
const getMsg = () => {
    let rs = fs.readFileSync(fliePath, 'utf8')
    let arr = JSON.parse(rs)//把JSON字符串转成了JS中的数据
    // console.log(rs);
    // console.log(arr);
    return arr;
}


/**
 * 
 * @param {*} name 用户名
 * @param {*} content 内容
 */
const addMsg = (name, content) => {
    //如何向。json文件添加一条数据
    //1.读出文件内容 转成数组
    let arr = getMsg();
    //2.用数组的appen方法，添加一条记录
    let obj = {
        id: arr.length + 1,
        "name": name,
        "content": content,
        dt: Date.now()
    }
    arr.push(obj);//这里是对象


    //3.把当前的数组写回到文件中去
    //一定要转成字符串再写如
    fs.writeFileSync(fliePath, JSON.stringify(arr))
    // console.log(arr);
    return arr;
}
let rs = addMsg("balala", 'dada');
console.log(rs);
