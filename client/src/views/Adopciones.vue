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
      <!-- =============================================================== -->
      <!-- primer mascota-->
      <div class="row">
        <div class="col-sm-4">
          <div v-if="boxState.edit1.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit1.nombre }}</h5>
              <img v-bind:src="boxState.edit1.img" class="img-fluid" />
              <br /><br />
              <p>Edad: {{ boxState.edit1.edad }} añitos</p>
              <p>{{ boxState.edit1.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
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
              <input
                v-model="boxState.edit1.img"
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
                v-on:click="deletePet1"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <!-- =============================================================== -->
        <!-- segundo  perro -->

        <div class="col-sm-4">
          <div v-if="boxState.edit2.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit2.nombre }}</h5>
              <img v-bind:src="boxState.edit2.img" class="img-fluid" />
              <br /><br />
              <p>Edad: {{ boxState.edit2.edad }} añitos</p>
              <p>{{ boxState.edit2.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit2.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta mascota 2 edicion -->
          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit2.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit2.edad"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit2.img"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit2.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet2()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet2"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <!-- =============================================================== -->

        <!-- Tercer mascota -->

        <div class="col-sm-4">
          <div v-if="boxState.edit3.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit3.nombre }}</h5>
              <img
                v-bind:src="boxState.edit3.img"
                class="img-fluid"
              /><br /><br />
              <p>Edad: {{ boxState.edit3.edad }} añitos</p>
              <p>{{ boxState.edit3.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit3.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta amscota 3 edicion -->

          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit3.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit3.edad"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit3.img"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit3.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet3()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet3"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="container bs-teal rounded">
      <div class="container py-5"></div>

      <!-- =============================================================== -->
      <!-- primer mascota de la segunda fila-->
      <div class="row" with="75%">
        <div class="col-sm-4">
          <div v-if="boxState.edit4.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit4.nombre }}</h5>
              <img
                v-bind:src="boxState.edit4.img"
                class="img-fluid"
              /><br /><br />
              <p>Edad: {{ boxState.edit4.edad }} añitos</p>
              <p>{{ boxState.edit4.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit4.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta mascota 1 fila 2 edicion -->

          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit4.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit4.edad"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit4.img"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit4.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet4()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet4"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <!-- =============================================================== -->
        <!-- segundo  mascota segunda fila -->

        <div class="col-sm-4">
          <div v-if="boxState.edit5.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit5.nombre }}</h5>
              <img
                v-bind:src="boxState.edit5.img"
                class="img-fluid"
              /><br /><br />
              <p>Edad: {{ boxState.edit5.edad }} añitos</p>
              <p>{{ boxState.edit5.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit5.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta amscota 3 edicion -->

          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit5.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit5.edad"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit5.img"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit5.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet5()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet5"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <!-- =============================================================== -->
        <!-- Tercer mascota tercer fila -->
        <div class="col-sm-4">
          <div v-if="boxState.edit6.state === false" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ boxState.edit6.nombre }}</h5>
              <img
                v-bind:src="boxState.edit6.img"
                class="img-fluid"
              /><br /><br />
              <p>Edad: {{ boxState.edit6.edad }} añitos</p>
              <p>{{ boxState.edit6.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button
                onclick="window.location.href='/adopcion'"
                type="button"
                class="btn btn-outline-success"
              >
                Adoptalo ya
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning"
                v-on:click="boxState.edit6.state = true"
              >
                Editar
              </button>
            </div>
          </div>

          <!-- Tarjeta amscota 3 edicion -->

          <div v-else class="card">
            <div class="card-body">
              <input
                v-model="boxState.edit6.nombre"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit6.edad"
                type="text"
                class="border-teal form-control"
              />
              <input
                v-model="boxState.edit6.img"
                type="text"
                class="border-teal form-control"
              />
              <textarea
                v-model="boxState.edit6.descripcion"
                class="border-teal form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-warning "
                v-on:click="submitPet6()"
              >
                Terminar
              </button>
              <button
                v-if="check === 'true' && userType === 'admin'"
                type="button"
                class="btn btn-outline-danger "
                v-on:click="deletePet6"
              >
                Eliminar
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
      pets: [],
      boxState: {
        edit1: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
          state: false,
        },
        edit2: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
          state: false,
        },
        edit3: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
          state: false,
        },
        edit4: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
          state: false,
        },
        edit5: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
          state: false,
        },
        edit6: {
          id: "",
          nombre: "",
          edad: "",
          descripcion: "",
          img: "",
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
    editPet2(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit2.nombre = res.data.nombre;
          this.boxState.edit2.edad = res.data.edadMascota;
          this.boxState.edit2.descripcion = res.data.descripcion;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editPet3(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit3.nombre = res.data.nombre;
          this.boxState.edit3.edad = res.data.edadMascota;
          this.boxState.edit3.descripcion = res.data.descripcion;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editPet4(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit4.nombre = res.data.nombre;
          this.boxState.edit4.edad = res.data.edadMascota;
          this.boxState.edit4.descripcion = res.data.descripcion;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editPet5(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit5.nombre = res.data.nombre;
          this.boxState.edit5.edad = res.data.edadMascota;
          this.boxState.edit5.descripcion = res.data.descripcion;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editPet6(id) {
      axios
        .get(`http://localhost:3000/api/pet/${id}`)
        .then((res) => {
          this.boxState.edit6.nombre = res.data.nombre;
          this.boxState.edit6.edad = res.data.edadMascota;
          this.boxState.edit6.descripcion = res.data.descripcion;
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
        img: this.boxState.edit1.img,
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

    submitPet2() {
      var pet = {
        nombre: this.boxState.edit2.nombre,
        edadMascota: this.boxState.edit2.edad,
        descripcion: this.boxState.edit2.descripcion,
        img: this.boxState.edit2.img,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit2.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit2.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit2.state = false;
        });
    },

    submitPet3() {
      var pet = {
        nombre: this.boxState.edit3.nombre,
        edadMascota: this.boxState.edit3.edad,
        descripcion: this.boxState.edit3.descripcion,
        img: this.boxState.edit3.img,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit3.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit3.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit1.state = false;
        });
    },

    submitPet4() {
      var pet = {
        nombre: this.boxState.edit4.nombre,
        edadMascota: this.boxState.edit4.edad,
        descripcion: this.boxState.edit4.descripcion,
        img: this.boxState.edit4.img,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit4.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit4.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit4.state = false;
        });
    },

    submitPet5() {
      var pet = {
        nombre: this.boxState.edit5.nombre,
        edadMascota: this.boxState.edit5.edad,
        descripcion: this.boxState.edit5.descripcion,
        img: this.boxState.edit5.img,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit5.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit5.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit5.state = false;
        });
    },

    submitPet6() {
      var pet = {
        nombre: this.boxState.edit6.nombre,
        edadMascota: this.boxState.edit6.edad,
        descripcion: this.boxState.edit6.descripcion,
        img: this.boxState.edit6.img,
      };
      axios
        .put(`http://localhost:3000/api/pet/${this.boxState.edit6.id}`, pet)
        .then((res) => {
          console.log(res);
          this.boxState.edit6.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit6.state = false;
        });
    },

    deletePet1() {
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
    deletePet2() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit2.id}`)
        .then((res) => {
          this.boxState.edit2.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit2.state = false;
        });
    },
    deletePet3() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit3.id}`)
        .then((res) => {
          this.boxState.edit3.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit3.state = false;
        });
    },
    deletePet4() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit4.id}`)
        .then((res) => {
          this.boxState.edit4.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit4.state = false;
        });
    },
    deletePet5() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit5.id}`)
        .then((res) => {
          this.boxState.edit5.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit5.state = false;
        });
    },
    deletePet6() {
      axios
        .delete(`http://localhost:3000/api/pet/${this.boxState.edit6.id}`)
        .then((res) => {
          this.boxState.edit6.state = false;
          this.listPets();
        })
        .catch((e) => {
          console.log(e.response);
          this.boxState.edit6.state = false;
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
              this.boxState[`edit${i + 1}`]["img"] = this.pets[i].img;
              this.boxState[`edit${i + 1}`]["nombre"] = this.pets[i].nombre;
              this.boxState[`edit${i + 1}`]["edad"] = this.pets[i].edadMascota;
              this.boxState[`edit${i + 1}`]["descripcion"] = this.pets[
                i
              ].descripcion;
            }
          } else {
            for (var i = 0; i < 6; i++) {
              this.boxState[`edit${i + 1}`]["id"] = this.pets[i]._id;
              this.boxState[`edit${i + 1}`]["img"] = this.pets[i].img;
              this.boxState[`edit${i + 1}`]["nombre"] = this.pets[i].nombre;
              this.boxState[`edit${i + 1}`]["edad"] = this.pets[i].edadMascota;
              this.boxState[`edit${i + 1}`]["descripcion"] = this.pets[
                i
              ].descripcion;
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
