<script setup>
import { ref, reactive } from "vue";
import imageService from "../services/images.js";
import animaisService from "../services/animal.js";
import CabecalhoComp from "@/components/CabecalhoComp.vue";

const coverUrl = ref("");
const file = ref(null);
const currentAnimal = reactive({
  nome: "",
  especie: "",
  raca: "",
  cor: "",
  descricao: "",
});

function onFileChange(e) {
  file.value = e.target.files[0];
  coverUrl.value = URL.createObjectURL(file.value);
}

async function save() {
  const image = await imageService.uploadImage(file.value);
  currentAnimal.cover_attachment_key = image.attachment_key;
  await animaisService.saveAnimal(currentAnimal);
  Object.assign(currentAnimal, {
    nome: "",
    especie: "",
    raca: "",
    cor: "",
    descricao: "",
    cover_attachment_key: "",
  });
  showForm.value = false;
}

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

      <div class="row">
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
        <div class="col-md-8 order-md-1">
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Nome do animal</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Descrição</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="country">Especie</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Selecione</option>
                  <option>Cachorro</option>
                  <option>Gato</option>
                </select>
                <div class="invalid-feedback">Selecione uma especie válida</div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">Raça</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Selecione</option>
                  <option>labrador</option>
                  <option>pastor alemão</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">Cor</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Selecione</option>
                  <option>Preto</option>
                  <option>Branco</option>
                  <option>Laranja</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <hr class="mb-4" />

            <button class="botao btn btn-lg btn-block" type="submit">
              Confirmar cadastro
            </button>
          </form>
        </div>
      </div>
    </div>
  </body>

  <!-- <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"
    >
      <div class="flex justify-start mb-4">
        <button class="btn btn-wide" @click="showForm = true">
          <PlusBoxIcon />
          Registrar Animal
        </button>
      </div>
      <Card />
      <modal :visible="showForm" @close="showForm = false">
        <template #header>
          <h3>Cadastro de Animais</h3>
        </template>
        <template #body>
          <form class="form">
            <div class="row mb-4">
              <div id="preview" class="w-full text-center">
                <input type="file" @change="onFileChange" />
                <div class="cover">
                  <img v-if="coverUrl" :src="coverUrl" />
                </div>
              </div>
            </div>
            <div class="form-item">
              <input
                type="text"
                placeholder="Título"
                id="title"
                v-model="currentAnimal.nome"
              />
              <label for="title">Título</label>
            </div>
            <div class="form-item">
              <input
                type="text"
                placeholder="Ano de lançamento"
                id="year"
                v-model="currentAnimal.year"
              />
              <label for="year">Ano de lançamento</label>
            </div>
            <div class="form-item">
              <select v-model="currentAnimal.especie">
                <option disabled value="">Selecione um gênero</option>
                <option
                  v-for="especie in especies"
                  :key="especie.id"
                  :value="especie.id"
                >
                  {{ especie.name }}
                </option>
              </select>
              <label for="year">Gênero</label>
            </div>
          </form>
        </template>
        <template #footer>
          <div class="footerButtons">
            <button @click="showForm = false">Cancelar</button>
            <button class="saveButton" @click="save">Salvar</button>
          </div>
        </template>
      </modal>
    </div>
  </div> -->
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
