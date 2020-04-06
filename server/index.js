const express = require('express')

const app = express()

// 设置跨域
app.use(require('cors')())

// 解析 json
app.use(express.json())

// 引入数据库连接
require('./plugins/db')(app)

// 引入 admin 路由
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
