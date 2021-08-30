<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/articles/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
          <el-button @click="remove(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "CategoryList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
    
      const res = await this.$http.get("rest/articles");
        console.log(res);
      this.items = res.data;
    },
    async remove(row){
      console.log(row);
       this.$confirm(`是否确定要删除文章"${row.title}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // 代表用户一定点了删除，然后请求接口
          const res = await this.$http.delete(`rest/articles/${row._id}`)
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
