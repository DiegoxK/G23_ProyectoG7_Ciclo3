<template>
  <div class="registro">
    <main class="form-signin border border-teal rounded-3 text-center">
      <form @submit.prevent="submitForm">
        <a href="/"
          ><img
            class="mb-4"
            src="../assets/images/index/headerImages/logo.jpg"
            alt=""
            width="90"
            height="80"
        /></a>
        <h1 class="h3 mb-3 fw-normal">Registrar mascota!</h1>

        <div class="form-floating">
          <input
            v-model="register.nombre"
            type="text"
            class="form-control border-teal"
            id="Input-name"
            placeholder="Nombre"
          />
          <label for="Input-name">Nombre de la mascota</label>
        </div>

        <div class="form-floating mt-3">
          <input
            v-model="register.edadMascota"
            type="text"
            class="form-control border-teal"
            id="Input-lastname"
            placeholder="Edad"
          />
          <label for="Input-lastname">Edad</label>
        </div>

        <div class=" mt-3">
          <textarea
            v-model="register.descripcion"
            class="border-teal form-control"
            placeholder="Descripcion"
            rows="3"
          />
        </div>
        <div>
          <button
            class="w-100 mt-3 btn btn-lg btn-outline-teal"
            href="/login"
            type="submit"
          >
            Registrar Mascota
          </button>
        </div>
      </form>
    </main>

    <!-- Modulo Footer -->
    <div class="p-5">
      <div class="p-5"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Pet Register",
  components: {
    Footer,
  },
  data() {
    return {
      register: {
        nombre: "",
        edadMascota: "",
        descripcion: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.register.edad = parseInt(this.register.edad);
      axios
        .post("http://localhost:3000/api/pet", this.register)
        .then((res) => {
          this.register.nombre = "";
          this.register.edadMascota = "";
          this.register.descripcion = "";

          console.log(res.data.message);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    },
  },
};
</script>

// =========================================================================

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

/*Sección login*/

html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.border-teal {
  border-color: #62f5abed !important;
}
.btn-outline-teal {
  color: #62f5abed;
  border-color: #62f5abed;
}

.btn-outline-teal:hover {
  color: #fff;
  background-color: #62f5abed;
  border-color: #62f5abed;
}

.btn-check:focus + .btn-outline-teal,
.btn-outline-teal:focus {
  -webkit-box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
  box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
}

.btn-check:checked + .btn-outline-teal,
.btn-check:active + .btn-outline-teal,
.btn-outline-teal:active,
.btn-outline-teal.active,
.btn-outline-teal.dropdown-toggle.show {
  color: #fff;
  background-color: #62f5abed;
  border-color: #62f5abed;
}

.btn-check:checked + .btn-outline-teal:focus,
.btn-check:active + .btn-outline-teal:focus,
.btn-outline-teal:active:focus,
.btn-outline-teal.active:focus,
.btn-outline-teal.dropdown-toggle.show:focus {
  -webkit-box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
  box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
}

.btn-outline-teal:disabled,
.btn-outline-teal.disabled {
  color: #fff;
  background-color: transparent;
}
</style>
