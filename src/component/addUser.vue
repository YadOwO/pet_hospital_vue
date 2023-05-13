<template>
    <el-dialog :title="title" :visible.sync="open">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="jobTitle">
                <el-input placeholder="请输入密码" v-model="ruleForm.jobTitle" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import { addUserAPI } from '@/api/index'

export default {
  name: 'addDialog',
  props: {
    getUserList: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      title: '添加医生',
      open: false,
      ruleForm: {
        name: '',
        jobTitle: '',
        phone: '',
        weChat: '',
        type: [],
        skilled: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        jobTitle: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        weChat: [
          { required: true, message: '请输入微信号', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/, message: '微信号格式不正确', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        skilled: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写医生简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const params = {
            username: this.ruleForm.name,
            password: this.ruleForm.jobTitle,
            nickname: this.ruleForm.skilled
          }
          const res = await addUserAPI(params)
          console.log(res)
          if (res.status === 200) {
            if (res.data.status === 0) {
              this.getUserList()
              this.open = false
              this.$message({
                message: '恭喜你，添加成功！',
                type: 'success'
              })
            } else {
              this.$message({
                message: '密码格式必学是数字字符，并且数量在6-12字符',
                type: 'error'
              })
            }
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
