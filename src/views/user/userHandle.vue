<template>
    <div>
      <h1 class="titleH">医生信息</h1>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 90%">
        <el-table-column
          label="Id"
          prop="doctor_id"
          width="50px">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="doctor_name"
          width="80px">
        </el-table-column>
        <el-table-column
          label="微信"
          prop="weChat"
          width="150px">
        </el-table-column>
        <el-table-column
          label="头衔"
          prop="jobTitle"
          width="150px">
        </el-table-column>
        <el-table-column
          label="label"
          prop="label"
          width="200px">
        </el-table-column>
        <el-table-column
          label="技能"
          prop="skilled">
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
    </div>
</template>

<script>
import { getDoctorListAPI } from '@/api'

export default {
  name: 'userHandle',
  async mounted () {
    try {
      const res = await getDoctorListAPI()
      if (res.status === 200) {
        if (res.data.status === 0) {
          this.tableData = res.data.data
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      tableData: [],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}

</script>

<style>
.titleH {
  color: #111822;
  margin-bottom: 20px;
}
</style>
