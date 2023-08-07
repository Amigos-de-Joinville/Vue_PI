<template width="100%" height="100%">
  <section class="vh-100" style="padding-top: 200px">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="@/assets/images/pi.png"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="lead fw-normal mb-0 me-3">Entrar com:</p>
              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                style="background-color: #f7559a; border: #f7559a"
              >
                <i class="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                style="background-color: #f7559a; border: #f7559a"
              >
                <i class="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                style="background-color: #f7559a; border: #f7559a"
              >
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Ou</p>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Entre com um email válido"
              />
              <label class="form-label" for="form3Example3">Email </label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Entre com a senha"
              />
              <label class="form-label" for="form3Example4">Senha</label>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Lembre-me
                </label>
              </div>
              <a href="#!" class="text-body">Esqueceu da senha?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <router-link to="/listanimais" custom v-slot="{ navigate }">
                <button
                  @click="navigate"
                  role="link"
                  type="button"
                  class="btn btn-primary btn-lg"
                  style="
                    padding-left: 2.5rem;
                    padding-right: 2.5rem;
                    background-color: #f7559a;
                    border: #f7559a;
                  "
                >
                  Login
                </button>
              </router-link>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Não tem uma conta?
                <a href="#!" class="link-danger">Registrar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      style="
        background-color: #f7559a;
        border: #f7559a;
        bottom: 0;
        position: fixed;
        width: 100%;
      "
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5"
    >
      <!-- Copyright -->
      <div
        style="align-content: center; text-align: center"
        class="text-white mb-3 mb-md-0"
      >
        Copyright © 2020. All rights reserved.
      </div>
      <!-- Copyright -->

      <!-- Right -->
      <div>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <!-- Right -->
    </div>
  </section>
  <template />
</template>
<style scoped>
/* @import '~mdb-ui-kit/css/mdb.min.css'; */

template {
  padding-top: 30px;
  width: 100%;
}
</style>
