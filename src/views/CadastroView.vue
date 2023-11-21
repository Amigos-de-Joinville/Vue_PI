<script setup>
import { ref, reactive, onMounted } from "vue";
import CabecalhoComp from "@/components/CabecalhoComp.vue";
import imageService from "@/services/images.js";
import animalService from "@/services/animais.js";
import especieService from "@/services/especies.js";
import racaService from "@/services/racas.js";
import corService from "@/services/cores.js";

const especies = ref([]);
const racas = ref([]);
const cores = ref([]);
const coverUrl = ref("");
const file = ref(null);
const currentAnimal = reactive({
  nome: "",
  descricao: "",
  especie: "",
  raca: "",
  cor: "",
});

function onFileChange(e) {
  file.value = e.target.files[0];
  coverUrl.value = URL.createObjectURL(file.value);
}

async function save() {
  const image = await imageService.uploadImage(file.value);
  currentAnimal.foto_attachment_key = image.attachment_key;
  await animalService.saveAnimal(currentAnimal);
  Object.assign(currentAnimal, {
    id: "",
    nome: "",
    descricao: "",
    especie: "",
    raca: "",
    cor: "",
    foto_attachment_key: "",
  });
  showForm.value = false;
}

onMounted(async () => {
  const data = await especieService.getAllEspecies();
  especies.value = data;
});

onMounted(async () => {
  const data = await racaService.getAllRacas();
  racas.value = data;
});

onMounted(async () => {
  const data = await corService.getAllCores();
  cores.value = data;
});

const showForm = ref(false);
</script>

<template>
  <CabecalhoComp></CabecalhoComp>
  <h1>Cadastro de Animais</h1>

  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="icon" href="../../../../favicon.ico" />

    <title>Checkout example for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../../../../dist/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="form-validation.css" rel="stylesheet" />
  </head>

  <body class="bg-light">
    <div class="container">
      <div class="py-5 text-center">
        <img
          src="@/assets/images/pi.png"
          class="img-fluid"
          alt="Sample image"
        />
        <p class="lead">
          Nesta seção, você tem o controle total sobre a experiência, podendo
          cadastrar e gerenciar informações sobre os animais que fazem parte da
          nossa comunidade. Seja um bichinho fofo em busca de um lar amoroso ou
          uma história inspiradora de resgate, aqui é o lugar onde você molda a
          narrativa. Vamos juntos criar um ambiente online cheio de histórias
          peludas e patas carentes de carinho. Vamos começar a cadastrar esses
          amiguinhos adoráveis!
        </p>
      </div>

      <div class="col-md-8 order-md-1">
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Nome do animal</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                placeholder="Totó"
                required
                v-model="currentAnimal.nome"
              />
              <div class="invalid-feedback">Insira um nome válido</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Descrição</label>
              <input
                type="text"
                class="form-control"
                id="descricao"
                placeholder="Animal bem dócil, não morde e nem late muito."
                required
                v-model="currentAnimal.descricao"
              />
              <div class="invalid-feedback">Insira uma descrição</div>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="country">Especie</label>
            <select
              v-model="currentAnimal.especie"
              class="custom-select d-block w-100"
            >
              <option value="">Selecione uma espécie:</option>
              <option
                v-for="especie in especies"
                :key="especie.id"
                :value="especie.id"
              >
                {{ especie.descricao }}
              </option>
            </select>
            <div class="invalid-feedback">Selecione uma especie válida</div>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="country">Cor</label>
              <select
                v-model="currentAnimal.cor"
                class="custom-select d-block w-100"
              >
                <option value="">Selecione uma cor:</option>
                <option v-for="cor in cores" :key="cor.id" :value="cor.id">
                  {{ cor.descricao }}
                </option>
              </select>
              <div class="invalid-feedback">Selecione uma cor válida</div>
            </div>

            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="country">Raça</label>
                <select
                  v-model="currentAnimal.raca"
                  class="custom-select d-block w-100"
                >
                  <option value="">Selecione uma raça:</option>
                  <option v-for="raca in racas" :key="raca.id" :value="raca.id">
                    {{ raca.nome }}
                  </option>
                </select>
                <div class="invalid-feedback">Selecione uma raça válida</div>
              </div>

              <div class="row">
                <div id="preview">
                  <input type="file" @change="onFileChange" />
                  <div class="cover">
                    <img v-if="coverUrl" :src="coverUrl" />
                  </div>
                </div>
              </div>

              <button class="botao btn btn-lg btn-block" type="submit" @click="save">
                Confirmar cadastro
              </button>
              <button class="botao btn btn-lg btn-block" type="submit" @click="showForm = false">
                Cancelar cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped lang="css">
.addButton,
.saveButton {
  height: 2rem;
  align-self: center;
  margin-left: 75%;
  background-color: #080;
  color: white;
  justify-content: space-around;
}
.botao {
  background-color: #f7559a;
  color: antiquewhite;
}

.footerButtons {
  display: flex;
  padding: 75 px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .cover {
  width: 200px;
  height: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#preview img {
  width: 200px;
  height: 270px;
}
</style>
