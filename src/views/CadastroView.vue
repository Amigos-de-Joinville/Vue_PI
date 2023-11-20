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
  await animalService.saveMovie(currentAnimal);
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
        <h2>Checkout form</h2>
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

      <!-- <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Suas adoções</span>
            <span class="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Paloma</h6>
                <small class="text-muted">Experiência boa</small>
              </div>
              <span class="text-muted">1 mês</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Fred</h6>
                <small class="text-muted">Meu primeiro animal</small>
              </div>
              <span class="text-muted">2 anos</span>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
      </div> -->
      <div class="form-item">
        <input
          type="text"
          placeholder="Título"
          id="nome"
          v-model="currentAnimal.nome"
        />
        <label for="title">Nome</label>
      </div>

      <div class="form-item">
        <select v-model="currentMovie.genre">
          <option disabled value="">Selecione um gênero</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.name }}
          </option>
        </select>
        <label for="year">Gênero</label>
      </div>
      <div class="row">
        <div id="preview">
          <input type="file" @change="onFileChange" />
          <div class="cover">
            <img v-if="coverUrl" :src="coverUrl" />
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
