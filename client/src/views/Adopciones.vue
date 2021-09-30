<template>
  <div>
    <!-- Modulo Header -->
    <Header />
    <!-- Adopciones -->
    <!-- imagenes de perros-->
    <nav class="container bs-teal rounded">
      <div class="container py-5">
        <h1>Adopciones..</h1>
      </div>
      <!-- primer mascota-->
      <div class="row">
        <div class="col-sm-4">
          <div v-if="boxState.edit1.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit1.nombre }}</h5>
              <img v-bind:src="img" />
              <p>Edad: {{ boxState.edit1.edad }} añitos</p>
              <p>{{ boxState.edit1.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-success">
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit1.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta mascota 1 edicion -->
          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit1.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit1.edad"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit1.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet1()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet"
              >
                Eliminar
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
  data() {
    return {
      img: "../assets/images/adopciones/Pecas.jpg",
      pets: [],
      boxState: {
        edit1: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
        edit2: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
        edit3: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
        edit4: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
        edit5: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
        edit6: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          state: false,
        },
      },

      check: Header.methods.readCookie("check"),
      adopcion: Header.methods.readCookie("adopcion"),
      userType: Header.methods.readCookie("userType"),
    };
  },
  created() {
    this.listPets();
  },
  methods: {
    editPet1(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit1.nombre = res.data.nombre;
          this.boxState.edit1.edad = res.data.edadMascota;
          this.boxState.edit1.descripcion = res.data.descripcion;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    submitPet1() {
      var pet = {
        nombre: this.boxState.edit1.nombre,
        edadMascota: this.boxState.edit1.edad,
        descripcion: this.boxState.edit1.descripcion,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit1.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit1.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit1.state = false;
        });
    },

    deletePet() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit1.id}`)
        .then((res) => {
          this.boxState.edit1.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit1.state = false;
        });
    },
    listPets() {
      axios
        .get("http://localhost:3000/api/pet")
        .then((response) => {
          this.pets = response.data;

          if (Object.keys(this.pets).length < 6) {
            for (var i = 0; i < Object.keys(this.pets).length; i++) {
              this.boxState[`edit${i + 1}`]["id"] = this.pets[i]._id;
              this.boxState[`edit${i + 1}`]["nombre"] = this.pets[i].nombre;
              this.boxState[`edit${i + 1}`]["edad"] = this.pets[i].edadMascota;
              this.boxState[`edit${i + 1}`]["descripcion"] = this.pets[
                i
              ].descripcion;
            }
          } else {
            for (var i = 0; i < 6; i++) {
              this.boxState[`edit${i + 1}`]["id"] = this.pets[i]._id;
              this.pets[i].nombre = this.boxState[`edit${i + 1}`]["nombre"];
              this.pets[i].edadMascota = this.boxState[`edit${i + 1}`]["edad"];
              this.pets[i].descripcion = this.boxState[`edit${i + 1}`][
                "descripcion"
              ];
            }
          }
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
  },
};
</script>
