import axios from 'axios'
import { errorInterceptor, tokenInterceptor } from './interceptors'

const mapUrl = {
  local: `${import.meta.env.VITE_APP_API_URL}`,
  prod: `${window.location.origin}/backend`,
}
const apiBaseURL = window.location.hostname === 'localhost' ? mapUrl.local : mapUrl.prod

const instance = axios.create({
  baseURL: apiBaseURL,
})

instance.interceptors.request.use(tokenInterceptor)
instance.interceptors.response.use(
  response => response,
  error => errorInterceptor(error),
)

export default instance
