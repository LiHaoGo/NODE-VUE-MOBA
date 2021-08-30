const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        // 设置密码是查不出来的
        select:false,
        set(val) {
            // BCrypt 密码加密和解密 不可逆的
            return require('bcrypt').hashSync(val, 10)
        }
    }
})
module.exports = mongoose.model('AdminUser', schema)