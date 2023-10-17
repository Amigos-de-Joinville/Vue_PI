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
  <main class="main">
    <div class="scroll-view">
      <div class="card2 row row-cols-3 row-cols-md-4 g-4" >
        <div v-for="animal in animais" :key="animal.id" class="card1 col">
          <div  class="card1 card h-100">
            <img :src="animal.foto" class="foto" alt="Foto do animal" />
            <div class="card-body">
              <h5 class="card-title">{{ animal.nome }}</h5>
              <p class="card-text">{{ animal.raca }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Atualizado há 2 dias</small>
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


.ordem {
  padding: 50px;
}
.according-button {
  color: yellow;
}
.foto {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.scroll-view {
  padding-top: 70px;
}
.main {
  margin-left: 170px;
  padding-top: 70px;
  height: 30px;
  width: 80%;
  padding-top: 50px;
}
.card1{
  padding:20px;
  padding-top: 10px;
 
}
.foto{
  height:300px;
}

</style>
