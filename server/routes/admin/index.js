module.exports = app => {
    const express = require('express')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const router = express.Router({
        mergeParams: true
    })

    // 创建资源
    router.post('/', async (req, res) => {

        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 资源列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(150)
        res.send(items)
    })
    // 资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    // 登录校验中间件
     const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')
    // 更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 删除资源
    router.delete('/:id', async (req, res) => {
        console.log(1);

        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)

        res.send({
            success: true
        })
    })
    app.use('/admin/api/rest/:resource',authMiddleware(), resourceMiddleware(), router)


    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.post('/admin/api/upload',authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    app.post('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        // 1.根据用户名找用户
       
        // 之前设置了不从数据库取出password，现在 +password  从数据库读取password
        const user = await AdminUser.findOne({
            username
        }).select('+password')
        // 使用assert包 判断是否存在
        assert(user,422,"用户不存在")
       
        // 2.校验密码
        // 返回一个Boolean值
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid,422,"密码错误")
        // 3.返回token
       
      const token = jwt.sign({
            id: user._id,
            username:user.username
        },app.get('secret') )
        res.send({token,username})
    })
    // 错误处理函数
    app.use(async(err,req,res,next)=>{
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}