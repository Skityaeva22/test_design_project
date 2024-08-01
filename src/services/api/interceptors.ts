import type { InternalAxiosRequestConfig } from 'axios'
import { ElNotification } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/store/user-store'

export function tokenInterceptor(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem('token')
  if (token)
    config.headers.Authorization = `Token ${token}`
  return config
}
export function errorInterceptor(error: any) {
  ElNotification({
    title: 'Ошибка',
    message: error.response?.data?.message,
    type: 'error',
  })

  if (error.response?.status === 401) {
    const token = localStorage.getItem('token')
    if (!token)
      router.push({ name: 'Auth' })
    useUserStore().handleLogout()
  }

  return Promise.reject(error)
}
