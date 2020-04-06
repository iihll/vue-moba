<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items" stripe>
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button
            type="warning"
            size="mini"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="danger" size="mini" @click="remove(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-tree
      :data="items"
      show-checkbox
      node-key="_id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)">
            Append
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('categories')
      console.log(res)
      this.items = res.data
    },
    remove(id) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`categories/${id}`)
          this.$message.success('删除成功')
          this.fetch()
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    }
  }
}
</script>
