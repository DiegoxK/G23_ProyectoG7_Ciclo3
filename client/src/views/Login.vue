<template>
  <div class="usuario">
    <main class="form-signin border border-teal rounded-3 text-center">
      <form @submit.prevent="singIn">
        <a href="/"
          ><img
            class="mb-4"
            src="../assets/images/index/headerImages/logo.jpg"
            alt="logo"
            width="90"
            height="80"
        /></a>
        <h1 class="h3 mb-3 fw-normal">Inicio de Sesión</h1>

        <div class="form-floating">
          <input
            v-model="login.email"
            type="email"
            class="form-control border-teal"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Correo Electronico</label>
        </div>

        <div class="form-floating mt-3">
          <input
            v-model="login.password"
            type="password"
            class="form-control border-teal"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>
        <div class="mt-3">
          <button class="w-100 btn btn-lg btn-outline-teal" type="submit">
            Ingresar
          </button>
        </div>
        <div class="mt-3">
          <a class="text-secondary" href="/register">Registrar cuenta</a>
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
  components: {
    Footer,
  },
  data() {
    return {
      credentials: [],
      login: { email: "", password: "" },
    };
  },
  created() {
    this.listCredentials();
  },
  methods: {
    LogAlert() {
      Swal.fire("Datos Invalidos");
    },

    listCredentials() {
      axios
        .get("/api/user")
        .then((response) => {
          console.log(response.data);
          this.credentials = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
    singIn() {
      for (let user of this.credentials) {
        if (
          user.correoElectronico == this.login.email &&
          user.contraseña == this.login.password
        ) {
          document.cookie = `nombre=${user.nombre}`;
          document.cookie = `adopcion=${user.capacidadDeAdopcion}`;
          document.cookie = `userType=${user.userType}`;
          document.cookie = `check=true`;
          console.log("logeado!");
          window.location.href = "/";
          break;
        } else {
          document.cookie = `check=false`;
          this.LogAlert();
          console.log("nologeado");
        }
      }
    },
  },
};
</script>

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
