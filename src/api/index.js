// 导入自封装的接口方法
import request from '../utils/request.js'

// 医生 - 获取所有医生信息
export const getDoctorListAPI = () => {
  return request({
    url: '/api/getAllDoctor',
    method: 'GET'
  })
}

// 医生 - 添加医生信息
export const addoctorAPI = (data) => {
  return request({
    url: '/api/addDoctor',
    method: 'POST',
    data,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

// 医生 - 添加医生信息
export const deleteDoctorAPI = (id) => {
  return request({
    url: '/api/deleteDoctor',
    method: 'DELETE',
    data: {
      id
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

// 医生 - 修改医生信息
export const updateDoctorAPI = (data) => {
  return request({
    url: '/api/updateDoctor',
    method: 'POST',
    data: {
      id: data.doctor_id,
      ...data
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
