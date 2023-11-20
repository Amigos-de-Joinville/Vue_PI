import api from '../plugins/api'

class RacaService {
  async getAllRacas() {
    const response = await api.get('/racas/')
    return response.data
  }
  async saveRaca(raca) {
    let response
    if (raca.id) {
      response = await api.put(`/racas/${raca.id}/`, raca)
    } else {
      response = await api.post('/racas/', raca)
    }
    return response.data
  }
  async deleteRaca(raca) {
    const response = await api.delete(`/racas/${raca.id}/`)
    return response.data
  }
}


export default new RacaService()