<template>
    <el-dialog :title="title" :visible.sync="open">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="医生姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
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
            <el-form-item label="医生标签" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="全科" name="type"></el-checkbox>
                <el-checkbox label="技术专业" name="type"></el-checkbox>
                <el-checkbox label="经验丰富" name="type"></el-checkbox>
                <el-checkbox label="专业权威" name="type"></el-checkbox>
                <el-checkbox label="名院主任" name="type"></el-checkbox>
                <el-checkbox label="资深专家" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="擅长技能" prop="skilled">
                <el-input v-model="ruleForm.skilled"></el-input>
            </el-form-item>
            <el-form-item label="医生简介" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import { addoctorAPI } from '@/api/index'

export default {
  name: 'addDialog',
  props: {
    getDoctorList: {
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
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        skilled: [
          { required: true, message: '擅长技能', trigger: 'blur' }
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
            doctor_name: this.ruleForm.name,
            phone: this.ruleForm.phone,
            weChat: this.ruleForm.weChat,
            label: this.ruleForm.type,
            profile: this.ruleForm.desc,
            skilled: this.ruleForm.skilled,
            jobTitle: this.ruleForm.jobTitle
          }
          const newParams = {
            ...params,
            label: params.label.map(item => String(item)).join(',')
          }
          const res = await addoctorAPI(newParams)
          console.log(res)
          if (res.status === 200) {
            if (res.data.status === 0) {
              this.getDoctorList()
              this.open = false
              this.$message({
                message: '恭喜你，添加成功！',
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
      this.$refs[formName].resetFields()
    }
  }
}
</script>
