const express = require('express')
const bodyParser = require('body-parser')
// 引入自定义模块
const user = require('./utils/user')

const multer = require('multer')
//  配置
const upload = multer({ dest: 'avatars/' })

//session
const session = require('express-session');
const app = express()
// 托管静态资源
app.use(express.static("public94"))
//配置session
let conf = {
    secret: '123456', //加密字符串。 使用该字符串来加密session数据，自定义
    resave: false, //强制保存session即使它并没有变化
    saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
    //设定属性或值时，它就处于未初始化状态。
};
app.use(session(conf))
app.use(bodyParser.urlencoded({ extended: false }));
// 实现一个接口来做用户注册功能
// 用户在页面上，传递：用户名，密码，头像
// 在后端：
// 1. 把他的头像文件保存起来.
//    放在avatars目录下
// 2. 把用户的信息保存到user.json文件中
//    user.json是我们专门来用来保存用户信息的 临时数据库


app.post('/user_add', upload.single("avatar"), (req, res) => {
    // console.log(req.file)
    // console.log(req.body)
    let { name, pwd } = req.body;
    let avatarUrl = req.file.path;

    //调用自定义模块，实现添加方法
    user.add(name, pwd, avatarUrl)

    res.send({
        code: 200,
        msg: "用户注册成功"
    })
})
// 用户登陆
// 约定:普通键值对传参
// 参数：name, pwd
// 返回值：
//  {code:200,msg:'登陆成功'}
//  {code:400,msg:'用户名密码错误'}
app.post('/user_login', (req, res) => {
    //从ajax中取出参数
    let { name, pwd } = req.body//解构赋值
    //读取JSON文件中是否有这个名字跟密码 如果有就是注册过了
    let allUser = user.get()
    //使用find方法找出 是否有复合的
    let curUser = allUser.find(function (item) {
        if (item.name === name && item.pwd === pwd) {
            return true
        }
    })
    //如果有curUser这个值 就相当于在JSON中找到了
    if (curUser) {
        req.session.isLogin = true
        req.session.name = name
        res.send({ code: 200, msg: '登陆成功', data: curUser })
    } else {
        res.send({ code: 400, msg: '用户名密码错误' })
    }
})
// 检测用户是否登陆
// get
// 原理：就是获取session值。如果获取到，说明登陆成功。

app.get('/get_user', (req, res) => {
    console.log(1);

    // 当请求进来之后，就去检查它是否带了sessionID
    // get_login`作用就是获取当前登陆信息
    let name = req.session.name
    let isLogin = req.session.isLogin
    if (isLogin) {
        //说明已经登录了 
        res.send({
            code: 200,
            data: {
                'name': name
            }
        })
    } else {
        res.send({ code: 400, msg: '没有登录' })
    }

})
//退出
app.get('/quit', (req, res) => {
    //删除session
    req.session.destroy();
    res.send({ code: 200, msg: '退出成功' })
})
app.listen(8084, () => {
    console.log("服务器启动了 8084");

})