<template>
  <router-link :to="{ name: 'detail', params: { id: props.id } }">
    <button
      class="btn btn-primary btn-lg"
      style="background-color: #f7559a; border: #f7559a"
      @click="verDetalhes"
    >
      Ver mais
    </button>
  </router-link>
</template>

<script setup>
const props = defineProps({
  id: String,
});
</script>
