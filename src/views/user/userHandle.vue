<template>
    <div>
      <div class="head">
        <h1 class="titleH">用户信息</h1>
        <el-button  id="addBtn" @click="addHandle">添加用户</el-button>
      </div>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 70%">
        <el-table-column
          label="Id"
          prop="id"
          width="100px">
        </el-table-column>
        <el-table-column
          label="用户名"
          prop="username"
          width="150px">
        </el-table-column>
        <el-table-column
          label="昵称"
          prop="nickname"
          width="150px">
        </el-table-column>
        <el-table-column
          label="拥有宠物"
          prop="jobTitle"
          width="150px">
        </el-table-column>
        <el-table-column
          align="right">
          <!-- <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template> -->
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <addUser ref="addUser" :getUserList="getUserList"/>
    </div>
</template>

<script>
import { getUserListAPI, deleteUserAPI } from '@/api'
import addUser from '@/component/addUser.vue'

export default {
  name: 'userHandle',
  components: {
    addUser
  },
  async mounted () {
    this.getUserList()
  },
  data () {
    return {
      tableData: [],
      search: ''
    }
  },
  methods: {
    async getUserList () {
      try {
        const res = await getUserListAPI()
        if (res.status === 200) {
          if (res.data.status === 0) {
            this.tableData = res.data.data
            console.log(this.tableData)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    addHandle () {
      // console.log(123)
      this.$refs.addUser.open = true
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (_, { id }) {
      this.$confirm('确认删除用户？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          const res = await deleteUserAPI(id)
          console.log(res)
          this.getUserList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        } catch (error) {
          console.log(error)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}

</script>

<style>
.head {
  position: relative;
}
.titleH {
  display: inline-block;
  color: #111822;
  margin-bottom: 20px;
}
#addBtn {
  position: absolute;
  right: 30%;
}
</style>
