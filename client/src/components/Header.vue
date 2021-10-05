<template>
  <!-- Header -->
  <header class="p-3 text-dark" id="Header">
    <nav class="container bs-teal rounded">
      <hr />
      <h1 class="text-center">Peluditos</h1>
      <div
        class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-lg-start
          "
      >
        <a
          href="/"
          class="
              d-flex
              align-items-center
              mb-2 mb-lg-0
              text-white text-decoration-none
            "
        >
          <img
            src="../assets/images/index/headerImages/logo.jpg"
            class="img-icon img-fluid"
            alt="logo"
          />
        </a>

        <ul
          class="
              nav-dos
              col-12 col-lg-auto
              me-lg-auto
              mb-2
              justify-content-center
              mb-md-0
              align-items-center
            "
        >
          <li>
            <a href="/" class="nav-link px-2 text-dark">Inicio</a>
          </li>
          <li>
            <a href="/adopciones" class="nav-link px-2 text-dark">Adopciones</a>
          </li>
        </ul>

        <div v-if="check != 'true'" class="text-end">
          <button
            type="button"
            onclick="window.location.href='/login'"
            class="btn btn-outline-dark me-2"
          >
            Ingresar
          </button>
          <button
            type="button"
            onclick="window.location.href='/register'"
            class="btn btn-outline-dark me-2"
          >
            Registro
          </button>
        </div>
        <div v-else class="text-end mb-3">
          <p class="text-capitalize fw-bold">Bienvenido! {{ name }}</p>
          <button
            type="button"
            v-on:click="logOut"
            class="btn btn-outline-dark me-2"
          >
            Cerrar Sesion
          </button>
          <button
            v-if="userType === 'admin'"
            type="button"
            onclick="window.location.href='/admin'"
            class="btn btn-outline-dark me-2"
          >
            Vista Administracion
          </button>
          <button
            v-if="userType === 'admin'"
            type="button"
            onclick="window.location.href='/petRegister'"
            class="btn btn-outline-dark me-2"
          >
            Registrar Mascota
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: this.readCookie("nombre"),
      check: this.readCookie("check"),
      userType: this.readCookie("userType"),
      adopcion: this.readCookie("adopcion"),
    };
  },

  methods: {
    readCookie(cname) {
      var name = cname + "=";
      var decoded_cookie = decodeURIComponent(document.cookie);
      var carr = decoded_cookie.split(";");
      for (var i = 0; i < carr.length; i++) {
        var c = carr[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    logOut() {
      document.cookie = `check=false`;
      this.check = this.readCookie("check");
      window.location.href = "/";
    },
  },
};
</script>

<style>
.cabecera {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.img-icon {
  height: 30%;
  width: 30%;
  display: block;
  margin: auto;
}
.bs-teal {
  background-color: #62f5abed;
}
.nav-dos {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 1%;
  margin-bottom: 0;
  list-style: none;
}
</style>
