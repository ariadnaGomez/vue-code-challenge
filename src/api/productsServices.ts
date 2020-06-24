import http from './index'
import apiEndpoints from './endpoints'

function factory() {
  return {
    async getProductsList() {
      const response = await http.get(apiEndpoints.grocery)
      return response.data
    },
  }
}

export default factory()
