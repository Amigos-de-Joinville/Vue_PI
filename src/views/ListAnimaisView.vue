<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import CabecalhoComp from "@/components/CabecalhoComp.vue";
import ButtomComp from "@/components/ButtomComp.vue";

const animais = ref([]);

const buscarAnimais = async () => {
  try {
    const resposta = await axios.get(
      "https://django-pi-j444-dev.fl0.io/animais/"
    );
    animais.value = resposta.data;
  } catch (erro) {
    console.error(erro);
  }
};

onMounted(() => {
  buscarAnimais();
});
</script>

<template>
  <CabecalhoComp></CabecalhoComp>
  <main class="main"  >
  <div class="scroll-view">
  <div class="row row-cols-3 row-cols-md-6 g-6" style="padding-top: 20px">
    <div v-for="animal in animais" :key="animal.id" class="col">
      <div class="card h-100">
        <img
          :src="animal.foto"
          class="foto"
          alt="Foto do animal"
        />
        <div class="card-body">
          <h5 class="card-title">{{ animal.nome }}</h5>
          <p class="card-text">{{ animal.raca }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Atualizado há 2 dias</small>
          <i style="padding-left: 160px" class="far fa-heart fa-2x"></i>
        </div>
        <ButtomComp></ButtomComp>
      </div>
    </div>
  </div>
  </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");
.video {
  padding-left: 400px;
  padding-top: 50px;
}
h1 {
  font-family: "Bangers", cursive;
  color: rgb(43, 43, 43);
}
.ordem {
  padding: 50px;
}
.according-button {
  color: yellow;
}
.foto{
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.scroll-view{
  padding-top: 20px;
}
.main{
  padding-top: 70px;
  height: 50px;
  width: ;
}
</style>
