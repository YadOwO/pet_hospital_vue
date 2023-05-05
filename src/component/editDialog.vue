<template>
    <el-dialog :title="title" :visible.sync="isOpen" @open="open">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="医生姓名" prop="doctor_name">
                <el-input v-model="ruleForm.doctor_name"></el-input>
            </el-form-item>
            <el-form-item label="医生头衔" prop="jobTitle">
                <el-input v-model="ruleForm.jobTitle"></el-input>
            </el-form-item>
            <el-form-item label="医生电话" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="医生微信" prop="weChat">
                <el-input v-model="ruleForm.weChat"></el-input>
            </el-form-item>
            <el-form-item label="医生标签" prop="label">
                <el-input v-model="ruleForm.label"></el-input>
            </el-form-item>
            <el-form-item label="擅长技能" prop="skilled">
                <el-input v-model="ruleForm.skilled"></el-input>
            </el-form-item>
            <el-form-item label="医生简介" prop="profile">
                <el-input type="textarea" v-model="ruleForm.profile"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import { updateDoctorAPI } from '@/api/index'

export default {
  name: 'editDialog',
  props: {
    getDoctorList: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      title: '编辑医生信息',
      isOpen: false,
      doctorObj: {},
      ruleForm: {
        doctor_name: '',
        jobTitle: '',
        phone: '',
        weChat: '',
        label: '',
        skilled: '',
        profile: ''
      },
      rules: {
        doctor_name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
        ],
        jobTitle: [
          { required: true, message: '擅长技能', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        weChat: [
          { required: true, message: '请输入微信号', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/, message: '微信号格式不正确', trigger: 'blur' }
        ],
        label: [
          { required: true, message: '擅长技能', trigger: 'blur' }
        ],
        skilled: [
          { required: true, message: '擅长技能', trigger: 'blur' }
        ],
        profile: [
          { required: true, message: '请填写医生简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    open () {
      console.log(this.doctorObj)
      this.ruleForm = { ...this.doctorObj }
    },
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.ruleForm)
          const res = await updateDoctorAPI(this.ruleForm)
          console.log(res)
          if (res.status === 200) {
            if (res.data.status === 0) {
              this.getDoctorList()
              this.isOpen = false
              this.$message({
                message: '恭喜你，修改成功！',
                type: 'success'
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
      console.log(this.ruleForm)
      this.$refs[formName].resetFields()
    }
  }
}
</script>
