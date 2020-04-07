<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items" stripe>
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column label="图标">
        <template v-slot="scope">
          <el-image style="width: 3rem;" :src="scope.row.icon"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button
            type="warning"
            size="mini"
            @click="$router.push(`/items/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="danger" size="mini" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/items");
      console.log(res);
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`此操作将永久删除${row.name}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`rest/items/${row._id}`);
          this.$message.success("删除成功");
          this.fetch();
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    }
  }
};
</script>
