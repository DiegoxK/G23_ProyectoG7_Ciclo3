<template>
  <div>
    <!-- Modulo Header -->
    <Header />
    <!-- Adopciones -->
    <!-- imagenes de perros-->
    <nav class="container bs-teal rounded">
      <div class="container py-5">
        <marquee><h1>Adopciones..</h1></marquee>
      </div>
      <!-- primer perro -->
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pecas</h5>
              <img
                src="../assets/images/adopciones/pecas.jpg"
                class="img-fluid"
              />
              <br /><br />
              <p>macho cachorro, su madre murio :(</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>
        <!-- segundo  perro -->

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Canela</h5>
              <img
                src="../assets/images/adopciones/canela.jpg"
                class="img-fluid"
              />
              <br /><br />
              <p>Hembra cachorro, fue rescatada de maltrato animal.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Machu pichu</h5>
              <img
                src="../assets/images/adopciones/machuPichu.jpg"
                class="img-fluid"
              /><br /><br />
              <p>Macho cachorro, fue encontrado en la carretera.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="container bs-teal rounded">
      <div class="container py-5"></div>
      <!-- primer perro de la segunda fila-->
      <div class="row" with="75%">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Almendra</h5>
              <img
                src="../assets/images/adopciones/almendra.jpg"
                class="img-fluid"
              />
              <br /><br />
              <p>Hembra adulto, nunca fue agresiva.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>
        <!-- segundo  perro -->

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Blancox</h5>
              <img
                src="../assets/images/adopciones/blancox.jpg"
                class="img-fluid"
              />
              <br /><br />
              <p>Macho adulto, perfecta compañia.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Hueso</h5>
              <img
                src="../assets/images/adopciones/hueso.jpg"
                class="img-fluid"
              />
              <br />
              <br />
              <p>Macho adulto, casi muere por desnutrición.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <!-- Equipo -->
    <Equipo />
    <!-- Modulo Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Equipo from "../components/index/Equipo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Adopciones",
  components: {
    Header,
    Footer,
    Equipo,
  },
};
</script>
