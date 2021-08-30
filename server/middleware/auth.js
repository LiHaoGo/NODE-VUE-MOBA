module.exports = options =>{
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
    const assert = require('http-assert')
    return async(req,res,next)=>{
        // 校验用户是否登录
        // split(' ') 以空格分割字符串 分成数组
        // pop提取数组最后一个元素  
        const token = String(req.headers.authorization || '').split(' ').pop()
        console.log(token);
        assert(token,401,"请提供jwt token (请先登录)")
        const {id} = jwt.verify(token,req.app.get('secret'))
        // 把user挂载到req对象上
        assert(id,401,"无效的jwt token (请先登录)")
        req.user = await AdminUser.findById(id)
        // const tokenData = jwt.verify(token,app.get('secret'))
        // console.log('this is tokenData',tokenData);
        // this is tokenData { id: '61249c1e96c3350ff87bb863', username: 'admin', iat: 1629793267 }
       assert(req.user,401,"请先登录")
        
        await next()
    }
}