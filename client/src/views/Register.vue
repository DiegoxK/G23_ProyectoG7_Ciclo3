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
        <h1 class="h3 mb-3 fw-normal">Registrate</h1>

        <div class="form-floating">
          <input
            v-model="register.nombre"
            type="text"
            class="form-control border-teal"
            id="Input-name"
            placeholder="Nombre"
          />
          <label for="Input-name">Nombre</label>
        </div>

        <div class="form-floating mt-3">
          <input
            v-model="register.apellido"
            type="text"
            class="form-control border-teal"
            id="Input-lastname"
            placeholder="Apellido"
          />
          <label for="Input-lastname">Apellido</label>
        </div>

        <div class="form-floating mt-3">
          <input
            v-model="register.correoElectronico"
            type="email"
            class="form-control border-teal"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Correo Electronico</label>
        </div>

        <div class="form-floating mt-3">
          <input
            v-model="register.telefono"
            type="tel"
            class="form-control border-teal"
            id="Input-phonenumber"
            placeholder="Telefono"
          />
          <label for="Input-phonenumber">Telefono</label>
        </div>

        <div class="form-floating mt-3">
          <select
            v-model="register.tipoDeCasa"
            class="form-select border-teal"
            id="validationCustom04"
            required
          >
            <option selected disabled value="">Tipo de vivienda</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Finca o parcela</option>
          </select>
        </div>

        <div class="form-floating mt-3">
          <select
            v-model="register.mascota"
            class="form-select border-teal"
            id="validationCustom05"
            required
          >
            <option selected disabled value="">¿Tiene mascota?</option>
            <option>Si</option>
            <option>No</option>
          </select>
        </div>

        <div v-if="register.mascota === 'Si'" class="group-floating mt-3">
          <div class="form-floating mt-3">
            <input
              v-model="register.edadMascota"
              type="number"
              class="form-control border-teal"
              id="Input-Edad"
              placeholder="Edad (En años)"
            />
            <label for="Input-Edad">Edad (En año humano)</label>
          </div>
          <div class="form-floating mt-3">
            <select
              v-model="register.castrada"
              class="form-select border-teal"
              id="validationCustom06"
              required
            >
              <option selected disabled value="">¿Castrada?</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div class="form-floating mt-5">
          <input
            v-model="register.contraseña"
            type="password"
            class="form-control border-teal"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>
        <div>
          <button
            class="w-100 btn btn-lg btn-outline-teal"
            href="/login"
            type="submit"
          >
            Registrar Cuenta
          </button>
        </div>

        <div class="mt-3">
          <a href="/login" class="text-secondary ">Ya tienes cuenta?</a>
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
  name: "Register",
  components: {
    Footer,
  },
  data() {
    return {
      register: {
        nombre: "",
        apellido: "",
        telefono: "",
        tipoDeCasa: "",
        mascota: "",
        edadMascota: "",
        castrada: "",
        correoElectronico: "",
        contraseña: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.register.telefono = parseInt(this.register.telefono);

      if (this.register.mascota === "Si") {
        this.register.mascota = true;
      } else {
        this.register.mascota = false;
      }

      this.edadMascota = parseInt(this.edadMascota);

      if (this.register.castrada === "Si") {
        this.register.castrada = true;
      } else {
        this.register.castrada = false;
      }

      axios
        .post("/api/user", this.register)
        .then((res) => {
          this.register.nombre = "";
          this.register.apellido = "";
          this.register.telefono = "";
          this.register.tipoDeCasa = "";
          this.register.mascota = "";
          this.register.edadMascota = "";
          this.register.castrada = "";
          this.register.correoElectronico = "";
          this.register.contraseña = "";

          console.log(res.data.message);
          window.location.href = "/login";
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
