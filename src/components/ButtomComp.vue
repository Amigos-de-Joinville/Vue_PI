<template>
  <router-link :to="{ name: 'detail', params: { id: animalId }}">
    <button class="btn btn-primary btn-lg" style="background-color: #f7559a; border: #f7559a;" @click="verDetalhes">
      Ver mais
    </button>
  </router-link>
</template>

<script>
export default {
  props: ['animalId'],
  methods: {
    verDetalhes() {
      // Adicione qualquer lógica adicional antes de navegar, se necessário
    }
  }
};
</script>
