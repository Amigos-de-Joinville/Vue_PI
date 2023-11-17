<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CabecalhoComp from "@/components/CabecalhoComp.vue";

import { useRoute } from "vue-router";

const route = useRoute();

const animais = ref([]);
const animalSelecionado = ref();
const buscarAnimais = async () => {
  try {
    const resposta = await axios.get(
      "https://django-pi-dev-rxrf.4.us-1.fl0.io/api/animais/"
    );
    animais.value = resposta.data;
  } catch (erro) {
    console.error(erro);
  }
};

const mostrarDetalhes = async (cod) => {
  const resposta = await axios.get(
    "https://django-pi-dev-rxrf.4.us-1.fl0.io/api/animais/"
  );
  animais.value = resposta.data;

  const meuAnimal = animais.value.filter((animal) => animal.id == cod);
  console.log(meuAnimal);
  console.log("Detalhes do animal:", cod);
  animalSelecionado.value = meuAnimal;
};

onMounted(mostrarDetalhes(route.params.id));
</script>

<template>
<CabecalhoComp></CabecalhoComp>
  <main style="padding-top: 250px" class="mt-5">
    <div v-for="animal in animalSelecionado" :key="animal.id" class="container">
      <!-- Mostrar lista de animais -->
     
      <section>
        <div class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div >
              <img :src="animal.foto" class="foto" alt="Foto do animal" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong> {{ animal.nome }}</strong></h4>
            <p><strong> {{  animal.especie }}</strong></p>
            <p><strong>{{ animal.raca }}</strong></p>
            <p class="text-muted">
              {{ animal.descricao }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.tabela {
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
}

.foto {
  width: 95%;
  height: 500px;
}
.section{
  padding-top: 20px;
  padding-left: 80px;
  
}
</style>
