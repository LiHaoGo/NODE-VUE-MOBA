<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
      <el-table-column prop="name" label="英雄名称"> </el-table-column>
      <el-table-column prop="title" label="称号"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
          <template slot-scope="scope">
              <img :src="scope.row.avatar" style="height:2.5rem" alt="">
          </template>
           </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/heroes/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
          <el-button @click="remove(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "HeroesList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      console.log(res);
      const res = await this.$http.get("rest/heroes");
      this.items = res.data;
    },
    async remove(row){
      console.log(row);
       this.$confirm(`是否确定要删除分类"${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // 代表用户一定点了删除，然后请求接口
          const res = await this.$http.delete(`rest/heroes/${row._id}`)
          console.log('delete',res);
       this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })         
    }
  },
  created() {
    this.fetch();
  },
};
</script>
