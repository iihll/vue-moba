const express = require('express')
const router = express.Router()

const Category = require('../../models/Category')

module.exports = app => {
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  router.get('/categories', async (req, res) => {
    const items = await Category.find()
      // populate 关联查询该字段
      .populate('parent')
      // 添加查询限制
      .limit(10)
    res.send(items)
  })
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  app.use('/admin/api', router)
}
