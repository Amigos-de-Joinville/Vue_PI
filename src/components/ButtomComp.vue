<template>
  <router-link to="/detail" custom v-slot="{ navigate }">
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
      Ver mais
    </button>
  </router-link>
</template>
