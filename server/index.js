const express = require('express')

const app = express()

// 全局秘钥
app.set('secret', 'iihll')

// 设置跨域
app.use(require('cors')())

// 解析 json
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

// 引入数据库连接
require('./plugins/db')(app)

// 引入 admin 路由
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
