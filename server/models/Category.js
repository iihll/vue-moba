const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  // mongoDB id 类型, ref 关联模型
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

module.exports = mongoose.model('Category', schema)
