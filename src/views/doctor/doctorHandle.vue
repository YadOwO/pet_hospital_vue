<template>
  <div class="infoHandle">
    <div class="head">
      <h1 class="titleH">医生信息</h1>
      <el-button type="info" class="addBtn" @click="addHandle">添加医生</el-button>
    </div>
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
        label="标签"
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
            @click="handleEdit(scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除医生</el-button>
        </template>
      </el-table-column>
    </el-table>
    <addDialog ref="addDialog" :getDoctorList="getDoctorList"/>
    <editDialog ref="editDialog" :getDoctorList="getDoctorList"/>
  </div>
</template>

<script>
import { getDoctorListAPI, deleteDoctorAPI } from '@/api'
import addDialog from '@/component/addDialog.vue'
import editDialog from '@/component/editDialog.vue'

export default {
  name: 'userHandle',
  components: {
    addDialog,
    editDialog
  },
  mounted () {
    this.getDoctorList()
  },
  data () {
    return {
      tableData: [],
      search: ''
    }
  },
  methods: {
    async getDoctorList () {
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
    handleDelete (row) {
      this.$confirm('确定删除医生？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(async () => {
        try {
          const res = await deleteDoctorAPI(row.doctor_id)
          if (res.status === 200) {
            if (res.data.status === 0) {
              this.getDoctorList()
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            }
          }
        } catch (error) {
          console.log(error)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleEdit (row) {
      this.$refs.editDialog.doctorObj = row
      this.$refs.editDialog.isOpen = true
    },
    addHandle () {
      this.$refs.addDialog.open = true
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
.addBtn {
  position: absolute;
  right: 10%;
}
</style>
