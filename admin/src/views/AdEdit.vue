<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}广告位</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
      </el-form-item>
      <el-row type="flex" style="flex-wrap: wrap;">
        <el-col :md="12" v-for="(item, index) in model.items" :key="index">
          <el-form-item label="链接">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="res => $set(item, 'image', res.url)"
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button
              size="mini"
              type="danger"
              @click="model.items.splice(index, 1)"
              >删除</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    }
  },
  created() {
    this.id && this.fetch()
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message.success('保存成功')
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 512px;
  height: 218px;
  line-height: 218px;
  text-align: center;
}
.avatar {
  width: 512px;
  height: 218px;
  display: block;
}
.difficult {
  position: relative;
  .el-rate {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
