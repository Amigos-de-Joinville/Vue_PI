<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CabecalhoComp from "@/components/CabecalhoComp.vue";

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
const mostrarDetalhes = (animal) => {
  // Implemente a lógica para mostrar os detalhes do animal
  console.log("Detalhes do animal:", animal);
};

onMounted(buscarAnimais);
</script>

<template>
  <CabecalhoComp></CabecalhoComp>

  <main style="padding-top: 250px" class="mt-5">
    <div class="container">
      <!-- Mostrar lista de animais -->
      <section>
        <div v-for="animal in animais" :key="animal.id" class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div
              @click="mostrarDetalhes(animal)"
              class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
              data-mdb-ripple-color="light"
            >
              <img :src="animal.foto" class="foto" alt="Foto do animal" />
              <a href="#!">
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>{{ animal.nome }}</strong></h4>
            <p class="text-muted">{{ animal.descricao }}</p>
            <!-- Adicione outras informações do animal aqui -->
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
</style>
