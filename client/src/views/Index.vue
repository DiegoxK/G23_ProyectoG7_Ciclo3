<template>
  <div id="index">
    <!-- Modulo Header -->
    <Header />
    <!-- Cabecera Imagen-->
    <main>
      <div class="container">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/images/index/headerImages/1-small.jpg"
                class="d-block w-100"
                alt="dog img"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/index/headerImages/2-small.jpg"
                class="d-block w-100"
                alt="dog img"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/index/headerImages/3-small.jpg"
                class="d-block w-100"
                alt="dog img"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
    <!-- Seccion de Servicios -->
    <Servicios />
    <!-- Seccion de Noticias -->
    <Noticias />
    <!-- Seccion de Equipo -->
    <Equipo />
    <!-- Modulo Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Servicios from "../components/index/Servicios.vue";
import Noticias from "../components/index/Noticias.vue";
import Equipo from "../components/index/Equipo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "index",
  components: {
    Header,
    Servicios,
    Noticias,
    Equipo,
    Footer,
  },
};
</script>
