import api from '../plugins/api'

class CorService {
  async getAllCores() {
    const response = await api.get('/cores/')
    return response.data
  }
  async saveCor(cor) {
    let response
    if (cor.id) {
      response = await api.put(`/cores/${cor.id}/`, cor)
    } else {
      response = await api.post('/cores/', cor)
    }
    return response.data
  }
  async deleteCor(cor) {
    const response = await api.delete(`/cores/${cor.id}/`)
    return response.data
  }
}


export default new CorService()