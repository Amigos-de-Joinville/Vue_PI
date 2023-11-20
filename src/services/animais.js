import api from '../plugins/api'

class AnimalService {
  async getAllAnimal() {
    const response = await api.get('/animais/')
    return response.data
  }
  async saveAnimal(animal) {
    let response
    if (animal.id) {
      response = await api.put(`/livros/${animal.id}/`, animal)
    } else {
      response = await api.post('/animais/', animal)
    }
    return response.data
  }
  async deleteAnimal(animal) {
    const response = await api.delete(`/animais/${animal.id}/`)
    return response.data
  }
}

export default new AnimalService()