const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  // mongoDB id 类型, ref 关联模型
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

// TODO: what's virtual?
schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

schema.virtual('newsList', {
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Article'
})

module.exports = mongoose.model('Category', schema)
