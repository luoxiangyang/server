const express = require('express')

//自定义
const user = require('./utils/user')
const multer = require('multer')

//上传照片得配置
const upload = multer({ dest: 'avatars/' })
const app = express()
//托管静态资源
app.use(express.static('public94'))

app.post('/user_add', upload.single('avatar'), (req, res) => {
    //文件其他的数据req.body 
    //上传得文件得数据req.flie
    let { name, pwd } = req.body;
    let avatarUrl = req.file.path

    //调用自定义模块  实现添加方法
    user.add(user, pwd, avatarUrl)

    res.send({
        code: 200,
        msg: '用户注册成功'
    })
})

app.listen(8080, () => {
    console.log('ok');

})