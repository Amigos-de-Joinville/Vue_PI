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
<template >
  <CabecalhoComp></CabecalhoComp>
  <div class="row row-cols-1 row-cols-md-4 g-4" v-for="animal in animais"
    :key="animal.id"
    style="padding: 200px"
    display="flex" >
    <div class="col">
      <div class="card h-100">
        <img
          :src="animal.foto"
          class="card-img-top"
          alt="Los Angeles Skyscrapers"
        />
        <div class="card-body">
          <h5 class="card-title">{{ animal.nome }}</h5>
          <p class="card-text">
            {{ animal.raca }}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Atualizado à 2 dias</small>
          <i style="padding-left: 160px" class="far fa-heart fa-2x"></i>
        </div>
        
        <ButtomComp></ButtomComp>
      </div>
    </div>
  </div>

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

</style>
