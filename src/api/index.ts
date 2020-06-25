import axios from 'axios'
import apiEndpoints from '@/api/endpoints'

const http = axios.create({
  baseURL: apiEndpoints.basePath,
})

function factory(http: any) {
  return {
    get(endpoint: string, params?: any) {
      return http.get(endpoint, params)
    },
  }
}
export default factory(http)
